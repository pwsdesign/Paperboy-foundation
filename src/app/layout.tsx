import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

  // ✅ favicon + tab icon + apple icon
  icons: {
    icon: "/icon.png",          // or "/favicon.ico"
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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
        <link rel="stylesheet" href="https://use.typekit.net/ctv7grz.css" />

        <Script
          src="https://donorbox.org/widget.js"
          strategy="afterInteractive"
          data-paypal-express="false"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}