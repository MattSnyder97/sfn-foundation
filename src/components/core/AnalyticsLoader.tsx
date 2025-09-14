"use client";

import { useEffect } from "react";

const COOKIE_NAME = "sfn_cookie_consent";
const GA_ID = "G-LBNGNC5J4V"; // measurement ID

function readConsentCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + COOKIE_NAME + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function AnalyticsLoader() {
  useEffect(() => {
    let mounted = true;

    const loadGA = () => {
      if (document.querySelector('script[data-ga="loader"]')) return; // already loaded
      // If a disable flag was set earlier (user denied), clear it when loading after consent
      try {
        const key = 'ga-disable-' + GA_ID;
        // prefer delete so checks like `if(window['ga-disable-...'])` return falsy
        try { delete (window as unknown as Record<string, unknown>)[key]; } catch { (window as unknown as Record<string, unknown>)[key] = false; }
      } catch (e) {}
      const s = document.createElement('script');
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      s.async = true;
      s.setAttribute('data-ga', 'loader');
      document.head.appendChild(s);

      const inline = document.createElement('script');
      inline.setAttribute('data-ga', 'init');
      inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { 'anonymize_ip': true });`;
      document.head.appendChild(inline);
      try { console.debug('[AnalyticsLoader] GA loaded'); } catch (e) {}
    };

    const removeGA = () => {
      // mark disabled flag in case any earlier code checks it
      try {
        // safely set a disable flag without asserting `any`
        const key = 'ga-disable-' + GA_ID;
        (window as unknown as Record<string, unknown>)[key] = true;
      } catch (e) {}
      // remove injected GA scripts (if any)
      const nodes = Array.from(document.querySelectorAll('script[data-ga]'));
      nodes.forEach(n => n.parentNode?.removeChild(n));
      try { console.debug('[AnalyticsLoader] GA removed'); } catch (e) {}
    };

    const apply = () => {
      if (!mounted) return;
      const consent = readConsentCookie();
      if (consent === 'accepted') {
        loadGA();
      } else {
        removeGA();
      }
    };

    apply();

    const handler = () => apply();
    window.addEventListener('cookie-consent-changed', handler);

    return () => {
      mounted = false;
      window.removeEventListener('cookie-consent-changed', handler);
    };
  }, []);

  return null;
}
