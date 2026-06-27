import { Check, Minus, X } from "lucide-react";
import { WHY_COPANTRY, pick } from "../content/localized";
import { useLang } from "../i18n/useLang";
import { Section, SectionHeading, Eyebrow } from "../components/ui";
import Faq from "../components/Faq";
import CtaBand from "../components/CtaBand";

/*
 * The single, durable differentiator page. Per the GEO plan it contrasts
 * Copantry with *categories* of apps — never named competitors — so we give no
 * free marketing and never have to update it when a rival changes. Framing is
 * deliberately fair to each category (one-sided pages read as untrustworthy to
 * users and answer engines alike). All copy is localized via WHY_COPANTRY; the
 * SCORES grid below is keyed by index so it stays language-independent and must
 * stay in lock-step with WHY_COPANTRY.categories / .matrix.
 */

// Which category (column) ticks which capability (row): 'yes' | 'partial' | 'no'.
// Columns follow WHY_COPANTRY.categories order; rows follow WHY_COPANTRY.matrix order.
const SCORES = [
  // Calendar-first planners
  ["no", "no", "no", "partial", "partial", "partial"],
  // Recipe-savers & recipe boxes
  ["no", "no", "no", "no", "partial", "partial"],
  // Basic shopping-list apps
  ["no", "no", "no", "partial", "yes", "partial"],
];

const Cell = ({ score }) => {
  if (score === "yes")
    return <Check size={18} className="text-green-600 mx-auto" />;
  if (score === "partial")
    return <Minus size={18} className="text-amber-500 mx-auto" />;
  return <X size={16} className="text-gray-300 mx-auto" />;
};

export default function WhyCopantryPage() {
  const lng = useLang();
  const c = pick(WHY_COPANTRY, lng);
  const categoryNames = c.categories.map((cat) => cat.name);

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
          {/* Answer-first lead an engine can lift for "best app" queries */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            {c.lede}
          </p>
        </div>
      </Section>

      {/* Category contrast */}
      <Section className="py-14 md:py-20" width="max-w-4xl">
        <SectionHeading
          eyebrow={c.catEyebrow}
          title={c.catTitle}
          lede={c.catLede}
        />
        <div className="grid md:grid-cols-3 gap-5">
          {c.categories.map(({ name, fair, gap }) => (
            <div
              key={name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 mb-3">{name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold text-green-700">
                  {c.goodAt}{" "}
                </span>
                {fair}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-rose-600">{c.theGap} </span>
                {gap}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison matrix */}
      <section className="bg-gray-50 border-y border-gray-100">
        <Section className="py-14 md:py-20" width="max-w-4xl">
          <SectionHeading eyebrow={c.matrixEyebrow} title={c.matrixTitle} />
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left text-sm font-bold text-gray-500 p-3 w-1/3">
                    {c.capability}
                  </th>
                  <th className="p-3 text-center text-sm font-extrabold text-orange-600 bg-orange-50 rounded-t-xl">
                    Copantry
                  </th>
                  {categoryNames.map((name) => (
                    <th
                      key={name}
                      className="p-3 text-center text-xs font-semibold text-gray-500 align-bottom"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.matrix.map((cap, row) => (
                  <tr key={cap}>
                    <td className="p-3 text-sm text-gray-700 border-t border-gray-100">
                      {cap}
                    </td>
                    <td className="p-3 border-t border-orange-100 bg-orange-50/60">
                      <Check size={18} className="text-green-600 mx-auto" />
                    </td>
                    {SCORES.map((scores, i) => (
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
              <Check size={13} className="text-green-600" /> {c.legendBuilt}
            </span>
            <span className="flex items-center gap-1">
              <Minus size={13} className="text-amber-500" /> {c.legendSometimes}
            </span>
            <span className="flex items-center gap-1">
              <X size={12} className="text-gray-300" /> {c.legendNot}
            </span>
          </p>
        </Section>
      </section>

      {/* Honest "not for you if" */}
      <Section className="py-14 md:py-20" width="max-w-3xl">
        <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            {c.notForTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {c.notForPre}
            <span className="font-semibold text-gray-900">
              {c.notForStrong}
            </span>
            {c.notForPost}
          </p>
        </div>
      </Section>

      <Faq items={c.faqItems} title={c.faqTitle} eyebrow={c.faqEyebrow} />

      <CtaBand />
    </>
  );
}
