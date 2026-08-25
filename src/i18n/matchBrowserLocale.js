/*
 * Browser-language → marketing route locale.
 *
 * The marketing site's language is authoritative from the URL prefix (see
 * useLang.js), so nothing here ever changes the rendered language on its own.
 * It only answers "which published route best fits this browser?", which the
 * language suggestion banner uses to offer a switch.
 *
 * Regional subtags are the whole point: `navigator.languages` reports real
 * BCP-47 tags (`pt-BR`, `es-MX`, `en-US`, `de-AT`), and the published routes
 * include three regional variants. Matching only the base language would send
 * a Brazilian visitor to European Portuguese and a Mexican visitor to Spain.
 *
 * Pure and DOM-free so it is testable and safe during the static prerender.
 */

import { LOCALE_CONFIG } from "../content/localized.js";

/*
 * Countries covered by the `es-419` (Latin American Spanish) route. `419` is a
 * UN M.49 region code, never an ISO 3166-1 country, so no browser will ever
 * report it directly — the mapping below is the only way that route is reached
 * by detection. Spain (and any unlisted region) falls through to `es`.
 */
const ES_419_REGIONS = new Set([
  "ar",
  "bo",
  "cl",
  "co",
  "cr",
  "cu",
  "do",
  "ec",
  "gt",
  "hn",
  "mx",
  "ni",
  "pa",
  "pe",
  "pr",
  "py",
  "sv",
  "uy",
  "ve",
]);

/*
 * Norwegian is published as `no`, but browsers overwhelmingly report the
 * written-form tags `nb` (Bokmål) or `nn` (Nynorsk). Mirrors the account-side
 * rule in frontend/src/i18n/languages.js: never store `nb`.
 */
const BASE_ALIASES = { nb: "no", nn: "no", nob: "no", nno: "no" };

/** Split a BCP-47 tag into a lowercase base and region, ignoring script/variant subtags. */
function splitTag(tag) {
  const parts = String(tag || "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .split("-")
    .filter(Boolean);
  if (!parts.length) return null;
  const base = BASE_ALIASES[parts[0]] || parts[0];
  // Region is the first 2-letter or 3-digit subtag; a 4-letter subtag is a script (zh-Hant).
  const region = parts
    .slice(1)
    .find((p) => /^[a-z]{2}$/.test(p) || /^\d{3}$/.test(p));
  return { base, region: region || null };
}

/**
 * Resolve a single BCP-47 tag to a published route code, or null when the site
 * publishes nothing for that language.
 */
export function localeForTag(tag) {
  const parsed = splitTag(tag);
  if (!parsed) return null;
  const { base, region } = parsed;

  // 1. The tag names a published regional route outright (pt-BR, en-US, es-419).
  if (region) {
    const exact = `${base}-${region}`;
    if (exact in LOCALE_CONFIG) return exact;
  }

  // 2. Region-group routes no browser reports verbatim.
  if (base === "es" && region && ES_419_REGIONS.has(region)) return "es-419";

  // 3. Base language route (de-AT → de, pt-PT → pt, en-GB → en).
  if (base in LOCALE_CONFIG) return base;

  return null;
}

/**
 * Best published route for an ordered list of browser languages
 * (`navigator.languages`). Returns `en` — the unprefixed British-English root —
 * when nothing matches, which is also what the site prerenders.
 */
export function matchBrowserLocale(languages) {
  const list = Array.isArray(languages)
    ? languages
    : languages
      ? [languages]
      : [];
  for (const tag of list) {
    const match = localeForTag(tag);
    if (match) return match;
  }
  return "en";
}

/** Read the browser's language preferences; empty during prerender. */
export function browserLanguages() {
  if (typeof navigator === "undefined") return [];
  if (Array.isArray(navigator.languages) && navigator.languages.length)
    return navigator.languages;
  return navigator.language ? [navigator.language] : [];
}
