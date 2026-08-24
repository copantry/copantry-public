/*
 * Site-wide canonical constants.
 *
 * ENTITY CONSISTENCY (GEO): `CANONICAL_DESCRIPTION` is the single, verbatim
 * sentence describing Copantry. Reuse it unchanged in schema, llms.txt, OG
 * tags, social bios and any third-party directory so LLMs form one confident
 * entity rather than a fuzzy one. If it changes, change it here only.
 */

export const SITE_URL = "https://www.copantry.com";
export const APP_URL = "https://app.copantry.com";
export const API_URL = "https://api.copantry.com";

export const SITE_NAME = "Copantry";

/** The one-sentence canonical description. Do not paraphrase elsewhere. */
export const CANONICAL_DESCRIPTION =
  "Plan meals from food you already have, track your pantry, and build shopping lists automatically with Copantry — so your household cooks more and wastes less.";

/**
 * Default social share image — 1200×630 PNG (universally supported by Google,
 * LinkedIn, X/Twitter and Facebook). Regenerate from the source SVG with:
 *   node -e "require('sharp')('public/og-image.svg',{density:200}).resize(1200,630).png().toFile('public/og-image.png')"
 */
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Socials / external profiles for Organization.sameAs (entity consistency). */
export const SAME_AS = [
  "https://www.instagram.com/copantry",
  "https://x.com/copantry",
];

/** Registered company line (kept in sync with the footer). */
export const COMPANY_LINE =
  "Registered in England & Wales · 167-169 Great Portland Street, 5th Floor, London W1W 5PF";
