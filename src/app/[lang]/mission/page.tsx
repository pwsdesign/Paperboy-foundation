import { getDictionary } from "@/lib/i18n";

export default async function MissionPage({
  params,
}: {
  params: { lang: "en" | "es" };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="xerox-grain" aria-hidden="true" />
        <div className="relative">
          <p className="kicker">{dict.nav.mission}</p>
          <h1 className="basset-cta mt-4 text-5xl md:text-7xl">
            {params.lang === "es"
              ? "Publicamos para que la gente vuelva a sentirse humana."
              : "We publish to make people feel human again."}
          </h1>
          <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
            {params.lang === "es"
              ? "Esto es un placeholder por ahora. Puedes pegar tu copy aquí cuando estés lista."
              : "Placeholder for now. You can paste your mission copy here when you’re ready."}
          </p>
        </div>
      </section>
    </main>
  );
}