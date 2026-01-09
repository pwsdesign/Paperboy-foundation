import Link from "next/link";

const TOC = [
  {
    title: "Carta del editor",
    tag: "Por qué existe",
    desc: "Una nota corta y honesta sobre construir algo físico en un mundo digital.",
  },
  {
    title: "Artistas y creadores",
    tag: "Trabajo en papel",
    desc: "Creadores seleccionados, fotografiados como archivos, no contenido.",
  },
  {
    title: "Negocios locales",
    tag: "Cultura local",
    desc: "Los lugares que hacen que Miami se sienta como Miami, sin algoritmo.",
  },
  {
    title: "Ensayo fotográfico",
    tag: "Diseñado para guardarse",
    desc: "Una historia visual para hojear lentamente, como un disco.",
  },
];

const SPECS = [
  { label: "Edición", value: "001" },
  { label: "Mes", value: "Enero 2026" },
  { label: "Publicado en", value: "Miami, Florida" },
  { label: "Formato", value: "Impreso • coleccionable" },
  { label: "Anuncios", value: "Ninguno" },
  { label: "Distribución", value: "Pickup • apoyo • socios" },
];

export default function Issue01ES() {
  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12">
        <p className="kicker">Paperboy Foundation</p>

        <h1 className="hero-statement mt-5 text-5xl md:text-7xl">
          Edición 01
          <span className="block mt-2 text-[14px] md:text-[16px] tracking-[0.22em] uppercase opacity-80">
            Un botón físico de pausa.
          </span>
        </h1>

        <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px]">
          Esta edición está pensada como un objeto. Pocas palabras, imágenes
          fuertes y un ritmo que se siente. Para sostenerse, revisitarse y
          quedarse en una mesa.
        </p>

        <div className="mt-7 flex gap-3">
          <Link href="/es/support" className="btn-ink">
            Apoyar Edición 01
          </Link>
          <Link href="/es" className="btn-outline">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}