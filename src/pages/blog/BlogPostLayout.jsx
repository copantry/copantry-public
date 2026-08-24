import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { BLOG_UI } from "../../content/blogLocalized";
import { localizePath, UI, pick } from "../../content/localized";
import { useLang } from "../../i18n/useLang";
import { Section } from "../../components/ui";
import CtaBand from "../../components/CtaBand";

/*
 * Shared chrome for a blog post: breadcrumb, title, meta, prose body, CTA.
 * The `prose` styles below are scoped utility classes so we don't need the
 * Tailwind typography plugin. Localized via blogLocalized.js (the `post` passed
 * in is already locale-resolved).
 */

export default function BlogPostLayout({ post, children }) {
  const lng = useLang();
  const ui = pick(BLOG_UI, lng);
  const dateLabel = new Date(post.date).toLocaleDateString(ui.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Section className="pt-8" width="max-w-2xl">
        <nav
          className="flex items-center gap-1.5 text-xs text-gray-400 font-medium"
          aria-label="Breadcrumb"
        >
          <Link to={localizePath("/", lng)} className="hover:text-orange-500">
            {pick(UI, lng).breadcrumbHome}
          </Link>
          <ChevronRight size={12} />
          <Link
            to={localizePath("/blog", lng)}
            className="hover:text-orange-500"
          >
            Blog
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">{post.category}</span>
        </nav>
      </Section>

      <Section className="pt-8 pb-4" width="max-w-2xl">
        <span className="text-4xl" aria-hidden="true">
          {post.emoji}
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400 font-medium">
          <span className="flex items-center gap-1">
            <Calendar size={13} /> {dateLabel}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> {post.readMins} {ui.minRead}
          </span>
        </div>
      </Section>

      <Section className="pb-14" width="max-w-2xl">
        <article className="blog-prose">{children}</article>
      </Section>

      <CtaBand />
    </>
  );
}
