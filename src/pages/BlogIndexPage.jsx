import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { POSTS } from "../content/blog";
import { Section, Eyebrow } from "../components/ui";
import CtaBand from "../components/CtaBand";

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-12 md:pt-20 md:pb-16"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">The Copantry blog</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            Waste less, cook smarter, spend less
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Practical, no-nonsense guides to cooking what you have, planning
            around your fridge, and cutting food waste at home.
          </p>
        </div>
      </Section>

      <Section className="py-14 md:py-20" width="max-w-3xl">
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-white border border-gray-100 hover:border-orange-300 rounded-2xl p-6 shadow-sm transition-colors group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0" aria-hidden="true">
                  {post.emoji}
                </span>
                <div>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">
                    {post.category} · {post.readMins} min read
                  </p>
                  <h2 className="text-lg md:text-xl font-extrabold text-gray-900 group-hover:text-orange-600 leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {post.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
