import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import fr from './locales/fr.json'
import it from './locales/it.json'
import pt from './locales/pt.json'
import de from './locales/de.json'
import es from './locales/es.json'

// Language detection strategy:
//   - Always check localStorage first so an explicit user choice (set via
//     LanguageSwitcher) takes precedence over the browser locale.
//   - Never auto-cache the detected language: caches:[] prevents i18next from
//     writing the navigator-detected language into localStorage. The only time
//     we write to localStorage is when the user actively picks a language in
//     LanguageSwitcher, so traveling to Italy and coming back never gets you stuck.
//   - Language preference is a functional cookie (not tracking), so no consent
//     gate is needed — we always read/write it.
// LanguageDetector touches window/localStorage, which don't exist during the
// static prerender (Node). Only register it in the browser; on the server we
// fall back to English — which is exactly the language we prerender in.
if (typeof window !== 'undefined') {
  i18n.use(LanguageDetector)
}

i18n
  .use(initReactI18next)
  .init({
    resources: { en, fr, it, pt, de, es },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'it', 'pt', 'de', 'es'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: [],  // never auto-write; only LanguageSwitcher writes explicitly
      lookupLocalStorage: 'copantry_lang',
    },
  })

export default i18n
