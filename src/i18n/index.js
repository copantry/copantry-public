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

// Without consent: ignore localStorage entirely — only use the browser locale.
// With consent: respect the user's explicit stored choice, then fall back to browser locale.
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
      caches: hasConsent ? ['localStorage'] : [],
      lookupLocalStorage: 'copantry_lang',
    },
  })

export default i18n
