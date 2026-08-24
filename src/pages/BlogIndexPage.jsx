import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BLOG_UI, localizedPostList } from "../content/blogLocalized";
import { pick } from "../content/localized";
import { localizePath } from "../content/localized";
import { useLang } from "../i18n/useLang";
import { Section, Eyebrow } from "../components/ui";
import CtaBand from "../components/CtaBand";

export default function BlogIndexPage() {
  const lng = useLang();
  const ui = pick(BLOG_UI, lng);
  const posts = localizedPostList(lng);

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

      <Section className="py-14 md:py-20" width="max-w-3xl">
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={localizePath(`/blog/${post.slug}`, lng)}
              className="block bg-white border border-gray-100 hover:border-orange-300 rounded-2xl p-6 shadow-sm transition-colors group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0" aria-hidden="true">
                  {post.emoji}
                </span>
                <div>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">
                    {post.category} · {post.readMins} {ui.minRead}
                  </p>
                  <h2 className="text-lg md:text-xl font-extrabold text-gray-900 group-hover:text-orange-600 leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {post.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600">
                    {ui.readMore} <ArrowRight size={14} />
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
