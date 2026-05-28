import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const NAV_LINKS = [
    { label: t('nav.features'), href: '/#features' },
    { label: t('nav.pricing'), to: '/pricing' },
    { label: t('nav.developers'), to: '/mcp' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, to }) =>
            to ? (
              <Link
                key={label}
                to={to}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === to
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTAs + Language */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="https://app.copantry.com/login"
            className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t('nav.signin')}
          </a>
          <a
            href="https://app.copantry.com/signup"
            className="flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
          >
            {t('nav.signup')} <ExternalLink size={13} />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white py-3 px-4 space-y-1">
          {NAV_LINKS.map(({ label, href, to }) =>
            to ? (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {label}
              </a>
            )
          )}
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2 mt-2">
            <div className="flex justify-center py-1">
              <LanguageSwitcher />
            </div>
            <a
              href="https://app.copantry.com/login"
              className="block text-center px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              {t('nav.signin')}
            </a>
            <a
              href="https://app.copantry.com/signup"
              className="block text-center px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors"
            >
              {t('nav.signup')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
