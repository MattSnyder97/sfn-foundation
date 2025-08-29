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
          subject: "Sign in to SFN Foundation",
          html: `
            <body style="background:#EFEEF5; margin:0; padding:0;">
              <div style="max-width:480px; margin:40px auto; background:#FBF8F8; border-radius:24px; box-shadow:0 4px 12px rgba(33,26,63,0.05); padding:32px; text-align:center;">
                <img src='https://sfn-foundation.org/logos/logo.svg' alt='SFN Foundation' style='width:80px; margin-bottom:24px;' />
                <h2 style='color:#5B5D70; font-family:Lato,sans-serif; margin-bottom:16px;'>Sign in to SFN Foundation</h2>
                <p style='color:#5B5D70; font-family:Lato,sans-serif; margin-bottom:32px;'>Click the button below to sign in:</p>
                <a href="${url}" style="display:inline-block; border-radius:24px; border:2px solid #5159CF; background:#5159CF; color:#FBF8F8; font-weight:600; font-family:Lato,sans-serif; padding:16px 32px; text-decoration:none; transition:background 0.2s;">Sign in</a>
              </div>
            </body>
          `
        });
      },
    }),
  ],
};

export default NextAuth(authOptions);