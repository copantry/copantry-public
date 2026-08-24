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
// Labels and flag identities come from the canonical registry; components stay local to React.
const LANGUAGES = Object.entries(LOCALE_CONFIG).map(([code, config]) => ({
  code,
  Flag: FLAGS[config.flag],
  label: config.label,
}));

export default function LanguageSwitcher({ className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
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
        <div className="absolute right-0 top-full mt-1.5 w-44 bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/60 overflow-hidden z-50">
          {LANGUAGES.map(({ code, Flag, label }) => (
            <button
              key={code}
              onClick={() => select(code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left ${
                code === lng
                  ? "bg-orange-50 text-orange-700 font-bold"
                  : "text-gray-700 hover:bg-gray-50 font-medium"
              }`}
            >
              <Flag className="w-5 h-auto rounded-sm shrink-0" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
