import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoryEN, STORIES_EN } from "@/lib/stories.en";

export function generateStaticParams() {
  return STORIES_EN.map((s) => ({ slug: s.slug }));
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const lang = "en";
  const story = getStoryEN(params.slug);
  if (!story) return notFound();

  return (
    <main className="wrap py-16 md:py-24">
      <div className="mb-6">
        <Link href={`/${lang}/stories`} className="underline text-[13px]">
          ← Back to Stories
        </Link>
      </div>

      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="grain">
          <p className="kicker">{story.issue}</p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="stamp">{story.tag}</span>
            {story.location ? <span className="stamp">{story.location}</span> : null}
            {story.date ? <span className="stamp">{story.date}</span> : null}
            {story.minutes ? <span className="stamp">{story.minutes} min</span> : null}
          </div>

          <h1 className="hero-statement mt-5 text-4xl md:text-6xl">{story.title}</h1>

          <p className="lede mt-4 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
            {story.subtitle}
          </p>

          {story.coverQuote ? (
            <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
              <p className="kicker">A line from the piece</p>
              <p className="lede mt-3 text-[16px] leading-relaxed">“{story.coverQuote}”</p>
            </div>
          ) : null}
        </div>
      </section>

      <article className="mt-10 zine-card p-7 md:p-12">
        {story.sections.map((sec, idx) => (
          <section key={idx} className={idx === 0 ? "" : "mt-10"}>
            {sec.heading ? <h2 className="headline text-2xl md:text-3xl">{sec.heading}</h2> : null}

            <div className="mt-4 space-y-5">
              {sec.body.map((p, i) => (
                <p key={i} className="lede text-[15px] md:text-[16px] leading-relaxed">{p}</p>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
          <p className="kicker">Print note</p>
          <p className="lede mt-3 text-[14px] leading-relaxed">
            This story appears in the print fanzine as a visual-first feature. The web
            version exists for deeper reading — not scrolling.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${lang}/issue-01`} className="btn-outline">View Issue 01</Link>
            <Link href={`/${lang}/support`} className="btn-ink">Support the print run</Link>
          </div>
        </div>
      </article>
    </main>
  );
}