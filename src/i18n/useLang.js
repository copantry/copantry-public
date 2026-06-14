import { useLocation } from 'react-router-dom'
import { LOCALES } from '../content/localized'

/**
 * Language is authoritative from the URL prefix: /fr/… → 'fr', otherwise 'en'.
 * Deterministic and synchronous (no dependency on i18n detection timing), so
 * prerender and client render the same content.
 */
export function langFromPath(pathname = '/') {
  const seg = pathname.split('/')[1]
  return LOCALES.includes(seg) ? seg : 'en'
}

/** The logical (unprefixed) path, e.g. /fr/how-it-works → /how-it-works. */
export function basePath(pathname = '/') {
  const seg = pathname.split('/')[1]
  if (!LOCALES.includes(seg)) return pathname
  const rest = pathname.slice(seg.length + 1)
  return rest === '' ? '/' : rest
}

export function useLang() {
  return langFromPath(useLocation().pathname)
}
