import type { ReactNode } from "react";
import { SiteChrome } from "../components/SiteChrome";
import { getDictionary } from "@/lib/i18n";

type Lang = "en" | "es";

function normalizeLang(v: unknown): Lang {
  return v === "es" ? "es" : "en";
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const lang = normalizeLang(resolved.lang);

  const dict = await getDictionary(lang);

  return (
    <>
      <SiteChrome dict={dict} lang={lang} />
      {children}
    </>
  );
}