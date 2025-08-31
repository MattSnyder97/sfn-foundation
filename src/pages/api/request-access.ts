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
      html: `<p>User <strong>${userEmail}</strong> has signed in and requested access to the Research Portal.</p>
        <p><a href="${neonUrl}" style="color:#2563eb;text-decoration:underline;font-weight:bold">Set Role</a></p>`
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
