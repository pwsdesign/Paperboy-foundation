import Link from "next/link";

const TIERS = [
  {
    title: "Keep it printing",
    amount: "$10",
    note: "Ink, paper, staples, the unsexy essentials.",
  },
  {
    title: "Sponsor a bundle",
    amount: "$25",
    note: "Helps place copies in local pickup spots.",
  },
  {
    title: "Fund a feature",
    amount: "$50",
    note: "Supports artists, makers, and production time.",
  },
  {
    title: "Back a print run",
    amount: "$100",
    note: "Big swing. Keeps it ad-free and independent.",
  },
];

export default function SupportPage() {
  return (
    <main className="wrap py-16 md:py-24">
      {/* Header */}
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        {/* Grain overlay */}
        <div className="xerox-grain" aria-hidden="true" />

        <div className="relative">
          <p className="kicker">Support</p>

          <h1 className="basset-cta mt-4 text-5xl md:text-7xl">
    Keep Paperboy ad-free and algorithm-free.
            <span className="block mt-2 text-[13px] md:text-[15px] tracking-[0.22em] uppercase opacity-80">
              No ads. No algorithms. Just the print run.
            </span>
          </h1>

          <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
            Paperboy is a nonprofit print project built for shelf life. Your
            support funds printing, distribution, and fair creative
            collaboration — without turning this into content.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/issue-01" className="btn-outline">
              Explore Issue 01
            </Link>
            <Link href="/get-involved" className="btn-outline">
              Get involved
            </Link>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="mt-10 grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-start">
        {/* Left: tiers + notes */}
        <div className="zine-card p-7 md:p-10">
          <div className="flex items-center justify-between">
            <p className="kicker">Ways to support</p>
            <span className="stamp">Monthly or one-time</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {TIERS.map((t) => (
              <div key={t.title} className="rulebox p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="headline text-lg leading-snug">{t.title}</h3>
                  <span className="stamp">{t.amount}</span>
                </div>
                <p className="lede mt-3 text-[13px] leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 border-t pt-6"
            style={{ borderColor: "var(--rule)" }}
          >
            <p className="kicker">Where the money goes</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rulebox p-5">
                <p className="headline text-base">Print + materials</p>
                <p className="lede mt-2 text-[13px]">
                  Paper, ink, proofing, and production costs.
                </p>
              </div>
              <div className="rulebox p-5">
                <p className="headline text-base">Distribution</p>
                <p className="lede mt-2 text-[13px]">
                  Pickup spots, packing, and local drop logistics.
                </p>
              </div>
              <div className="rulebox p-5">
                <p className="headline text-base">Creators</p>
                <p className="lede mt-2 text-[13px]">
                  Fair collaboration with artists and makers.
                </p>
              </div>
              <div className="rulebox p-5">
                <p className="headline text-base">Operations</p>
                <p className="lede mt-2 text-[13px]">
                  Web hosting, tools, and basic admin needs.
                </p>
              </div>
            </div>

            <p className="mt-5 text-[12px] text-[rgba(14,15,18,0.55)]">
              Want to support in-kind (printing help, pickup location, sponsor
              bundles)?{" "}
              <Link className="underline" href="/contact">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right: embed card */}
        <aside className="zine-card p-7 md:p-8">
          <div className="flex items-center justify-between">
            <p className="kicker">Donate</p>
            <span className="stamp">Secure</span>
          </div>

          <p className="lede mt-4 text-[14px] leading-relaxed">
            Use the form below to give one-time or monthly. If you don’t see the
            form, your ad blocker may be hiding it.
          </p>

          <div className="mt-6 rulebox p-3 md:p-4">
  {process.env.NEXT_PUBLIC_DONATE_EMBED_URL ? (
    <iframe
      title="Donate"
      src={process.env.NEXT_PUBLIC_DONATE_EMBED_URL}
      className="h-[720px] w-full rounded-[16px]"
      style={{
        border: "1px solid var(--rule)",
        background: "rgba(255,255,255,0.35)",
      }}
      loading="lazy"
      allow="payment"
    />
  ) : (
    <p className="text-[12px] text-red-700">
      Setup needed: add NEXT_PUBLIC_DONATE_EMBED_URL in <code>.env.local</code>.
    </p>
  )}
</div>

          <div className="mt-6">
            <p className="kicker">Transparency</p>
            <p className="mt-2 text-[12px] text-[rgba(14,15,18,0.55)]">
              Paperboy Foundation is building slow media as public good. We keep
              it small, local, and collectible.
            </p>
          </div>
        </aside>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12 rulebox p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <p className="kicker">Prefer physical support?</p>
            <h2 className="headline mt-3 text-3xl">
              Become a pickup spot or distributor.
            </h2>
            <p className="lede mt-4 text-[15px]">
              Help place copies where people already gather: cafes, studios,
              shops, hotels, galleries.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/get-involved" className="btn-ink w-full">
              Get involved
            </Link>
            <Link href="/contact" className="btn-outline w-full">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}