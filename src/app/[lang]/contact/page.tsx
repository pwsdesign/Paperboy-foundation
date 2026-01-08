import type { Lang } from "@/lib/i18n";

export default function ContactPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const isEs = params.lang === "es";

  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="xerox-grain" aria-hidden="true" />

        <div className="relative max-w-3xl">
          <p className="kicker">{isEs ? "Contacto" : "Contact"}</p>

          <h1 className="say-hello mt-4 text-4xl md:text-5xl">
            {isEs ? "Di hola" : "Say hello"}
          </h1>

          <p className="lede mt-6 text-[15px] md:text-[17px] leading-relaxed">
            {isEs
              ? "Para alianzas, prensa, distribución, becas o colaboración."
              : "For partnerships, press, distribution, grants, or collaboration."}
          </p>

          <form className="mt-10 grid gap-4">
            <input className="rulebox px-4 py-3" placeholder={isEs ? "Nombre" : "Name"} />
            <input className="rulebox px-4 py-3" placeholder={isEs ? "Email" : "Email"} />
            <textarea className="rulebox px-4 py-3 min-h-[140px]" placeholder={isEs ? "Mensaje" : "Message"} />

            <button type="button" className="btn-ink w-fit">
              {isEs ? "Enviar" : "Send"}
            </button>

            <p className="text-[12px] text-[rgba(14,15,18,0.55)]">
              {isEs
                ? "Siguiente paso: lo conectamos a un formulario (Tally/Formspree)."
                : "Next step: we’ll connect this to a form service (Tally/Formspree)."}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}