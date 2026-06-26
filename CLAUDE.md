# Public site (www.copantry.com)

Marketing site for Copantry. React 19 + Vite 8 + Tailwind v4, **statically
prerendered** for SEO/GEO. **ES modules**. Deployed independently — this repo has
no access to the parent monorepo at runtime.

**Positioning:** lead with the food-waste wedge ("cook it before you bin it"),
not MCP. MCP is a differentiator section + the `/features/ai-assistant-mcp` page,
never the headline. Full architecture & launch runbook:
[../docs/marketing-site-seo-geo.md](../docs/marketing-site-seo-geo.md).

## Commands

```bash
npm run dev        # Vite dev server, port 5174 (SPA only, no prerender)
npm run build      # client build → SSR build → prerender → dist/ (static HTML per route + sitemap.xml)
npm run build:ssr  # SSR bundle only (dist-ssr/)
npm run prerender  # prerender step only (needs dist/ + dist-ssr/ present)
```

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

| Route                                   | File                                                                                | Purpose                                         |
| --------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------- |
| `/`                                     | `pages/HomePage.jsx`                                                                | Waste-first hero + hook card + pillars + FAQ    |
| `/how-it-works`                         | `pages/HowItWorksPage.jsx`                                                          | 4-step HowTo                                    |
| `/why-copantry`                         | `pages/WhyCopantryPage.jsx`                                                         | Differentiator (categories, never named rivals) |
| `/features/:slug`                       | `pages/ContentPage.jsx` + `content/pages.js` (`FEATURES`)                           | Capability pages                                |
| `/use-cases/:slug`                      | `pages/ContentPage.jsx` + `content/pages.js` (`USE_CASES`)                          | Audience pages                                  |
| `/features/ai-assistant-mcp`, `/mcp`    | `pages/McpPage.jsx`                                                                 | MCP / AI assistant                              |
| `/learn`, `/learn/how-long-does-*-last` | `pages/LearnIndexPage.jsx`, `pages/LearnShelfLifePage.jsx` + `content/shelfLife.js` | Programmatic shelf-life                         |
| `/blog`, `/blog/:slug`                  | `pages/BlogIndexPage.jsx`, `pages/blog/*` + `content/blog.js`                       | Editorial pillars                               |
| `/about`, `/privacy`, `/terms`          | `pages/AboutPage.jsx`, `PrivacyPage.jsx`, `TermsPage.jsx`                           | —                                               |

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

## Conventions

- **Answer-first:** every page/section leads with a direct, self-contained answer
  (the prerendered HTML is what AI engines extract). FAQ answers live in
  `content/faqs.js` and double as `FAQPage` JSON-LD.
- **Entity consistency:** reuse `CANONICAL_DESCRIPTION` from `constants.js`
  verbatim; don't paraphrase what Copantry is.
- **No fabricated stats:** attribute figures (WRAP/ADEME) with links.
- **No named competitors** — contrast categories of apps only.
- **Localization:** language is driven by the URL prefix (`/fr`, `/it`, `/es`,
  `/pt`, `/de`; English at root). Home (incl. the **home FAQ** via `HOME_FAQ`),
  How-it-works and the food-waste pillar are fully localized; all translations live in
  `src/content/localized.js`; language is read via `useLang()` (URL-based). Other pages
  (why-copantry, use-cases, other features, blog, learn) are English-only for now. See the
  runbook for how to localize more pages. Don't add browser-detection that changes
  the root language — the URL is canonical.
  - **`/us` is the US-English variant** (`LOCALES` includes `"us"`, advertised as
    `hreflang="en-US"` via `hreflangFor()`). It reuses the English chrome/copy
    (UI/HOME/HOW_IT_WORKS/REDUCE_WASTE fall back to `en`) and only overrides
    currency and the country-typical dinner. Currency is **converted, not
    re-symbolised** — see `RESCUE_AMOUNT` (£8 ≈ €9 ≈ $10) and the per-country
    `HOOK` dishes. Add new currency-bearing copy via `RESCUE_AMOUNT`, never a
    hardcoded symbol.
