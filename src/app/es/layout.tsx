import { SiteChrome } from "../components/SiteChrome";
import { CHROME_ES } from "../components/SiteChromeLabels";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteChrome lang="es" labels={CHROME_ES} />
      {children}
    </>
  );
}