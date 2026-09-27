import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { trackPageView } from "../../lib/analytics";

export function GoogleAnalytics() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
