import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  // 1. Ignore build artifacts
  { ignores: ["dist/**", "dist-ssr/**"] },

  // 2. Base JavaScript rules
  js.configs.recommended,

  // 3. React and Custom Rules
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // Allows window, document, fetch, etc.
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // Pull in recommended rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Marketing/legal pages have prose with apostrophes and quotes — not a bug
      "react/no-unescaped-entities": "off",
      // CookieBanner reads localStorage on mount to set visibility — intentional
      "react-hooks/set-state-in-effect": "off",
    },
    settings: {
      react: { version: "detect" }, // Automatically detect React version
    },
  },

  // 4. Node-context files. These run under Node, not in the browser, so they
  //    legitimately use `process` (env vars, CI detection) — which the browser
  //    globals above don't define, so `no-undef` flagged every reference.
  {
    files: [
      "*.config.{js,mjs,cjs}",
      "prerender.mjs",
      "e2e/**/*.{js,mjs}",
      "scripts/**/*.{js,mjs,cjs}",
    ],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  // 5. Prettier (Must be last to override conflicting formatting rules)
  eslintConfigPrettier,
];
