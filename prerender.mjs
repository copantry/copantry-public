/*
 * Static prerender step (runs after the client + SSR Vite builds).
 *
 *   1. vite build                         -> dist/ (client bundle + index.html template)
 *   2. vite build --ssr entry-server.jsx  -> dist-ssr/entry-server.js (render(url))
 *   3. node prerender.mjs                  -> dist/<route>/index.html (this file)
 *
 * For every route in the SEO registry we render the React tree to HTML, inject
 * the per-route <head> (title, meta, canonical, OG, JSON-LD) and write a static
 * file. The result: AI crawlers and search engines get full, answer-first HTML
 * in view-source — the core GEO requirement — while the client still hydrates
 * into a normal SPA. Also regenerates dist/sitemap.xml from the same registry.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "./dist-ssr/entry-server.js";
import { getSeoEntries } from "./src/seo/seoConfig.js";
import { buildHead } from "./src/seo/buildHead.js";
import { SITE_URL } from "./src/seo/constants.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const templatePath = path.join(distDir, "index.html");

const template = fs.readFileSync(templatePath, "utf-8");
const entries = getSeoEntries();

let written = 0;
for (const entry of entries) {
  const { html } = render(entry.path);
  const head = buildHead(entry);

  const page = template
    // Remove the dev-only default title/description; the route head replaces them.
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta name="description"[^>]*>\s*/i, "")
    .replace(/<html lang="[^"]*">/i, `<html lang="${entry.lang || "en"}">`)
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outPath =
    entry.path === "/"
      ? templatePath
      : path.join(distDir, entry.path, "index.html");

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, page);
  written++;
}

/* ── Sitemap ────────────────────────────────────────────────────────────── */
const today = new Date().toISOString().slice(0, 10);
const urls = entries
  .filter((e) => !e.noindex)
  .map((e) => {
    const loc = `${SITE_URL}${e.path === "/" ? "/" : e.path}`;
    const parts = [`    <loc>${loc}</loc>`, `    <lastmod>${today}</lastmod>`];
    if (e.changefreq)
      parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
    if (e.priority != null)
      parts.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
    return `  <url>\n${parts.join("\n")}\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);

console.log(
  `✓ Prerendered ${written} routes + sitemap.xml (${entries.length} URLs)`,
);
