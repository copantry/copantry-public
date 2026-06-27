// public/vitest.config.js
//
// The marketing site has no unit tests yet — its browser coverage lives in the
// Playwright suite under e2e/ (run via `npm run test:e2e`). This config scopes
// Vitest discovery to a tests/ dir so `npm test` never tries to execute the
// Playwright specs, and passes cleanly when there are no unit tests.
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["tests/**/*.{test,spec}.{js,jsx}"],
    passWithNoTests: true,
  },
});
