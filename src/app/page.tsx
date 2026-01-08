import Link from "next/link";
import { NewsletterSignup } from "./components/NewsletterSignup";

const MINI_TOC = [
  { title: "Letter from the Editor", tag: "Why this exists" },
  { title: "Artists & Makers", tag: "Work on paper" },
  { title: "Small Business Love", tag: "Local culture" },
  { title: "Photo Essay", tag: "Designed to be kept" },
];

export default function HomePage() {
  return (
    <main className="wrap py-16 md:py-24">
      {/* =======================
          LANGUAGE CHOOSER (TOP GATE)
          ======================= */}
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="xerox-grain" aria-hidden="true" />

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between relative">
          <div className="max-w-3xl">
            <p className="kicker">Paperboy Foundation</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px]">
              <span className="stamp">January 2026</span>
              <span className="stamp">Edition 001</span>
              <span className="stamp">Miami, FL</span>
            </div>

            <h1 className="hero-statement text-5xl md:text-7xl mt-5">
              <span className="pixel-headline block">SLOW MEDIA. LOUD IMPACT</span>

              <span className="block mt-3 text-[14px] md:text-[16px] tracking-[0.22em] uppercase opacity-80">
                Choose your language • Elige tu idioma
              </span>
            </h1>

            <p className="lede mt-5 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
              Paperboy is slow, collectible media designed to be kept. Pick a language to enter.
              <span className="block mt-2">
                Paperboy es un proyecto impreso, lento y coleccionable. Elige un idioma para entrar.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto md:items-end">
            <div className="flex flex-wrap gap-2 md:justify-end">
              <span className="stamp">No ads</span>
              <span className="stamp">No algorithms</span>
              <span className="stamp">Print-first</span>
              <span className="stamp">Community-rooted</span>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link href="/en" className="btn-ink">
                English
              </Link>
              <Link href="/es" className="btn-outline">
                Español
              </Link>
            </div>

            <p className="mt-2 text-[12px] text-[rgba(14,15,18,0.55)] md:text-right">
              You can switch anytime in the header.
              <span className="block">Puedes cambiar en cualquier momento en el menú.</span>
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          SECTION 2: “SPREAD” (A/B columns)
          ======================= */}
      <section className="mt-14 md:mt-20">
        <div className="mb-10 border-t" style={{ borderColor: "var(--rule)" }} />

        <div className="grid gap-7 md:grid-cols-[1.15fr_.85fr] md:items-start">
          {/* Left: Feature */}
          <div className="zine-card p-7 md:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="stamp">Issue 01</span>
              <span className="stamp">Edition 001</span>
              <span className="stamp">Inaugural</span>
              <span className="stamp">Limited Print Run</span>
            </div>

            <h2 className="headline tephra-headline mt-7 text-3xl md:text-5xl leading-tight">
              A physical pause button.
            </h2>

            <p className="lede mt-5 text-[15px] md:text-[16px]">
              Paperboy is designed like a{" "}
              <span className="em-fun">record</span> or a{" "}
              <span className="em-italic">zine</span> , something you keep,
              revisit, and share offline. The first issue is self-funded.
              Long-term, the project sustains through community support, limited
              editions, and grants.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rulebox p-6">
                <p className="kicker">Cover story</p>
                <p className="lede mt-4 text-[16px] leading-relaxed">
                  “The internet got faster. We got tired. So we made something
                  slower.”
                </p>
                <p className="mt-4 text-[12px] text-[rgba(14,15,18,0.55)]">
                  Paperboy Foundation
                </p>
              </div>

              <div className="rulebox p-6">
                <p className="kicker">How to get it</p>
                <p className="lede mt-4 text-[15px]">
                  Supporters and community pickup spots. Want to carry Issue 01{" "}
                  <span className="em-shout">Become a distributor.</span>
                </p>
                <div className="mt-5 flex gap-3">
                  <Link href="/support" className="btn-ink">
                    Support
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t pt-7" style={{ borderColor: "var(--rule)" }}>
              <p className="kicker">Editorial note</p>
              <p className="lede mt-4 text-[15px]">
                Paperboy is intentionally small-scale{" "}
                <span className="em-italic">fewer issues</span>{" "}
                <span className="em-fun">better work</span> longer shelf life.
                Publishing as an act of care.
              </p>
            </div>
          </div>

          {/* Right: Mini TOC */}
          <aside className="zine-card p-7 md:p-8">
            <div className="flex items-center justify-between">
              <p className="kicker">Inside Issue 01</p>
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
                <span className="stamp">DIY publishing</span>
                <span className="stamp">Not content</span>
                <span className="stamp">Keep it</span>
              </div>

              <p className="kicker">Collector note</p>
              <p className="mt-3 text-[13px] text-[rgba(14,15,18,0.6)]">
                Designed to be kept, gifted, and revisited.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* =======================
          SECTION 3: NEWSLETTER
          ======================= */}
      <section className="mt-16 md:mt-24">
        <div className="mb-10 border-t" style={{ borderColor: "var(--rule)" }} />
        <NewsletterSignup />
      </section>

      {/* =======================
          SECTION 4: BOTTOM CTA
          ======================= */}
      <section className="mt-16 md:mt-24">
        <div className="mb-10 border-t" style={{ borderColor: "var(--rule)" }} />

        <div className="rulebox p-8 md:p-12">
          <div className="grid gap-7 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <p className="kicker">Support the next print run</p>
              <h1 className="headline mt-4 text-3xl">
                <span className="basset-cta">Keep Paperboy ad-free</span> and algorithm-free.
              </h1>

              <p className="lede mt-5 text-[15px]">
                Your support funds printing, distribution, and fair creative collaboration without turning Paperboy into content.
              </p>

              <p className="mt-5 text-[12px] text-[rgba(14,15,18,0.55)]">
                Published in Miami, Florida • January 2026
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-wider text-[rgba(14,15,18,0.45)]">
                Publication Code: PB-ISSUE-01-ED-001
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/support" className="btn-ink w-full">
                Support
              </Link>
              <Link href="/get-involved" className="btn-outline w-full">
                Get involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}