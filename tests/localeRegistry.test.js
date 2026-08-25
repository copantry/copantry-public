import { describe, expect, it } from "vitest";

import {
  LANGUAGE_HINT,
  LOCALE_CONFIG,
  LOCALES,
  baseLocaleOf,
  hreflangFor,
  localeConfig,
  pick,
} from "../src/content/localized.js";

describe("marketing locale registry", () => {
  it("owns every required field for every published locale", () => {
    for (const [code, config] of Object.entries(LOCALE_CONFIG)) {
      expect(config, code).toEqual(
        expect.objectContaining({
          baseLanguage: expect.any(String),
          label: expect.any(String),
          hreflang: expect.any(String),
          rescueAmount: expect.any(String),
        }),
      );
    }
    expect(LOCALES).toEqual(
      Object.keys(LOCALE_CONFIG).filter((code) => code !== "en"),
    );
  });

  it("advertises British and American English precisely without prefixing root", () => {
    expect(localeConfig("en")).toMatchObject({
      label: "English (UK)",
      hreflang: "en-GB",
      baseLanguage: "en",
    });
    expect(localeConfig("en-us")).toMatchObject({
      label: "English (US)",
      hreflang: "en-US",
      baseLanguage: "en",
    });
  });

  it("derives fallback and BCP-47 metadata from the same entry", () => {
    expect(baseLocaleOf("pt-br")).toBe("pt");
    expect(hreflangFor("pt-br")).toBe("pt-BR");
    expect(localeConfig("pt-br").rescueAmount).toBe("9 €");
  });

  it("offers the language-suggestion copy in every published locale", () => {
    // The bar speaks the SUGGESTED language, so an English fallback here would
    // show an English offer to exactly the reader who cannot read it.
    for (const code of Object.keys(LOCALE_CONFIG)) {
      const copy = pick(LANGUAGE_HINT, code);
      expect(copy, code).toEqual(
        expect.objectContaining({
          prompt: expect.any(String),
          dismiss: expect.any(String),
        }),
      );
      // Regional routes resolve through baseLanguage rather than to English.
      expect(copy, code).toBe(LANGUAGE_HINT[baseLocaleOf(code)]);
    }
  });
});
