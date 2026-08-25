// public/e2e/language.spec.js
//
// The language picker publishes fifteen locales, which is taller than a phone
// viewport, and it hangs off a `sticky` header — so if the list does not scroll
// itself the lower half is simply unreachable on mobile. These tests run on both
// the desktop and mobile projects, so the mobile one is the regression guard.
import { test, expect } from "@playwright/test";
import { acceptCookies, openMenuIfMobile } from "./support/consent.js";

async function openPicker(page) {
  await page.goto("/");
  await openMenuIfMobile(page);
  await page.getByRole("button", { name: "Change language" }).first().click();
  return page.getByRole("listbox", { name: "Language" });
}

// Pin an explicit language choice so the suggestion bar never covers the nav.
test.beforeEach(async ({ page }) => {
  await acceptCookies(page);
  await page.addInitScript(() => {
    window.localStorage.setItem("copantry_lang", "en");
  });
});

test("every language is reachable inside the viewport", async ({ page }) => {
  const list = await openPicker(page);
  await expect(list).toBeVisible();

  // The whole list fits within the viewport...
  const box = await list.boundingBox();
  const viewport = page.viewportSize();
  expect(box.y + box.height).toBeLessThanOrEqual(viewport.height);

  // ...and the last option can still be scrolled to and clicked.
  const options = list.getByRole("option");
  await expect(options).toHaveCount(15);
  const last = options.last();
  await last.scrollIntoViewIfNeeded();
  await expect(last).toBeInViewport();
});

test("languages are listed in alphabetical order", async ({ page }) => {
  const list = await openPicker(page);
  const labels = await list.getByRole("option").allInnerTexts();
  const trimmed = labels.map((l) => l.trim());

  expect(trimmed).toEqual([
    "Dansk",
    "Deutsch",
    "English (UK)",
    "English (US)",
    "Español",
    "Español (Latinoamérica)",
    "Français",
    "Italiano",
    "Nederlands",
    "Norsk bokmål",
    "Polski",
    "Português",
    "Português (Brasil)",
    "Suomi",
    "Svenska",
  ]);
});

test("picking a language off the bottom of the list navigates there", async ({
  page,
}) => {
  const list = await openPicker(page);
  const svenska = list.getByRole("option", { name: "Svenska" });
  await svenska.scrollIntoViewIfNeeded();
  await svenska.click();
  await expect(page).toHaveURL(/\/sv$/);
});

// The suggestion bar is the site's only language auto-detection. It deliberately
// suggests rather than redirects, so these assert an offer appears — not that the
// page changed language by itself.
test.describe("language suggestion", () => {
  test.use({ locale: "pt-BR" });

  // Overrides the file-level fixture: a stored choice is exactly what silences
  // the bar, so these tests must start from a reader who has never picked one.
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.removeItem("copantry_lang");
    });
  });

  test("offers the regional route to a pt-BR browser on the English root", async ({
    page,
  }) => {
    await acceptCookies(page);
    await page.goto("/");

    const offer = page.getByRole("button", { name: /Português \(Brasil\)/ });
    await expect(offer).toBeVisible();
    await offer.click();
    await expect(page).toHaveURL(/\/pt-br$/);
  });

  test("stays quiet once the reader dismisses it", async ({ page }) => {
    await acceptCookies(page);
    await page.goto("/");

    await page.getByRole("button", { name: /No thanks|Não, obrigado/ }).click();
    await page.reload();
    await expect(
      page.getByRole("button", { name: /Português \(Brasil\)/ }),
    ).toHaveCount(0);
  });
});
