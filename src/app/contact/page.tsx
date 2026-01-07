export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs tracking-[0.3em] uppercase text-white/60">
          Contact
        </p>
        <h1 className="say-hello text-4xl md:text-5xl">
  Say hello
</h1>
        <p className="mt-6 text-lg leading-relaxed text-white/75">
          For partnerships, press, distribution, grants, or collaboration.
        </p>

        <form className="mt-10 grid gap-4">
          <input
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/40"
            placeholder="Name"
          />
          <input
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/40"
            placeholder="Email"
          />
          <textarea
            className="min-h-[140px] rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/40"
            placeholder="Message"
          />
          <button
            type="button"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
          >
            Send
          </button>

          <p className="text-sm text-white/55">
            Next step: we’ll connect this to a form service (Tally/Formspree).
          </p>
        </form>
      </div>
    </main>
  );
}