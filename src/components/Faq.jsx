/*
 * Answer-first FAQ block. Questions and answers are rendered as plain, always-
 * visible HTML (no JS-only accordion) so both humans and AI crawlers read the
 * full answers. The matching FAQPage JSON-LD is emitted via seoConfig.
 */

import { UI } from '../content/localized'
import { useLang } from '../i18n/useLang'
import { Section, SectionHeading } from './ui'

export default function Faq({ items, title, eyebrow, className = 'py-20 md:py-28' }) {
  const ui = UI[useLang()] || UI.en
  if (!items?.length) return null
  return (
    <Section className={className} width="max-w-3xl">
      <SectionHeading eyebrow={eyebrow ?? ui.faqEyebrow} title={title ?? ui.faqTitle} />
      <div className="space-y-4">
        {items.map(({ q, a }) => (
          <div key={q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-2">{q}</h3>
            <p className="text-gray-600 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
