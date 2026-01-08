import Link from "next/link";
import { type Lang } from "@/lib/i18n";

const TOC = [
  {
    title: "Letter from the Editor",
    tag: "Why this exists",
    desc: "A short, honest note about building something physical in a digital world.",
  },
  {
    title: "Artists & Makers",
    tag: "Work on paper",
    desc: "Selected creators, photographed like archives, not content.",
  },
  {
    title: "Small Business Love",
    tag: "Local culture",
    desc: "The places that make Miami feel like Miami without the algorithm.",
  },
  {
    title: "Photo Essay",
    tag: "Designed to be kept",
    desc: "A visual story you can flip through slowly, like a record.",
  },
];

const SPECS = [
  { label: "Edition", value: "001" },
  { label: "Month", value: "January 2026" },
  { label: "Published in", value: "Miami, Florida" },
  { label: "Format", value: "Print-first • collectible" },
  { label: "Ads", value: "None" },
  { label: "Distribution", value: "Pickup • supporters • partners" },
];

export default function Issue01Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;

  return (
    <main className="wrap py-16 md:py-24">
      {/* HEADER / ISSUE LABEL */}
      <section className="rulebox p-7 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="kicker">Paperboy Foundation</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px]">
              <span className="stamp">Issue 01</span>
              <span className="stamp">Edition 001</span>
              <span className="stamp">January 2026</span>
              <span className="stamp">Miami, FL</span>
            </div>

            <h1 className="hero-statement mt-5 text-5xl md:text-7xl">
              {lang === "es" ? "Edición 01" : "Issue 01"}
              <span className="block mt-2 text-[14px] md:text-[16px] tracking-[0.22em] uppercase opacity-80">
                {lang === "es" ? "Un botón físico de pausa." : "A physical pause button."}
              </span>
            </h1>

            <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
              {lang === "es"
                ? "Esta edición está hecha como un objeto. Pocas palabras, imágenes fuertes, y un ritmo que se siente. Está pensada para sostenerse, revisitarse, y quedarse en una mesa, no perderse en un feed."
                : "This issue is built like an artifact. Minimal words, strong images, and a pace you can feel. It’s meant to be held, revisited, and left on a table, not lost in a feed."}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${lang}/support`} className="btn-ink">
                {lang === "es" ? "Apoyar Edición 01" : "Support Issue 01"}
              </Link>
              <Link href={`/${lang}/get-involved`} className="btn-outline">
                {lang === "es" ? "Llevar la edición" : "Carry the issue"}
              </Link>
              <Link href={`/${lang}`} className="btn-outline">
                {lang === "es" ? "Volver al inicio" : "Back to home"}
              </Link>
            </div>
          </div>

          {/* Quick specs card */}
          <aside className="zine-card p-6 md:p-7 md:w-[360px]">
            <div className="flex items-center justify-between">
              <p className="kicker">{lang === "es" ? "Detalles" : "Issue specs"}</p>
              <span className="stamp">PB-01</span>
            </div>

            <div className="mt-5 grid gap-3">
              {SPECS.map((s) => (
                <div key={s.label} className="rulebox p-4">
                  <p className="kicker">
                    {lang === "es"
                      ? s.label === "Edition"
                        ? "Edición"
                        : s.label === "Month"
                          ? "Mes"
                          : s.label === "Published in"
                            ? "Publicado en"
                            : s.label === "Format"
                              ? "Formato"
                              : s.label === "Ads"
                                ? "Anuncios"
                                : "Distribución"
                      : s.label}
                  </p>
                  <p className="mt-2 text-[14px] text-[rgba(14,15,18,0.78)]">
                    {lang === "es"
                      ? s.value === "None"
                        ? "Ninguno"
                        : s.value === "January 2026"
                          ? "Enero 2026"
                          : s.value
                      : s.value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* BODY */}
      <section className="mt-10 grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-start">
        {/* Left column */}
        <div className="zine-card p-7 md:p-10">
          <p className="kicker">{lang === "es" ? "Dentro" : "Inside"}</p>
          <h2 className="headline mt-4 text-3xl md:text-5xl leading-tight">
            {lang === "es" ? "Lo que encontrarás en Edición 01" : "What you’ll find in Issue 01"}
          </h2>

          <p className="lede mt-4 text-[15px] md:text-[16px]">
            {lang === "es"
              ? "Un índice pequeño, curado para una mente más lenta. Cada sección está diseñada para sostener atención sin secuestrarla."
              : "A small table of contents, curated for a slower brain. Every section is designed to hold attention without hijacking it."}
          </p>

          <div className="mt-8 grid gap-4">
            {TOC.map((item) => (
              <div key={item.title} className="rulebox p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="stamp">{item.tag}</span>
                  <span className="stamp">Issue 01</span>
                </div>

                <h3 className="headline mt-4 text-xl md:text-2xl">{item.title}</h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[rgba(14,15,18,0.68)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Editorial note */}
          <div className="mt-10 border-t pt-7" style={{ borderColor: "var(--rule)" }}>
            <p className="kicker">{lang === "es" ? "Nota editorial" : "Editorial note"}</p>
            <p className="lede mt-3 text-[15px]">
              {lang === "es"
                ? "Paperboy no intenta competir con redes sociales. Hace lo contrario. Construye vida útil, confianza local, y una razón para volver a mirar hacia arriba."
                : "Paperboy isn’t trying to compete with social media. It’s doing the opposite. It’s building shelf life, local trust, and a reason to look up again."}
            </p>

            <p className="mt-4 text-[12px] text-[rgba(14,15,18,0.55)]">
              {lang === "es"
                ? "“El internet se hizo más rápido. Nos cansamos. Así que hicimos algo más lento.”"
                : "“The internet got faster. We got tired. So we made something slower.”"}
            </p>
          </div>
        </div>

        {/* Right column */}
        <aside className="grid gap-6">
          <div className="zine-card p-7">
            <div className="flex items-center justify-between">
              <p className="kicker">{lang === "es" ? "Cómo conseguirla" : "How to get Issue 01"}</p>
              <span className="stamp">IRL</span>
            </div>

            <p className="lede mt-4 text-[15px]">
              {lang === "es"
                ? "Edición 01 se distribuye por personas que apoyan y socios de pickup. ¿Quieres llevarla a tu negocio o evento?"
                : "Issue 01 is distributed through supporters and pickup partners. Want to carry it at your business or event?"}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link href={`/${lang}/get-involved`} className="btn-ink w-full">
                {lang === "es" ? "Ser punto de pickup" : "Become a pickup spot"}
              </Link>
              <Link href={`/${lang}/contact`} className="btn-outline w-full">
                {lang === "es" ? "Contacto" : "Contact"}
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-[rgba(14,15,18,0.55)]">
              {lang === "es"
                ? "Tirada limitada. Sin promesas de reimpresión. Ese es el punto."
                : "Limited print run. No restock promises. That’s the point."}
            </p>
          </div>

          <div className="rulebox p-7">
            <p className="kicker">{lang === "es" ? "Apoyo" : "Support"}</p>
            <h3 className="headline mt-3 text-2xl leading-tight">
              {lang === "es" ? "Sin anuncios. Más humano." : "Keep it ad-free. Keep it human."}
            </h3>
            <p className="lede mt-3 text-[15px]">
              {lang === "es"
                ? "Tu apoyo cubre impresión, distribución comunitaria, y colaboración creativa justa, sin convertir Paperboy en contenido."
                : "Your support funds printing, community distribution, and fair creative collaboration without turning Paperboy into content."}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link href={`/${lang}/support`} className="btn-ink w-full">
                {lang === "es" ? "Apoyar Edición 01" : "Support Issue 01"}
              </Link>
              <Link href={`/${lang}/mission`} className="btn-outline w-full">
                {lang === "es" ? "Leer el manifiesto" : "Read the manifesto"}
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}