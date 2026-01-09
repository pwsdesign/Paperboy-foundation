import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { NewsletterSignup } from "../components/NewsletterSignup";

export default async function HomePage({
  params,
}: {
  params: { lang: "en" | "es" };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="xerox-grain" aria-hidden="true" />

        <div className="relative max-w-3xl">
          <p className="kicker">{dict.home.kicker}</p>

          <h1 className="basset-cta mt-4 text-5xl md:text-7xl">
            {dict.home.title}
            <span className="block mt-3 text-[13px] md:text-[15px] tracking-[0.22em] uppercase opacity-80">
              {dict.home.subtitle}
            </span>
          </h1>

          <p className="lede mt-6 text-[15px] md:text-[17px] leading-relaxed">
            {dict.home.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${params.lang}/support`} className="btn-ink">
              {dict.nav.support}
            </Link>

            <Link href={`/${params.lang}/get-involved`} className="btn-outline">
              {dict.nav.involved}
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <NewsletterSignup />
      </section>
    </main>
  );
}