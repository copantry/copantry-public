import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from './constants'
import { getSeo } from './seoConfig'

/*
 * Keeps document <head> in sync during client-side navigation. The prerendered
 * HTML already carries the correct per-route head + JSON-LD for crawlers; this
 * is purely so the title/description/canonical update as a user clicks around.
 */

function upsertMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, name] = selector.match(/\[(?:name|property)="(.+)"\]/) || []
    if (selector.includes('property=')) el.setAttribute('property', name)
    else el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description } = getSeo(pathname)
    const url = `${SITE_URL}${pathname}`
    if (title) {
      document.title = title
      upsertMeta('meta[property="og:title"]', 'content', title)
      upsertMeta('meta[name="twitter:title"]', 'content', title)
    }
    if (description) {
      upsertMeta('meta[name="description"]', 'content', description)
      upsertMeta('meta[property="og:description"]', 'content', description)
      upsertMeta('meta[name="twitter:description"]', 'content', description)
    }
    upsertMeta('meta[property="og:url"]', 'content', url)
    upsertCanonical(url)
  }, [pathname])

  return null
}
