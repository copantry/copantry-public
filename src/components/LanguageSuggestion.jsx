import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import GB from "country-flag-icons/react/3x2/GB";
import US from "country-flag-icons/react/3x2/US";
import FR from "country-flag-icons/react/3x2/FR";
import DE from "country-flag-icons/react/3x2/DE";
import ES from "country-flag-icons/react/3x2/ES";
import IT from "country-flag-icons/react/3x2/IT";
import PT from "country-flag-icons/react/3x2/PT";
import BR from "country-flag-icons/react/3x2/BR";
import NL from "country-flag-icons/react/3x2/NL";
import SE from "country-flag-icons/react/3x2/SE";
import PL from "country-flag-icons/react/3x2/PL";
import DK from "country-flag-icons/react/3x2/DK";
import FI from "country-flag-icons/react/3x2/FI";
import NO from "country-flag-icons/react/3x2/NO";
import i18n from "../i18n";
import { basePath, useLang } from "../i18n/useLang";
import {
  browserLanguages,
  matchBrowserLocale,
} from "../i18n/matchBrowserLocale";
import {
  LANGUAGE_HINT,
  LOCALES,
  isLocalizedPath,
  localeConfig,
  localizePath,
  pick,
} from "../content/localized";

const FLAGS = { GB, US, FR, DE, ES, IT, PT, BR, NL, SE, PL, DK, FI, NO };
const DISMISS_KEY = "copantry_lang_hint";

/**
 * Offers — never imposes — the reader's own language.
 *
 * Deliberately a suggestion rather than a redirect. Auto-redirecting on
 * `Accept-Language` hides the other localized versions from crawlers (which
 * fetch from a single region) and traps a reader who wants the English page,
 * which is why Google advises against it. The URL therefore stays the sole
 * authority for language (see i18n/useLang.js) and this bar just makes the
 * matching route one tap away.
 *
 * Renders nothing until after mount, so the static prerender and the first
 * client paint agree; `navigator` does not exist during the prerender anyway.
 */
export default function LanguageSuggestion() {
  const [suggested, setSuggested] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lng = useLang();
  const base = basePath(pathname);

  useEffect(() => {
    // An explicit pick in the language switcher, or a previous dismissal, ends it.
    let stored = null;
    let dismissed = false;
    try {
      stored = localStorage.getItem("copantry_lang");
      dismissed = localStorage.getItem(DISMISS_KEY) === "off";
    } catch {
      // Private-mode storage denial: behave as if nothing was ever stored.
    }
    if (stored || dismissed) return setSuggested(null);
    if (!isLocalizedPath(base)) return setSuggested(null);

    const match = matchBrowserLocale(browserLanguages());
    setSuggested(match === lng ? null : match);
  }, [base, lng]);

  if (!suggested) return null;

  const config = localeConfig(suggested);
  const Flag = FLAGS[config.flag];
  const copy = pick(LANGUAGE_HINT, suggested);

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, "off");
    } catch {
      // Nothing to persist to; hiding it for this page view is still correct.
    }
    setSuggested(null);
  }

  function accept() {
    try {
      localStorage.setItem("copantry_lang", suggested);
    } catch {
      // The navigation below is what actually changes the language.
    }
    i18n.changeLanguage(suggested);
    setSuggested(null);
    navigate(
      LOCALES.includes(suggested) ? localizePath(base, suggested) : base,
    );
  }

  return (
    <div className="border-b border-orange-100 bg-orange-50/80">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="text-sm text-gray-700 flex-1 min-w-[12rem]">
          {copy.prompt}
        </p>
        <button
          onClick={accept}
          lang={config.hreflang}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold transition-colors"
        >
          {Flag ? <Flag className="w-4 h-auto rounded-sm shrink-0" /> : null}
          {config.label}
        </button>
        <button
          onClick={dismiss}
          className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-sm font-semibold text-gray-500 hover:text-gray-800 hover:bg-orange-100/70 transition-colors"
        >
          <span className="hidden sm:inline">{copy.dismiss}</span>
          <X size={15} aria-hidden="true" />
          <span className="sr-only sm:hidden">{copy.dismiss}</span>
        </button>
      </div>
    </div>
  );
}
