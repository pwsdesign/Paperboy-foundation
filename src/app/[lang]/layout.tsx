import "../globals.css";
import { SiteChrome } from "../components/SiteChrome";
import { getDictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

function normalizeLang(v: unknown): Lang {
  return v === "es" ? "es" : "en";
}

type Props = {
  children: React.ReactNode;
  // Next 16 types can be weird here, so accept both.
  params: { lang: string } | Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
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