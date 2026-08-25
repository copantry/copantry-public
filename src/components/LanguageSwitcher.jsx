import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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
import { useLang, basePath } from "../i18n/useLang";
import {
  LOCALE_CONFIG,
  LOCALES,
  isLocalizedPath,
  localizePath,
} from "../content/localized";

const FLAGS = { GB, US, FR, DE, ES, IT, PT, BR, NL, SE, PL, DK, FI, NO };
/*
 * Labels and flag identities come from the canonical registry; components stay local to React.
 * The registry's own key order is meaningful elsewhere (hreflang alternates, sitemap emission),
 * so the alphabetical ordering readers expect in the picker is applied here rather than by
 * reordering LOCALE_CONFIG. An explicit collator locale keeps prerender and hydration identical.
 */
const COLLATOR = new Intl.Collator("en", { sensitivity: "base" });
const LANGUAGES = Object.entries(LOCALE_CONFIG)
  .map(([code, config]) => ({
    code,
    Flag: FLAGS[config.flag],
    label: config.label,
  }))
  .sort((a, b) => COLLATOR.compare(a.label, b.label));

export default function LanguageSwitcher({ className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lng = useLang();

  const current = LANGUAGES.find((l) => l.code === lng) ?? LANGUAGES[0];

  function select(code) {
    setOpen(false);
    const base = basePath(pathname);
    // Go to the localized URL for this page if one exists; otherwise enter the
    // localized site at its home (English stays unprefixed).
    let target = base;
    if (LOCALES.includes(code))
      target = isLocalizedPath(base) ? localizePath(base, code) : `/${code}`;
    i18n.changeLanguage(code);
    localStorage.setItem("copantry_lang", code);
    navigate(target);
  }

  /*
   * The list is taller than a phone viewport, so it scrolls. Bring the active
   * language into view on open — otherwise a reader whose language sorts late
   * (Svenska) opens the picker onto an unrelated part of the alphabet.
   */
  useEffect(() => {
    if (!open || !listRef.current) return;
    const active = listRef.current.querySelector('[data-active="true"]');
    if (active) active.scrollIntoView({ block: "nearest" });
  }, [open]);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
        aria-label="Change language"
      >
        <current.Flag className="w-5 h-auto rounded-sm shrink-0" />
        <span className="hidden sm:inline text-xs">
          {current.code.toUpperCase()}
        </span>
        <ChevronDown
          size={13}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        /*
         * Capped height + own scroll: with fifteen published locales the full
         * list is taller than a phone viewport, and the picker hangs off a
         * `sticky` header, so the page scroll can never reach its lower half.
         * `overscroll-contain` keeps that scroll from chaining to the page.
         */
        <div
          ref={listRef}
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-1.5 w-44 max-h-[min(60vh,18rem)] overflow-y-auto overscroll-contain bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/60 z-50"
        >
          {LANGUAGES.map(({ code, Flag, label }) => (
            <button
              key={code}
              role="option"
              aria-selected={code === lng}
              data-active={code === lng}
              onClick={() => select(code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left ${
                code === lng
                  ? "bg-orange-50 text-orange-700 font-bold"
                  : "text-gray-700 hover:bg-gray-50 font-medium"
              }`}
            >
              <Flag className="w-5 h-auto rounded-sm shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
