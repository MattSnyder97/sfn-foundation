import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self'; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' data:; " +
              "font-src 'self'; " +
              "connect-src 'self'; " +
              "frame-src 'none'; " +
              "object-src 'none'; " +
              "base-uri 'self'; " +
              "form-action 'self';"
          }
        ]
      }
    ];
  },
};

export default nextConfig;

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com www.googletagmanager.com; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' data: www.google-analytics.com; " +
              "font-src 'self'; " +
              "connect-src 'self' www.google-analytics.com www.googletagmanager.com; " +
              "frame-src 'none'; " +
              "object-src 'none'; " +
              "base-uri 'self'; " +
              "form-action 'self';"
          }
        ]
      }
    ];
  },
};
