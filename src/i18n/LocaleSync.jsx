import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import i18n from './index'
import { langFromPath } from './useLang'

/*
 * Keeps i18n.language and <html lang> aligned to the URL prefix. The page bodies
 * and chrome read language via useLang() (URL-based, synchronous); this exists so
 * the remaining react-i18next chrome (cookie banner) and the document language
 * follow the route too, overriding browser detection so the URL stays canonical.
 */
export default function LocaleSync() {
  const { pathname } = useLocation()
  const lng = langFromPath(pathname)

  useEffect(() => {
    if (i18n.language !== lng) i18n.changeLanguage(lng)
    if (typeof document !== 'undefined') document.documentElement.lang = lng
  }, [lng])

  return null
}
