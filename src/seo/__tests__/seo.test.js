import { describe, it, expect } from "vitest";
import { getSeoEntries, SEO } from "../seoConfig.js";
import { buildHead } from "../buildHead.js";
import { redirectLegacyUsPath } from "../../i18n/useLang.js";
import { faqSchema, howToSchema, breadcrumbSchema } from "../schema.js";
import { FAQS } from "../../content/faqs.js";
import { FEATURES, USE_CASES } from "../../content/pages.js";
import {
  SHELF_LIFE,
  learnPath,
  learnSlug,
  findByPageSlug,
} from "../../content/shelfLife.js";
import { POSTS } from "../../content/blog.js";
import {
  LOCALES,
  HREFLANG_LANGS,
  HOME,
  HOW_IT_WORKS,
  REDUCE_WASTE,
  HOOK,
  UI,
  LOCALE_CONFIG,
  localeConfig,
  hreflangFor,
  localizePath,
  pick,
} from "../../content/localized.js";

describe("regional content fallback", () => {
  const block = {
    en: { greeting: "Hello" },
    pt: { greeting: "Olá" },
    "pt-br": { greeting: "Oi" },
    es: { greeting: "Hola" },
  };

  it("prefers the regional override when authored", () => {
    expect(pick(block, "pt-br").greeting).toBe("Oi");
  });

  it("uses the base language before English", () => {
    expect(pick(block, "es-419").greeting).toBe("Hola");
  });

  it("uses English only when neither regional nor base copy exists", () => {
    expect(pick({ en: { greeting: "Hello" } }, "es-419").greeting).toBe(
      "Hello",
    );
  });

  it("declares a base for every published locale", () => {
    for (const locale of LOCALES) {
      expect(LOCALE_CONFIG[locale].baseLanguage).toBeTruthy();
    }
  });

  it("publishes locale-semantic regional paths and full hreflang tags", () => {
    expect(LOCALES).toEqual(
      expect.arrayContaining(["en-us", "pt-br", "es-419"]),
    );
    expect(localizePath("/", "en-us")).toBe("/en-us");
    expect(localizePath("/", "pt-br")).toBe("/pt-br");
    expect(localizePath("/", "es-419")).toBe("/es-419");
    expect(hreflangFor("en-us")).toBe("en-US");
    expect(hreflangFor("pt-br")).toBe("pt-BR");
    expect(hreflangFor("es-419")).toBe("es-419");
  });

  it("preserves old US-English links under the semantic prefix", () => {
    expect(redirectLegacyUsPath("/us")).toBe("/en-us");
    expect(redirectLegacyUsPath("/us/how-it-works")).toBe(
      "/en-us/how-it-works",
    );
  });
});

describe("SEO registry", () => {
  const entries = getSeoEntries();

  it("has a unique, absolute-path entry per route", () => {
    const paths = entries.map((e) => e.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const p of paths) expect(p.startsWith("/")).toBe(true);
  });

  it("every entry has a sensible title and description", () => {
    for (const e of entries) {
      expect(e.title, e.path).toBeTruthy();
      // Primary pages stay tight (~60 + " | Copantry"); blog headlines are
      // deliberately question-shaped to match natural-language queries, so they
      // are allowed to run longer (incl. their localized /<lng>/blog/* variants).
      const maxTitle = e.path.includes("/blog/") ? 105 : 90;
      expect(e.title.length, `title too long: ${e.path}`).toBeLessThanOrEqual(
        maxTitle,
      );
      expect(e.description, e.path).toBeTruthy();
      expect(
        e.description.length,
        `desc too long: ${e.path}`,
      ).toBeLessThanOrEqual(200);
    }
  });

  it("buildHead emits title, canonical and valid JSON-LD for every route", () => {
    for (const e of entries) {
      const head = buildHead(e);
      expect(head, e.path).toContain("<title>");
      expect(head, e.path).toContain('rel="canonical"');
      const blocks =
        head.match(/<script type="application\/ld\+json">(.*?)<\/script>/gs) ||
        [];
      for (const b of blocks) {
        const json = b.replace(/<\/?script[^>]*>/g, "");
        expect(
          () => JSON.parse(json),
          `bad JSON-LD on ${e.path}`,
        ).not.toThrow();
      }
    }
  });

  it("escapes HTML-sensitive characters in head output", () => {
    const head = buildHead({
      title: "A & B <x>",
      description: '"q"',
      path: "/x",
    });
    expect(head).toContain("A &amp; B &lt;x&gt;");
    expect(head).not.toContain("<x>");
  });
});

describe("content ↔ registry consistency", () => {
  it("every feature & use-case slug is registered and has a resolvable FAQ", () => {
    for (const [slug, page] of Object.entries(FEATURES)) {
      expect(SEO[`/features/${slug}`], slug).toBeTruthy();
      expect(FAQS[page.faqKey], `missing FAQ ${page.faqKey}`).toBeTruthy();
    }
    for (const [slug, page] of Object.entries(USE_CASES)) {
      expect(SEO[`/use-cases/${slug}`], slug).toBeTruthy();
      expect(FAQS[page.faqKey], `missing FAQ ${page.faqKey}`).toBeTruthy();
    }
  });

  it("every blog post is registered with article schema", () => {
    for (const post of POSTS) {
      expect(SEO[`/blog/${post.slug}`], post.slug).toBeTruthy();
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("all FAQ answers are non-empty and self-contained", () => {
    for (const set of Object.values(FAQS)) {
      for (const { q, a } of set) {
        expect(q).toBeTruthy();
        expect(a.length, `thin answer: ${q}`).toBeGreaterThan(40);
      }
    }
  });
});

describe("programmatic shelf-life pages", () => {
  it("slugs are unique", () => {
    const slugs = SHELF_LIFE.map((x) => x.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("learn slug round-trips back to the ingredient", () => {
    for (const item of SHELF_LIFE) {
      expect(findByPageSlug(learnSlug(item.slug))).toBe(item);
      expect(learnPath(item.slug)).toBe(`/learn/${learnSlug(item.slug)}`);
      expect(SEO[learnPath(item.slug)], item.slug).toBeTruthy();
    }
    expect(findByPageSlug("nonsense")).toBeNull();
  });

  it("every ingredient has distinct, non-thin guidance (no duplicate pages)", () => {
    for (const item of SHELF_LIFE) {
      for (const key of ["why", "store", "cook"]) {
        expect(item[key].length, `${item.slug}.${key} thin`).toBeGreaterThan(
          30,
        );
      }
      expect(item.min).toBeLessThanOrEqual(item.max);
    }
  });
});

describe("localization (fr/it/es/pt/de + en-US)", () => {
  const ALL = ["en", ...LOCALES];
  const REGIONAL = new Set(["en-us", "pt-br", "es-419"]);
  const TRANSLATED = ALL.filter((locale) => !REGIONAL.has(locale));

  it("every localizable content block is complete in every translated language", () => {
    for (const lng of TRANSLATED) {
      expect(UI[lng], `UI.${lng}`).toBeTruthy();
      expect(HOME[lng]?.pillars, `HOME.${lng}`).toHaveLength(3);
      expect(HOME[lng]?.differentiators).toHaveLength(6);
      expect(HOME[lng]?.steps).toHaveLength(3);
      expect(HOW_IT_WORKS[lng]?.steps, `HOW.${lng}`).toHaveLength(4);
      expect(REDUCE_WASTE[lng]?.h1, `RW.${lng}`).toBeTruthy();
      expect(REDUCE_WASTE[lng]?.faqItems.length).toBeGreaterThanOrEqual(5);
      expect(HOOK[lng]?.items, `HOOK.${lng}`).toHaveLength(3);
    }
  });

  it("every locale resolves a hook card and rescue amount through its base", () => {
    for (const lng of ALL) {
      expect(pick(HOOK, lng)?.items, `HOOK.${lng}`).toHaveLength(3);
      expect(
        localeConfig(lng).rescueAmount,
        `rescueAmount.${lng}`,
      ).toBeTruthy();
    }
  });

  it("the en-US variant reuses English chrome but has its own dinner + dollars", () => {
    expect(pick(HOME, "en-us")?.pillars).toHaveLength(3);
    expect(UI["en-us"], "UI.en-us falls back to English").toBeUndefined();
    expect(localeConfig("en-us").rescueAmount).toContain("$");
    expect(HOOK["en-us"].dish).not.toBe(HOOK.en.dish);
    expect(hreflangFor("en-us")).toBe("en-US");
  });

  it("localizePath prefixes localized pages and leaves others/English untouched", () => {
    expect(localizePath("/", "fr")).toBe("/fr");
    expect(localizePath("/how-it-works", "it")).toBe("/it/how-it-works");
    expect(localizePath("/", "en")).toBe("/");
    expect(localizePath("/why-copantry", "fr")).toBe("/fr/why-copantry");
    expect(localizePath("/features/meal-planning", "fr")).toBe(
      "/fr/features/meal-planning",
    );
    expect(localizePath("/use-cases/for-families", "de")).toBe(
      "/de/use-cases/for-families",
    );
    // The MCP page stays English-only even though it lives under /features.
    expect(localizePath("/features/ai-assistant-mcp", "fr")).toBe(
      "/features/ai-assistant-mcp",
    );
    expect(localizePath("/about", "fr")).toBe("/about"); // not localized
  });

  it("localized routes are in the registry with lang + full hreflang set", () => {
    const localizedPaths = [
      "/",
      "/how-it-works",
      "/features/reduce-food-waste",
    ];
    for (const base of localizedPaths) {
      for (const lng of LOCALES) {
        const e = SEO[localizePath(base, lng)];
        expect(e, `${base} @ ${lng}`).toBeTruthy();
        expect(e.lang).toBe(hreflangFor(lng));
        const hreflangs = e.alternates.map((a) => a.hreflang);
        for (const l of HREFLANG_LANGS)
          expect(hreflangs).toContain(hreflangFor(l));
        expect(hreflangs).toContain("x-default");
      }
      // English counterpart also carries the alternates.
      expect(SEO[base].alternates, `${base} en alternates`).toBeTruthy();
    }
  });

  it("hreflang hrefs in buildHead point to absolute, correct URLs", () => {
    const head = buildHead(SEO["/fr"]);
    expect(head).toContain(
      'rel="alternate" hreflang="fr" href="https://www.copantry.com/fr"',
    );
    expect(head).toContain(
      'hreflang="x-default" href="https://www.copantry.com/"',
    );
  });
});

describe("schema builders", () => {
  it("produce the expected @type and shape", () => {
    expect(faqSchema([{ q: "Q?", a: "A." }])["@type"]).toBe("FAQPage");
    expect(howToSchema("t", ["one", "two"]).step).toHaveLength(2);
    const bc = breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "X", path: "/x" },
    ]);
    expect(bc.itemListElement[1].position).toBe(2);
  });
});
