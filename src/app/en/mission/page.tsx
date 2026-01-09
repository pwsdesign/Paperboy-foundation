import Link from "next/link";

const PRINCIPLES = [
  { title: "Print-first", desc: "We design for paper before pixels. The website is the trailer, not the movie." },
  { title: "Slow on purpose", desc: "Fewer issues. Better work. More shelf life. We don’t chase the feed." },
  { title: "Local, not viral", desc: "We amplify neighborhoods, makers, small businesses, and culture you can actually touch." },
  { title: "No ads. No algorithms.", desc: "Attention is sacred. We won’t sell it, trade it, or trick you into giving more of it." },
  { title: "Designed to be kept", desc: "Paperboy is meant to live on a table, in a bag, on a shelf. It should age well." },
  { title: "Community-funded", desc: "Supported by people who want something better than content. Grants, patrons, limited editions." },
];

const MANIFESTO_LINES = [
  "The internet got faster.",
  "We got tired.",
  "So we made something slower.",
  "A physical pause button.",
  "A small rebellion against scroll fatigue.",
  "A collectible object that brings people back to real places.",
];

export default function MissionPage() {
  const lang = "en";

  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="kicker wilko-label">Mission</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px]">
              <span className="stamp">Nonprofit</span>
              <span className="stamp">Print-first</span>
              <span className="stamp">Miami-rooted</span>
              <span className="stamp">Anti-scroll</span>
            </div>

            <h1 className="hero-statement mt-5 text-5xl md:text-7xl">
              We publish to make people feel <span className="burghi-variable-word">feel human.</span>,
              <span className="block mt-3 text-[14px] md:text-[16px] tracking-[0.22em] uppercase opacity-80">
                Slow, collectible media for a world that scrolls too fast.
              </span>
            </h1>

            <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
              Paperboy Foundation is a nonprofit print project built to fight digital burnout and rebuild local connection through{" "}
              <span className="em-italic">physical objects</span> people keep. Not news. Not social.{" "}
              <span className="em-fun">Printed matter</span> with shelf life.
            </p>

            <div className="mt-10 border-t pt-7" style={{ borderColor: "var(--rule)" }}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`/${lang}/issue-01`} className="btn-ink">Explore Issue 01</Link>
                <Link href={`/${lang}/support`} className="btn-outline">Support the print run</Link>
                <Link href={`/${lang}/get-involved`} className="btn-outline">Get involved</Link>
              </div>
            </div>
          </div>

          <aside className="zine-card p-6 md:p-7 md:w-[420px]">
            <div className="flex items-center justify-between">
              <p className="kicker wilko-label">Manifesto</p>
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
              Publication stance: no ads, no algorithmic distribution, no chasing outrage. Just intentional publishing.
            </p>
          </aside>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="zine-card p-6 md:p-7">
            <p className="kicker wilko-label">Principle</p>
            <h2 className="section-strong mt-3 text-2xl">{p.title}</h2>
            <p className="lede mt-4 text-[15px] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rulebox p-7 md:p-10">
          <p className="kicker wilko-label">What we do</p>
          <h2 className="headline mt-3 text-3xl">Publish as an act of care.</h2>

          <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed">
            <li><span className="em-shout">Feature</span> local artists, makers, musicians, and small businesses.</li>
            <li><span className="em-shout">Design</span> each issue like a collectible object.</li>
            <li><span className="em-shout">Distribute</span> through community pickup spots and supporters.</li>
            <li><span className="em-shout">Collaborate</span> fairly and transparently with creatives.</li>
          </ul>

          <p className="mt-6 text-[12px] text-[rgba(14,15,18,0.55)]">
            Not everything needs to be “content.” Some things should be kept.
          </p>
        </div>

        <div className="rulebox p-7 md:p-10">
          <p className="kicker wilko-label">What we don’t do</p>
          <h2 className="headline mt-3 text-3xl">We refuse the usual trade.</h2>

          <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed">
            <li>No ads. No sponsored editorial.</li>
            <li>No algorithm-chasing headlines.</li>
            <li>No doomscroll design patterns.</li>
            <li>No farming attention with outrage.</li>
          </ul>

          <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
            <p className="kicker">Short version</p>
            <p className="lede mt-3 text-[15px]">If it can’t exist offline, we don’t build it.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 zine-card p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <p className="kicker wilko-label">Join the foundation</p>
            <h2 className="headline mt-3 text-3xl">Help fund print that doesn’t beg for attention.</h2>
            <p className="lede mt-4 text-[15px]">
              Your support keeps Paperboy ad-free, community-rooted, and designed to be kept.
            </p>
            <p className="mt-4 text-[12px] text-[rgba(14,15,18,0.55)]">
              Published in Miami, Florida • Paperboy Foundation
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href={`/${lang}/support`} className="btn-ink w-full">Support</Link>
            <Link href={`/${lang}/get-involved`} className="btn-outline w-full">Get involved</Link>
          </div>
        </div>
      </section>
    </main>
  );
}