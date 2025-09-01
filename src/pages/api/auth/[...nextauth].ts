import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";

const prisma = new PrismaClient();


export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      async sendVerificationRequest({ identifier, url }) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "noreply@sfn-foundation.org",
          to: identifier,
          subject: "Sign in link for the SFN Foundation Research Portal",
          html: `<body style="background:#f9fafb;padding:40px 0;font-family:Arial,sans-serif">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width:600px;background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.05);overflow:hidden">
              <tr>
                <td style="padding:40px;text-align:center">
                  <h1 style="margin:0;font-size:24px;color:#111827">Sign in to the SFN Foundation<br />Research Portal</h1>
                  <p style="margin:16px 0 24px;font-size:16px;color:#374151">
                    Click the button below to securely sign in to your account.
                  </p>
                  <a href="${url}" style="display:inline-block;padding:12px 24px;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:bold;border-radius:8px;font-size:16px">
                    Sign in
                  </a>
                  <p style="margin:32px 0 0;font-size:14px;color:#6b7280">
                    If you did not request this email, you can safely ignore it.
                  </p>
                </td>
              </tr>
            </table>
          </body>`,
        });
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      // If token.sub is empty, treat as signed-out and clear user info to avoid showing restricted UI.
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
      // On initial sign in, user object is available
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

      // If token.sub exists, verify the user still exists in the DB and refresh role
      if (token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true },
        });
        if (!dbUser) {
          // User was removed from the database; invalidate identifying fields so session won't grant access
          token.sub = '';
          delete token.role;
          // Remove other identifying claims that may be present on the token
          delete (token as any).email;
          delete (token as any).name;
        } else {
          // Narrow runtime value to the known role literals
          token.role = dbUser.role === 'Specialist' ? 'Specialist' : 'User';
        }
        return token;
      }

      // No identifying subject; ensure role is not present
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
