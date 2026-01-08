import Link from "next/link";

export default function LanguageGate() {
  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12">
        <p className="kicker">Paperboy Foundation</p>

        <h1 className="headline mt-6 text-4xl md:text-6xl">
          Choose your language
        </h1>

        <div className="mt-8 grid gap-3 max-w-sm">
          <Link href="/en" className="btn-ink w-full justify-center">
            English
          </Link>
          <Link href="/es" className="btn-outline w-full justify-center">
            Español
          </Link>
        </div>
      </section>
    </main>
  );
}