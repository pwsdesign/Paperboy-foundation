import { SiteChrome } from "../components/SiteChrome";
import { getDictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

function normalizeLang(v: string): Lang {
  return v === "es" ? "es" : "en";
}

export default async function LangLayout({ children, params }: Props) {
  const lang = normalizeLang(params.lang);
  const dict = await getDictionary(lang);

  return (
    <>
      <SiteChrome dict={dict} lang={lang} />
      {children}
    </>
  );
}