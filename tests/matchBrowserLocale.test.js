import { describe, expect, it } from "vitest";

import {
  localeForTag,
  matchBrowserLocale,
} from "../src/i18n/matchBrowserLocale.js";
import { LOCALE_CONFIG } from "../src/content/localized.js";

describe("browser locale matching", () => {
  it("resolves regional subtags to their published regional route", () => {
    // The question this module exists to answer: pt-BR must NOT land on European pt.
    expect(localeForTag("pt-BR")).toBe("pt-br");
    expect(localeForTag("en-US")).toBe("en-us");
  });

  it("falls back to the base-language route for unpublished regions", () => {
    expect(localeForTag("pt-PT")).toBe("pt");
    expect(localeForTag("de-AT")).toBe("de");
    expect(localeForTag("de-CH")).toBe("de");
    expect(localeForTag("en-GB")).toBe("en");
    expect(localeForTag("en-AU")).toBe("en");
    expect(localeForTag("fr-CA")).toBe("fr");
  });

  it("maps Latin American Spanish regions onto es-419", () => {
    // `419` is a UN M.49 region no browser ever reports, so this mapping is the
    // only route by which detection can reach that page.
    for (const tag of ["es-MX", "es-AR", "es-CO", "es-CL", "es-PE"])
      expect(localeForTag(tag), tag).toBe("es-419");
    expect(localeForTag("es-ES")).toBe("es");
    expect(localeForTag("es")).toBe("es");
  });

  it("resolves Norwegian written forms onto the published `no` route", () => {
    expect(localeForTag("nb-NO")).toBe("no");
    expect(localeForTag("nn-NO")).toBe("no");
    expect(localeForTag("no")).toBe("no");
  });

  it("ignores script subtags when finding the region", () => {
    expect(localeForTag("pt-Latn-BR")).toBe("pt-br");
    expect(localeForTag("zh-Hant-TW")).toBe(null);
  });

  it("is case- and separator-insensitive", () => {
    expect(localeForTag("PT_br")).toBe("pt-br");
    expect(localeForTag("  fr-FR ")).toBe("fr");
  });

  it("returns null for languages the site does not publish", () => {
    expect(localeForTag("ja")).toBe(null);
    expect(localeForTag("")).toBe(null);
    expect(localeForTag(undefined)).toBe(null);
  });

  it("walks the preference list in order and defaults to the English root", () => {
    expect(matchBrowserLocale(["ja", "ko", "pt-BR", "en"])).toBe("pt-br");
    expect(matchBrowserLocale(["ja-JP"])).toBe("en");
    expect(matchBrowserLocale([])).toBe("en");
    expect(matchBrowserLocale(undefined)).toBe("en");
    expect(matchBrowserLocale("es-MX")).toBe("es-419");
  });

  it("only ever returns codes the marketing site actually publishes", () => {
    const tags = [
      "pt-BR",
      "es-MX",
      "en-US",
      "de-AT",
      "nb-NO",
      "fi-FI",
      "pl-PL",
      "da-DK",
      "sv-SE",
      "nl-BE",
      "it-CH",
      "fr-BE",
      "ja-JP",
    ];
    for (const tag of tags)
      expect(Object.keys(LOCALE_CONFIG)).toContain(matchBrowserLocale([tag]));
  });
});
