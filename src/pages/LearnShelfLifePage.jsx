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
import { Section } from "../components/ui";
import CtaBand from "../components/CtaBand";

/*
 * Programmatic shelf-life page (/learn/how-long-does-<x>-last). Answer-first:
 * the opening sentence directly answers the query so an AI engine can lift it.
 */

const BLOCKS = [
  {
    key: "why",
    icon: HelpCircle,
    color: "text-rose-500",
    bg: "bg-rose-50",
    title: "Why it goes off",
  },
  {
    key: "store",
    icon: Snowflake,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "How to store it so it lasts longer",
  },
  {
    key: "cook",
    icon: ChefHat,
    color: "text-orange-500",
    bg: "bg-orange-50",
    title: "What to cook before it goes",
  },
];

export default function LearnShelfLifePage() {
  const { slug } = useParams();
  const item = findByPageSlug(slug);
  if (!item) return <Navigate to="/learn" replace />;

  const answer = `${item.name} typically lasts about ${item.min} to ${item.max} days in the fridge, though it varies with how fresh it was and how it is stored.`;

  return (
    <>
      <Section className="pt-8" width="max-w-3xl">
        <nav
          className="flex items-center gap-1.5 text-xs text-gray-400 font-medium"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/learn" className="hover:text-orange-500">
            Learn
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">
            How long does {item.name.toLowerCase()} last?
          </span>
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
              How long does {item.name.toLowerCase()} last?
            </h1>
          </div>
        </div>

        {/* Answer-first lede + quick-fact card */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {answer}
        </p>

        <div className="mt-6 inline-flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl px-5 py-4">
          <Clock size={22} className="text-green-600" />
          <div>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">
              {item.min}–{item.max} days
            </p>
            <p className="text-xs text-gray-500 font-semibold mt-1">
              in the fridge (general guide)
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
          These are general guides for a typical item stored well, not safety
          guarantees. Always check use-by dates and trust your eyes and nose.
          Copantry can date this for you automatically — see{" "}
          <Link
            to="/features/pantry-tracking"
            className="text-orange-600 hover:underline"
          >
            pantry tracking
          </Link>
          .
        </p>

        <div className="mt-8">
          <Link
            to="/features/reduce-food-waste"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
          >
            Never bin {item.name.toLowerCase()} again — see how Copantry helps{" "}
            <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      <CtaBand
        title="Know exactly what’s still good"
        subtitle="Copantry tracks how long everything in your kitchen has left and tells you what to use up first. Free to start."
      />
    </>
  );
}
