import type { Metadata } from "next";
import "../globals.css";
import { getDictionary, type Lang } from "@/lib/i18n";
import { SiteChrome } from "@/app/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://iampaperboy.com"),
  title: { default: "Paperboy Foundation", template: "%s • Paperboy Foundation" },
  description:
    "Paperboy Foundation is a nonprofit print project fighting digital burnout and rebuilding local connection through slow, collectible media people keep.",
};

type Props = {
  children: React.ReactNode;
  params: { lang: "en" | "es" };
};

export default async function LangLayout({ children, params }: Props) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <SiteChrome dict={dict} lang={params.lang} />
      {children}
    </>
  );
}