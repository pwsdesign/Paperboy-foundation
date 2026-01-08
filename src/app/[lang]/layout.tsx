import type { Metadata } from "next";
import "../globals.css";
import { getDictionary, type Lang } from "@/lib/i18n";
import { SiteChrome } from "../components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://iampaperboy.com"),
  title: { default: "Paperboy Foundation", template: "%s • Paperboy Foundation" },
  description:
    "Paperboy Foundation is a nonprofit print project fighting digital burnout and rebuilding local connection through slow, collectible media people keep.",
};

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: string } | Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: LayoutProps) {
  const resolved = await Promise.resolve(params);
  const lang = (resolved.lang === "es" ? "es" : "en") as Lang;

  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ctv7grz.css" />
      </head>
      <body>
        <SiteChrome dict={dict} lang={lang} />
        {children}
      </body>
    </html>
  );
}