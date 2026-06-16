import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { Section } from "../../components/ui";
import CtaBand from "../../components/CtaBand";

/*
 * Shared chrome for a blog post: breadcrumb, title, meta, prose body, CTA.
 * The `prose` styles below are scoped utility classes so we don't need the
 * Tailwind typography plugin.
 */

export default function BlogPostLayout({ post, children }) {
  const dateLabel = new Date(post.date).toLocaleDateString("en-GB", {
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
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/blog" className="hover:text-orange-500">
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
            <Clock size={13} /> {post.readMins} min read
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
