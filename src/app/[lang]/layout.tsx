import type { Metadata } from "next";
import "../globals.css";
import { SiteChrome } from "../components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://iampaperboy.com"),
  title: { default: "Paperboy Foundation", template: "%s • Paperboy Foundation" },
  description:
    "Paperboy Foundation is a nonprofit print project fighting digital burnout and rebuilding local connection through slow, collectible media people keep.",
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ctv7grz.css" />
      </head>
      <body>
        <SiteChrome lang={params.lang}>{children}</SiteChrome>
      </body>
    </html>
  );
}