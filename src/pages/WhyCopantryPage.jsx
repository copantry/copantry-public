import { Check, Minus, X } from "lucide-react";
import { FAQS } from "../content/faqs";
import { Section, SectionHeading, Eyebrow } from "../components/ui";
import Faq from "../components/Faq";
import CtaBand from "../components/CtaBand";

/*
 * The single, durable differentiator page. Per the GEO plan it contrasts
 * Copantry with *categories* of apps — never named competitors — so we give no
 * free marketing and never have to update it when a rival changes. Framing is
 * deliberately fair to each category (one-sided pages read as untrustworthy to
 * users and answer engines alike).
 */

const CATEGORIES = [
  {
    name: "Calendar-first meal planners",
    fair: "Great if you already know exactly what you want to cook and just need a place to schedule it.",
    gap: "They hand you an empty week to fill, with no idea what is in your kitchen or what is about to go off.",
  },
  {
    name: "Recipe-savers & recipe boxes",
    fair: "Lovely for collecting recipes you like — simpler than Copantry if bookmarking is all you need.",
    gap: "They store recipes but do not know your pantry, so they cannot tell you what to cook before it expires or what to buy.",
  },
  {
    name: "Basic shopping-list apps",
    fair: "Quick and handy for jotting down what you remember you are out of.",
    gap: "They make a list but do not plan meals or track expiry, so duplicates and forgotten food still happen.",
  },
];

const MATRIX = [
  "Tracks what is in your kitchen & when it expires",
  "Tells you what to cook before food goes off",
  "Plans a week around what you already have",
  "Builds a shopping list of only the gaps",
  "Shared household plan, list & pantry",
  "Works in six languages",
];

// Which categories tick which capability: 'yes' | 'partial' | 'no'.
const MATRIX_SCORES = {
  "Calendar-first meal planners": [
    "no",
    "no",
    "no",
    "partial",
    "partial",
    "partial",
  ],
  "Recipe-savers & recipe boxes": [
    "no",
    "no",
    "no",
    "no",
    "partial",
    "partial",
  ],
  "Basic shopping-list apps": ["no", "no", "no", "partial", "yes", "partial"],
};

const Cell = ({ score }) => {
  if (score === "yes")
    return <Check size={18} className="text-green-600 mx-auto" />;
  if (score === "partial")
    return <Minus size={18} className="text-amber-500 mx-auto" />;
  return <X size={16} className="text-gray-300 mx-auto" />;
};

export default function WhyCopantryPage() {
  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-12 md:pt-20 md:pb-16"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">How Copantry is different</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            What makes Copantry different from other meal & pantry apps
          </h1>
          {/* Answer-first lead an engine can lift for "best app" queries */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Most kitchen apps do one piece of the job. Calendar-first planners
            give you an empty week. Recipe-savers store links but do not know
            your kitchen. List apps make a list but do not plan or track expiry.
            Copantry connects all three: it knows what you have, tells you what
            to cook before it expires, and builds your shopping list around the
            gaps.
          </p>
        </div>
      </Section>

      {/* Category contrast */}
      <Section className="py-14 md:py-20" width="max-w-4xl">
        <SectionHeading
          eyebrow="By category, not by name"
          title="Where other kinds of apps stop"
          lede="We won’t name competitors — features change and comparisons go stale. Instead, here is how Copantry compares to the broad categories of apps people use today."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {CATEGORIES.map(({ name, fair, gap }) => (
            <div
              key={name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 mb-3">{name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold text-green-700">Good at: </span>
                {fair}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-rose-600">The gap: </span>
                {gap}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison matrix */}
      <section className="bg-gray-50 border-y border-gray-100">
        <Section className="py-14 md:py-20" width="max-w-4xl">
          <SectionHeading
            eyebrow="Side by side"
            title="The whole kitchen loop, in one place"
          />
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left text-sm font-bold text-gray-500 p-3 w-1/3">
                    Capability
                  </th>
                  <th className="p-3 text-center text-sm font-extrabold text-orange-600 bg-orange-50 rounded-t-xl">
                    Copantry
                  </th>
                  {Object.keys(MATRIX_SCORES).map((c) => (
                    <th
                      key={c}
                      className="p-3 text-center text-xs font-semibold text-gray-500 align-bottom"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((cap, row) => (
                  <tr key={cap}>
                    <td className="p-3 text-sm text-gray-700 border-t border-gray-100">
                      {cap}
                    </td>
                    <td className="p-3 border-t border-orange-100 bg-orange-50/60">
                      <Check size={18} className="text-green-600 mx-auto" />
                    </td>
                    {Object.values(MATRIX_SCORES).map((scores, i) => (
                      <td
                        key={i}
                        className="p-3 border-t border-gray-100 text-center"
                      >
                        <Cell score={scores[row]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1">
              <Check size={13} className="text-green-600" /> Built for this
            </span>
            <span className="flex items-center gap-1">
              <Minus size={13} className="text-amber-500" /> Sometimes / partly
            </span>
            <span className="flex items-center gap-1">
              <X size={12} className="text-gray-300" /> Not really
            </span>
          </p>
        </Section>
      </section>

      {/* Honest "not for you if" */}
      <Section className="py-14 md:py-20" width="max-w-3xl">
        <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Copantry probably isn’t for you if…
          </h2>
          <p className="text-gray-600 leading-relaxed">
            …all you want is somewhere to bookmark recipe links, and you never
            plan meals or shop from a list. A simple recipe-saver will be
            lighter and that is genuinely fine. Copantry earns its place when
            you want to{" "}
            <span className="font-semibold text-gray-900">
              waste less, plan around what you already have, and shop smarter
            </span>{" "}
            — that is the job it is built for.
          </p>
        </div>
      </Section>

      <Faq
        items={FAQS.whyCopantry}
        title="Best app for the job? Honest answers"
        eyebrow="Evaluation"
      />

      <CtaBand title="See the difference in your own kitchen" />
    </>
  );
}
