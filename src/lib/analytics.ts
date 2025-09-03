// Minimal typed wrapper around gtag for GA4 events
export function trackEvent(name: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined') {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag('event', name, params || {});
      }
    }
  } catch {
    // swallow errors - analytics must not break UX
    console.debug('trackEvent failed', name);
  }
}

export default trackEvent;
