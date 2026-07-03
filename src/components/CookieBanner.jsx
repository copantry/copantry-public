import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Cookie } from "lucide-react";
import { revokeAnalyticsConsent } from "../lib/analytics";

export default function CookieBanner() {
  const { t } = useTranslation();
  // Render nothing during the static prerender (no localStorage on the server),
  // then reveal on the client if the visitor hasn't made a choice yet.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("copantry_cookie_consent") === null)
      setVisible(true);
  }, []);

  if (!visible) return null;

  function accept() {
    localStorage.setItem("copantry_cookie_consent", "accepted");
    // Do NOT save the auto-detected language here — the user didn't explicitly
    // choose it. Language is only written to localStorage when the user actively
    // picks one in LanguageSwitcher. This prevents traveling to Italy and coming
    // back to find the site stuck in Italian.
    // Tell Analytics it may now load Google Analytics (gtag.js).
    window.dispatchEvent(new Event("copantry:consent"));
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("copantry_cookie_consent", "declined");
    revokeAnalyticsConsent();
    setVisible(false);
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 pointer-events-auto">
        <Cookie size={20} className="text-orange-400 shrink-0" />
        <p className="text-sm text-gray-300 flex-1 leading-snug">
          {t("cookie.message")}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-3 py-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          >
            {t("cookie.decline")}
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 text-xs font-bold bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
