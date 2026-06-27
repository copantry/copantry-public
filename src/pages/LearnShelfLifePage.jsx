import { Link, useParams, Navigate } from "react-router-dom";
import {
  ChevronRight,
  Clock,
  HelpCircle,
  Snowflake,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import { findByPageSlug } from "../content/shelfLife";
import { LEARN_UI, localizedShelfItem } from "../content/learnLocalized";
import { localizePath, UI } from "../content/localized";
import { useLang } from "../i18n/useLang";
import { Section } from "../components/ui";
import CtaBand from "../components/CtaBand";

/*
 * Programmatic shelf-life page (/learn/how-long-does-<x>-last). Answer-first:
 * the opening sentence directly answers the query so an AI engine can lift it.
 * Localized via learnLocalized.js; the URL slug stays English.
 */

export default function LearnShelfLifePage() {
  const { slug } = useParams();
  const lng = useLang();
  const ui = LEARN_UI[lng] || LEARN_UI.en;
  const base = findByPageSlug(slug);
  if (!base) return <Navigate to={localizePath("/learn", lng)} replace />;

  const item = localizedShelfItem(base, lng);
  const breadcrumbHome = (UI[lng] || UI.en).breadcrumbHome;

  const BLOCKS = [
    {
      key: "why",
      icon: HelpCircle,
      color: "text-rose-500",
      bg: "bg-rose-50",
      title: ui.blockWhy,
    },
    {
      key: "store",
      icon: Snowflake,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: ui.blockStore,
    },
    {
      key: "cook",
      icon: ChefHat,
      color: "text-orange-500",
      bg: "bg-orange-50",
      title: ui.blockCook,
    },
  ];

  return (
    <>
      <Section className="pt-8" width="max-w-3xl">
        <nav
          className="flex items-center gap-1.5 text-xs text-gray-400 font-medium"
          aria-label="Breadcrumb"
        >
          <Link to={localizePath("/", lng)} className="hover:text-orange-500">
            {breadcrumbHome}
          </Link>
          <ChevronRight size={12} />
          <Link
            to={localizePath("/learn", lng)}
            className="hover:text-orange-500"
          >
            {ui.breadcrumbLearn}
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">{item.question}</span>
        </nav>
      </Section>

      <Section className="pt-8 pb-10 md:pt-10" width="max-w-3xl">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-5xl" aria-hidden="true">
            {item.emoji}
          </span>
          <div>
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest">
              {item.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {item.question}
            </h1>
          </div>
        </div>

        {/* Answer-first lede + quick-fact card */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {item.answer}
        </p>

        <div className="mt-6 inline-flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl px-5 py-4">
          <Clock size={22} className="text-green-600" />
          <div>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">
              {ui.daysUnit(item.min, item.max)}
            </p>
            <p className="text-xs text-gray-500 font-semibold mt-1">
              {ui.inFridgeGuide}
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-14" width="max-w-3xl">
        <div className="space-y-4">
          {BLOCKS.map(({ key, icon: Icon, color, bg, title }) => (
            <div
              key={key}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`${bg} w-9 h-9 rounded-xl flex items-center justify-center`}
                >
                  <Icon size={18} className={color} />
                </span>
                <h2 className="font-bold text-gray-900 text-lg">{title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{item[key]}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-6">
          {ui.disclaimerPre}
          <Link
            to={localizePath("/features/pantry-tracking", lng)}
            className="text-orange-600 hover:underline"
          >
            {ui.pantryTrackingLabel}
          </Link>
          .
        </p>

        <div className="mt-8">
          <Link
            to={localizePath("/features/reduce-food-waste", lng)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
          >
            {ui.neverBin} <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      <CtaBand title={ui.ctaDetailTitle} subtitle={ui.ctaDetailSub} />
    </>
  );
}
