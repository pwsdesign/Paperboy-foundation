import Link from "next/link";
import { t } from "@/lib/i18n";

export function SiteChrome({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "en" | "es";
}) {
  const copy = t(lang);

  return (
    <>
      <header className="masthead">
        <div className="wrap flex items-center justify-between py-4">
          <Link href={`/${lang}`} className="brand">
            Paperboy Foundation
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link className="navlink" href={`/${lang}/mission`}>
              {copy.nav.mission}
            </Link>
            <Link className="navlink" href={`/${lang}/issue-01`}>
              {copy.nav.issue}
            </Link>
            <Link className="navlink" href={`/${lang}/support`}>
              {copy.nav.support}
            </Link>
            <Link className="navlink" href={`/${lang}/get-involved`}>
              {copy.nav.involved}
            </Link>
            <Link className="navlink" href={`/${lang}/transparency`}>
              {copy.nav.transparency}
            </Link>
            <Link className="navlink" href={`/${lang}/contact`}>
              {copy.nav.contact}
            </Link>
            <Link className="navlink" href={`/${lang}/colophon`}>
              {copy.nav.colophon}
            </Link>
            <Link className="navlink" href={`/${lang}/stories`}>
              {copy.nav.stories}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* language switch */}
            <Link className="btn-outline" href={`/${lang === "en" ? "es" : "en"}`}>
              {lang === "en" ? "ES" : "EN"}
            </Link>

            <Link href={`/${lang}/support`} className="btn-ink">
              {copy.nav.support}
            </Link>
          </div>
        </div>

        <div className="wrap pb-3">
          <div className="flex items-center justify-between text-[11px] text-[rgba(14,15,18,0.55)]">
            <span className="stamp">Slow Media</span>
            <span className="stamp">No Ads No Algorithms</span>
          </div>
        </div>
      </header>

      {children}
    </>
  );
}