import { Link } from 'react-router-dom'
import { APP_URL, API_URL, COMPANY_LINE } from '../seo/constants'
import { UI, localizePath } from '../content/localized'
import { useLang } from '../i18n/useLang'
import Logo from './Logo'
import AppButtons from './AppButtons'

export default function Footer({ onContact }) {
  const year = new Date().getFullYear()
  const lng = useLang()
  const ui = UI[lng] || UI.en
  const f = ui.footer

  const COLUMNS = [
    {
      title: f.product,
      links: [
        { label: ui.nav.howItWorks, to: localizePath('/how-it-works', lng) },
        { label: 'Reduce food waste', to: localizePath('/features/reduce-food-waste', lng) },
        { label: 'Meal planning', to: '/features/meal-planning' },
        { label: 'Pantry tracking', to: '/features/pantry-tracking' },
        { label: 'Shopping lists', to: '/features/shopping-lists' },
        { label: 'Recipes', to: '/features/recipes' },
      ],
    },
    {
      title: f.audience,
      links: [
        { label: 'For families', to: '/use-cases/for-families' },
        { label: 'For couples', to: '/use-cases/for-couples' },
        { label: 'Budget cooking', to: '/use-cases/budget-cooking' },
        { label: 'Plan from ChatGPT or Claude', to: '/features/ai-assistant-mcp' },
      ],
    },
    {
      title: f.learn,
      links: [
        { label: ui.nav.blog, to: '/blog' },
        { label: 'How long does food last?', to: '/learn' },
        { label: ui.nav.why, to: '/why-copantry' },
        { label: 'About', to: '/about' },
      ],
    },
    {
      title: f.company,
      links: [
        { label: 'Privacy', to: '/privacy' },
        { label: 'Terms', to: '/terms' },
        { label: 'Contact', onClick: () => onContact?.('contact') },
        { label: 'Investors', onClick: () => onContact?.('investors') },
      ],
    },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" to={localizePath('/', lng)} />
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-[240px]">{f.tagline}</p>
            <AppButtons className="mt-4" note={false} />
          </div>

          {COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">{title}</p>
              <ul className="space-y-2">
                {links.map(({ label, to, onClick }) => (
                  <li key={label}>
                    {to ? (
                      <Link to={to} className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium">
                        {label}
                      </Link>
                    ) : (
                      <button onClick={onClick} className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium cursor-pointer text-left">
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5 text-center sm:text-left">
            <p className="text-xs text-gray-400">© {year} Copantry. {f.rights}</p>
            <p className="text-xs text-gray-400">{COMPANY_LINE}</p>
          </div>
          <p className="text-xs text-gray-400 flex items-center gap-2">
            <a href="/llms.txt" className="hover:text-orange-500 transition-colors">llms.txt</a>
            <span>·</span>
            <a href={API_URL} className="hover:text-orange-500 transition-colors">API</a>
            <span>·</span>
            <a href={APP_URL} className="hover:text-orange-500 transition-colors">App</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
