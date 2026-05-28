import { Link } from 'react-router-dom'
import Logo from './Logo'

const LINKS = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'AI & MCP', to: '/mcp' },
    { label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.copantry' },
  ],
  Developers: [
    { label: 'MCP Server Docs', to: '/mcp' },
    { label: 'API Reference', href: 'https://api.copantry.com/docs' },
    { label: 'llms.txt', href: '/llms.txt' },
    { label: 'robots.txt', href: '/robots.txt' },
  ],
  Company: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" />
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-[240px]">
              The recipe manager that speaks fluent AI. Collect, plan, and cook — with your AI assistant in the loop.
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
                {items.map(({ label, href, to }) => (
                  <li key={label}>
                    {to ? (
                      <Link to={to} className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium">
                        {label}
                      </Link>
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
            © {new Date().getFullYear()} CoPantry. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            <a href="https://www.copantry.com/mcp" className="hover:text-orange-500 transition-colors">MCP endpoint</a>
            {' · '}
            <a href="https://api.copantry.com" className="hover:text-orange-500 transition-colors">API</a>
            {' · '}
            <a href="https://app.copantry.com" className="hover:text-orange-500 transition-colors">App</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
