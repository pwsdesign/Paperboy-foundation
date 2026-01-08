import Link from "next/link";
import { STORIES } from "@/lib/stories";

function unique<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function StoriesPage({
  params,
}: {
  params: { lang: "en" | "es" };
}) {
  const issues = unique(STORIES.map((s) => s.issue));
  const lang = params.lang;

  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12">
        <p className="kicker">
          {lang === "es" ? "De las páginas de Paperboy" : "From the pages of Paperboy"}
        </p>

        <h1 className="headline text-5xl md:text-7xl">
          <span className="glammo-word">
            {lang === "es" ? "Historias" : "Stories"}
          </span>
          {lang === "es" ? ", desplegadas." : ", unfolded."}
        </h1>

        <p className="lede mt-5 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
          {lang === "es"
            ? "Cada historia del fanzine impreso vive aquí en una versión más larga. No es feed. No es blog. Es un archivo para volver."
            : "Every story featured in the print fanzine lives here in a longer form. Not a feed. Not a blog. Just an archive worth revisiting."}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {issues.map((issue) => (
            <span key={issue} className="stamp">
              {issue}
            </span>
          ))}
          <span className="stamp">{lang === "es" ? "Primero en papel" : "Print-first"}</span>
          <span className="stamp">{lang === "es" ? "Sin algoritmos" : "No algorithms"}</span>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {STORIES.map((s) => (
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

            <h2 className="headline mt-5 text-2xl md:text-3xl leading-tight">
              {s.title}
            </h2>

            <p className="lede mt-3 text-[15px] leading-relaxed">
              {s.subtitle}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="kicker">
                {s.minutes ? `${s.minutes} min read` : lang === "es" ? "Leer" : "Read"}
              </span>
              <span className="underline text-[13px]">{lang === "es" ? "Leer" : "Read"}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}