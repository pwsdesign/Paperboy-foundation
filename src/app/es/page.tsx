import Link from "next/link";
import { NewsletterSignup } from "../components/NewsletterSignup";

const MINI_TOC = [
  { title: "Carta del editor", tag: "Por qué existe" },
  { title: "Artistas y creadores", tag: "Trabajo en papel" },
  { title: "Amor a los negocios locales", tag: "Cultura local" },
  { title: "Ensayo fotográfico", tag: "Hecho para guardarse" },
];

export default function HomePage() {
  const lang = "es";

  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="kicker">Paperboy Foundation</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px]">
              <span className="stamp">Enero 2026</span>
              <span className="stamp">Edición 001</span>
              <span className="stamp">Miami, FL</span>
            </div>

            <h1 className="hero-statement text-5xl md:text-7xl">
              <span className="pixel-headline block">MEDIO LENTO. IMPACTO FUERTE</span>
              <span className="block mt-3 text-[14px] md:text-[16px] tracking-[0.22em] uppercase opacity-80">
                Un proyecto impreso sin fines de lucro para combatir el cansancio de scrollear.
              </span>
            </h1>

            <p className="lede mt-5 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
              Un proyecto impreso sin fines de lucro que combate el agotamiento digital y reconstruye conexión local a través de{" "}
              <span className="em-italic">objetos físicos</span> que la gente guarda. No es noticias. No es social.{" "}
              <span className="em-fun">Papel</span> con vida útil.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <span className="stamp">Sin anuncios</span>
            <span className="stamp">Sin algoritmos</span>
            <span className="stamp">Primero en papel</span>
            <span className="stamp">Comunidad</span>
          </div>
        </div>

        <div className="mt-10 border-t pt-7" style={{ borderColor: "var(--rule)" }}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={`/${lang}/issue-01`} className="btn-ink">
              Ver Edición 01
            </Link>
            <Link href={`/${lang}/support`} className="btn-outline">
              Apoyar la impresión
            </Link>
            <Link href={`/${lang}/get-involved`} className="btn-outline">
              Participa
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 md:mt-20">
        <div className="mb-10 border-t" style={{ borderColor: "var(--rule)" }} />

        <div className="grid gap-7 md:grid-cols-[1.15fr_.85fr] md:items-start">
          <div className="zine-card p-7 md:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="stamp">Edición 01</span>
              <span className="stamp">Edición 001</span>
              <span className="stamp">Inaugural</span>
              <span className="stamp">Tirada limitada</span>
            </div>

            <h2 className="headline tephra-headline mt-7 text-3xl md:text-5xl leading-tight">
              Un botón físico de pausa.
            </h2>

            <p className="lede mt-5 text-[15px] md:text-[16px]">
              Paperboy está diseñado como un <span className="em-fun">disco</span> o un{" "}
              <span className="em-italic">fanzine</span>: algo que guardas, vuelves a abrir y compartes fuera de pantalla.
              La primera edición se financia sola. A largo plazo, se sostiene con apoyo comunitario, ediciones limitadas y grants.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rulebox p-6">
                <p className="kicker">Portada</p>
                <p className="lede mt-4 text-[16px] leading-relaxed">
                  “Internet se aceleró. Nosotros nos cansamos. Así que hicimos algo más lento.”
                </p>
                <p className="mt-4 text-[12px] text-[rgba(14,15,18,0.55)]">
                  Paperboy Foundation
                </p>
              </div>

              <div className="rulebox p-6">
                <p className="kicker">Cómo conseguirlo</p>
                <p className="lede mt-4 text-[15px]">
                  Apoyo comunitario y puntos de recogida. ¿Quieres distribuir Edición 01?{" "}
                  <span className="em-shout">Conviértete en distribuidor.</span>
                </p>
                <div className="mt-5 flex gap-3">
                  <Link href={`/${lang}/support`} className="btn-ink">Apoyar</Link>
                  <Link href={`/${lang}/contact`} className="btn-outline">Contacto</Link>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t pt-7" style={{ borderColor: "var(--rule)" }}>
              <p className="kicker">Nota editorial</p>
              <p className="lede mt-4 text-[15px]">
                Paperboy es intencionalmente pequeño: <span className="em-italic">menos ediciones</span>,{" "}
                <span className="em-fun">mejor trabajo</span>, más vida útil. Publicar como un acto de cuidado.
              </p>
            </div>
          </div>

          <aside className="zine-card p-7 md:p-8">
            <div className="flex items-center justify-between">
              <p className="kicker">Dentro de Edición 01</p>
              <span className="stamp">TOC</span>
            </div>

            <div className="mt-6 grid gap-4">
              {MINI_TOC.map((item) => (
                <div key={item.title} className="rulebox p-6">
                  <h3 className="headline text-lg">{item.title}</h3>
                  <p className="mt-2 text-[13px] text-[rgba(14,15,18,0.6)]">
                    {item.tag}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="stamp">DIY</span>
                <span className="stamp">No es contenido</span>
                <span className="stamp">Guárdalo</span>
              </div>

              <p className="kicker">Nota de coleccionista</p>
              <p className="mt-3 text-[13px] text-[rgba(14,15,18,0.6)]">
                Diseñado para guardarse, regalarse y releerse.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="mb-10 border-t" style={{ borderColor: "var(--rule)" }} />
        <NewsletterSignup lang={lang} />
      </section>

      <section className="mt-16 md:mt-24">
        <div className="mb-10 border-t" style={{ borderColor: "var(--rule)" }} />

        <div className="rulebox p-8 md:p-12">
          <div className="grid gap-7 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <p className="kicker">Apoya la próxima impresión</p>
              <h1 className="headline mt-4 text-3xl">
                <span className="basset-cta">Mantén Paperboy sin anuncios</span> y sin algoritmos.
              </h1>
              <p className="lede mt-5 text-[15px]">
                Tu apoyo financia impresión, distribución y colaboración creativa justa — sin convertir Paperboy en contenido.
              </p>

              <p className="mt-5 text-[12px] text-[rgba(14,15,18,0.55)]">
                Publicado en Miami, Florida • Enero 2026
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-wider text-[rgba(14,15,18,0.45)]">
                Código: PB-ISSUE-01-ED-001
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link href={`/${lang}/support`} className="btn-ink w-full">Apoyar</Link>
              <Link href={`/${lang}/get-involved`} className="btn-outline w-full">Participa</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}