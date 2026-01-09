import Link from "next/link";

const PRINCIPLES = [
  {
    title: "Primero en papel",
    desc: "Diseñamos para el papel antes que para los píxeles. El sitio es el tráiler, no la película.",
  },
  {
    title: "Lento a propósito",
    desc: "Menos ediciones. Mejor trabajo. Más vida útil. No perseguimos el feed.",
  },
  {
    title: "Local, no viral",
    desc: "Amplificamos barrios, creadores, pequeños negocios y cultura que puedes tocar.",
  },
  {
    title: "Sin anuncios. Sin algoritmos.",
    desc: "La atención es sagrada. No la vendemos, no la negociamos, no la manipulamos.",
  },
  {
    title: "Diseñado para guardarse",
    desc: "Paperboy está hecho para vivir en una mesa, en una bolsa, en un estante. Debe envejecer bien.",
  },
  {
    title: "Financiado por la comunidad",
    desc: "Apoyado por personas que quieren algo mejor que “contenido”. Subvenciones, mecenas y ediciones limitadas.",
  },
];

const MANIFESTO_LINES = [
  "El internet se volvió más rápido.",
  "Nos cansamos.",
  "Así que hicimos algo más lento.",
  "Un botón físico de pausa.",
  "Una pequeña rebelión contra el cansancio de deslizar.",
  "Un objeto coleccionable que te devuelve a lugares reales.",
];

export default function MissionPage() {
  return (
    <main className="wrap py-16 md:py-24">
      {/* HERO / MANIFIESTO */}
      <section className="rulebox p-7 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="kicker wilko-label">Misión</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px]">
              <span className="stamp">Sin fines de lucro</span>
              <span className="stamp">Primero en papel</span>
              <span className="stamp">Hecho en Miami</span>
              <span className="stamp">Anti-scroll</span>
            </div>

            <h1 className="hero-statement mt-5 text-5xl md:text-7xl">
              Publicamos para que la gente vuelva a <span className="burghi-variable-word">sentirse humana.</span>,
              <span className="block mt-3 text-[14px] md:text-[16px] tracking-[0.22em] uppercase opacity-80">
                Medios lentos y coleccionables para un mundo que desliza demasiado rápido.
              </span>
            </h1>

            <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
              Paperboy Foundation es un proyecto editorial sin fines de lucro creado para combatir
              el agotamiento digital y reconstruir la conexión local a través de{" "}
              <span className="em-italic">objetos físicos</span> que la gente guarda. No es noticia.
              No es social. <span className="em-fun">Papel con vida útil.</span>
            </p>

            <div className="mt-10 border-t pt-7" style={{ borderColor: "var(--rule)" }}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/es/issue-01" className="btn-ink">
                  Explorar Edición 01
                </Link>
                <Link href="/es/support" className="btn-outline">
                  Apoyar la impresión
                </Link>
                <Link href="/es/get-involved" className="btn-outline">
                  Participa
                </Link>
              </div>
            </div>
          </div>

          {/* Derecha: tarjetas de manifiesto */}
          <aside className="zine-card p-6 md:p-7 md:w-[420px]">
            <div className="flex items-center justify-between">
              <p className="kicker wilko-label">Manifiesto</p>
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
              Postura editorial: sin anuncios, sin distribución algorítmica, sin perseguir la indignación.
              Solo publicación intencional.
            </p>
          </aside>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="zine-card p-6 md:p-7">
            <p className="kicker wilko-label">Principio</p>
            <h2 className="section-strong mt-3 text-2xl">{p.title}</h2>
            <p className="lede mt-4 text-[15px] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* LO QUE HACEMOS / LO QUE NO */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rulebox p-7 md:p-10">
          <p className="kicker wilko-label">Lo que hacemos</p>
          <h2 className="headline mt-3 text-3xl">Publicar como un acto de cuidado.</h2>

          <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed">
            <li>
              <span className="em-shout">Destacamos</span> artistas, creadores, músicos y pequeños
              negocios locales.
            </li>
            <li>
              <span className="em-shout">Diseñamos</span> cada edición como un objeto coleccionable.
            </li>
            <li>
              <span className="em-shout">Distribuimos</span> mediante puntos de recogida y personas
              que apoyan.
            </li>
            <li>
              <span className="em-shout">Colaboramos</span> de forma justa y transparente con
              creativos.
            </li>
          </ul>

          <p className="mt-6 text-[12px] text-[rgba(14,15,18,0.55)]">
            No todo necesita ser “contenido”. Algunas cosas deben guardarse.
          </p>
        </div>

        <div className="rulebox p-7 md:p-10">
          <p className="kicker wilko-label">Lo que no hacemos</p>
          <h2 className="headline mt-3 text-3xl">Rechazamos el trato de siempre.</h2>

          <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed">
            <li>Sin anuncios. Sin editorial patrocinada.</li>
            <li>Sin titulares para el algoritmo.</li>
            <li>Sin patrones de doomscroll.</li>
            <li>Sin indignación como estrategia.</li>
          </ul>

          <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
            <p className="kicker">Versión corta</p>
            <p className="lede mt-3 text-[15px]">
              Si no puede existir fuera de internet, no lo construimos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 zine-card p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <p className="kicker wilko-label">Únete</p>
            <h2 className="headline mt-3 text-3xl">
              Ayuda a financiar impresión que no ruega por atención.
            </h2>
            <p className="lede mt-4 text-[15px]">
              Tu apoyo mantiene Paperboy sin anuncios, con raíces locales y diseñado para guardarse.
            </p>

            <p className="mt-4 text-[12px] text-[rgba(14,15,18,0.55)]">
              Publicado en Miami, Florida • Paperboy Foundation
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/es/support" className="btn-ink w-full">
              Apoyar
            </Link>
            <Link href="/es/get-involved" className="btn-outline w-full">
              Participa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}