import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'

function openMail(user) {
  window.location.href = `mailto:${user}@copantry.com`
}

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const LINKS = {
    [t('footer.product')]: [
      { label: t('footer.links.features'), href: '/#features' },
      { label: t('footer.links.pricing'),  to: '/pricing' },
      { label: t('footer.links.ai_mcp'),   to: '/mcp' },
    ],
    [t('footer.developers')]: [
      { label: t('footer.links.mcp_docs'), to: '/mcp' },
    ],
    [t('footer.company')]: [
      { label: t('footer.links.privacy'),    to: '/privacy' },
      { label: t('footer.links.terms'),      to: '/terms' },
      { label: t('footer.links.investors'),  onClick: () => openMail('info') },
      { label: t('footer.links.contact'),    onClick: () => openMail('hello') },
    ],
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" />
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-[240px]">
              {t('footer.tagline')}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                MCP Server Live
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">{section}</p>
              <ul className="space-y-2">
                {items.map(({ label, href, to, onClick }) => (
                  <li key={label}>
                    {to ? (
                      <Link to={to} className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium">
                        {label}
                      </Link>
                    ) : onClick ? (
                      <button onClick={onClick} className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium cursor-pointer">
                        {label}
                      </button>
                    ) : (
                      <a href={href} className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium">
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            {t('footer.copyright', { year })}
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-2">
            <a href="/llms.txt"  className="hover:text-orange-500 transition-colors">llms.txt</a>
            <span>·</span>
            <a href="https://api.copantry.com" className="hover:text-orange-500 transition-colors">API</a>
            <span>·</span>
            <a href="https://app.copantry.com" className="hover:text-orange-500 transition-colors">App</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
