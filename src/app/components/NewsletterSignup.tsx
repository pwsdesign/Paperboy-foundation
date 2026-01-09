import Link from "next/link";

type Props = {
  title?: string;
  note?: string;
  lang?: "en" | "es";
};

export function NewsletterSignup({
  title,
  note,
  lang,
}: Props) {
  const action =
    process.env.NEXT_PUBLIC_NEWSLETTER_ACTION || "https://example.com";
  const hasRealAction = !!process.env.NEXT_PUBLIC_NEWSLETTER_ACTION;

  // Prefix internal links when used inside /[lang] routes
  const href = (path: string) => (lang ? `/${lang}${path}` : path);

  const computedTitle =
    title ?? (lang === "es" ? "ÚNETE A LA LISTA" : "JOIN THE DROP LIST");

  const computedNote =
    note ??
    (lang === "es"
      ? "Un correo cuando salga una nueva edición. Sin spam. Sin feed. Solo print."
      : "One email when a new issue drops. No spam. No feed. Just print.");

  return (
    <section className="rulebox p-8 md:p-12">
      
      {/* Zine header strip */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="stamp">
            {lang === "es" ? "Newsletter" : "Newsletter"}
          </span>
          <span className="stamp">
            {lang === "es" ? "Nuevas ediciones" : "Issue drops"}
          </span>
          <span className="stamp">{lang === "es" ? "Sin spam" : "No spam"}</span>
        </div>

        <span className="stamp">PB-DROP-01</span>
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-[1.15fr_.85fr] md:items-start">
        {/* Left copy */}
        <div>
          <h2 className="headline text-3xl md:text-4xl leading-tight">
            {computedTitle}
          </h2>

          <p className="lede mt-4 text-[15px] md:text-[16px] leading-relaxed">
            {computedNote}{" "}
            <span className="em-shout">
              {lang === "es" ? "Sin algoritmos." : "No algorithms."}
            </span>{" "}
            <span className="em-italic">
              {lang === "es" ? "Sin doomscroll." : "No doomscroll."}
            </span>{" "}
            <span className="em-fun">
              {lang === "es" ? "Solo papel." : "Just paper."}
            </span>
          </p>

          <div
            className="mt-7 border-t pt-5"
            style={{ borderColor: "var(--rule)" }}
          >
            <p className="text-[12px] text-[rgba(14,15,18,0.62)] leading-relaxed">
              {lang === "es"
                ? "Prefieres mantenerte offline? Consigue la lista de distribución física en "
                : "Prefer staying offline? Get the physical distribution list on "}
              <Link className="underline" href={href("/get-involved")}>
                {lang === "es" ? "Participa" : "Get involved"}
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right form */}
        <form
          className="zine-card p-6 md:p-7"
          action={action}
          method="post"
          target="_blank"
          rel="noreferrer"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="flex items-center justify-between gap-3">
            <p className="kicker">{lang === "es" ? "REGISTRO" : "SIGNUP"}</p>
            <span className="stamp">{lang === "es" ? "GRATIS" : "FREE"}</span>
          </div>

          <div
            className="mt-4 border-t pt-5"
            style={{ borderColor: "var(--rule)" }}
          >
            <label className="kicker" htmlFor="email">
              {lang === "es" ? "Correo" : "Email address"}
            </label>

            <div className="mt-3 flex gap-3">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={lang === "es" ? "tu@correo.com" : "you@domain.com"}
                className="w-full rounded-full border px-4 py-3 text-[14px] outline-none"
                style={{
                  borderColor: "var(--rule)",
                  background: "rgba(255,255,255,0.55)",
                  color: "var(--ink)",
                }}
              />

              <button type="submit" className="btn-ink whitespace-nowrap">
                {lang === "es" ? "UNIRME" : "JOIN"}
              </button>
            </div>

            <p className="mt-4 text-[11px] text-[rgba(14,15,18,0.58)] leading-relaxed">
              {lang === "es"
                ? "Solo recibirás avisos cuando salga una edición. Nada más."
                : "You’ll only get issue drop notifications. Nothing else."}
            </p>

            {!hasRealAction && (
              <p className="mt-3 text-[11px] text-red-700">
                Setup needed: add NEXT_PUBLIC_NEWSLETTER_ACTION in .env.local.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}