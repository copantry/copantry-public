# Public site (www.copantry.com)

Marketing site for CoPantry. React 19 + Vite 8 + Tailwind v4. **ES modules**.
Deployed independently — this repo has no access to the parent monorepo at runtime.

## Commands

```bash
npm run dev     # Vite dev server, port 5174
npm run build   # production build → dist/
```

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/HomePage.jsx` | Hero, features, MCP spotlight, pricing teaser, CTA |
| `/mcp` | `src/pages/McpPage.jsx` | MCP documentation (GEO-optimised, Definition Lead structure) |
| `/pricing` | `src/pages/PricingPage.jsx` | Full pricing table and FAQ |

CTAs link to `https://app.copantry.com` (the frontend app). Never link to internal routes.

## Design tokens

Brand colours, fonts, and radii live in `design/` as **managed copies** — do not edit them directly.

| File | Role |
|---|---|
| `design/tokens.css` | `@theme {}` + `:root {}` CSS custom properties |
| `design/tailwind.preset.js` | `twExtend` wired into `tailwind.config.js` |

To update tokens, edit the canonical files at the monorepo root (`tailwind.preset.js`, `shared/tokens.css`) then run:

```bash
node scripts/sync-design-tokens.mjs          # from the monorepo root
node scripts/sync-design-tokens.mjs --check  # CI verification
```

**No hardcoded hex values** in components or CSS — use `var(--color-brand-500)` or `bg-brand-500`.

## AI crawler assets (`public/`)

| File | Purpose |
|---|---|
| `public/robots.txt` | Explicitly allows GPTBot, ClaudeBot, PerplexityBot, GoogleOther, etc. |
| `public/llms.txt` | GEO: complete MCP tool schemas + when-to-use guidance for LLM indexing |
| `public/favicon.svg` | Orange chef hat SVG |

When adding or changing MCP tools, update `public/llms.txt` to keep it in sync with `backend/routes/mcp.js`.

## GEO conventions

The `/mcp` page uses **Definition Lead** structures (`DefinitionBlock` component) — each key concept is defined before it is used, so AI crawlers can extract clean answers. Maintain this pattern when editing `McpPage.jsx`.
