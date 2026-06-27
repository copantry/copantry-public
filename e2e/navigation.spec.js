// public/e2e/navigation.spec.js
//
// In-app (client-side) navigation between the key marketing routes, plus the
// catch-all redirect. Each route is asserted to render its own content.
import { test, expect } from "@playwright/test";
import { acceptCookies, openMenuIfMobile } from "./support/consent.js";

// `heading` is asserted only for the legal pages whose copy is stable English.
// Marketing pages just need to render a visible <h1> (their copy is localized
// and changes often, so coupling to exact text would make tests brittle).
const ROUTES = [
  { path: "/how-it-works" },
  { path: "/why-copantry" },
  { path: "/privacy", heading: /privacy policy/i },
  { path: "/terms", heading: /terms/i },
];

test.describe("Direct route loads", () => {
  for (const { path, heading } of ROUTES) {
    test(`${path} renders its content`, async ({ page }) => {
      await acceptCookies(page);
      await page.goto(path);

      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(page.locator("h1").first()).toBeVisible();
      if (heading) {
        await expect(
          page.getByRole("heading", { name: heading }).first(),
        ).toBeVisible();
      }
    });
  }
});

test("clicking a header nav link navigates client-side", async ({ page }) => {
  await acceptCookies(page);
  await page.goto("/");

  // On mobile the nav lives behind the hamburger; open it first.
  await openMenuIfMobile(page);
  await page
    .getByRole("link", { name: /how it works/i })
    .first()
    .click();
  await expect(page).toHaveURL(/\/how-it-works$/);
});

test("unknown route redirects to the homepage", async ({ page }) => {
  await acceptCookies(page);
  await page.goto("/this-page-does-not-exist");

  await expect(page).toHaveURL(/\/$/);
});
