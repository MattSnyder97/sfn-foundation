"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Optimized SkipFocusHandler:
// - Registers one persistent keydown listener on mount to avoid repeated add/remove.
// - On client-side navigation, sets a short-lived flag (navJustHappened).
// - First Tab after navigation shows the skip link; otherwise behavior falls back.
// - Uses typed timer IDs and no `any` casts for Netlify/strict environments.
export default function SkipFocusHandler() {
  const pathname = usePathname();
  const navJustHappened = useRef(false);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    // On mount mark navigation as just happened so the first Tab on initial load
    // will show the skip link. We manage a short timeout to revert the flag.
    if (!navJustHappened.current) {
      navJustHappened.current = true;
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
      timeoutId.current = window.setTimeout(() => {
        navJustHappened.current = false;
        timeoutId.current = null;
      }, 1000);
    }

    // Single listener that checks navJustHappened flag
    const onKeyDown = (e: KeyboardEvent) => {
      if (!navJustHappened.current) return;
      if (e.key === 'Tab') {
        e.preventDefault();
        try {
          // Prefer cookie consent focus if present (developer wants first Tab to land there when banner visible)
          const cookieAccept = document.getElementById('cookie-consent-accept') as HTMLElement | null;
          if (cookieAccept && cookieAccept.offsetParent !== null) {
            cookieAccept.focus({ preventScroll: true });
            navJustHappened.current = false;
            return;
          }

          const skip = document.getElementById('skip-to-content-link');
          if (skip) {
            skip.setAttribute('data-skip-visible', 'true');
            const remove = () => { try { skip.removeAttribute('data-skip-visible'); } catch (err) {} };
            skip.addEventListener('blur', remove, { once: true });
            // Ensure removal after a short period to avoid permanent attributes
            window.setTimeout(remove, 3000);
            skip.focus({ preventScroll: true });
          }
        } catch {
          // error intentionally ignored (or log selectively)
        }
        navJustHappened.current = false;
      }
    };

    window.addEventListener('keydown', onKeyDown, true);

    return () => {
      window.removeEventListener('keydown', onKeyDown, true);
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
      navJustHappened.current = false;
    };
  }, []);

  useEffect(() => {
    // Mark that navigation happened and clear any previous timeout
    navJustHappened.current = true;
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    // After 1s stop waiting (conservative, responsive)
    timeoutId.current = window.setTimeout(() => {
      navJustHappened.current = false;
      timeoutId.current = null;
    }, 1000);

    // cleanup on unmount or pathname change
    return () => {
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
      navJustHappened.current = false;
    };
  }, [pathname]);

  return null;
}
