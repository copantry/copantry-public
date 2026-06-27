import { Link } from "react-router-dom";
import { localizePath } from "../../content/localized";
import { useLang } from "../../i18n/useLang";

/*
 * Renders a localized blog body from the JSX-free block model in
 * src/content/blogLocalized.js. Block kinds: "lead" | "p" | "note" (paragraphs),
 * "h2" (string), "ul" | "ol" (list of run-arrays). A "run" is a plain string, a
 * { b } bold span, an internal { l, t } link (prefixed for the locale) or an
 * external { a, t } link.
 */

function renderRuns(runs, lng) {
  return runs.map((r, i) => {
    if (typeof r === "string") return <span key={i}>{r}</span>;
    if (r.b) return <strong key={i}>{r.b}</strong>;
    if (r.l)
      return (
        <Link key={i} to={localizePath(r.l, lng)}>
          {r.t}
        </Link>
      );
    if (r.a)
      return (
        <a key={i} href={r.a} target="_blank" rel="noopener noreferrer">
          {r.t}
        </a>
      );
    return null;
  });
}

export default function BlogBody({ blocks }) {
  const lng = useLang();
  return blocks.map((blk, i) => {
    switch (blk.k) {
      case "lead":
        return (
          <p key={i} className="lead">
            {renderRuns(blk.c, lng)}
          </p>
        );
      case "note":
        return (
          <p key={i} className="note">
            {renderRuns(blk.c, lng)}
          </p>
        );
      case "p":
        return <p key={i}>{renderRuns(blk.c, lng)}</p>;
      case "h2":
        return <h2 key={i}>{blk.c}</h2>;
      case "ul":
        return (
          <ul key={i}>
            {blk.c.map((item, j) => (
              <li key={j}>{renderRuns(item, lng)}</li>
            ))}
          </ul>
        );
      case "ol":
        return (
          <ol key={i}>
            {blk.c.map((item, j) => (
              <li key={j}>{renderRuns(item, lng)}</li>
            ))}
          </ol>
        );
      default:
        return null;
    }
  });
}
