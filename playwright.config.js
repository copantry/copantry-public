// public/playwright.config.js
//
// End-to-end browser tests for the Copantry marketing site (www.copantry.com).
//
// This is a static, no-auth, prerendered React site, so the tests run fully
// end-to-end against the real dev server — no backend or mocking required. They
// cover page loads, in-app navigation, and the SEO <head> that Seo.jsx keeps in
// sync on client-side route changes.
//
// Runs on a pinned port (5174) so it never collides with the frontend app dev
// server on 5173 (matches the convention in the repo's root CLAUDE.md).
import { defineConfig, devices } from "@playwright/test";

const PORT = 5174;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["html", { open: "never" }], ["list"]] : "list",
  timeout: 30_000,
  expect: { timeout: 10_000 },

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  // Every test runs on both a desktop and a mobile viewport. Both devices are
  // Chromium-based (honours the Chromium-only choice) so we still get responsive
  // coverage of the mobile layout / hamburger nav without pulling in WebKit.
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      use: { ...devices["Pixel 7"] },
    },
  ],

  webServer: {
    command: `npm run dev -- --port ${PORT} --strictPort`,
    url: BASE_URL,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
