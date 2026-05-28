import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Cookie } from 'lucide-react'

export default function CookieBanner() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(
    () => localStorage.getItem('copantry_cookie_consent') === null
  )

  if (!visible) return null

  function accept() {
    localStorage.setItem('copantry_cookie_consent', 'accepted')
    // Now that consent is given, persist the current language choice
    const lang = window.__i18n_instance?.language
    if (lang) localStorage.setItem('copantry_lang', lang)
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('copantry_cookie_consent', 'declined')
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 pointer-events-auto">
        <Cookie size={20} className="text-orange-400 shrink-0" />
        <p className="text-sm text-gray-300 flex-1 leading-snug">
          {t('cookie.message')}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-3 py-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          >
            {t('cookie.decline')}
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 text-xs font-bold bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors"
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
