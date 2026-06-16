import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { SHELF_LIFE, learnPath } from "../content/shelfLife";
import { Section, SectionHeading, Eyebrow } from "../components/ui";
import CtaBand from "../components/CtaBand";

export default function LearnIndexPage() {
  // Group ingredients by category for a tidy directory.
  const groups = SHELF_LIFE.reduce((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-12 md:pt-20 md:pb-16"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">Learn</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            How long does food last?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Simple, honest guides to how long everyday food keeps, why it
            spoils, how to store it so it lasts longer, and what to cook before
            it goes off. General guides — when in doubt, trust your senses.
          </p>
        </div>
      </Section>

      <Section className="py-14 md:py-20" width="max-w-4xl">
        {Object.entries(groups).map(([category, items]) => (
          <div key={category} className="mb-12 last:mb-0">
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">
              {category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  to={learnPath(item.slug)}
                  className="flex items-center gap-3 bg-white border border-gray-100 hover:border-orange-300 rounded-2xl px-4 py-3.5 shadow-sm transition-colors group"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold text-gray-800 group-hover:text-orange-600 text-sm">
                      {item.name}
                    </span>
                    <span className="block text-xs text-gray-400">
                      ~{item.min}–{item.max} days in the fridge
                    </span>
                  </span>
                  <Search
                    size={15}
                    className="text-gray-300 group-hover:text-orange-500"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <CtaBand
        title="Stop guessing what’s still good"
        subtitle="Copantry dates everything in your kitchen and tells you what to use up first. Free to start, no card needed."
      />
    </>
  );
}
