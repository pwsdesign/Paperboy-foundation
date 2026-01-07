import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "./components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://iampaperboy.com"),
  title: {
    default: "Paperboy Foundation",
    template: "%s • Paperboy Foundation",
  },
  description:
    "Paperboy Foundation is a nonprofit print project fighting digital burnout and rebuilding local connection through slow, collectible media people keep.",
  alternates: {
    canonical: "https://iampaperboy.com",
  },
  openGraph: {
    title: "Paperboy Foundation",
    description:
      "Slow, collectible media for a world that scrolls too fast. No ads. No algorithms. Built for keeping.",
    url: "https://iampaperboy.com",
    siteName: "Paperboy Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paperboy Foundation",
    description:
      "Slow, collectible media for a world that scrolls too fast. No ads. No algorithms. Built for keeping.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/ctv7grz.css"/>
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}