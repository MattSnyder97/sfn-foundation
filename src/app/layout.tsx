import type { Metadata } from "next";
import { Lato, Lora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Load Lato as default sans
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "700", "900"],
});

// Load Lora as serif option
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "400", "700",],
});

export const metadata: Metadata = {
  title: "SFN Foundation",
  description:
    "Our foundation exists to speed up finding the cure for small fiber neuropathy and provide you the support you need along the way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LBNGNC5J4V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
        {children}
      </body>
    </html>
  );
}
