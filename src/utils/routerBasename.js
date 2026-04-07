/**
 * React Router basename must be a path prefix, never a full origin URL.
 * Vite puede exponer BASE_URL como URL absoluta del despliegue.
 */
export function getRouterBasename() {
  const raw = import.meta.env.BASE_URL || '/';

  try {
    if (/^https?:\/\//i.test(raw)) {
      const pathname = new URL(raw).pathname;
      if (pathname === '/' || pathname === '') {
        return undefined;
      }
      return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    }
  } catch {
    return undefined;
  }

  if (raw === '/') {
    return undefined;
  }

  return raw.endsWith('/') ? raw.slice(0, -1) : raw;
}
