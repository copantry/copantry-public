import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Refrigerator,
  ChefHat,
  ShoppingCart,
  Leaf,
  Globe,
  Sparkles,
  Bot,
  Heart,
  ChevronRight,
} from "lucide-react";
import { APP_URL } from "../seo/constants";
import {
  HOME,
  HOME_FAQ,
  UI,
  pick,
  localizePath,
  RESCUE_AMOUNT,
} from "../content/localized";
import { useLang } from "../i18n/useLang";
import { Section, SectionHeading, Pill } from "../components/ui";
import HookCard from "../components/HookCard";
import AppButtons from "../components/AppButtons";
import Faq from "../components/Faq";
import CtaBand from "../components/CtaBand";

// Visual metadata (icons/colours) stays here; text comes from localized content by index.
const PILLAR_META = [
  { icon: Refrigerator, color: "text-green-600", bg: "bg-green-50" },
  { icon: ChefHat, color: "text-orange-500", bg: "bg-orange-50" },
  { icon: ShoppingCart, color: "text-blue-600", bg: "bg-blue-50" },
];
const STEP_COLORS = ["bg-green-600", "bg-orange-500", "bg-violet-600"];
const DIFF_ICONS = [Leaf, Sparkles, Globe, ShoppingCart, Heart, Bot];
// Household cards: visual + link meta stays here; text comes from localized content by index.
const HOUSEHOLD_META = [
  { emoji: "👨‍👩‍👧", to: "/use-cases/for-families" },
  { emoji: "🧑‍🍳", to: "/use-cases/for-couples" },
];

export default function HomePage() {
  const lng = useLang();
  const c = pick(HOME, lng);
  const ui = UI[lng] || UI.en;
  // Home FAQ is now localized for every route (HOME_FAQ; `us` falls back to `en`).
  const faqItems = pick(HOME_FAQ, lng);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <Section className="hero-gradient pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-5">
              <Pill icon={Leaf} tone="green">
                {c.badge}
              </Pill>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">
              {c.h1a}
              <br />
              {c.h1b} <span className="text-orange-500">{c.h1accent}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {c.heroLede}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <a
                href={`${APP_URL}/signup`}
                className="flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors shadow-md shadow-orange-200/60"
              >
                {ui.ctaPrimary} <ArrowRight size={16} />
              </a>
              <Link
                to={localizePath("/how-it-works", lng)}
                className="flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                {ui.howItWorks} <ChevronRight size={14} />
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
              <Check size={14} className="text-green-500" /> {c.trustLine}
            </p>

            <AppButtons
              className="mt-6 flex flex-col items-center lg:items-start"
              note={false}
            />
          </div>

          <div className="lg:pl-6">
            <HookCard />
          </div>
        </div>
      </Section>

      {/* ── Proof strip ──────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50">
        <Section className="py-8">
          <div className="grid sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
            <div className="sm:col-span-2">
              <p className="text-gray-700 leading-relaxed">{c.proof}</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-3xl font-extrabold text-green-600">
                {RESCUE_AMOUNT[lng] || RESCUE_AMOUNT.en}
              </p>
              <p className="text-xs text-gray-500 font-semibold mt-0.5">
                {c.proofStat}
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* ── 3 pillars ────────────────────────────────────── */}
      <Section className="py-20 md:py-28">
        <SectionHeading
          eyebrow={c.pillarsEyebrow}
          title={c.pillarsTitle}
          lede={c.pillarsLede}
        />
        <div className="grid md:grid-cols-3 gap-5">
          {c.pillars.map((p, i) => {
            const { icon: Icon, color, bg } = PILLAR_META[i];
            return (
              <div
                key={p.title}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-7 shadow-sm"
              >
                <div
                  className={`${bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon size={24} className={color} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── How it works teaser ──────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <Section className="py-20 md:py-28">
          <SectionHeading eyebrow={c.howEyebrow} title={c.howTitle} />
          <div className="grid md:grid-cols-3 gap-8">
            {c.steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div
                  className={`${STEP_COLORS[i]} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-black text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-5 left-full w-8 border-t-2 border-dashed border-gray-200 -translate-x-4" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to={localizePath("/how-it-works", lng)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
            >
              {c.howMore} <ArrowRight size={15} />
            </Link>
          </div>
        </Section>
      </section>

      {/* ── Made for households ───────────────────────────── */}
      <Section className="py-20 md:py-28">
        <SectionHeading
          eyebrow={c.households.eyebrow}
          title={c.households.title}
          lede={c.households.lede}
        />
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {c.households.cards.map((card, i) => (
            <Link
              key={card.title}
              to={localizePath(HOUSEHOLD_META[i].to, lng)}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-7 shadow-sm flex flex-col"
            >
              <span className="text-3xl mb-3">{HOUSEHOLD_META[i].emoji}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {card.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600">
                {card.cta} <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Differentiators ──────────────────────────────── */}
      <Section className="py-20 md:py-28">
        <SectionHeading
          eyebrow={c.diffEyebrow}
          title={c.diffTitle}
          lede={c.diffLede}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.differentiators.map((d, i) => {
            const Icon = DIFF_ICONS[i];
            return (
              <div
                key={d.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/why-copantry"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
          >
            {c.whyTeaser} <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      {/* ── FAQ (English route only for now) ─────────────── */}
      {faqItems && (
        <section className="bg-gray-50 border-t border-gray-100">
          <Faq items={faqItems} />
        </section>
      )}

      {/* ── Final CTA ────────────────────────────────────── */}
      <CtaBand />
    </>
  );
}
