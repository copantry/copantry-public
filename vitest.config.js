// public/vitest.config.js
//
// Keep Playwright specs out of Vitest while running the marketing SEO unit suite.
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: [
      "tests/**/*.{test,spec}.{js,jsx}",
      "src/seo/__tests__/**/*.{test,spec}.{js,jsx}",
    ],
    passWithNoTests: true,
  },
});
