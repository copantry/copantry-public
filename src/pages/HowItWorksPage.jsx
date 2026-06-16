import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  ChefHat,
  ShoppingCart,
  RefreshCw,
} from "lucide-react";
import { APP_URL } from "../seo/constants";
import { HOW_IT_WORKS, pick, localizePath } from "../content/localized";
import { useLang } from "../i18n/useLang";
import { Section, SectionHeading, Eyebrow } from "../components/ui";
import AppButtons from "../components/AppButtons";
import CtaBand from "../components/CtaBand";

const STEP_META = [
  { icon: Camera, color: "bg-green-600" },
  { icon: ChefHat, color: "bg-orange-500" },
  { icon: ShoppingCart, color: "bg-blue-600" },
  { icon: RefreshCw, color: "bg-violet-600" },
];

export default function HowItWorksPage() {
  const lng = useLang();
  const c = pick(HOW_IT_WORKS, lng);

  const explore = [
    {
      label: "Reduce food waste",
      to: localizePath("/features/reduce-food-waste", lng),
    },
    { label: "Meal planning", to: "/features/meal-planning" },
    { label: "Pantry tracking", to: "/features/pantry-tracking" },
    { label: "Shopping lists", to: "/features/shopping-lists" },
    { label: "Recipes from anywhere", to: "/features/recipes" },
    { label: "Plan from ChatGPT or Claude", to: "/features/ai-assistant-mcp" },
  ];

  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-12 md:pt-20 md:pb-16"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">{c.eyebrow}</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            {c.h1}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            {c.lede}
          </p>
        </div>
      </Section>

      <Section className="py-14 md:py-20" width="max-w-3xl">
        <ol className="space-y-10">
          {c.steps.map((s, i) => {
            const { icon: Icon, color } = STEP_META[i];
            return (
              <li key={s.title} className="flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  {i < c.steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-100 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">
                    {c.stepLabel} {i + 1}
                  </p>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-2 px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-md shadow-orange-200/60"
          >
            {c.tryCta} <ArrowRight size={16} />
          </a>
          <AppButtons />
        </div>
      </Section>

      <section className="bg-gray-50 border-y border-gray-100">
        <Section className="py-16" width="max-w-3xl">
          <SectionHeading eyebrow={c.exploreEyebrow} title={c.exploreTitle} />
          <div className="grid sm:grid-cols-2 gap-3">
            {explore.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center justify-between bg-white border border-gray-100 hover:border-orange-300 rounded-2xl px-5 py-4 shadow-sm transition-colors group"
              >
                <span className="font-bold text-gray-800 group-hover:text-orange-600">
                  {label}
                </span>
                <ArrowRight
                  size={16}
                  className="text-gray-300 group-hover:text-orange-500"
                />
              </Link>
            ))}
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
