import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, BookOpen, Refrigerator, Calendar, ShoppingCart,
  Sparkles, Camera, Globe, Zap, ChevronRight, Check, Star,
  Shield, Clock, Users
} from 'lucide-react'

/* ─── Data ──────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: Sparkles,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    title: 'AI Recipe Import',
    desc: 'Paste a URL, take a photo, or copy raw text — AI extracts every ingredient and step in seconds. Supports YouTube, Instagram, TikTok, and 50,000+ recipe sites.',
  },
  {
    icon: Refrigerator,
    color: 'text-green-600',
    bg: 'bg-green-50',
    title: 'Smart Pantry',
    desc: 'Track what you have with expiry dates. Get alerts before food goes bad. Cook from what you already own with zero-waste recipe suggestions.',
  },
  {
    icon: Calendar,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    title: 'Meal Calendar',
    desc: 'Plan breakfast, lunch, and dinner for the whole household. Confirm meals to auto-deduct ingredients from your pantry — no manual updates.',
  },
  {
    icon: ShoppingCart,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: 'Shopping Lists',
    desc: 'Generate shopping lists from your meal plan in one tap. Share with family members in the same household in real time.',
  },
  {
    icon: Globe,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    title: 'Any Language',
    desc: 'Collect recipes from Italian blogs, Japanese cookbooks, French magazines. The recipe stays in its original language; the UI adapts to yours.',
  },
  {
    icon: Bot,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    title: 'AI Assistant Control',
    desc: 'The only recipe manager with a native MCP server. Ask Claude, GPT, or any MCP-capable AI to search recipes, plan meals, and manage your pantry by voice.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Collect your recipes',
    desc: 'Import from any URL, photo, or raw text. AI parses ingredients, steps, and timing automatically. Your entire cookbook in one place.',
    color: 'bg-orange-500',
  },
  {
    step: '02',
    title: 'Plan your week',
    desc: 'Drag recipes onto your meal calendar. The pantry auto-updates when you confirm a meal. See your shopping list generate itself.',
    color: 'bg-violet-600',
  },
  {
    step: '03',
    title: 'Let your AI assist',
    desc: 'Connect Claude or any MCP client. Ask it to plan a waste-free week, add pantry items, or queue a recipe scrape — all from your chat interface.',
    color: 'bg-green-600',
  },
]

const PLANS = [
  { name: 'Hobbyist', price: 'Free', calls: '200 MCP calls/mo', highlight: false },
  { name: 'Home', price: '$4.99/mo', calls: '3,000 MCP calls/mo', highlight: false },
  { name: 'Family', price: '$9.99/mo', calls: '10,000 MCP calls/mo', highlight: true },
  { name: 'Builder', price: '$29/mo', calls: '60,000 MCP calls/mo', highlight: false },
]

const TRUST = [
  { icon: Shield, label: 'GDPR-friendly', sub: 'Data stays yours, always' },
  { icon: Clock, label: 'Always-on API', sub: 'MCP endpoint at 99.9% uptime' },
  { icon: Users, label: 'Household sharing', sub: 'Multiple members, one pantry' },
]

/* ─── Components ────────────────────────────────────────────────── */

function FeatureCard({ icon: Icon, color, bg, title, desc }) {
  return (
    <div className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className={`${bg} w-11 h-11 rounded-xl flex items-center justify-center mb-4`}>
        <Icon size={22} className={color} />
      </div>
      <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

function PlanCard({ name, price, calls, highlight }) {
  return (
    <div className={`rounded-2xl p-5 border transition-all ${
      highlight
        ? 'bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-200'
        : 'bg-white border-gray-100 text-gray-900'
    }`}>
      {highlight && (
        <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full mb-2">
          Most Popular
        </span>
      )}
      <p className={`font-black text-lg ${highlight ? 'text-white' : 'text-gray-900'}`}>{name}</p>
      <p className={`text-2xl font-extrabold mt-1 ${highlight ? 'text-white' : 'text-gray-900'}`}>{price}</p>
      <p className={`text-xs mt-1 ${highlight ? 'text-orange-100' : 'text-gray-400'}`}>{calls}</p>
      <a
        href="https://app.copantry.com/signup"
        className={`mt-4 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
          highlight
            ? 'bg-white text-orange-600 hover:bg-orange-50'
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        Get started <ArrowRight size={14} />
      </a>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero-gradient pt-20 pb-24 md:pt-28 md:pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <Bot size={13} />
            MCP-native · Works with Claude, GPT & more
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            The recipe manager<br />
            <span className="text-orange-500">your AI can control</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            CoPantry organises your recipes, tracks your pantry, and plans your meals.
            Connect your AI assistant via MCP and let it manage your kitchen alongside you.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.copantry.com/signup"
              className="flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors shadow-md shadow-orange-200/60"
            >
              Start cooking for free <ArrowRight size={16} />
            </a>
            <Link
              to="/mcp"
              className="flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-bold text-base rounded-xl transition-colors shadow-sm"
            >
              <Bot size={16} className="text-orange-500" /> See MCP docs
            </Link>
          </div>

          {/* Social proof micro-line */}
          <div className="mt-8 flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="text-sm text-gray-500 ml-1 font-medium">Loved by households worldwide</span>
          </div>
        </div>
      </section>

      {/* ── Trust signals ─────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {TRUST.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 py-4 sm:py-0 sm:px-8 first:pl-0 last:pr-0">
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                <Icon size={17} className="text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{label}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">Everything you need</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              One app for your entire kitchen
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              From first ingredient to empty plate — and everything your AI assistant needs to help.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── MCP Spotlight ─────────────────────────────────────── */}
      <section className="bg-gray-900 py-20 md:py-28 px-4 overflow-hidden relative">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <Zap size={12} /> Model Context Protocol
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Your kitchen,<br />
                <span className="text-orange-400">controlled by AI</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                CoPantry is the first recipe manager built with a native MCP server. Connect Claude Desktop, Cursor, or any MCP-compatible AI client and unlock hands-free kitchen management.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  '"Plan a waste-free week using what's in my pantry"',
                  '"Add 3 eggs and 500g chicken breast to my pantry"',
                  '"Schedule risotto for dinner on Friday"',
                  '"Generate my shopping list for next week"',
                ].map(q => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-orange-400 mt-0.5 shrink-0">›</span>
                    <em>{q}</em>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/mcp"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
                >
                  Read MCP docs <ChevronRight size={16} />
                </Link>
                <a
                  href="https://app.copantry.com/settings/mcp"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-colors border border-white/10"
                >
                  Get API key <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Code snippet */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900 border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">claude_desktop_config.json</span>
              </div>
              <pre className="p-5 text-sm font-mono text-gray-100 leading-relaxed overflow-x-auto">{`{
  "mcpServers": {
    "Copantry": {
      "type": "http",
      "url": "https://api.copantry.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_KEY"
      }
    }
  }
}`}</pre>
              <div className="px-5 py-3 border-t border-gray-700 bg-gray-900">
                <p className="text-xs text-gray-500">
                  10 tools available · Works with Claude, Cursor, Windsurf, and npx
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">Simple by design</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How it works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, title, desc, color }) => (
              <div key={step} className="relative">
                <div className={`${color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-white font-black text-sm">{step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                {step !== '03' && (
                  <div className="hidden md:block absolute top-5 left-full w-8 border-t-2 border-dashed border-gray-200 -translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing teaser ────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">Simple pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Start free, scale with your household
            </h2>
            <p className="mt-3 text-gray-500">Every plan includes unlimited recipes and household members.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANS.map(p => <PlanCard key={p.name} {...p} />)}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            MCP API call limits apply per month. Recipes, pantry, and calendar are always unlimited.{' '}
            <Link to="/pricing" className="text-orange-500 hover:underline">Full comparison →</Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-amber-400 fill-amber-400" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Your kitchen is waiting
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Join thousands of households who plan smarter, waste less, and cook better — with or without an AI assistant.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.copantry.com/signup"
              className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors shadow-lg shadow-orange-200"
            >
              Create your free account <ArrowRight size={16} />
            </a>
            <Link
              to="/mcp"
              className="text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              Explore MCP docs <ChevronRight size={14} />
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-5">
            {['Free forever plan', 'No credit card required', 'Cancel anytime'].map(t => (
              <span key={t} className="flex items-center gap-1 text-xs text-gray-400">
                <Check size={12} className="text-green-500" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
