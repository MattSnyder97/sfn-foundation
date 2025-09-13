import type { Metadata } from "next";
import { Lato, Lora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AuthProvider from '@/components/providers/AuthProvider';
import ScrollAndOutboundTracker from '@/components/core/ScrollAndOutboundTracker';
import SkipFocusHandler from '@/components/core/SkipFocusHandler';
import Cookies from '@/components/core/Cookies';
import AnalyticsLoader from '@/components/core/AnalyticsLoader';

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
    "Our foundation strives to cure small fiber neuropathy and give you the support you need until that day comes.",
  metadataBase: new URL('https://sfn-foundation.org'),
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

        {/* Google Analytics is loaded client-side only after explicit consent by the user via AnalyticsLoader. */}
      </head>
      <body
        className={`${lato.variable} ${lora.variable} font-sans antialiased bg-offWhite text-dark min-h-screen flex flex-col`}
      >
        <AuthProvider>
          {/* Skip link for keyboard users */}
          <a id="skip-to-content-link" href="#content" className="skip-link">Skip to Main Content</a>
            <SkipFocusHandler />
          <ScrollAndOutboundTracker />
          <main id="content" tabIndex={-1}>
            {children}
          </main>
        </AuthProvider>
  <Cookies />
  <AnalyticsLoader />
        {/* JSON-LD Organization for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Small Fiber Neuropathy Foundation",
          "url": "https://sfn-foundation.org",
          "logo": "https://sfn-foundation.org/logos/logo.png"
        }) }} />
                {/* Ensure skip-to-content actually focuses the main element across browsers */}
                <Script id="skip-to-content" strategy="afterInteractive">
                  {`(function(){
                    function findMain(){
                      // prefer an explicit page-level skip target when present
                      return document.querySelector('[data-skip-target="true"]') || document.getElementById('content') || document.querySelector('main') || document.querySelector('[role="main"]');
                    }

                    function firstFocusable(container){
                      if(!container) return null;
                      try{
                        return container.querySelector('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"], summary');
                      }catch(e){return null;}
                    }

                    function focusElement(el){
                      try{
                        var child = firstFocusable(el);
                        if(child){
                          // Scroll the first focusable into view at the top of the viewport,
                          // then focus it without causing an additional jump.
                          if(typeof child.scrollIntoView === 'function') child.scrollIntoView({block:'start', behavior:'smooth'});
                          try{ child.focus({preventScroll:true}); }catch(e){ try{ child.focus(); }catch(e){} }
                          return;
                        }
                        // Scroll the main element into view first, then focus it.
                        if(el && typeof el.scrollIntoView === 'function') el.scrollIntoView({block:'start', behavior:'smooth'});
                        if(el && typeof el.focus === 'function'){
                          try{ el.focus({preventScroll:true}); }catch(e){ try{ el.focus(); }catch(e){} }
                        }
                      }catch(e){}
                    }

                    function focusMainWithRetries(tries){ var el = findMain(); if(el){ focusElement(el); return true; } if(tries>0){ setTimeout(function(){ focusMainWithRetries(tries-1); }, 100); } return false; }

                    // initial hash-case
                    if (typeof window !== 'undefined' && window.location && window.location.hash === '#content') { setTimeout(function(){ focusMainWithRetries(10); }, 0); }

                    // hash changes
                    window.addEventListener('hashchange', function(){ if(window.location.hash === '#content') focusMainWithRetries(10); });

                    // The client-side routing focus behavior is handled in React by SkipFocusHandler.

                    // bind directly to skip link
                    function onSkipClick(e){ e.preventDefault(); focusMainWithRetries(10); }
                    var skip = document.getElementById('skip-to-content-link');
                    if(skip){ skip.addEventListener('click', onSkipClick); skip.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); focusMainWithRetries(10); } }); }
                    else { /* retry binding if element appears later */ setTimeout(function(){ var s=document.getElementById('skip-to-content-link'); if(s){ s.addEventListener('click', onSkipClick); s.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); focusMainWithRetries(10); } }); } }, 200);
                    }
                  })();`}
                </Script>
      </body>
    </html>
  );
}
