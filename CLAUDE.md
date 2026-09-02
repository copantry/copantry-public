# Public site (www.copantry.com)

Marketing site for Copantry. React 19 + Vite 8 + Tailwind v4, **statically
prerendered** for SEO/GEO. **ES modules**. Deployed independently — this repo has
no access to the parent monorepo at runtime.

**Positioning:** lead with the **dinner/household umbrella** — _"Never wonder
what's for dinner again"_ — aimed at busy families/couples. Food waste is now a
**strong pillar/benefit, not the headline** (the guilt-y "cook it before you bin
it" framing was retired in favour of relief-led copy; waste keeps its section +
every SEO asset). MCP is a differentiator section + the `/features/ai-assistant-mcp`
page, never the headline. The one-sentence entity anchor lives **only** in
`src/seo/constants.js` (`CANONICAL_DESCRIPTION`) and must stay in lockstep with
`src/seo/seoConfig.js` `"/"` description + `public/llms.txt`. Full architecture &
launch runbook: [../docs/marketing-site-seo-geo.md](../docs/marketing-site-seo-geo.md).
Design of the repositioning:
[../docs/superpowers/specs/2026-07-09-positioning-onboarding-notifications-design.md](../docs/superpowers/specs/2026-07-09-positioning-onboarding-notifications-design.md).

Locale routing metadata has one source: `src/content/localized.js` `LOCALE_CONFIG` owns each
route's base language, label, BCP-47 tag, flag, rescue amount, and regional market metadata. Never
reintroduce parallel locale maps. `/` is canonical/x-default British English and advertises
`en-GB`; `/en-us`, `/pt-br`, and `/es-419` advertise their full regional tags. Generic two-letter
tags are valid BCP-47. Keep this registry, route/SEO tests, root `AGENTS.md`, and platform
`CLAUDE.md` locale contracts synchronized whenever a locale changes.

## Commands

```bash
npm run dev        # Vite dev server, port 5174 (SPA only, no prerender)
npm run build      # client build → SSR build → prerender → dist/ (static HTML per route + sitemap.xml)
npm run build:ssr  # SSR bundle only (dist-ssr/)
npm run prerender  # prerender step only (needs dist/ + dist-ssr/ present)
npm run test:e2e   # Playwright browser E2E (e2e/**, desktop + mobile, Chromium)
```

**E2E tests:** `e2e/` holds full end-to-end Playwright specs (home, route
navigation, SEO `<head>`) — this site is static/no-auth so no backend is needed.
The config auto-starts/reuses the dev server on port 5174. Vitest (`npm test`) is
scoped to `tests/**` so it won't pick up the E2E specs. See
[../docs/e2e-testing.md](../docs/e2e-testing.md).

`npm run build` produces **static, crawlable HTML for every route** (view-source
contains the copy + JSON-LD). If a route renders fine in `dev` but is missing
from `dist/`, it has no entry in `src/seo/seoConfig.js` — the prerender iterates
that registry.

## Rendering / SEO architecture (read before touching build)

- `index.html` is a minimal template; per-route `<head>` is injected at build by
  `prerender.mjs` from `src/seo/buildHead.js` + `src/seo/seoConfig.js`.
- `src/entry-server.jsx` renders routes with React Router `StaticRouter`.
- Prerender is **English**; guard any `window`/`localStorage`/`LanguageDetector`
  use so it doesn't run server-side (see `src/i18n/index.js`, `CookieBanner.jsx`).
- `src/seo/seoConfig.js` is the **single source** for titles, descriptions,
  JSON-LD and the sitemap. It must stay **JSX/React-free** (Node imports it).

## Pages

| Route                                   | File                                                                                | Purpose                                           |
| --------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| `/`                                     | `pages/HomePage.jsx`                                                                | Dinner/household hero + hook card + pillars + FAQ |
| `/how-it-works`                         | `pages/HowItWorksPage.jsx`                                                          | 4-step HowTo                                      |
| `/why-copantry`                         | `pages/WhyCopantryPage.jsx`                                                         | Differentiator (categories, never named rivals)   |
| `/features/:slug`                       | `pages/ContentPage.jsx` + `content/pages.js` (`FEATURES`)                           | Capability pages                                  |
| `/use-cases/:slug`                      | `pages/ContentPage.jsx` + `content/pages.js` (`USE_CASES`)                          | Audience pages                                    |
| `/features/ai-assistant-mcp`, `/mcp`    | `pages/McpPage.jsx`                                                                 | MCP / AI assistant                                |
| `/learn`, `/learn/how-long-does-*-last` | `pages/LearnIndexPage.jsx`, `pages/LearnShelfLifePage.jsx` + `content/shelfLife.js` | Programmatic shelf-life                           |
| `/blog`, `/blog/:slug`                  | `pages/BlogIndexPage.jsx`, `pages/blog/*` + `content/blog.js`                       | Editorial pillars                                 |
| `/about`, `/privacy`, `/terms`          | `pages/AboutPage.jsx`, `PrivacyPage.jsx`, `TermsPage.jsx`                           | —                                                 |

**No pricing page** (deliberate — see the plan). CTAs link to
`https://app.copantry.com`. Use `src/seo/constants.js` (`APP_URL`, `API_URL`) for
external links. Add the app-download buttons via `components/AppButtons.jsx`
(Android + iOS, disabled/"Soon" until store links exist).

To add a page see [../docs/marketing-site-seo-geo.md](../docs/marketing-site-seo-geo.md) → "Adding a page".

## Design tokens

Brand colours, fonts, radii live in `design/` as **managed copies** — do not edit
them directly. Edit the canonical files at the monorepo root
(`tailwind.preset.js`, `shared/tokens.css`) then run
`node scripts/sync-design-tokens.mjs`. **No hardcoded hex** in components/CSS —
use `var(--color-brand-500)` or `bg-brand-500`.

## AI crawler assets (`public/`)

| File            | Purpose                                                                       |
| --------------- | ----------------------------------------------------------------------------- |
| `robots.txt`    | Allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, etc. |
| `llms.txt`      | **Curated** (5–10 authoritative links) — entity definition + core pages       |
| `llms-full.txt` | Full MCP tool reference (keep in sync with `backend/routes/mcp.js`)           |
| `sitemap.xml`   | **Auto-generated** by the prerender from `seoConfig.js` — don't hand-edit     |
| `og-image.svg`  | Social image (export a 1200×630 PNG before launch — see constants.js)         |

`public/.well-known/assetlinks.json` is an **origin fallback only**. The live
Digital Asset Links statement is served by the `copantry-assetlinks` Cloudflare
Worker (`assetlinks/src/index.js`), which intercepts
`/.well-known/assetlinks.json` and `/.well-known/apple-app-site-association` on
the apex, `www` and `app` hosts before the request ever reaches this site — so
the Worker is authoritative and this file must mirror it byte-for-byte. It lived
outside `public/` until 2026-09-02 and was therefore never built, which is how it
came to carry a stale certificate fingerprint nobody noticed.

## Conventions

- **The MCP page leads with the self-service route, not the API key.** Copantry is
  **not listed in any assistant's built-in connector directory**, and the page says so
  plainly rather than implying otherwise: readers add it themselves as a **custom
  (remote) MCP server** — paste `https://api.copantry.com/mcp`, sign in with a Copantry
  account, done. That path is real because the backend runs full OAuth (dynamic client
  registration + PKCE, `backend/routes/mcpOAuth.js`), so **no API key is entered or
  stored in the client**. The API-key + JSON steps still exist, demoted to "prefer a
  config file?" for file-configured desktop/coding clients. Keep the two in that order:
  the old page implied a key was mandatory, which reads as "you need to be a developer",
  and the whole point is that you do not. Copy lives under `mcp.connector_*` /
  `mcp.manual_*` in **all twelve locale JSONs** (the page is English-only via
  `NOT_LOCALIZED`, but i18n language follows whatever the visitor arrived with, so the
  keys must exist everywhere); the assistants' exact menu paths are described loosely
  on purpose — they move.
- **Answer-first:** every page/section leads with a direct, self-contained answer
  (the prerendered HTML is what AI engines extract). FAQ answers live in
  `content/faqs.js` and double as `FAQPage` JSON-LD.
- **Entity consistency:** reuse `CANONICAL_DESCRIPTION` from `constants.js`
  verbatim; don't paraphrase what Copantry is.
- **No fabricated stats:** attribute figures (WRAP/ADEME) with links.
- **No named competitors** — contrast categories of apps only.
- **Localization:** language is driven by the URL prefix (`/fr`, `/it`, `/es`,
  `/pt`, `/de`; English at root). **The whole marketing site is localized** — Home
  (incl. the **home FAQ** via `HOME_FAQ`), How-it-works, why-copantry (`WHY_COPANTRY`),
  the food-waste pillar (`REDUCE_WASTE`) and all `UI` chrome live in
  `src/content/localized.js`; the other **feature + use-case** pages live in
  `src/content/pagesLocalized.js` (`localizedPage()`), **Learn** (index + 23 shelf-life
  pages) in `src/content/learnLocalized.js`, and the **Blog** (index + posts) in
  `src/content/blogLocalized.js` (a JSX-free block model rendered by
  `pages/blog/BlogBody.jsx`). `isLocalizedPath()` (in `localized.js`) is the single source
  of truth for which paths get a locale prefix (exact pages + `/features/`, `/use-cases/`,
  `/learn`, `/blog` prefixes; the MCP page is excluded). Language is read via `useLang()`
  (URL-based). Only the **MCP page** (`/features/ai-assistant-mcp`) and legal/about pages
  stay English. Don't add browser-detection that changes the root language — the URL is
  canonical. Slugs (incl. `/learn/how-long-does-*-last` and `/blog/*`) stay English; only
  the rendered copy is translated.
  - **`/us` is the US-English variant** (`LOCALES` includes `"us"`, advertised as
    `hreflang="en-US"` via `hreflangFor()`). It reuses the English chrome/copy
    (UI/HOME/HOW_IT_WORKS/REDUCE_WASTE fall back to `en`) and only overrides
    currency and the country-typical dinner. Currency is **converted, not
    re-symbolised** — see `RESCUE_AMOUNT` (£8 ≈ €9 ≈ $10) and the per-country
    `HOOK` dishes. Add new currency-bearing copy via `RESCUE_AMOUNT`, never a
    hardcoded symbol.
- **Analytics (consent-gated GA4):** `src/lib/analytics.js` + `components/Analytics.jsx`
  (mounted in `App.jsx`). The Measurement ID **defaults to CoPantry's own GA4 property**
  (`G-YFW8NH2YNY` — the same one `frontend/src/main.jsx` uses) so it works with no build
  config (deploys are automated, `.env` is gitignored); `VITE_GA_MEASUREMENT_ID` overrides
  it, and `""` disables analytics. gtag.js loads **only after** the visitor accepts the `CookieBanner`
  (consent in `localStorage["copantry_cookie_consent"]`), with `anonymize_ip` + ad signals
  off; Accept fires a `copantry:consent` window event → `grantAnalyticsConsent()`, Decline
  flips Google's `ga-disable-<id>` kill switch. SPA route changes send a manual `page_view`
  (`send_page_view:false`). All access is `isBrowser()`-guarded so the prerender is
  unaffected. Disclosed in both PrivacyPage files + the cookie-banner copy (all twelve locales).
  **No pricing** for the MCP page either — the pricing-allowance FAQ answer was softened to
  a plain usage-limit note (monetisation lives in the app, not the marketing site).
