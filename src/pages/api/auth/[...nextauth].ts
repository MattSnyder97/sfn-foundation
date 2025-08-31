import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";

const prisma = new PrismaClient();
declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: "Specialist" | "User";
    };
  }

  interface User {
    id: string;
    role?: "Specialist" | "User";
  }
}

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
          subject: "Your sign in link for SFN Foundation",
          html: `<body style="background:#f9fafb;padding:40px 0;font-family:Arial,sans-serif">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width:600px;background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.05);overflow:hidden">
              <tr>
                <td style="padding:40px;text-align:center">
                  <h1 style="margin:0;font-size:24px;color:#111827">Sign in to SFN Foundation</h1>
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
      if (session.user && token && typeof token.sub === 'string') {
        session.user.id = token.sub;
      }
      if (session.user && token && typeof token.role === 'string') {
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
      // Always ensure role is present in token
      if (user && user.role) {
        token.role = user.role;
      } else if (token.sub && !token.role) {
        // Fetch user from DB if role missing
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true },
        });
        if (dbUser?.role === 'Specialist') {
          token.role = 'Specialist';
        } else {
          token.role = 'User';
        }
      }
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
