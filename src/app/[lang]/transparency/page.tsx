import { getDictionary } from "@/lib/i18n";

export default async function TransparencyPage({
  params,
}: {
  params: { lang: "en" | "es" };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="wrap py-16 md:py-24 max-w-3xl">
      <p className="kicker">
        {params.lang === "es" ? "Transparencia" : "Transparency"}
      </p>

      <h1 className="headline mt-4 text-3xl md:text-4xl">
        {params.lang === "es"
          ? "Cómo se sostiene Paperboy"
          : "How Paperboy sustains"}
      </h1>

      <div className="mt-6 space-y-6 lede text-[15px] md:text-[17px]">
        <p>
          {params.lang === "es"
            ? "La primera edición es autofinanciada. A largo plazo, Paperboy se sostiene gracias al apoyo de la comunidad, ediciones limitadas y subvenciones."
            : "The first issue is self-funded. Long-term, Paperboy sustains through community support, limited editions, and grants."}
        </p>

        <p>
          {params.lang === "es"
            ? "No publicamos anuncios ni optimizamos para algoritmos. El trabajo se mantiene intencional: menos ediciones, mayor calidad y colaboración creativa justa."
            : "We do not run ads and we do not optimize for algorithms. The work stays intentional: fewer issues, higher quality, and fairer creative collaboration."}
        </p>
      </div>
    </main>
  );
}