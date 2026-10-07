import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    if (!measurementId) return;
    if (!/^G-[A-Z0-9]+$/.test(measurementId)) {
      console.error('VITE_GA4_MEASUREMENT_ID must be a valid GA4 measurement ID.');
      return;
    }
    if (document.querySelector('[data-ga4-loader]')) return;

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    const script = document.createElement('script');
    script.async = true;
    script.dataset.ga4Loader = 'true';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
