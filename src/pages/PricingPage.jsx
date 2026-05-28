import { useTranslation } from 'react-i18next'
import { Check, ArrowRight, Zap, Bot, Users, Infinity } from 'lucide-react'

const PLAN_META = [
  { key: 'hobbyist', price: 'Free',  priceNote: 'forever', aiCalls: '200',    color: 'border-gray-200',   ctaStyle: 'border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50' },
  { key: 'home',     price: '$4.99', priceNote: '/ month', aiCalls: '3,000',  color: 'border-blue-200',   ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800' },
  { key: 'family',   price: '$9.99', priceNote: '/ month', aiCalls: '10,000', color: 'border-orange-300', ctaStyle: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200', highlight: true },
  { key: 'builder',  price: '$29',   priceNote: '/ month', aiCalls: '60,000', color: 'border-amber-200',  ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800' },
]

export default function PricingPage() {
  const { t } = useTranslation()

  const plans = PLAN_META.map(({ key, ...meta }) => ({
    ...meta,
    name:     t(`pricing.plans.${key}.name`),
    cta:      t(`pricing.plans.${key}.cta`),
    features: t(`pricing.plans.${key}.features`, { returnObjects: true }),
  }))

  const included = t('pricing.included', { returnObjects: true })
  const faq      = t('pricing.faq',      { returnObjects: true })

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-3">{t('pricing.eyebrow')}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{t('pricing.title')}</h1>
        <p className="text-gray-500 max-w-xl mx-auto">{t('pricing.subtitle')}</p>
      </div>

      {/* Plans grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border-2 ${plan.color} p-5 flex flex-col ${plan.highlight ? 'bg-white shadow-xl shadow-orange-100' : 'bg-white'}`}
          >
            {plan.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                  {t('pricing.most_popular')}
                </span>
              </div>
            )}

            <div>
              <p className="font-black text-gray-900 text-base mt-1">{plan.name}</p>
              <div className="flex items-baseline gap-1 mt-1.5 mb-0.5">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-400">{plan.priceNote}</span>
              </div>
              <div className="flex items-center gap-1.5 mb-5">
                <Bot size={13} className="text-orange-500 shrink-0" />
                <span className="text-xs font-semibold text-gray-500">{plan.aiCalls} {t('pricing.ai_actions')}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {(Array.isArray(plan.features) ? plan.features : []).map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://app.copantry.com/signup"
              className={`mt-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${plan.ctaStyle}`}
            >
              {plan.cta} <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* Always included */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 mb-12">
        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">{t('pricing.always_included')}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[Infinity, Infinity, Bot, Users].map((Icon, i) => {
            const text = Array.isArray(included) ? included[i] : ''
            return text ? (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon size={15} className="text-orange-500" />
                </div>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ) : null
          })}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-14">
        <h2 className="text-xl font-extrabold text-gray-900 mb-5">{t('pricing.faq_title')}</h2>
        <div className="space-y-4">
          {(Array.isArray(faq) ? faq : []).map(({ q, a }) => (
            <details key={q} className="group border border-gray-100 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-800 text-sm list-none">
                {q}
                <Zap size={14} className="text-orange-400 shrink-0 group-open:text-orange-500 transition-colors" />
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{t('pricing.not_sure_title')}</h2>
        <p className="text-gray-500 mb-6">{t('pricing.not_sure_desc')}</p>
        <a
          href="https://app.copantry.com/signup"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-md shadow-orange-200"
        >
          {t('pricing.start_free')} <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
