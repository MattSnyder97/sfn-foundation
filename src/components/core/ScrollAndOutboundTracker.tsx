"use client";

import { useEffect } from "react";
import trackEvent from "@/lib/analytics";

export default function ScrollAndOutboundTracker() {
  useEffect(() => {
    // Outbound link clicks
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest && target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.href;
      if (!href) return;
      try {
        const url = new URL(href);
        if (url.origin !== window.location.origin) {
          trackEvent('outbound_link_click', {
            href,
            link_text: (anchor.innerText || anchor.getAttribute('aria-label') || '').trim(),
            page_path: window.location.pathname,
          });
        }
      } catch (err) {
        // ignore
      }
    }

    document.addEventListener('click', onClick, true);

    // Scroll depth
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    // throttled scroll handler using requestAnimationFrame and min interval
    let rafId: number | null = null;
    let lastSentAt = 0;
    const MIN_INTERVAL_MS = 1000; // don't send more than one batch per second

    function doScrollCheck() {
      const doc = document.documentElement;
      const scrollTop = (window.scrollY || window.pageYOffset || doc.scrollTop || 0);
      const docHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight || doc.clientHeight;
      const pct = Math.min(100, Math.round(((scrollTop + winHeight) / docHeight) * 100));
      const now = Date.now();

      for (const m of milestones) {
        if (pct >= m && !reached.has(m)) {
          // ensure we don't spam events too quickly
          if (now - lastSentAt >= MIN_INTERVAL_MS) {
            reached.add(m);
            lastSentAt = now;
            trackEvent('scroll_depth', { depth_percent: m, page_path: window.location.pathname });
          }
        }
      }
      rafId = null;
    }

    function onScroll() {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(() => doScrollCheck());
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // initial check
    onScroll();

    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
