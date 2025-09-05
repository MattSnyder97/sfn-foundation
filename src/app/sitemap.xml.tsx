import { allContent } from '@/content/index';
import { NextResponse } from 'next/server';

function buildUrl(path: string) {
  // ensure leading slash
  if (!path.startsWith('/')) path = `/${path}`;
  return `https://sfn-foundation.org${path}`;
}

export async function GET() {
  const entries = allContent.map((item) => {
    const loc = buildUrl(item.slug);
    const lastmod = item.meta?.lastUpdated ? new Date(item.meta.lastUpdated).toISOString() : undefined;
    // Simple priority heuristics
    let priority = 0.4;
    let changefreq = 'monthly';
    if (item.slug === '/') { priority = 0.8; changefreq = 'daily'; }
    else if (item.slug.startsWith('/about') || item.slug.startsWith('/resources')) { priority = 0.6; changefreq = 'weekly'; }
    else if (item.slug.startsWith('/patient-stories')) { priority = 0.5; changefreq = 'monthly'; }

    return { loc, lastmod, priority, changefreq };
  });

  const uniqueEntries = Array.from(new Map(entries.map(e => [e.loc, e])).values());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueEntries
    .map((e) => {
      return `  <url>\n    <loc>${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    })
    .join('\n')}\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
