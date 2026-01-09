export default function ContactES() {
  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="xerox-grain" aria-hidden="true" />

        <div className="relative max-w-3xl">
          <p className="kicker">Contacto</p>

          <h1 className="say-hello mt-4 text-4xl md:text-5xl">
            Di hola
          </h1>

          <p className="lede mt-6 text-[15px] md:text-[17px] leading-relaxed">
            Para alianzas, prensa, distribución, becas o colaboración.
          </p>

          <form className="mt-10 grid gap-4">
            <input
              className="rulebox px-4 py-3"
              placeholder="Nombre"
            />

            <input
              className="rulebox px-4 py-3"
              placeholder="Correo electrónico"
            />

            <textarea
              className="rulebox px-4 py-3 min-h-[140px]"
              placeholder="Mensaje"
            />

            <button type="button" className="btn-ink w-fit">
              Enviar
            </button>

            <p className="text-[12px] text-[rgba(14,15,18,0.55)]">
              Siguiente paso: lo conectaremos a un formulario (Tally o Formspree).
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}