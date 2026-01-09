export default function ContactEN() {
  return (
    <main className="wrap py-16 md:py-24">
      <section className="rulebox p-7 md:p-12 relative overflow-hidden">
        <div className="xerox-grain" aria-hidden="true" />

        <div className="relative max-w-3xl">
          <p className="kicker">Contact</p>

          <h1 className="say-hello mt-4 text-4xl md:text-5xl">
            Say hello
          </h1>

          <p className="lede mt-6 text-[15px] md:text-[17px] leading-relaxed">
            For partnerships, press, distribution, grants, or collaboration.
          </p>

          <form className="mt-10 grid gap-4">
            <input
              className="rulebox px-4 py-3"
              placeholder="Name"
            />

            <input
              className="rulebox px-4 py-3"
              placeholder="Email"
            />

            <textarea
              className="rulebox px-4 py-3 min-h-[140px]"
              placeholder="Message"
            />

            <button type="button" className="btn-ink w-fit">
              Send
            </button>

            <p className="text-[12px] text-[rgba(14,15,18,0.55)]">
              Next step: we’ll connect this to a form service (Tally or Formspree).
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}