import { beforeEach, describe, expect, it, vi } from "vitest";

import { regionalMarketingPayload, trackEvent } from "../src/lib/analytics.js";

describe("regional marketing analytics", () => {
  beforeEach(() => {
    const values = new Map([["copantry_cookie_consent", "accepted"]]);
    globalThis.localStorage = {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    };
    globalThis.window = { dataLayer: [], gtag: vi.fn() };
  });

  it("derives a privacy-safe payload from the semantic route locale", () => {
    expect(regionalMarketingPayload("pt-br", "cta_band")).toEqual({
      uiLocale: "pt-BR",
      baseLanguage: "pt",
      country: "BR",
      surface: "cta_band",
      source: "marketing_route",
    });
  });

  it("does not infer a country from the Latin America macroregion", () => {
    expect(regionalMarketingPayload("es-419", "hero").country).toBeNull();
  });

  it("emits the regional CTA event only through consent-gated analytics", () => {
    trackEvent(
      "regional_marketing_cta_clicked",
      regionalMarketingPayload("en-us", "cta_band"),
    );

    expect(globalThis.window.gtag).toHaveBeenCalledWith(
      "event",
      "regional_marketing_cta_clicked",
      expect.objectContaining({
        uiLocale: "en-US",
        baseLanguage: "en",
        country: "US",
      }),
    );
    expect(JSON.stringify(globalThis.window.gtag.mock.calls)).not.toMatch(
      /email|recipe|household|feedbackText/i,
    );
  });
});
