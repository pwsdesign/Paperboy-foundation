import "../globals.css";
import { SiteChrome } from "../components/SiteChrome";
import { getDictionary } from "@/lib/i18n";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

function normalizeLang(v: string): "en" | "es" {
  return v === "es" ? "es" : "en";
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const dict = await getDictionary(lang);

  return (
    <>
      <SiteChrome dict={dict} lang={lang} />
      {children}
    </>
  );
}