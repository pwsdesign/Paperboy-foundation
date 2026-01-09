import Link from "next/link";
import type { ChromeLabels, Lang } from "./SiteChromeLabels";

type Props = {
  lang: Lang;
  labels: ChromeLabels;
};

export function SiteChrome({ lang, labels }: Props) {
  const other: Lang = lang === "en" ? "es" : "en";

  return (
    <header className="masthead">
      <div className="wrap flex items-center justify-between py-4">
        <Link href={`/${lang}`} className="brand">
          {labels.brand}
        </Link>

        <nav className="nav-tabs flex gap-6 items-center">
          <Link className="navlink" href={`/${lang}/mission`}>
            {labels.nav.mission}
          </Link>
          <Link className="navlink" href={`/${lang}/issue-01`}>
            {labels.nav.issue}
          </Link>
          <Link className="navlink" href={`/${lang}/support`}>
            {labels.nav.support}
          </Link>
          <Link className="navlink" href={`/${lang}/get-involved`}>
            {labels.nav.involved}
          </Link>
          <Link className="navlink" href={`/${lang}/transparency`}>
            {labels.nav.transparency}
          </Link>
          <Link className="navlink" href={`/${lang}/contact`}>
            {labels.nav.contact}
          </Link>
          <Link className="navlink" href={`/${lang}/colophon`}>
            {labels.nav.colophon}
          </Link>
          <Link className="navlink" href={`/${lang}/stories`}>
            {labels.nav.stories}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link className="btn-outline" href={`/${other}`}>
            {other === "en" ? labels.switchTo.en : labels.switchTo.es}
          </Link>

          <Link href={`/${lang}/support`} className="btn-ink">
            {labels.nav.support}
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