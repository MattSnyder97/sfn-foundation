import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";

const prisma = new PrismaClient();


export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === 'production',
  session: {
    strategy: 'jwt',
  },

  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production' ? '__Host-next-auth.session-token' : 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      // expire magic links after 1 hour (3600 seconds)
      maxAge: 60 * 60,
      async sendVerificationRequest({ identifier, url }) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "noreply@sfn-foundation.org",
          to: identifier,
          subject: "Verification for the SFN Foundation Research Portal",
          html: `
            <body style="background:#f3f4f6;padding:32px 12px;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;">
              <div style="max-width:520px;margin:0 auto;">
                <div style="background:#ffffff;border-radius:14px;box-shadow:0 6px 18px rgba(16,24,40,0.06);padding:28px;text-align:center;">
                  <h1 style="margin:0 0 12px 0;font-size:32px;color:#5B5D70;line-height:1.2;font-weight:700;">SFN Foundation Research Portal</h1>
                  <p style="margin:0 0 18px 0;color:#374151;font-size:18px;line-height:1.4">Click the button below to sign in to your account. This link will expire in an hour.</p>

                  <div style="text-align:center;margin:20px 0;">
                    <a href="${url}"
                      style="display:inline-block;padding:12px 20px;background:#5159CF;color:#ffffff;text-decoration:none;font-weight:600;border-radius:12px;font-size:16px;"
                      >Sign in to Research Portal</a>
                  </div>

                  <p style="margin:0 0 6px 0;color:#64748b;font-size:13px;">If you didn't request this email, you can safely ignore it.</p>
                </div>

                <div style="max-width:520px;margin-top:18px;text-align:center;color:#94a3b8;font-size:12px;">
                  © ${new Date().getFullYear()} the Small Fiber Neuropathy Foundation. All rights reserved.
                </div>
              </div>
            </body>
          `,
        });
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (!token || !token.sub) {
        session.user = undefined;
        return session;
      }

      if (session.user && typeof token.sub === 'string') {
        session.user.id = token.sub;
      }
      if (session.user && typeof token.role === 'string') {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user && user.id) {
        token.sub = user.id;
      } else if (!token.sub) {
        token.sub = '';
      }

      const incomingRole = (user as { role?: unknown } | undefined)?.role;
      if (incomingRole === 'Specialist' || incomingRole === 'User') {
        token.role = incomingRole;
        return token;
      }

      if (token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true },
        });
        if (!dbUser) {

          token.sub = '';
          delete token.role;
          Reflect.deleteProperty(token, 'email');
          Reflect.deleteProperty(token, 'name');
        } else {

          token.role = dbUser.role === 'Specialist' ? 'Specialist' : 'User';
        }
        return token;
      }

      delete token.role;
      return token;
    },
  },

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/check-email",
  },
};

export default NextAuth(authOptions);
