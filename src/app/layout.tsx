import type { Metadata } from "next";
import { Lato, Lora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AuthProvider from '@/components/providers/AuthProvider';
import ScrollAndOutboundTracker from '@/components/core/ScrollAndOutboundTracker';
import TitleOverride from '@/components/core/TitleOverride';

// Load Lato as default sans
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"], // Only load used weights for performance
});

// Load Lora as serif option
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"], // Only load used weights for performance
});

export const metadata: Metadata = {
  title: "Small Fiber Neuropathy Foundation",
  description:
    "Our foundation exists to speed up finding the cure for small fiber neuropathy and provide you the support you need along the way.",
  metadataBase: new URL('https://sfn-foundation.org'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://sfn-foundation.org" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LBNGNC5J4V"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LBNGNC5J4V');
          `}
        </Script>
      </head>
      <body
        className={`${lato.variable} ${lora.variable} font-sans antialiased bg-offWhite text-dark`}
      >
        <AuthProvider>
          <ScrollAndOutboundTracker />
            <TitleOverride />
          {children}
        </AuthProvider>
        {/* JSON-LD Organization for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Small Fiber Neuropathy Foundation",
          "url": "https://sfn-foundation.org",
          "logo": "https://sfn-foundation.org/logos/logo.png"
        }) }} />
      </body>
    </html>
  );
}
