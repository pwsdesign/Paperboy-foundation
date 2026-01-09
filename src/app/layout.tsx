import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iampaperboy.com"),
  title: {
    default: "Paperboy Foundation",
    template: "%s • Paperboy Foundation",
  },
  description:
    "Paperboy Foundation is a nonprofit print project fighting digital burnout and rebuilding local connection through slow, collectible media people keep.",
  alternates: { canonical: "https://iampaperboy.com" },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ctv7grz.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}