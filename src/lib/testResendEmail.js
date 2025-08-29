// Test script to send a sample Resend email with your NextAuth template
// Usage: node src/lib/testResendEmail.js

import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  await resend.emails.send({
    from: 'noreply@sfn-foundation.org',
    to: 'snydermatt1997@gmail.com',
    subject: 'Verification needed',
    html: `
      <body style="background:#EFEEF5; margin:0; padding:0;">
        <table width="100%" bgcolor="#EFEEF5" cellpadding="0" cellspacing="0" style="padding:0; margin:0;">
          <tr>
            <td align="center">
              <table width="480" bgcolor="#FBF8F8" cellpadding="0" cellspacing="0" style="border-radius:16px; box-shadow:0 4px 12px rgba(33,26,63,0.05); margin:40px auto;">
                <tr>
                  <td style="padding:0;">
                    <div style="height:8px; background:#5159CF; border-top-left-radius:16px; border-top-right-radius:16px;"></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 32px 0 32px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="padding-bottom:24px;">
                          <!-- PNG fallback for Gmail -->
                          <img src="https://sfn-foundation.org/logos/logo.png" alt="SFN Foundation" width="48" height="48" style="display:block;" />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 32px 32px 32px;">
                    <h3 style="color:#5B5D70; font-family:Lato,sans-serif; text-align:center; font-size:18px; font-weight:600; margin:0 0 24px 0;">Please confirm your sign-in request</h3>
                    <p style="color:#5B5D70; font-family:Lato,sans-serif; text-align:center; font-size:16px; margin:0 0 32px 0;">We have detected an account sign-in request from a device we don't recognize.</p>
                    <div style="text-align:center; margin-top:32px;">
                      <a href="https://sfn-foundation.org" style="display:inline-block; border-radius:16px; border:2px solid #5159CF; background:#5159CF; color:#FBF8F8; font-weight:600; font-family:Lato,sans-serif; padding:16px 16px; text-decoration:none; font-size:16px;">SIGN IN</a>
                    </div>
                  </td>
                </tr>
              </table>
              <!-- Copyright below container -->
              <div style="margin:16px auto 0 auto; padding:16px; max-width:480px; text-align:center;">
                <span style="color:#B0B2C3; font-size:12px; font-family:Lato,sans-serif;">© Copyright 2025 the Small Fiber Neuropathy Foundation. All rights reserved.</span>
              </div>
            </td>
          </tr>
        </table>
      </body>
    `
  });
  console.log('Test email sent!');
}

sendTestEmail().catch(console.error);