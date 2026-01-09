import Link from "next/link";
import { STORIES_ES } from "@/lib/stories.es";

function unique<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function StoriesPage() {
  const lang = "es";
  const issues = unique(STORIES_ES.map((s) => s.issue));

  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12">
        <p className="kicker">Desde las páginas de Paperboy</p>

        <h1 className="headline text-5xl md:text-7xl">
          <span className="glowworm-mn">Historias</span>, desplegadas.
        </h1>

        <p className="lede mt-5 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
          Cada historia del fanzine impreso vive aquí en una versión más larga.
          No es feed. No es blog. Es un archivo para volver a leer.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {issues.map((issue) => (
            <span key={issue} className="stamp">{issue}</span>
          ))}
          <span className="stamp">Primero en papel</span>
          <span className="stamp">Sin algoritmos</span>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {STORIES_ES.map((s) => (
          <Link
            key={s.slug}
            href={`/${lang}/stories/${s.slug}`}
            className="zine-card p-6 md:p-8 block hover:opacity-[0.98]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="stamp">{s.issue}</span>
              <span className="stamp">{s.tag}</span>
              {s.location ? <span className="stamp">{s.location}</span> : null}
            </div>

            <h2 className="headline mt-5 text-2xl md:text-3xl leading-tight">{s.title}</h2>

            <p className="lede mt-3 text-[15px] leading-relaxed">{s.subtitle}</p>

            <div className="mt-5 flex items-center justify-between">
              <span className="kicker">{s.minutes ? `${s.minutes} min` : "Leer"}</span>
              <span className="underline text-[13px]">Leer</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}