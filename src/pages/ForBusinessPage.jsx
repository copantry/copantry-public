import {
  ChefHat,
  Tag,
  LayoutGrid,
  Sparkles,
  Store,
  ShieldCheck,
  Lock,
  BarChart3,
} from "lucide-react";
import { APP_URL } from "../seo/constants";
import { Section, SectionHeading, Eyebrow } from "../components/ui";

const APPLY_URL = `${APP_URL}/business`;

const PRODUCTS = [
  {
    icon: ChefHat,
    title: "Sponsored recipes",
    desc: "A real, high-quality recipe published with your products — clearly labelled “Recipe by «Brand»”. Appears in search, Discover and recipe feeds.",
  },
  {
    icon: Tag,
    title: "Promoted brands",
    desc: "Become a preferred suggestion in the shopping-list brand autocomplete and ingredient chips. Labelled “Sponsored”, never auto-locked — the cook always decides.",
  },
  {
    icon: LayoutGrid,
    title: "Display ads",
    desc: "Native card units (image + headline + CTA) in Discover, search and recipe pages. Clean, on-brand, clearly an ad.",
  },
  {
    icon: Sparkles,
    title: "Featured placement",
    desc: "Top-of-results boost in Discover for your recipe source, or a seasonal category takeover (“BBQ season”).",
  },
  {
    icon: Store,
    title: "Product showcase",
    desc: "A brand profile page listing your products and recipe collection, with links your customers can act on.",
  },
];

const TRUST = [
  {
    icon: ShieldCheck,
    title: "Vetted supply only",
    desc: "Every business is reviewed and approved by our team, and every creative and sponsored recipe passes a content-review queue before it serves.",
  },
  {
    icon: Lock,
    title: "Privacy-first targeting",
    desc: "We target by context — what someone is cooking, their market, their language — and consented preferences. We never sell personal data or hand you per-user data.",
  },
  {
    icon: BarChart3,
    title: "Aggregated reporting",
    desc: "Performance is reported aggregated with a k-anonymity floor and per-market breakdowns. Clear, honest numbers — no PII.",
  },
];

const FAQS = [
  {
    q: "How does approval work?",
    a: "You apply with your company details and the brands you represent. Our team verifies the business is real and the brand claims are legitimate, then approves the account. Each ad creative and sponsored recipe is reviewed against our Ad Policy before it goes live.",
  },
  {
    q: "Do you charge users?",
    a: "No. Copantry is free for cooks. Revenue comes from brands and businesses — never from a consumer paywall.",
  },
  {
    q: "How is my data and targeting handled?",
    a: "Targeting is contextual-first (recipe, category, market, language) and respects each user's cookie consent. We never sell personal data and never expose per-user data to advertisers. Reporting is aggregated.",
  },
  {
    q: "How do refunds work?",
    a: "Unspent prepaid balance is refundable on account closure, and we proactively credit verified invalid traffic. Refunds are reviewed by our team and processed in the original currency. Full detail is in the Advertiser Terms.",
  },
];

export default function ForBusinessPage() {
  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-12 md:pt-20 md:pb-16"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">Copantry for Business</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            Reach cooks at the moment of intent
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Copantry knows what households plan to cook this week, what’s in
            their pantry, and what they put on a shopping list. That’s exactly
            the audience cookware and food brands pay the most to reach — and we
            let you reach it without ever charging cooks.
          </p>
          <a
            href={APPLY_URL}
            className="inline-block mt-8 rounded-xl bg-brand-600 text-white px-6 py-3 font-bold hover:bg-brand-700 transition-colors"
          >
            Apply for a business account
          </a>
        </div>
      </Section>

      <Section className="py-14 md:py-20" width="max-w-5xl">
        <SectionHeading
          eyebrow="What you can run"
          title="Five ways to reach an engaged cooking audience"
        />
        <div className="grid md:grid-cols-3 gap-5">
          {PRODUCTS.map(({ icon: Icon, title, desc }) => (
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
      </Section>

      <section className="bg-gray-50 border-y border-gray-100">
        <Section className="py-14 md:py-20" width="max-w-4xl">
          <SectionHeading
            eyebrow="Clearly labelled, privacy-first"
            title="A bar that protects cooks and your brand"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {TRUST.map(({ icon: Icon, title, desc }) => (
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
        </Section>
      </section>

      <Section className="py-14 md:py-20" width="max-w-2xl">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="space-y-6">
          {FAQS.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-bold text-gray-900 mb-1.5">{q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={APPLY_URL}
            className="inline-block rounded-xl bg-brand-600 text-white px-6 py-3 font-bold hover:bg-brand-700 transition-colors"
          >
            Apply for a business account
          </a>
          <p className="text-xs text-gray-400 mt-3">
            By applying you agree to our{" "}
            <a
              href="/advertiser-terms"
              className="text-orange-600 hover:underline"
            >
              Advertiser Terms
            </a>{" "}
            and{" "}
            <a
              href="/advertising-policy"
              className="text-orange-600 hover:underline"
            >
              Ad Policy
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
