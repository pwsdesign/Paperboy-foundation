import { type Lang } from "@/lib/i18n";

export default function ColophonPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;

  const copy =
    lang === "es"
      ? {
          kicker: "Colofón",
          title: "Sobre esta publicación",
          p1:
            "Paperboy Foundation es un proyecto editorial sin fines de lucro creado para contrarrestar el agotamiento digital y reconstruir la conexión local mediante medios lentos y coleccionables. Cada edición está diseñada como un objeto físico para guardarse, revisitarse y compartirse fuera de pantalla.",
          p2:
            "Paperboy no es noticias y no es redes sociales. No depende de publicidad, algoritmos ni métricas de interacción. Las decisiones editoriales se toman de forma independiente e intencional, con enfoque en el lugar, las personas y la presencia.",
          labels: {
            publication: "Publicación",
            issue: "Edición",
            format: "Formato",
            funding: "Financiamiento",
            sustainability: "Sostenibilidad",
            advertising: "Publicidad",
            algorithms: "Algoritmos",
            year: "Año",
            website: "Sitio web",
            code: "Código de publicación",
          },
          values: {
            publication: "Paperboy Foundation",
            issue: "01",
            format: "Impreso, edición limitada",
            funding: "Primera edición autofinanciada",
            sustainability: "Apoyo comunitario, ediciones limitadas y subvenciones",
            advertising: "Ninguna",
            algorithms: "Ninguno",
            year: "2026",
            website: "iampaperboy.com",
            code: "PB-ISSUE-01-ED-001",
          },
          footer:
            "Paperboy Foundation existe para bajar el ritmo. Menos ediciones. Mejor trabajo. Más vida útil.",
        }
      : {
          kicker: "Colophon",
          title: "About this publication",
          p1:
            "Paperboy Foundation is a nonprofit print project created to counter digital burnout and rebuild local connection through slow, collectible media. Each issue is designed as a physical object to be kept, revisited, and shared offline.",
          p2:
            "Paperboy is not news and not social media. It does not rely on advertising, algorithms, or engagement metrics. Editorial decisions are made independently and intentionally, with a focus on place, people, and presence.",
          labels: {
            publication: "Publication",
            issue: "Issue",
            format: "Format",
            funding: "Funding",
            sustainability: "Sustainability",
            advertising: "Advertising",
            algorithms: "Algorithms",
            year: "Year",
            website: "Website",
            code: "Publication code",
          },
          values: {
            publication: "Paperboy Foundation",
            issue: "01",
            format: "Printed matter, limited edition",
            funding: "Self-funded first issue",
            sustainability: "Community support, limited editions, and grants",
            advertising: "None",
            algorithms: "None",
            year: "2026",
            website: "iampaperboy.com",
            code: "PB-ISSUE-01-ED-001",
          },
          footer:
            "Paperboy Foundation exists to slow things down. Fewer issues. Better work. Longer shelf life.",
        };

  return (
    <main className="wrap py-16 md:py-20 max-w-3xl">
      <p className="kicker">{copy.kicker}</p>

      <h1 className="headline mt-4 text-3xl md:text-4xl">{copy.title}</h1>

      <div className="mt-8 space-y-6 lede text-[15px]">
        <p>{copy.p1}</p>
        <p>{copy.p2}</p>

        <div className="rulebox p-6">
          <ul className="space-y-3 text-[14px]">
            <li>
              <strong>{copy.labels.publication}:</strong> {copy.values.publication}
            </li>
            <li>
              <strong>{copy.labels.issue}:</strong> {copy.values.issue}
            </li>
            <li>
              <strong>{copy.labels.format}:</strong> {copy.values.format}
            </li>
            <li>
              <strong>{copy.labels.funding}:</strong> {copy.values.funding}
            </li>
            <li>
              <strong>{copy.labels.sustainability}:</strong> {copy.values.sustainability}
            </li>
            <li>
              <strong>{copy.labels.advertising}:</strong> {copy.values.advertising}
            </li>
            <li>
              <strong>{copy.labels.algorithms}:</strong> {copy.values.algorithms}
            </li>
            <li>
              <strong>{copy.labels.year}:</strong> {copy.values.year}
            </li>
            <li>
              <strong>{copy.labels.website}:</strong> {copy.values.website}
            </li>
            <li>
              <strong>{copy.labels.code}:</strong> {copy.values.code}
            </li>
          </ul>
        </div>

        <p className="text-[13px] text-[rgba(14,15,18,0.55)]">{copy.footer}</p>
      </div>
    </main>
  );
}