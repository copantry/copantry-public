/*
 * Per-route SEO registry — the single source of truth for titles, descriptions,
 * JSON-LD and sitemap metadata. Consumed by:
 *   - prerender.mjs  (Node)  -> injects <head> + writes sitemap.xml
 *   - <Seo> component (browser) -> updates <head> on client-side navigation
 *
 * MUST stay free of JSX/React imports so the Node prerender can import it.
 * Every prerendered route must have an entry here (the prerender iterates this).
 */

import { SITE_NAME, SITE_URL } from "./constants.js";
import {
  organizationSchema,
  softwareApplicationSchema,
  faqSchema,
  howToSchema,
  breadcrumbSchema,
  articleSchema,
} from "./schema.js";
import { FAQS } from "../content/faqs.js";
import { FEATURES, USE_CASES } from "../content/pages.js";
import { SHELF_LIFE, learnPath } from "../content/shelfLife.js";
import { POSTS } from "../content/blog.js";
import {
  HOME,
  HOW_IT_WORKS,
  REDUCE_WASTE,
  UI,
  LOCALES,
  HREFLANG_LANGS,
  hreflangFor,
  localizePath,
  pick,
} from "../content/localized.js";

const titled = (t) => `${t} | ${SITE_NAME}`;
/**
 * A clean, self-contained meta description from a lede: prefer the first
 * sentence, and keep it within ~160 chars (search snippet length), truncating
 * at a word boundary with an ellipsis if needed.
 */
const metaDescription = (s) => {
  const sentence = (s.match(/^[^.]+\./) || [s])[0];
  if (sentence.length <= 160) return sentence;
  const clipped = sentence.slice(0, 157);
  return clipped.slice(0, clipped.lastIndexOf(" ")) + "…";
};

const HOW_IT_WORKS_STEPS = [
  {
    name: "Tell Copantry what you have",
    text: "Add groceries by photo, receipt, voice or text and Copantry builds a live, dated pantry.",
  },
  {
    name: "See what to cook tonight",
    text: "Copantry suggests meals built around what is about to expire, scaled to your household.",
  },
  {
    name: "Shop only for the gaps",
    text: "It compares your plan to your pantry and builds an aisle-sorted list of only what you are missing.",
  },
  {
    name: "Cook, and it stays in sync",
    text: "Mark a meal cooked and Copantry deducts what you used and tracks leftovers.",
  },
];

/* ── Static routes ──────────────────────────────────────────────────────── */
const STATIC = {
  "/": {
    title: "Copantry — cook what you have before it goes to waste",
    description:
      "Copantry is a meal planner and pantry tracker that tells you what to cook before food goes to waste and builds your shopping list around what you already have.",
    priority: 1.0,
    changefreq: "weekly",
    schema: () => [
      organizationSchema(),
      softwareApplicationSchema(),
      faqSchema(FAQS.home),
    ],
  },
  "/how-it-works": {
    title: titled("How Copantry works — from a full fridge to dinner"),
    description:
      "Copantry learns what is in your kitchen, tells you what to cook before it expires, builds a shopping list of only the gaps, and keeps it all in sync as you cook.",
    priority: 0.9,
    changefreq: "monthly",
    schema: () => [
      howToSchema("How to use Copantry", HOW_IT_WORKS_STEPS),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "How it works", path: "/how-it-works" },
      ]),
    ],
  },
  "/why-copantry": {
    title: titled("Why Copantry is different from other meal & pantry apps"),
    description:
      "How Copantry compares to calendar-first planners, recipe-savers and basic list apps — it knows what you have, tells you what to cook before it expires, and shops the gaps.",
    priority: 0.9,
    changefreq: "monthly",
    schema: () => [
      faqSchema(FAQS.whyCopantry),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Why Copantry", path: "/why-copantry" },
      ]),
    ],
  },
  "/features/ai-assistant-mcp": {
    title: titled("Plan meals from ChatGPT or Claude (MCP)"),
    description:
      "Copantry runs an MCP server, so AI assistants like Claude and ChatGPT-style tools can read your pantry, plan meals, import recipes and build shopping lists for you.",
    priority: 0.8,
    changefreq: "monthly",
    schema: () => [
      faqSchema(FAQS.aiAssistant),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Features", path: "/how-it-works" },
        { name: "AI assistant (MCP)", path: "/features/ai-assistant-mcp" },
      ]),
    ],
  },
  "/mcp": {
    title: titled("MCP server & API for AI assistants"),
    description:
      "Connect Copantry to any MCP-compatible AI assistant. Read your pantry, plan meals, import recipes and manage shopping lists over the Model Context Protocol.",
    priority: 0.6,
    changefreq: "monthly",
    schema: () => [faqSchema(FAQS.aiAssistant)],
  },
  "/blog": {
    title: titled("Blog — waste less, cook smarter, spend less"),
    description:
      "Practical guides to cooking what you have, planning meals around your fridge, and cutting food waste at home.",
    priority: 0.7,
    changefreq: "weekly",
    schema: () => [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  },
  "/learn": {
    title: titled("How long does food last? Shelf-life guides"),
    description:
      "Simple guides to how long everyday food keeps, why it spoils, how to store it so it lasts longer, and what to cook before it goes off.",
    priority: 0.7,
    changefreq: "monthly",
    schema: () => [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Learn", path: "/learn" },
      ]),
    ],
  },
  "/about": {
    title: titled("About — helping households waste less food"),
    description:
      "Copantry helps households cook what they have before it goes to waste, plan around their kitchen, and shop only for what they are missing.",
    priority: 0.5,
    changefreq: "yearly",
    schema: () => [
      organizationSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  },
  "/privacy": {
    title: titled("Privacy Policy"),
    description:
      "How Copantry collects, uses and protects your personal data, and the rights you have over it.",
    priority: 0.3,
    changefreq: "yearly",
  },
  "/terms": {
    title: titled("Terms of Service"),
    description: "The terms that govern your use of Copantry.",
    priority: 0.3,
    changefreq: "yearly",
  },
};

/* ── Generated routes ───────────────────────────────────────────────────── */
function featureEntry(slug, page, section, sectionPath) {
  const path = `${sectionPath}/${slug}`;
  const blocks = [
    faqSchema(FAQS[page.faqKey]),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      {
        name: section,
        path: sectionPath === "/features" ? "/how-it-works" : sectionPath,
      },
      { name: page.crumb ?? page.h1, path },
    ]),
  ];
  if (page.howTo)
    blocks.unshift(howToSchema(page.howTo.title, page.howTo.steps));
  return [
    path,
    {
      title: titled(page.h1),
      description: metaDescription(page.lede),
      priority: 0.8,
      changefreq: "monthly",
      schema: () => blocks,
    },
  ];
}

/* ── Localized routes (fr/it/es/pt) + hreflang ──────────────────────────── */

// The three logical paths that have localized, prefixed versions.
const LOCALIZED_SPECS = [
  { base: "/", content: HOME, kind: "home" },
  { base: "/how-it-works", content: HOW_IT_WORKS, kind: "how" },
  {
    base: "/features/reduce-food-waste",
    content: REDUCE_WASTE,
    kind: "pillar",
  },
];

/** hreflang alternates for a logical path: one per language + x-default (en). */
function alternatesFor(base) {
  const list = HREFLANG_LANGS.map((l) => ({
    hreflang: hreflangFor(l),
    href: `${SITE_URL}${localizePath(base, l)}`,
  }));
  list.push({ hreflang: "x-default", href: `${SITE_URL}${base}` });
  return list;
}

function localizedTitleDesc(spec, lng) {
  const c = pick(spec.content, lng);
  if (spec.kind === "home") {
    return {
      title: `${SITE_NAME} — ${c.h1a} ${c.h1b} ${c.h1accent}`
        .replace(/\s+/g, " ")
        .trim(),
      description: metaDescription(c.heroLede),
    };
  }
  return { title: titled(c.h1), description: metaDescription(c.lede) };
}

function localizedSchema(spec, lng, path) {
  const c = pick(spec.content, lng);
  const crumbsBase = [
    { name: (UI[lng] || UI.en).breadcrumbHome, path: localizePath("/", lng) },
  ];
  if (spec.kind === "home") {
    return [organizationSchema(), softwareApplicationSchema()];
  }
  if (spec.kind === "how") {
    return [
      howToSchema(
        c.h1,
        c.steps.map((s) => ({ name: s.title, text: s.desc })),
      ),
      breadcrumbSchema([...crumbsBase, { name: c.eyebrow, path }]),
    ];
  }
  // pillar (reduce food waste)
  return [
    howToSchema(c.howTo.title, c.howTo.steps),
    faqSchema(c.faqItems),
    breadcrumbSchema([
      ...crumbsBase,
      {
        name: (UI[lng] || UI.en).breadcrumbFeatures,
        path: localizePath("/how-it-works", lng),
      },
      { name: c.crumb, path },
    ]),
  ];
}

function attachLocalized(reg) {
  for (const spec of LOCALIZED_SPECS) {
    const alternates = alternatesFor(spec.base);
    // Tag the English entry with its alternates + lang.
    if (reg[spec.base]) {
      reg[spec.base].alternates = alternates;
      reg[spec.base].lang = "en";
    }
    // Add one entry per localized prefix.
    for (const lng of LOCALES) {
      const path = localizePath(spec.base, lng);
      const { title, description } = localizedTitleDesc(spec, lng);
      reg[path] = {
        title,
        description,
        lang: hreflangFor(lng),
        alternates,
        priority: spec.kind === "home" ? 0.9 : 0.7,
        changefreq: "monthly",
        schema: () => localizedSchema(spec, lng, path),
      };
    }
  }
}

function buildRegistry() {
  const reg = { ...STATIC };

  for (const [slug, page] of Object.entries(FEATURES)) {
    const [path, entry] = featureEntry(slug, page, "Features", "/features");
    reg[path] = entry;
  }
  for (const [slug, page] of Object.entries(USE_CASES)) {
    const [path, entry] = featureEntry(slug, page, "Use cases", "/use-cases");
    reg[path] = entry;
  }

  for (const post of POSTS) {
    const path = `/blog/${post.slug}`;
    reg[path] = {
      title: titled(post.title),
      description: post.description,
      ogType: "article",
      priority: 0.6,
      changefreq: "yearly",
      schema: () => [
        articleSchema({
          headline: post.title,
          description: post.description,
          path,
          datePublished: post.date,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.category, path },
        ]),
      ],
    };
  }

  for (const item of SHELF_LIFE) {
    const path = learnPath(item.slug);
    const name = item.name.toLowerCase();
    const q = `How long does ${name} last?`;
    const a = `${item.name} typically lasts about ${item.min} to ${item.max} days in the fridge. ${item.store}`;
    reg[path] = {
      title: titled(`How long does ${name} last?`),
      description: `${item.name} lasts about ${item.min}–${item.max} days in the fridge. ${item.store}`,
      priority: 0.5,
      changefreq: "yearly",
      schema: () => [
        faqSchema([{ q, a }]),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Learn", path: "/learn" },
          { name: q, path },
        ]),
      ],
    };
  }

  attachLocalized(reg);
  return reg;
}

export const SEO = buildRegistry();

/** All entries as an array of { path, ... } — used by prerender + sitemap. */
export function getSeoEntries() {
  return Object.entries(SEO).map(([path, entry]) => ({ path, ...entry }));
}

/** Lookup for the client <Seo> component (returns a sensible default). */
export function getSeo(pathname) {
  return (
    SEO[pathname] || {
      title: STATIC["/"].title,
      description: STATIC["/"].description,
    }
  );
}
