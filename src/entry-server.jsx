/*
 * Server entry for static prerendering.
 *
 * `prerender.mjs` imports `render(url)` for each route, renders the React tree
 * to an HTML string with React Router's StaticRouter, and injects it into the
 * built index.html template. Effects (useEffect) don't run server-side, so any
 * window/localStorage access must be guarded (see i18n/index.js, CookieBanner).
 */

import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import i18n from "./i18n";
import { langFromPath } from "./i18n/useLang";
import App from "./App.jsx";

export function render(url) {
  // Drive language from the URL prefix so prerendered chrome matches the route.
  i18n.changeLanguage(langFromPath(url));
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html };
}
