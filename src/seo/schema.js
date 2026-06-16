/*
 * Schema.org / JSON-LD builders (GEO).
 *
 * Pure functions returning plain objects — importable from the Node prerender
 * script AND from client components. Each page's seoConfig entry lists which of
 * these to emit; the prerender script serialises them into <script type="application/ld+json">.
 *
 * Rules (see the SEO/GEO plan, §7.1):
 *   - Never fabricate ratings/reviews: omit aggregateRating until real reviews exist.
 *   - Omit offers/pricing while there is no published pricing.
 *   - FAQPage is the highest-ROI schema for AI extraction — answers must be
 *     self-contained so an engine can lift them verbatim.
 */

import {
  SITE_URL,
  SITE_NAME,
  CANONICAL_DESCRIPTION,
  OG_IMAGE,
  SAME_AS,
} from "./constants.js";

/** Site-wide publisher/brand entity. The canonical definition of Copantry. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: CANONICAL_DESCRIPTION,
    sameAs: SAME_AS,
  };
}

/** The product. Pricing/ratings intentionally omitted (see header). */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web, Android, iOS",
    description: CANONICAL_DESCRIPTION,
    image: OG_IMAGE,
    publisher: { "@id": `${SITE_URL}/#organization` },
    featureList: [
      "Tracks what is in your kitchen and how long each item has left",
      "Suggests recipes that use what is about to expire first",
      "Plans a week of meals around what you already have",
      "Builds a shopping list of only what you are missing",
      "Imports recipes from any URL, photo, or text with AI",
      "Shares recipes, plans and lists across a household",
      "Available in English, French, Italian, Portuguese, German and Spanish",
    ],
  };
}

/**
 * FAQPage from an array of { q, a }. Answers should be self-contained.
 * @param {{q:string,a:string}[]} items
 */
export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/**
 * HowTo from a title + ordered step strings (or {name,text} objects).
 * @param {string} name
 * @param {(string|{name:string,text:string})[]} steps
 */
export function howToSchema(name, steps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: typeof s === "string" ? s : s.name,
      text: typeof s === "string" ? s : s.text,
    })),
  };
}

/**
 * BreadcrumbList from [{name, path}] (path relative to site root).
 * @param {{name:string,path:string}[]} crumbs
 */
export function breadcrumbSchema(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/** Article/BlogPosting for blog & learn pages. */
export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    image: OG_IMAGE,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
