import Link from "next/link";

const WAYS = [
  {
    title: "Distribuye el fanzine",
    tag: "Distribución",
    copy:
      "Cafeterías, estudios, tiendas de discos, galerías. Colocamos pequeños lotes con cuidado.",
    cta: { href: "/es/contact", label: "Sé un punto de distribución" },
  },
  {
    title: "Propón una historia",
    tag: "Contenidos",
    copy:
      "Artistas, creadores, pequeños negocios, momentos culturales. Contamos historias con criterio y sensibilidad.",
    cta: { href: "/es/contact", label: "Proponer historia" },
  },
  {
    title: "Suma una mano",
    tag: "Equipo callejero",
    copy:
      "Ayuda con entregas, fotos, difusión y conexiones en el vecindario.",
    cta: { href: "/es/contact", label: "Únete al equipo" },
  },
  {
    title: "Colabora con nosotros",
    tag: "Alianzas",
    copy:
      "Si tu misión se alinea con comunidad, cultura y medios lentos, construyamos juntos.",
    cta: { href: "/es/contact", label: "Iniciar colaboración" },
  },
];

export default function GetInvolvedES() {
  return (
    <main className="wrap py-16 md:py-24">
      {/* HERO */}
      <section className="rulebox p-7 md:p-12 grain relative">
        <div className="xerox-grain" aria-hidden="true" />

        <div className="max-w-3xl">
          <p className="kicker">Involúcrate</p>

          <h1 className="ziclets-statement mt-4 text-4xl md:text-6xl">
            Construye algo fuera de pantalla, con gente que sí le importa.
          </h1>

          <p className="lede mt-5 text-[15px] md:text-[17px] leading-relaxed">
            Paperboy nace desde la comunidad. Publicamos poco, distribuimos con intención
            y mantenemos lo humano en el centro. Así puedes participar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-ink" href="/es/contact">
              Di hola
            </Link>
            <Link className="btn-outline" href="/es/support">
              Apoya la impresión
            </Link>
          </div>
        </div>
      </section>

      {/* WAYS */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {WAYS.map((w) => (
          <div key={w.title} className="zine-card p-6 md:p-9 grain relative">
            <div className="xerox-grain" aria-hidden="true" />

            <div className="flex items-center justify-between gap-4">
              <p className="headline text-2xl">{w.title}</p>
              <span className="stamp">{w.tag}</span>
            </div>

            <p className="lede mt-4 text-[15px]">{w.copy}</p>

            <div className="mt-6">
              <Link className="btn-outline" href={w.cta.href}>
                {w.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* RULES */}
      <section className="mt-12 rulebox p-7 md:p-12">
        <p className="kicker">Reglas rápidas</p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rulebox p-5">
            <p className="headline text-lg">Tirajes pequeños</p>
            <p className="lede mt-3 text-[14px]">
              Ediciones limitadas para mantenerlo coleccionable e intencional.
            </p>
          </div>

          <div className="rulebox p-5">
            <p className="headline text-lg">Lugares reales</p>
            <p className="lede mt-3 text-[14px]">
              Priorizamos puntos locales en lugar de envíos masivos.
            </p>
          </div>

          <div className="rulebox p-5">
            <p className="headline text-lg">Contenido con criterio</p>
            <p className="lede mt-3 text-[14px]">
              No hacemos hype. Hacemos historias, oficio y visuales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}