/*
 * Final call-to-action band. One consistent CTA verb across the site
 * ("Start cooking what you have"). Includes the app-download buttons.
 */

import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../seo/constants'
import { UI } from '../content/localized'
import { useLang } from '../i18n/useLang'
import { Section } from './ui'
import AppButtons from './AppButtons'

export default function CtaBand({ title, subtitle }) {
  const ui = UI[useLang()] || UI.en
  const heading = title ?? ui.cta.title
  const sub = subtitle ?? ui.cta.subtitle
  return (
    <Section className="py-20 md:py-28" width="max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 md:px-12 md:py-16 text-center">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[480px] h-[280px] bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto leading-relaxed">{sub}</p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors shadow-lg shadow-orange-900/30"
            >
              {ui.ctaPrimary} <ArrowRight size={16} />
            </a>
            <AppButtons note={false} className="[&_p]:text-gray-400" />
          </div>
        </div>
      </div>
    </Section>
  )
}
