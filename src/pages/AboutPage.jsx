import { Link } from "react-router-dom";
import { Leaf, Globe, Heart } from "lucide-react";
import { CANONICAL_DESCRIPTION } from "../seo/constants";
import { Section, SectionHeading, Eyebrow } from "../components/ui";
import CtaBand from "../components/CtaBand";

const VALUES = [
  {
    icon: Leaf,
    title: "Less waste, by design",
    desc: "We start from the food you already have. Cutting household food waste is the point of the product, not a marketing angle.",
  },
  {
    icon: Globe,
    title: "For every kitchen",
    desc: "Copantry works in twelve languages and keeps recipes in their original language, because real households aren’t monolingual.",
  },
  {
    icon: Heart,
    title: "Built for households",
    desc: "Couples and families share one pantry, plan and list — so the mental load of feeding people is shared, not dumped on one person.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-12 md:pt-20 md:pb-16"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">About Copantry</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            We help households cook what they have before it goes to waste
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            {CANONICAL_DESCRIPTION}
          </p>
        </div>
      </Section>

      <Section className="py-14 md:py-20" width="max-w-2xl">
        <div className="blog-prose">
          <p>
            Copantry started from a simple, slightly annoying observation: most
            of us throw away food we meant to eat, and buy things we already
            have — not because we don’t care, but because no app actually knows
            what’s in our kitchen. Calendar planners hand you an empty week.
            Recipe apps store links. List apps make lists. None of them close
            the loop.
          </p>
          <p>
            So we built the loop. Copantry learns what you have, tells you what
            to cook before it expires, and builds a shopping list of only what
            you’re missing — for the whole household, in your language. You can
            even drive it from your AI assistant.
          </p>
        </div>
      </Section>

      <section className="bg-gray-50 border-y border-gray-100">
        <Section className="py-14 md:py-20" width="max-w-4xl">
          <SectionHeading
            eyebrow="What we care about"
            title="The principles behind Copantry"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
            Curious how we compare to other apps? Read{" "}
            <Link
              to="/why-copantry"
              className="text-orange-600 font-semibold hover:underline"
            >
              why Copantry is different
            </Link>
            .
          </p>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
