import { SiteChrome } from "../components/SiteChrome";
import { CHROME_EN } from "../components/SiteChromeLabels";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteChrome lang="en" labels={CHROME_EN} />
      {children}
    </>
  );
}