// Consent-gated Google Analytics 4 (gtag.js) for the marketing site.
//
// The Measurement ID defaults to CoPantry's own GA4 property (the same one the
// web app initialises in frontend/src/main.jsx) so it works with no build config
// — deploys are automated and .env is gitignored. `VITE_GA_MEASUREMENT_ID` still
// overrides it (set it to "" to disable analytics entirely for a fork/staging).
//
// GDPR: nothing loads until the visitor has explicitly ACCEPTED cookies in the
// CookieBanner (consent stored in `localStorage["copantry_cookie_consent"]`).
// Declining sets Google's `ga-disable-<id>` kill switch. Nothing runs during the
// static prerender (all access is guarded behind `isBrowser()` + effects).

import { localeConfig } from "../content/localized.js";

const DEFAULT_GA_ID = "G-YFW8NH2YNY";
export const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? DEFAULT_GA_ID;
const CONSENT_KEY = "copantry_cookie_consent";

let loaded = false;

const isBrowser = () => typeof window !== "undefined";

/** Build the bounded, privacy-safe properties used by regional marketing events. */
export function regionalMarketingPayload(locale, surface) {
  const normalized = String(locale || "en").toLowerCase();
  const config = localeConfig(normalized);
  return {
    uiLocale: config.hreflang,
    baseLanguage: config.baseLanguage,
    country: config.regionalCountry ?? null,
    surface,
    source: "marketing_route",
  };
}

export function hasAnalyticsConsent() {
  if (!isBrowser()) return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

// Inject gtag.js once and initialise. No-op without an id, consent, or browser.
export function loadAnalytics() {
  if (!isBrowser() || !GA_ID || loaded || !hasAnalyticsConsent()) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  gtag("js", new Date());
  // Privacy-first: anonymise IP, no ad signals, and let the SPA send page_views
  // itself (send_page_view:false) so route changes are tracked without double
  // counting the initial load.
  gtag("config", GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: false,
  });
}

// Manual SPA page_view — no-op until GA has actually loaded (post-consent).
export function trackPageview(path) {
  if (!isBrowser() || !loaded || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Send a consent-gated product event without adding identity or free-text properties. */
export function trackEvent(event, properties = {}) {
  if (
    !isBrowser() ||
    !hasAnalyticsConsent() ||
    typeof window.gtag !== "function"
  )
    return;
  window.gtag("event", event, properties);
}

// The visitor just accepted cookies: load GA and record the current page.
export function grantAnalyticsConsent() {
  loadAnalytics();
  if (isBrowser())
    trackPageview(window.location.pathname + window.location.search);
}

// The visitor declined / withdrew consent: flip Google's opt-out kill switch so
// no hits are sent even if the script was already present.
export function revokeAnalyticsConsent() {
  if (isBrowser() && GA_ID) window[`ga-disable-${GA_ID}`] = true;
}
