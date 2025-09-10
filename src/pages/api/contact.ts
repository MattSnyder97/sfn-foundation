import type { NextApiRequest, NextApiResponse } from 'next';

// Forward contact form submissions to Formspree from the server to avoid client-side CORS/network issues.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    // Normalize body: Next.js may provide a parsed object or a raw urlencoded string
    let body: any = req.body || {};
    if (typeof body === 'string') {
      try {
        body = Object.fromEntries(new URLSearchParams(body).entries());
      } catch (e) {
        // failed to parse, keep as string
      }
    }

    console.log('Contact API received keys:', Object.keys(body || {}), 'content-type:', req.headers['content-type']);
    const subject = (body.subject || body.subject_select || '').toString().trim();
    const name = (body.name || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const message = (body.message || '').toString().trim();
    const credentials = (body.credentials || '').toString().trim();

    // Basic validation
    if (!subject) return res.status(400).json({ ok: false, error: 'Subject is required' });
    if (!name) return res.status(400).json({ ok: false, error: 'Name is required' });
    if (!email) return res.status(400).json({ ok: false, error: 'Email is required' });
    if (!message) return res.status(400).json({ ok: false, error: 'Message is required' });

    // If requesting portal access, require credentials
    if (subject === 'Research Portal Access' && !credentials) {
      return res.status(400).json({ ok: false, error: 'Credentials required for portal access requests' });
    }

    // Build payload for Formspree
    const payload = new URLSearchParams();
    payload.append('subject', subject);
    payload.append('name', name);
    payload.append('email', email);
    payload.append('message', message);
    if (credentials) payload.append('credentials', credentials);

    // Forward to Formspree
    const FORM_ACTION = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/xjkebokb';
    const response = await fetch(FORM_ACTION, {
      method: 'POST',
      body: payload,
      headers: { Accept: 'application/json' },
    });

    const data = await response.json().catch(() => null);

    if (response.ok) {
      // Always return JSON so AJAX/native clients can handle success without navigation
      return res.status(200).json({ ok: true, data });
    }

    // Forward error details where possible
    return res.status(response.status || 502).json({ ok: false, error: data?.error || 'Forwarding failed', data });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return res.status(502).json({ ok: false, error: err?.message || 'Server error' });
  }
}
