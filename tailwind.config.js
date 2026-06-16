import { twExtend } from "./design/tailwind.preset.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Design tokens are defined in shared/tokens.css (imported in src/index.css).
  // twExtend registers semantic Tailwind class names (bg-brand-500, etc.) that
  // reference the CSS variables registered there via @theme.
  theme: {
    extend: twExtend,
  },
  plugins: [],
};
