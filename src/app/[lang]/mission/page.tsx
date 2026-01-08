import Link from "next/link";
import { getDictionary, type Lang } from "@/lib/i18n";

const PRINCIPLES = [
  {
    title: "Print-first",
    desc: "We design for paper before pixels. The website is the trailer, not the movie.",
  },
  {
    title: "Slow on purpose",
    desc: "Fewer issues. Better work. More shelf life. We don’t chase the feed.",
  },
  {
    title: "Local, not viral",
    desc: "We amplify neighborhoods, makers, small businesses, and culture you can actually touch.",
  },
  {
    title: "No ads. No algorithms.",
    desc: "Attention is sacred. We won’t sell it, trade it, or trick you into giving more of it.",
  },
  {
    title: "Designed to be kept",
    desc: "Paperboy is meant to live on a table, in a bag, on a shelf. It should age well.",
  },
  {
    title: "Community-funded",
    desc: "Supported by people who want something better than content. Grants, patrons, limited editions.",
  },
];

const MANIFESTO_LINES = [
  "The internet got faster.",
  "We got tired.",
  "So we made something slower.",
  "A physical pause button.",
  "A small rebellion against scroll fatigue.",
  "A collectible object that brings people back to real places.",
];

export default async function MissionPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="wrap py-16 md:py-24">
      {/* HERO / MANIFESTO */}
      <section className="rulebox p-7 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="kicker wilko-label">{dict.nav.mission}</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px]">
              <span className="stamp">Nonprofit</span>
              <span className="stamp">Print-first</span>
              <span className="stamp">Miami-rooted</span>
              <span className="stamp">Anti-scroll</span>
            </div>

            <h1 className="hero-statement mt-5 text-5xl md:text-7xl">
              {lang === "es"
                ? "Publicamos para que la gente vuelva a sentirse humana."
                : "We publish to make people feel human again."}
              <span className="block mt-3 text-[14px] md:text-[16px] tracking-[0.22em] uppercase opacity-80">
                {lang === "es"
                  ? "Medios lentos y coleccionables para un mundo que desliza demasiado rápido."
                  : "Slow, collectible media for a world that scrolls too fast."}
              </span>
            </h1>

            <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
              {lang === "es" ? (
                <>
                  Paperboy Foundation es un proyecto sin fines de lucro construido para combatir el agotamiento digital y
                  reconstruir la conexión local a través de{" "}
                  <span className="em-italic">objetos físicos</span> que la gente guarda. No es noticia. No es social.{" "}
                  <span className="em-fun">Papel con vida útil.</span>
                </>
              ) : (
                <>
                  Paperboy Foundation is a nonprofit print project built to fight digital burnout and rebuild local
                  connection through <span className="em-italic">physical objects</span> people keep. Not news. Not
                  social. <span className="em-fun">Printed matter</span> with shelf life.
                </>
              )}
            </p>

            <div className="mt-10 border-t pt-7" style={{ borderColor: "var(--rule)" }}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`/${lang}/issue-01`} className="btn-ink">
                  {lang === "es" ? "Explorar Edición 01" : "Explore Issue 01"}
                </Link>
                <Link href={`/${lang}/support`} className="btn-outline">
                  {lang === "es" ? "Apoyar la impresión" : "Support the print run"}
                </Link>
                <Link href={`/${lang}/get-involved`} className="btn-outline">
                  {lang === "es" ? "Participar" : "Get involved"}
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Micro-manifesto cards */}
          <aside className="zine-card p-6 md:p-7 md:w-[420px]">
            <div className="flex items-center justify-between">
              <p className="kicker wilko-label">{lang === "es" ? "Manifiesto" : "Manifesto"}</p>
              <span className="stamp">PB</span>
            </div>

            <div className="mt-5 grid gap-3">
              {MANIFESTO_LINES.map((line, i) => (
                <div key={`${line}-${i}`} className="rulebox p-5">
                  <p className="headline text-[16px] leading-snug">{line}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[12px] text-[rgba(14,15,18,0.55)]">
              {lang === "es"
                ? "Postura editorial: sin anuncios, sin distribución algorítmica, sin perseguir la indignación. Publicación intencional."
                : "Publication stance: no ads, no algorithmic distribution, no chasing outrage. Just intentional publishing."}
            </p>
          </aside>
        </div>
      </section>

      {/* PRINCIPLES GRID */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="zine-card p-6 md:p-7">
            <p className="kicker wilko-label">{lang === "es" ? "Principio" : "Principle"}</p>
            <h2 className="section-strong mt-3 text-2xl">{p.title}</h2>
            <p className="lede mt-4 text-[15px] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* WHAT WE DO / WHAT WE DON'T */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rulebox p-7 md:p-10">
          <p className="kicker wilko-label">{lang === "es" ? "Lo que hacemos" : "What we do"}</p>
          <h2 className="headline mt-3 text-3xl">
            {lang === "es" ? "Publicar como un acto de cuidado." : "Publish as an act of care."}
          </h2>

          <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed">
            <li>
              <span className="em-shout">{lang === "es" ? "Destacamos" : "Feature"}</span>{" "}
              {lang === "es"
                ? "artistas, creadores, músicos y pequeños negocios locales."
                : "local artists, makers, musicians, and small businesses."}
            </li>
            <li>
              <span className="em-shout">{lang === "es" ? "Diseñamos" : "Design"}</span>{" "}
              {lang === "es"
                ? "cada edición como un objeto coleccionable."
                : "each issue like a collectible object."}
            </li>
            <li>
              <span className="em-shout">{lang === "es" ? "Distribuimos" : "Distribute"}</span>{" "}
              {lang === "es"
                ? "a través de puntos de recogida y personas que apoyan."
                : "through community pickup spots and supporters."}
            </li>
            <li>
              <span className="em-shout">{lang === "es" ? "Colaboramos" : "Collaborate"}</span>{" "}
              {lang === "es"
                ? "de forma justa y transparente con creativos."
                : "fairly and transparently with creatives."}
            </li>
          </ul>

          <p className="mt-6 text-[12px] text-[rgba(14,15,18,0.55)]">
            {lang === "es"
              ? "No todo necesita ser “contenido”. Algunas cosas deben guardarse."
              : "Not everything needs to be “content.” Some things should be kept."}
          </p>
        </div>

        <div className="rulebox p-7 md:p-10">
          <p className="kicker wilko-label">{lang === "es" ? "Lo que no hacemos" : "What we don’t do"}</p>
          <h2 className="headline mt-3 text-3xl">
            {lang === "es" ? "Rechazamos el trato de siempre." : "We refuse the usual trade."}
          </h2>

          <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed">
            <li>{lang === "es" ? "Sin anuncios. Sin editorial patrocinado." : "No ads. No sponsored editorial."}</li>
            <li>{lang === "es" ? "Sin titulares para el algoritmo." : "No algorithm-chasing headlines."}</li>
            <li>{lang === "es" ? "Sin patrones de doomscroll." : "No doomscroll design patterns."}</li>
            <li>{lang === "es" ? "Sin indignación como estrategia." : "No farming attention with outrage."}</li>
          </ul>

          <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
            <p className="kicker">{lang === "es" ? "Versión corta" : "Short version"}</p>
            <p className="lede mt-3 text-[15px]">
              {lang === "es"
                ? "Si no puede existir fuera de internet, no lo construimos."
                : "If it can’t exist offline, we don’t build it."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mt-12 zine-card p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <p className="kicker wilko-label">{lang === "es" ? "Únete" : "Join the foundation"}</p>
            <h2 className="headline mt-3 text-3xl">
              {lang === "es"
                ? "Ayuda a financiar impresión que no ruega por atención."
                : "Help fund print that doesn’t beg for attention."}
            </h2>
            <p className="lede mt-4 text-[15px]">
              {lang === "es"
                ? "Tu apoyo mantiene Paperboy sin anuncios, con raíces locales, y diseñado para guardarse."
                : "Your support keeps Paperboy ad-free, community-rooted, and designed to be kept."}
            </p>

            <p className="mt-4 text-[12px] text-[rgba(14,15,18,0.55)]">
              {lang === "es"
                ? "Publicado en Miami, Florida • Paperboy Foundation"
                : "Published in Miami, Florida • Paperboy Foundation"}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href={`/${lang}/support`} className="btn-ink w-full">
              {lang === "es" ? "Apoyar" : "Support"}
            </Link>
            <Link href={`/${lang}/get-involved`} className="btn-outline w-full">
              {lang === "es" ? "Participar" : "Get involved"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}