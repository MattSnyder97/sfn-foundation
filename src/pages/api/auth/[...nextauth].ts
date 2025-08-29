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
          html: `<p>Sign in to SFN Foundation by clicking <a href="${url}">this link</a>.</p>`
        });
      },
    }),
  ],
};

export default NextAuth(authOptions);