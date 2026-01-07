import Link from "next/link";

type Props = {
  title?: string;
  note?: string;
};

<div className="mt-14 mb-6 flex flex-wrap gap-2">
  <span className="stamp">tear here</span>
  <span className="stamp">copy me</span>
  <span className="stamp">post me</span>
</div>

export function NewsletterSignup({
  title = "JOIN THE DROP LIST",
  note = "One email when a new issue drops. No spam. No feed. Just print.",
}: Props) {
  const action =
    process.env.NEXT_PUBLIC_NEWSLETTER_ACTION || "https://example.com";
  const hasRealAction = !!process.env.NEXT_PUBLIC_NEWSLETTER_ACTION;

  return (
    <section className="rulebox p-8 md:p-12">
      {/* Zine header strip */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="stamp">Newsletter</span>
          <span className="stamp">Issue drops</span>
          <span className="stamp">No spam</span>
        </div>

        <span className="stamp">PB-DROP-01</span>
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-[1.15fr_.85fr] md:items-start">
        {/* Left copy */}
        <div>
          <h2 className="headline text-3xl md:text-4xl leading-tight">
            {title}
          </h2>

          <p className="lede mt-4 text-[15px] md:text-[16px] leading-relaxed">
            {note}{" "}
            <span className="em-shout">No algorithms.</span>{" "}
            <span className="em-italic">No doomscroll.</span>{" "}
            <span className="em-fun">Just paper.</span>
          </p>

          <div
            className="mt-7 border-t pt-5"
            style={{ borderColor: "var(--rule)" }}
          >
            <p className="text-[12px] text-[rgba(14,15,18,0.62)] leading-relaxed">
              Prefer staying offline? Get the physical distribution list on{" "}
              <Link className="underline" href="/get-involved">
                Get involved
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right form (zine label vibe) */}
        <form
          className="zine-card p-6 md:p-7"
          action={action}
          method="post"
          target="_blank"
          rel="noreferrer"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="flex items-center justify-between gap-3">
            <p className="kicker">SIGNUP</p>
            <span className="stamp">FREE</span>
          </div>

          <div
            className="mt-4 border-t pt-5"
            style={{ borderColor: "var(--rule)" }}
          >
            <label className="kicker" htmlFor="email">
              Email address
            </label>

            <div className="mt-3 flex gap-3">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full rounded-full border px-4 py-3 text-[14px] outline-none"
                style={{
                  borderColor: "var(--rule)",
                  background: "rgba(255,255,255,0.55)",
                  color: "var(--ink)",
                }}
              />

              <button type="submit" className="btn-ink whitespace-nowrap">
                JOIN
              </button>
            </div>

            <p className="mt-4 text-[11px] text-[rgba(14,15,18,0.58)] leading-relaxed">
              You’ll only get issue drop notifications. Nothing else.
            </p>

            {!hasRealAction && (
              <p className="mt-3 text-[11px] text-red-700">
                Setup needed: add NEXT_PUBLIC_NEWSLETTER_ACTION in .env.local.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}