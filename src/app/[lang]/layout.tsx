import "../globals.css";
import { SiteChrome } from "../components/SiteChrome";
import { getDictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

function normalizeLang(value: string): Lang {
  return value === "es" ? "es" : "en";
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = normalizeLang(params.lang);
  const dict = await getDictionary(lang);

  return (
    <>
      <SiteChrome dict={dict} lang={lang} />
      {children}
    </>
  );
}