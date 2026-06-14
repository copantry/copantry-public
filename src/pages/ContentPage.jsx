/*
 * Generic, content-driven page used for all /features/* and /use-cases/* pages,
 * plus the localized food-waste pillar. Renders an answer-first layout from a
 * content object selected by route slug (English) or passed directly (localized).
 */

import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import { APP_URL } from '../seo/constants'
import { FAQS } from '../content/faqs'
import { UI, localizePath } from '../content/localized'
import { useLang } from '../i18n/useLang'
import { Section, Eyebrow, Pill } from '../components/ui'
import AppButtons from '../components/AppButtons'
import Faq from '../components/Faq'
import CtaBand from '../components/CtaBand'

const ACCENTS = {
  green: { text: 'text-green-600', bg: 'bg-green-50', pill: 'green' },
  orange: { text: 'text-orange-500', bg: 'bg-orange-50', pill: 'orange' },
  violet: { text: 'text-violet-600', bg: 'bg-violet-50', pill: 'violet' },
  blue: { text: 'text-blue-600', bg: 'bg-blue-50', pill: 'orange' },
}

export default function ContentPage({ registry, page: pageProp, sectionLabel }) {
  const { slug } = useParams()
  const lng = useLang()
  const ui = UI[lng] || UI.en
  const page = pageProp ?? registry?.[slug]
  if (!page) return <Navigate to="/" replace />

  const accent = ACCENTS[page.accent] ?? ACCENTS.orange
  const faqItems = page.faqItems ?? FAQS[page.faqKey]

  return (
    <>
      {/* Breadcrumb */}
      <Section className="pt-8" width="max-w-5xl">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 font-medium" aria-label="Breadcrumb">
          <Link to={localizePath('/', lng)} className="hover:text-orange-500">{ui.breadcrumbHome}</Link>
          <ChevronRight size={12} />
          <span>{sectionLabel}</span>
          <ChevronRight size={12} />
          <span className="text-gray-600">{page.crumb ?? page.h1}</span>
        </nav>
      </Section>

      {/* Hero */}
      <Section className="pt-8 pb-14 md:pt-10 md:pb-20" width="max-w-5xl">
        <div className="max-w-3xl">
          <div className="mb-5">
            <Pill tone={accent.pill}>
              <span className="text-base leading-none" aria-hidden="true">{page.heroEmoji}</span>
              {page.eyebrow}
            </Pill>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.08] tracking-tight">
            {page.h1}
          </h1>
          {/* Answer-first lead: a self-contained answer an AI engine can lift. */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">{page.lede}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors shadow-md shadow-orange-200/60"
            >
              {ui.getStartedFree} <ArrowRight size={16} />
            </a>
            <Link
              to={localizePath('/how-it-works', lng)}
              className="flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-sm rounded-xl transition-colors shadow-sm"
            >
              {ui.howItWorks} <ChevronRight size={14} />
            </Link>
          </div>
          <AppButtons className="mt-6 flex flex-col" note={false} />
        </div>
      </Section>

      {/* Sections */}
      {page.sections?.map((s, i) => (
        <section key={s.h2} className={i % 2 === 1 ? 'bg-gray-50 border-y border-gray-100' : ''}>
          <Section className="py-14 md:py-20" width="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">{s.h2}</h2>
            {[].concat(s.body).map((p, j) => (
              <p key={j} className="mt-4 text-lg text-gray-600 leading-relaxed">{p}</p>
            ))}
            {s.bullets && (
              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {s.bullets.map(({ title, desc }) => (
                  <li key={title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className={`${accent.bg} w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check size={15} className={accent.text} />
                      </span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{title}</p>
                        <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        </section>
      ))}

      {/* HowTo */}
      {page.howTo && (
        <Section className="py-14 md:py-20" width="max-w-3xl">
          <Eyebrow className="mb-2">{page.howTo.eyebrow ?? ''}</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-8">{page.howTo.title}</h2>
          <ol className="space-y-5">
            {page.howTo.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-xl bg-orange-500 text-white font-black text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-gray-600 leading-relaxed pt-1.5">{step}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Related */}
      {page.related?.length > 0 && (
        <section className="bg-gray-50 border-y border-gray-100">
          <Section className="py-14" width="max-w-3xl">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">{ui.keepExploring}</p>
            <div className="flex flex-wrap gap-3">
              {page.related.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-600 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  {label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </Section>
        </section>
      )}

      {/* FAQ */}
      <Faq items={faqItems} />

      {/* CTA */}
      <CtaBand title={page.cta?.title} subtitle={page.cta?.subtitle} />
    </>
  )
}
