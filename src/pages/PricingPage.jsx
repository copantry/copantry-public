import { Check, ArrowRight, Zap, Bot, Users, Infinity } from 'lucide-react'

const PLANS = [
  {
    name: 'Hobbyist',
    price: 'Free',
    priceNote: 'forever',
    mcpCalls: '200 / month',
    color: 'border-gray-200',
    cta: 'Start for free',
    ctaStyle: 'border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50',
    features: [
      'Unlimited recipes',
      'Unlimited pantry items',
      'Meal calendar',
      'Shopping lists',
      '1 household',
      '200 MCP API calls/month',
      'Community support',
    ],
  },
  {
    name: 'Home',
    price: '$4.99',
    priceNote: '/ month',
    mcpCalls: '3,000 / month',
    color: 'border-blue-200',
    cta: 'Get Home',
    ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800',
    features: [
      'Everything in Hobbyist',
      '3,000 MCP API calls/month',
      'Household sharing (up to 4)',
      'Priority support',
    ],
  },
  {
    name: 'Family',
    price: '$9.99',
    priceNote: '/ month',
    mcpCalls: '10,000 / month',
    highlight: true,
    color: 'border-orange-300',
    cta: 'Get Family',
    ctaStyle: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200',
    features: [
      'Everything in Home',
      '10,000 MCP API calls/month',
      'Unlimited household members',
      'Multiple households',
      'Priority support',
    ],
  },
  {
    name: 'Builder',
    price: '$29',
    priceNote: '/ month',
    mcpCalls: '60,000 / month',
    color: 'border-amber-200',
    cta: 'Get Builder',
    ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800',
    features: [
      'Everything in Family',
      '60,000 MCP API calls/month',
      'API key management dashboard',
      'Dedicated support',
    ],
  },
]

const ALWAYS_INCLUDED = [
  { icon: Infinity, text: 'Unlimited recipes — import as many as you want' },
  { icon: Infinity, text: 'Unlimited pantry items and shopping lists' },
  { icon: Bot, text: 'MCP server access on all plans' },
  { icon: Users, text: 'Household sharing on all paid plans' },
]

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-3">Simple, transparent pricing</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Scale with your household
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          All plans include unlimited recipes, pantry, and meal planning. MCP API call limits only apply to AI assistant usage.
        </p>
      </div>

      {/* Plans grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border-2 ${plan.color} p-5 flex flex-col ${plan.highlight ? 'bg-white shadow-xl shadow-orange-100' : 'bg-white'}`}
          >
            {plan.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div>
              <p className="font-black text-gray-900 text-base">{plan.name}</p>
              <div className="flex items-baseline gap-1 mt-1.5 mb-0.5">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-400">{plan.priceNote}</span>
              </div>
              <div className="flex items-center gap-1.5 mb-5">
                <Bot size={13} className="text-orange-500 shrink-0" />
                <span className="text-xs font-semibold text-gray-500">{plan.mcpCalls} MCP calls</span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map(f => (
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
        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Included on every plan</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {ALWAYS_INCLUDED.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                <Icon size={15} className="text-orange-500" />
              </div>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-14">
        <h2 className="text-xl font-extrabold text-gray-900 mb-5">Pricing FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What counts as an MCP API call?',
              a: 'Every tool invocation from an MCP client (Claude, Cursor, npx, or raw HTTP) counts as one call. Simply viewing the app or importing a recipe from the browser does not consume MCP calls.',
            },
            {
              q: 'What happens when I hit the monthly limit?',
              a: 'MCP tool calls will return a 429 response. Your app usage (recipes, pantry, meal planning in the browser) is never affected. Upgrade any time to restore MCP access immediately.',
            },
            {
              q: 'Can I change plans at any time?',
              a: 'Yes. Upgrades take effect immediately and are prorated. Downgrades take effect at the end of the current billing period.',
            },
            {
              q: 'Is there an annual billing option?',
              a: 'Annual billing with a 20% discount is coming soon. Subscribe to our newsletter to be notified.',
            },
          ].map(({ q, a }) => (
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
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Not sure which plan?</h2>
        <p className="text-gray-500 mb-6">Start on the free Hobbyist plan — no credit card required. Upgrade whenever you're ready.</p>
        <a
          href="https://app.copantry.com/signup"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-md shadow-orange-200"
        >
          Start for free <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
