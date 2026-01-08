import Link from "next/link";
import type { Dictionary, Lang } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
  lang: Lang;
};

export function SiteChrome({ dict, lang }: Props) {
  return (
    <header className="masthead">
      <div className="wrap flex items-center justify-between py-4">
        <Link href={`/${lang}`} className="brand">
          Paperboy Foundation
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="navlink" href={`/${lang}/mission`}>{dict.nav.mission}</Link>
          <Link className="navlink" href={`/${lang}/issue-01`}>{dict.nav.issue}</Link>
          <Link className="navlink" href={`/${lang}/support`}>{dict.nav.support}</Link>
          <Link className="navlink" href={`/${lang}/get-involved`}>{dict.nav.involved}</Link>
          <Link className="navlink" href={`/${lang}/transparency`}>{dict.nav.transparency}</Link>
          <Link className="navlink" href={`/${lang}/contact`}>{dict.nav.contact}</Link>
          <Link className="navlink" href={`/${lang}/colophon`}>{dict.nav.colophon}</Link>
          <Link className="navlink" href={`/${lang}/stories`}>{dict.nav.stories}</Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Simple language switch (goes to language home) */}
          <Link className="btn-outline" href={`/${lang === "en" ? "es" : "en"}`}>
            {lang === "en" ? "ES" : "EN"}
          </Link>

          <Link href={`/${lang}/support`} className="btn-ink">
            {dict.nav.support}
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
  );
}