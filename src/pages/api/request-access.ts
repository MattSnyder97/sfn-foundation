import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userEmail } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL;
  const neonUrl = process.env.NEON_URL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!userEmail || !adminEmail || !neonUrl || !resendApiKey) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const resend = new Resend(resendApiKey);
  try {
    await resend.emails.send({
      from: 'noreply@sfn-foundation.org',
      to: adminEmail,
      subject: 'Access Request: Research Portal',
      html: `
        <body style="background:#f3f4f6;padding:24px 12px;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;">
          <div style="max-width:520px;margin:0 auto;">
            <div style="background:#ffffff;border-radius:14px;box-shadow:0 6px 18px rgba(16,24,40,0.06);padding:22px;text-align:left;">
              <h1 style="margin:0 0 10px 0;font-size:18px;color:#0f172a;line-height:1.2;font-weight:700;">Research Portal Access Request</h1>
              <p style="margin:0 0 14px 0;color:#374151;font-size:14px;line-height:1.4">The user <strong>${userEmail}</strong> has signed in and requested access to the Research Portal. Click the button below to assign a role.</p>

              <div style="text-align:center;margin:18px 0;">
                <a href="${neonUrl}" style="display:inline-block;padding:10px 18px;background:#5159CF;color:#ffffff;text-decoration:none;font-weight:600;border-radius:12px;font-size:15px;">Set Role</a>
              </div>

              <p style="margin:0 0 6px 0;color:#64748b;font-size:13px;">If this request looks suspicious, do not grant access and contact the SFN Foundation security team.</p>
            </div>

            <div style="max-width:520px;margin-top:14px;text-align:center;color:#94a3b8;font-size:12px;">
              © ${new Date().getFullYear()} the Small Fiber Neuropathy Foundation
            </div>
          </div>
        </body>
      `
    });
    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
