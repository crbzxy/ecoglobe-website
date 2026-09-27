export const googleAnalyticsId = "G-Y9F6ZS6HBK";

type GtagFunction = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: GtagFunction;
  }
}

export function getGoogleAnalyticsScripts() {
  return [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
      async: true
    },
    {
      children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleAnalyticsId}');`
    }
  ];
}

export function trackPageView(path: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", googleAnalyticsId, { page_path: path });
}
