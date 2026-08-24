import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { learnPath } from "../content/shelfLife";
import { LEARN_UI, localizedShelfList } from "../content/learnLocalized";
import { pick } from "../content/localized";
import { localizePath } from "../content/localized";
import { useLang } from "../i18n/useLang";
import { Section, Eyebrow } from "../components/ui";
import CtaBand from "../components/CtaBand";

export default function LearnIndexPage() {
  const lng = useLang();
  const ui = pick(LEARN_UI, lng);
  const items = localizedShelfList(lng);

  // Group ingredients by (localized) category for a tidy directory.
  const groups = items.reduce((acc, item) => {
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
          <Eyebrow className="mb-3">{ui.eyebrow}</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            {ui.h1}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            {ui.lede}
          </p>
        </div>
      </Section>

      <Section className="py-14 md:py-20" width="max-w-4xl">
        {Object.entries(groups).map(([category, groupItems]) => (
          <div key={category} className="mb-12 last:mb-0">
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">
              {category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {groupItems.map((item) => (
                <Link
                  key={item.slug}
                  to={localizePath(learnPath(item.slug), lng)}
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
                      {ui.fridgeShort(item.min, item.max)}
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

      <CtaBand title={ui.ctaIndexTitle} subtitle={ui.ctaIndexSub} />
    </>
  );
}
