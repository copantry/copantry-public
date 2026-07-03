import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  loadAnalytics,
  trackPageview,
  grantAnalyticsConsent,
} from "../lib/analytics";

// Drives consent-gated Google Analytics (see lib/analytics.js). Renders nothing.
// - On mount: loads GA if the visitor already accepted cookies in a prior visit.
// - Listens for the `copantry:consent` event fired by CookieBanner on Accept.
// - Sends a page_view on every client-side route change (no-op until GA loads).
export default function Analytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    loadAnalytics();
    const onConsent = () => grantAnalyticsConsent();
    window.addEventListener("copantry:consent", onConsent);
    return () => window.removeEventListener("copantry:consent", onConsent);
  }, []);

  useEffect(() => {
    trackPageview(pathname + window.location.search);
  }, [pathname]);

  return null;
}
