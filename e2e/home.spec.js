// public/e2e/home.spec.js
//
// Smoke tests for the marketing homepage.
import { test, expect } from "@playwright/test";
import { acceptCookies } from "./support/consent.js";

test.describe("Homepage", () => {
  test("loads with a non-empty title and visible header", async ({ page }) => {
    await acceptCookies(page);
    await page.goto("/");

    await expect(page).toHaveTitle(/.+/);
    await expect(page.getByRole("banner")).toBeVisible(); // <header>
    // A CTA into the app exists somewhere on the page (the header CTA is hidden
    // behind the hamburger on mobile, so assert presence in the DOM, not
    // visibility — keeps this viewport-agnostic).
    await expect(
      page.locator('a[href*="app.copantry.com"]').first(),
    ).toBeAttached();
  });

  test("renders substantive body content (not a blank shell)", async ({
    page,
  }) => {
    await acceptCookies(page);
    await page.goto("/");

    await expect(page.getByRole("main")).not.toBeEmpty();
    await expect(page.locator("h1").first()).toBeVisible();
  });
});
