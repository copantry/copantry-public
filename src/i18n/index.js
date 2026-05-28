import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import fr from './locales/fr.json'
import it from './locales/it.json'
import pt from './locales/pt.json'
import de from './locales/de.json'
import es from './locales/es.json'

const hasConsent = localStorage.getItem('copantry_cookie_consent') === 'accepted'

// Language detection strategy:
//   - Always detect from navigator (the browser's actual locale setting).
//   - With consent, also check localStorage FIRST so an explicit user choice
//     (set via LanguageSwitcher) takes precedence over the browser locale.
//   - Never auto-cache the detected language: caches:[] prevents i18next from
//     writing the navigator-detected language into localStorage. The only time
//     we write to localStorage is when the user actively picks a language in
//     LanguageSwitcher, so traveling to Italy and coming back never gets you stuck.
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, fr, it, pt, de, es },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'it', 'pt', 'de', 'es'],
    interpolation: { escapeValue: false },
    detection: {
      order: hasConsent ? ['localStorage', 'navigator'] : ['navigator'],
      caches: [],  // never auto-write; only LanguageSwitcher writes explicitly
      lookupLocalStorage: 'copantry_lang',
    },
  })

export default i18n
