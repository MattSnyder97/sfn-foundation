// Minimal typed wrapper around gtag for GA4 events
export function trackEvent(name: string, params?: Record<string, any>) {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, params || {});
    }
  } catch (err) {
    // swallow errors - analytics must not break UX
    // eslint-disable-next-line no-console
    console.debug('trackEvent failed', name, err);
  }
}

export default trackEvent;
