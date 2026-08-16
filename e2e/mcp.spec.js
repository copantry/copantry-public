// public/e2e/mcp.spec.js
//
// The MCP page's job is to tell a non-developer they can connect Copantry
// themselves. Copantry is not in any assistant's built-in connector directory,
// so the self-service route has to be visible and has to come BEFORE the
// API-key instructions — the page previously read as "you need a key", which is
// exactly the impression this section exists to remove.
import { test, expect } from "@playwright/test";
import { acceptCookies } from "./support/consent.js";

const MCP_URL = "https://api.copantry.com/mcp";

test.describe("MCP page", () => {
  test("leads with the custom-connector route and states it is not an official one", async ({
    page,
  }) => {
    await acceptCookies(page);
    await page.goto("/features/ai-assistant-mcp");

    const connector = page.locator("#custom-connector");
    await expect(connector).toBeVisible();
    // The honest caveat, and the promise that follows from it.
    await expect(connector).toContainText(/not listed|directory/i);
    await expect(connector).toContainText(/no api key|no code/i);
    // The one thing a reader has to copy.
    await expect(connector).toContainText(MCP_URL);
  });

  test("keeps the API-key setup below it, not in front of it", async ({
    page,
  }) => {
    await acceptCookies(page);
    await page.goto("/features/ai-assistant-mcp");

    const setup = page.locator("#setup");
    const connectorTop = await page
      .locator("#custom-connector")
      .evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
    const keyStepTop = await setup
      .getByRole("heading", { name: /api key/i })
      .first()
      .evaluate((el) => el.getBoundingClientRect().top + window.scrollY);

    expect(keyStepTop).toBeGreaterThan(connectorTop);
  });

  test("both MCP routes serve the page", async ({ page }) => {
    await acceptCookies(page);
    await page.goto("/mcp");
    await expect(page.locator("#custom-connector")).toBeVisible();
  });
});
