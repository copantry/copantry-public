/*
 * Shared layout primitives for the marketing site.
 * Warm, friendly, food-first visual language (rounded cards, soft shadows,
 * generous spacing) — not the previous developer-tool look.
 */

/** Padded, max-width section wrapper. */
export function Section({ children, className = "", width = "max-w-6xl", id }) {
  return (
    <section id={id} className={`px-4 sm:px-6 ${className}`}>
      <div className={`${width} mx-auto`}>{children}</div>
    </section>
  );
}

/** Small uppercase label above a heading. */
export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`text-xs font-black text-orange-500 uppercase tracking-widest ${className}`}
    >
      {children}
    </p>
  );
}

/** Centered section header: eyebrow + h2 + optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  as: As = "h2",
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div
      className={`${alignCls} max-w-2xl ${align === "center" ? "mb-12" : "mb-8"}`}
    >
      {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
      <As className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
        {title}
      </As>
      {lede && (
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">{lede}</p>
      )}
    </div>
  );
}

/** Answer-first lead paragraph — the self-contained answer an AI engine extracts. */
export function Lede({ children, className = "" }) {
  return (
    <p
      className={`text-lg md:text-xl text-gray-600 leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}

export function Pill({ icon: Icon, children, tone = "orange" }) {
  const tones = {
    orange: "bg-orange-50 border-orange-100 text-orange-700",
    green: "bg-green-50 border-green-100 text-green-700",
    violet: "bg-violet-50 border-violet-100 text-violet-700",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border ${tones[tone]}`}
    >
      {Icon && <Icon size={13} />}
      {children}
    </span>
  );
}
