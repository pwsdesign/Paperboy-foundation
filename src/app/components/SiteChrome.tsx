import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="masthead">
        <div className="wrap flex items-center justify-between py-4">
          <Link href="/" className="brand">
            Paperboy Foundation
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link className="navlink" href="/mission">
              Mission
            </Link>
            <Link className="navlink" href="/issue-01">
              Issue 01
            </Link>
            <Link className="navlink" href="/support">
              Support
            </Link>
            <Link className="navlink" href="/get-involved">
              Get involved
            </Link>
            <Link className="navlink" href="/transparency">
              Transparency
            </Link>
            <Link className="navlink" href="/contact">
              Contact
            </Link>
            <Link className="navlink" href="/colophon">
            Colophon
            </Link>
            <Link className="navlink" href="/stories">Stories</Link>
          </nav>

          <Link href="/support" className="btn-ink">
            Support
          </Link>
        </div>

        <div className="wrap pb-3">
          <div className="flex items-center justify-between text-[11px] text-[rgba(14,15,18,0.55)]">
            <span className="stamp">Slow Media</span>
            <span className="stamp">No Ads No Algorithms</span>
          </div>
        </div>
      </header>

      {children}

      <footer className="mt-16 border-t" style={{ borderColor: "var(--rule)" }}>
        <div className="wrap py-10">
          <div className="rulebox p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="kicker">Paperboy Foundation</div>
                <p className="mt-2 lede">
                  A nonprofit print project fighting digital burnout through slow,
                  collectible media people keep.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link className="btn-outline" href="/contact">
                  Contact
                </Link>
                <Link className="btn-outline" href="/transparency">
                  Transparency
                </Link>
                <Link className="btn-ink" href="/support">
                  Support
                </Link>
                <Link className="btn-outline" href="/colophon">
  Colophon
</Link>
              </div>
            </div>

            <div className="mt-6 text-[11px] text-[rgba(14,15,18,0.55)]">
              © {new Date().getFullYear()} Paperboy Foundation
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}