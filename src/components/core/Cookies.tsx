"use client";

import { useEffect, useState } from "react";
import { Button } from "../primitives/Button";

const COOKIE_NAME = "sfn_cookie_consent";

function readConsentCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + COOKIE_NAME + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function setConsentCookie(value: string) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function Cookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readConsentCookie();
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    setConsentCookie("accepted");
    setVisible(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'accepted' }));
    }
  }

  function deny() {
    setConsentCookie("denied");
    setVisible(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'denied' }));
    }
  }


  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      role="region"
      aria-labelledby="cookie-consent-heading"
      aria-label="Cookie consent banner"
      className="fixed inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-8 z-50"
    >
      <div
        className="max-w-xl mx-auto pointer-events-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 backdrop-blur-sm"
        style={{ backgroundColor: "var(--color-primary)", border: "6px solid rgba(255,255,255,0.88)" }}
      >
        <div className="flex flex-col items-stretch gap-4 p-6 sm:p-8 text-white">
          {/* Content: heading, copy, buttons (cookie icon removed) */}
          <div className="w-full flex flex-col justify-center text-center sm:text-left px-0">
            <h3 id="cookie-consent-heading" className="text-2xl sm:text-3xl font-bold">Cookies?</h3>

            <p className="mt-3 text-sm sm:text-base text-white/90">
              We use cookies and similar technologies to improve the website. By clicking &quot;Accept&quot; you agree to our cookie use in our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-row items-center justify-center sm:justify-start gap-3">
              {/* Keep Accept first in the DOM for tab order; visually place it on the right on mobile using order classes */}
              <Button id="cookie-consent-accept" type="button" variant="secondary" size="md" onClick={accept} className="min-w-[110px] order-2 sm:order-2">Accept</Button>
              <Button id="cookie-consent-deny" type="button" variant="outline" size="md" onClick={deny} className="min-w-[110px] order-1 sm:order-1">Deny</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
