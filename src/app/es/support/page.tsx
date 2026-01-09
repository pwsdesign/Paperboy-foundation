"use client";

import Link from "next/link";

const TIERS = [
  {
    title: "Mantén la impresión",
    amount: "$10",
    note: "Papel, tinta, grapas. Lo esencial que lo hace real.",
  },
  {
    title: "Patrocina un paquete",
    amount: "$25",
    note: "Ayuda a colocar ejemplares en puntos locales de distribución.",
  },
  {
    title: "Financia una historia",
    amount: "$50",
    note: "Apoya a un artista y el tiempo necesario para contar bien la historia.",
  },
  {
    title: "Respalda una tirada",
    amount: "$100",
    note: "Un impulso real que mantiene a Paperboy independiente y sin anuncios.",
  },
];

export default function SupportES() {
  return (
    <main className="wrap py-16 md:py-24">
      {/* HERO */}
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="xerox-grain" aria-hidden="true" />

        <div className="relative">
          <p className="kicker">Apoya</p>

          <h1 className="basset-cta mt-4 text-5xl md:text-7xl">
            Mantén a Paperboy libre de anuncios y algoritmos.
            <span className="block mt-2 text-[13px] md:text-[15px] tracking-[0.22em] uppercase opacity-80">
              Sin anuncios. Sin algoritmos. Solo impresión.
            </span>
          </h1>

          <p className="lede mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
            Paperboy es un proyecto editorial sin fines de lucro diseñado para
            perdurar. Tu{" "}
            <Link
              href="https://donorbox.org/support-paperboy"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              apoyo
            </Link>{" "}
            financia impresión, distribución y colaboración justa con creadores,
            manteniendo a Paperboy fuera de la máquina de contenido.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/es/issue-01" className="btn-outline">
              Explorar Edición 01
            </Link>
            <Link href="/es/get-involved" className="btn-outline">
              Involúcrate
            </Link>
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section className="mt-10">
        <div className="zine-card p-7 md:p-8 max-w-xl mx-auto">
          <p className="kicker">Donar</p>
          <p className="lede mt-3 text-[14px]">
            Puedes donar una sola vez o de forma mensual.
          </p>

          <div className="mt-6 rulebox p-3 md:p-4">
            <iframe
              title="Donar"
              src="https://donorbox.org/embed/support-paperboy?default_interval=o&allowpaymentrequest=true"
              allow="payment"
              frameBorder={0}
              scrolling="no"
              height={900}
              width="100%"
              style={{
                maxWidth: 500,
                minWidth: 250,
                border: "1px solid var(--rule)",
                borderRadius: 16,
                background: "rgba(255,255,255,0.35)",
                display: "block",
                marginInline: "auto",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}