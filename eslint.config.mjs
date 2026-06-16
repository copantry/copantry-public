import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  // 1. Base JavaScript rules
  js.configs.recommended,

  // 2. React and Custom Rules
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

      // Turn off the requirement to import React (React 17+)
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" }, // Automatically detect React version
    },
  },

  // 3. Prettier (Must be last to override conflicting formatting rules)
  eslintConfigPrettier,
];
