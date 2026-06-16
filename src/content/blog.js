/*
 * Blog post metadata — pure data only (NO JSX imports), because seoConfig.js
 * imports this and is in turn imported by the Node prerender script, which can't
 * compile JSX. Post bodies live as components in src/pages/blog/* and are mapped
 * to slugs in App.jsx.
 *
 * Editorial pillars per the SEO/GEO plan §8.1, written answer-first with sourced
 * stats (WRAP) and internal links up to feature pillars + across to /why-copantry.
 */

export const POSTS = [
  {
    slug: "what-can-i-cook-with-what-i-have",
    title: "What can I cook with what’s in my fridge right now?",
    description:
      "A simple method for turning whatever is already in your fridge into a real dinner tonight — no shopping trip required.",
    emoji: "🍳",
    category: "Cooking",
    date: "2026-06-02",
    readMins: 5,
  },
  {
    slug: "food-waste-statistics-uk",
    title:
      "How much food does the average UK household waste — and the 5 things we bin most",
    description:
      "What the data from WRAP actually says about household food waste in the UK, the foods we throw away most, and what it costs you.",
    emoji: "📊",
    category: "Food waste",
    date: "2026-05-20",
    readMins: 6,
  },
  {
    slug: "use-it-up-method",
    title:
      "The use-it-up method: plan meals around your fridge, not a recipe book",
    description:
      "Most meal planning starts with a recipe and sends you shopping. Flip it: start with what you already have. Here is the method.",
    emoji: "🧊",
    category: "Meal planning",
    date: "2026-05-06",
    readMins: 5,
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug) ?? null;
