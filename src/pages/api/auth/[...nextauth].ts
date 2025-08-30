import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      async sendVerificationRequest({ identifier, url }) {
        await resend.emails.send({
          from: "noreply@sfn-foundation.org",
          to: identifier,
          subject: "SFN Foundation Account Verification",
          html: `
            <body style="background:#EFEEF5; margin:0; padding:0;">
              <table width="100%" bgcolor="#EFEEF5" cellpadding="0" cellspacing="0" style="padding:0; margin:0;">
                <tr>
                  <td align="center">
                    <div style="height:40px;"></div>
                    <table width="480" bgcolor="#ffffff" cellpadding="0" cellspacing="0" style="border-bottom-left-radius:16px; border-bottom-right-radius:16px; box-shadow:0 4px 12px rgba(33,26,63,0.05); margin:0 auto;">
                      <tr>
                        <td style="padding:0;">
                          <div style="height:4px; background:#5159CF; border-top-left-radius:16px; border-top-right-radius:16px; margin-top:-2px;"></div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:32px 32px 0 32px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" style="padding-bottom:32px;">
                                <img src="https://sfn-foundation.org/logos/logo.png" alt="SFN Foundation" width="285" height="41" style="display:block;" />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:0 32px 32px 32px;">
                          <h3 style="color:#5B5D70; font-family:Lato,sans-serif; text-align:center; font-size:18px; font-weight:600; margin:0 0 16px 0;">Please confirm your sign-in request</h3>
                          <p style="color:#5B5D70; font-family:Lato,sans-serif; text-align:center; font-size:16px; margin:0 0 32px 0;">We have detected an account sign-in request from a device we don't recognize.</p>
                          <div style="text-align:center; margin-top:32px;">
                            <a href="${url}" style="display:inline-block; border-radius:16px; border:2px solid #5159CF; background:#5159CF; color:#FBF8F8; font-weight:600; font-family:Lato,sans-serif; padding:16px 12px; text-decoration:none; font-size:16px;">Approve Sign In</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <div style="height:40px;"></div>
                    <div style="max-width:480px; text-align:center;">
                      <span style="color:#B0B2C3; font-size:12px; font-family:Lato,sans-serif;">© Copyright 2025 the Small Fiber Neuropathy Foundation. All rights reserved.</span>
                    </div>
                  </td>
                </tr>
              </table>
            </body>
          `
        });
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/check-email',
    error: '/auth/error',
  },
  callbacks: {
  async session({ session, user }: { session: any; user: any }) {
      // Get user from DB to fetch role
      const dbUser = await prisma.user.findUnique({ where: { email: session.user.email } });
      if (dbUser) {
        session.user.role = dbUser.role;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);