/*
 * buildHead(entry) -> string of <head> HTML for one route.
 *
 * Used by the prerender script (Node) to inject per-route SEO into the static
 * HTML, and mirrored on the client by <Seo> for SPA navigation. Pure string
 * builder, no DOM, no React — safe to import anywhere.
 */

import { SITE_URL, SITE_NAME, OG_IMAGE } from './constants.js'

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export function buildHead(entry) {
  const {
    title,
    description,
    path = '/',
    ogType = 'website',
    image = OG_IMAGE,
    noindex = false,
    schema,
    alternates,
  } = entry

  const url = `${SITE_URL}${path}`
  const tags = []

  tags.push(`<title>${esc(title)}</title>`)
  tags.push(`<meta name="description" content="${esc(description)}" />`)
  tags.push(`<link rel="canonical" href="${esc(url)}" />`)
  if (noindex) tags.push(`<meta name="robots" content="noindex, follow" />`)

  // hreflang alternates (localized pages link to each other + x-default).
  if (Array.isArray(alternates)) {
    for (const alt of alternates) {
      tags.push(`<link rel="alternate" hreflang="${esc(alt.hreflang)}" href="${esc(alt.href)}" />`)
    }
  }

  // Open Graph
  tags.push(`<meta property="og:type" content="${esc(ogType)}" />`)
  tags.push(`<meta property="og:url" content="${esc(url)}" />`)
  tags.push(`<meta property="og:title" content="${esc(title)}" />`)
  tags.push(`<meta property="og:description" content="${esc(description)}" />`)
  tags.push(`<meta property="og:image" content="${esc(image)}" />`)
  tags.push(`<meta property="og:site_name" content="${esc(SITE_NAME)}" />`)

  // Twitter
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`)
  tags.push(`<meta name="twitter:title" content="${esc(title)}" />`)
  tags.push(`<meta name="twitter:description" content="${esc(description)}" />`)
  tags.push(`<meta name="twitter:image" content="${esc(image)}" />`)

  // JSON-LD structured data
  const blocks = typeof schema === 'function' ? schema() : []
  for (const block of blocks) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(block)}</script>`
    )
  }

  return tags.join('\n    ')
}
