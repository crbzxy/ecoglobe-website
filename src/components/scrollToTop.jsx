import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollToElementByHash(hash) {
  if (!hash || hash === '#') {
    return false;
  }
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  const el = document.getElementById(id);
  if (!el) {
    return false;
  }
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    let cancelled = false;

    const tryScroll = () => {
      if (!cancelled) {
        scrollToElementByHash(hash);
      }
    };

    tryScroll();
    const timerShort = window.setTimeout(tryScroll, 50);
    const timerLong = window.setTimeout(tryScroll, 280);

    return () => {
      cancelled = true;
      window.clearTimeout(timerShort);
      window.clearTimeout(timerLong);
    };
  }, [pathname, hash]);

  return null;
}
