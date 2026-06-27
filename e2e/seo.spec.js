// public/e2e/seo.spec.js
//
// The marketing site is SEO/GEO-critical. Seo.jsx keeps the <head> in sync on
// client-side navigation; these tests assert the essential tags are present and
// that the title actually changes between routes.
import { test, expect } from "@playwright/test";
import { acceptCookies } from "./support/consent.js";

test("homepage exposes core SEO head tags", async ({ page }) => {
  await acceptCookies(page);
  await page.goto("/");

  await expect(page).toHaveTitle(/.+/);

  const description = page.locator('meta[name="description"]');
  await expect(description).toHaveAttribute("content", /.+/);

  const ogTitle = page.locator('meta[property="og:title"]');
  await expect(ogTitle).toHaveAttribute("content", /.+/);

  // Canonical is upserted by Seo.jsx for every route.
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
});

test("title updates on client-side navigation", async ({ page }) => {
  await acceptCookies(page);
  await page.goto("/");
  const homeTitle = await page.title();

  await page.goto("/how-it-works");
  // Seo.jsx runs in a useEffect after the route change — wait for it to differ.
  await expect.poll(() => page.title()).not.toBe(homeTitle);
});
