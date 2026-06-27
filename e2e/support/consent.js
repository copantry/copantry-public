// public/e2e/support/consent.js
//
// The CookieBanner overlays the page on first visit and can intercept clicks on
// nav links. Pre-accepting consent in localStorage before the page loads keeps
// navigation tests deterministic. Mirrors the key set by components/CookieBanner.jsx.
export async function acceptCookies(page) {
  await page.addInitScript(() => {
    window.localStorage.setItem("copantry_cookie_consent", "accepted");
  });
}

// Header nav links are hidden behind a hamburger on mobile. Open it first when
// the burger (aria-label="Menu") is showing so a nav link is clickable on any
// viewport.
export async function openMenuIfMobile(page) {
  const burger = page.getByRole("button", { name: "Menu" });
  if (await burger.isVisible().catch(() => false)) {
    await burger.click();
  }
}
