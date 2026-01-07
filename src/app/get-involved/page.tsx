import Link from "next/link";

const WAYS = [
  {
    title: "Carry the zine",
    tag: "Distribution",
    copy: "Coffee shops, studios, record stores, galleries. We place small stacks with care.",
    cta: { href: "/contact", label: "Become a pickup spot" },
  },
  {
    title: "Submit a story",
    tag: "Features",
    copy: "Artists, makers, small businesses, cultural moments. We tell it with taste and restraint.",
    cta: { href: "/contact", label: "Pitch a story" },
  },
  {
    title: "Volunteer a hand",
    tag: "Street team",
    copy: "Help with drops, photos, outreach, and neighborhood connections.",
    cta: { href: "/contact", label: "Join the street team" },
  },
  {
    title: "Partner with us",
    tag: "Collabs",
    copy: "If your mission aligns: community, culture, and slow media—let’s build.",
    cta: { href: "/contact", label: "Start a partnership" },
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12 grain relative">
        <div className="xerox-grain" aria-hidden="true" />
        <div className="max-w-3xl">
          <p className="kicker">Get involved</p>

          <h1 className="ziclets-statement mt-4 text-4xl md:text-6xl">
            Build something offline, with people who care.
          </h1>

          <p className="lede mt-5 text-[15px] md:text-[17px] leading-relaxed">
            Paperboy is community-rooted. We publish small, distribute intentionally, and keep it human.
            Here’s how to plug in.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-ink" href="/contact">
              Say hello
            </Link>
            <Link className="btn-outline" href="/support">
              Support the print run
            </Link>
          </div>
        </div>
      </section>

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

      <section className="mt-12 rulebox p-7 md:p-12">
        <p className="kicker">Quick rules</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rulebox p-5">
            <p className="headline text-lg">Small runs</p>
            <p className="lede mt-3 text-[14px]">
              Limited drops so it stays collectible and intentional.
            </p>
          </div>
          <div className="rulebox p-5">
            <p className="headline text-lg">Real places</p>
            <p className="lede mt-3 text-[14px]">
              We prioritize local pickup points over shipping everything.
            </p>
          </div>
          <div className="rulebox p-5">
            <p className="headline text-lg">Tasteful features</p>
            <p className="lede mt-3 text-[14px]">
              We don’t do hype. We do story, craft, and visuals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}