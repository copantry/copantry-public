import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight, Bot, BookOpen, Refrigerator, Calendar, ShoppingCart,
  Sparkles, Globe, Zap, ChevronRight, Check, Star,
  Shield, Users, TrendingUp, Network, DollarSign, Infinity
} from 'lucide-react'

/* ─── Static metadata (icons/colours don't need translation) ── */

const FEATURE_META = [
  { key: 'ai_import',    icon: Sparkles,    color: 'text-orange-500', bg: 'bg-orange-50' },
  { key: 'pantry',       icon: Refrigerator, color: 'text-green-600',  bg: 'bg-green-50' },
  { key: 'calendar',     icon: Calendar,    color: 'text-violet-600', bg: 'bg-violet-50' },
  { key: 'shopping',     icon: ShoppingCart, color: 'text-blue-600',  bg: 'bg-blue-50' },
  { key: 'multilingual', icon: Globe,       color: 'text-rose-500',  bg: 'bg-rose-50' },
  { key: 'ai',           icon: Bot,         color: 'text-amber-500', bg: 'bg-amber-50' },
]

const PLAN_META = [
  { key: 'hobbyist', price: 'Free',   priceNote: 'forever', aiCalls: '200',    color: 'border-gray-200',   ctaStyle: 'border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50' },
  { key: 'home',     price: '$4.99',  priceNote: '/mo',     aiCalls: '3,000',  color: 'border-blue-200',   ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800' },
  { key: 'family',   price: '$9.99',  priceNote: '/mo',     aiCalls: '10,000', color: 'border-orange-300', ctaStyle: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200', highlight: true },
  { key: 'builder',  price: '$29',    priceNote: '/mo',     aiCalls: '60,000', color: 'border-amber-200',  ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800' },
]

/* ─── Components ───────────────────────────────────────────── */

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

function PlanCard({ price, priceNote, aiCalls, highlight, ctaStyle, color, name, cta, aiLabel }) {
  return (
    <div className={`rounded-2xl p-5 border transition-all ${color} ${highlight ? 'bg-white shadow-xl shadow-orange-100 relative' : 'bg-white'}`}>
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}
      <p className="font-black text-gray-900 text-base mt-1">{name}</p>
      <div className="flex items-baseline gap-1 mt-1.5">
        <span className="text-2xl font-extrabold text-gray-900">{price}</span>
        <span className="text-xs text-gray-400">{priceNote}</span>
      </div>
      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1 mb-4">
        <Bot size={11} className="text-orange-500" /> {aiCalls} {aiLabel}
      </p>
      <a
        href="https://app.copantry.com/signup"
        className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${ctaStyle}`}
      >
        {cta} <ArrowRight size={14} />
      </a>
    </div>
  )
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function HomePage() {
  const { t } = useTranslation()

  const features = FEATURE_META.map(({ key, icon, color, bg }) => ({
    icon, color, bg,
    title: t(`home.features.${key}_title`),
    desc:  t(`home.features.${key}_desc`),
  }))

  const plans = PLAN_META.map(({ key, ...meta }) => ({
    ...meta,
    name: t(`pricing.plans.${key}.name`),
    cta:  t(`pricing.plans.${key}.cta`),
    aiLabel: t('home.pricing.ai_actions'),
  }))

  const spotlightExamples = t('home.spotlight.examples', { returnObjects: true })

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero-gradient pt-20 pb-24 md:pt-28 md:pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <Check size={12} /> {t('home.hero.badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            {t('home.hero.title1')}<br />
            <span className="text-orange-500">{t('home.hero.title2')}</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.copantry.com/signup"
              className="flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors shadow-md shadow-orange-200/60"
            >
              {t('home.hero.cta_primary')} <ArrowRight size={16} />
            </a>
            <Link
              to="/mcp"
              className="flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 font-semibold text-sm rounded-xl transition-colors shadow-sm"
            >
              {t('home.hero.cta_secondary')} <ChevronRight size={14} />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="text-sm text-gray-500 ml-1 font-medium">{t('home.hero.social_proof')}</span>
          </div>
        </div>
      </section>

      {/* ── Trust signals ─────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {[
            { icon: Shield, label: t('home.trust.gdpr'),     sub: t('home.trust.gdpr_sub') },
            { icon: Globe,  label: t('home.trust.available'), sub: t('home.trust.available_sub') },
            { icon: Users,  label: t('home.trust.sharing'),   sub: t('home.trust.sharing_sub') },
          ].map(({ icon: Icon, label, sub }) => (
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

      {/* ── Features ──────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">{t('home.features.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{t('home.features.title')}</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">{t('home.features.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">{t('home.how.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{t('home.how.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: t('home.how.step1_title'), desc: t('home.how.step1_desc'), color: 'bg-orange-500' },
              { step: '02', title: t('home.how.step2_title'), desc: t('home.how.step2_desc'), color: 'bg-violet-600' },
              {
                step: '03',
                title: t('home.how.step3_title'),
                desc: t('home.how.step3_desc'),
                color: 'bg-green-600',
                label: t('home.how.step3_label'),
              },
            ].map(({ step, title, desc, color, label }) => (
              <div key={step} className="relative">
                <div className={`${color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-white font-black text-sm">{step}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  {label && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {label}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                {step !== '03' && (
                  <div className="hidden md:block absolute top-5 left-full w-8 border-t-2 border-dashed border-gray-200 -translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform / Investor section ───────────────────── */}
      <section className="bg-gray-900 py-20 md:py-28 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <TrendingUp size={12} /> {t('home.platform.eyebrow')}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{t('home.platform.title')}</h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">{t('home.platform.subtitle')}</p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: t('home.platform.stat1_value'), label: t('home.platform.stat1_label') },
              { value: t('home.platform.stat2_value'), label: t('home.platform.stat2_label') },
              { value: t('home.platform.stat3_value'), label: t('home.platform.stat3_label') },
              { value: t('home.platform.stat4_value'), label: t('home.platform.stat4_label') },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-xs text-gray-400 font-semibold">{label}</p>
              </div>
            ))}
          </div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Zap,       title: t('home.platform.point1_title'), desc: t('home.platform.point1_desc') },
              { icon: Network,   title: t('home.platform.point2_title'), desc: t('home.platform.point2_desc') },
              { icon: DollarSign, title: t('home.platform.point3_title'), desc: t('home.platform.point3_desc') },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-orange-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`mailto:${t('home.platform.investors_email')}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              {t('home.platform.investors_cta')} → {t('home.platform.investors_email')}
            </a>
          </div>
        </div>
      </section>

      {/* ── MCP Spotlight (developer section) ─────────────── */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                <Bot size={12} /> {t('home.spotlight.eyebrow')}
              </div>
              <p className="text-xs text-gray-400 mb-5 italic">{t('home.spotlight.optional_note')}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {t('home.spotlight.title1')}<br />
                <span className="text-orange-500">{t('home.spotlight.title2')}</span>
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">{t('home.spotlight.desc')}</p>
              <ul className="mt-6 space-y-2.5">
                {(Array.isArray(spotlightExamples) ? spotlightExamples : []).map(q => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-orange-500 mt-0.5 shrink-0">›</span>
                    <em>{q}</em>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/mcp"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
                >
                  {t('home.spotlight.cta_docs')} <ChevronRight size={16} />
                </Link>
                <a
                  href="https://app.copantry.com/settings/mcp"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
                >
                  {t('home.spotlight.cta_key')} <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Code snippet */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-950 border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">claude_desktop_config.json</span>
              </div>
              <pre className="p-5 text-sm font-mono text-gray-100 leading-relaxed overflow-x-auto code-block">{`{
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
              <div className="px-5 py-3 border-t border-gray-700 bg-gray-950">
                <p className="text-xs text-gray-500">{t('home.spotlight.tools_note')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing teaser ────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">{t('home.pricing.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{t('home.pricing.title')}</h2>
            <p className="mt-3 text-gray-500">{t('home.pricing.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map(p => <PlanCard key={p.name} {...p} />)}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            {t('home.pricing.ai_note')}{' '}
            <Link to="/pricing" className="text-orange-500 hover:underline">{t('home.pricing.full_compare')} →</Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-amber-400 fill-amber-400" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t('home.cta.title')}</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.copantry.com/signup"
              className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors shadow-lg shadow-orange-200"
            >
              {t('home.cta.primary')} <ArrowRight size={16} />
            </a>
            <Link
              to="/mcp"
              className="text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              {t('home.cta.secondary')} <ChevronRight size={14} />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
            {[
              t('home.cta.proof1'),
              t('home.cta.proof2'),
              t('home.cta.proof3'),
            ].map(text => (
              <span key={text} className="flex items-center gap-1 text-xs text-gray-400">
                <Check size={12} className="text-green-500" /> {text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
