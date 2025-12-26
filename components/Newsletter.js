export default function Newsletter() {
  return (
    <section className="py-32 text-center px-6">
      <h2 className="text-6xl md:text-8xl font-playfair italic text-white">
        Join the <span className="gold-shimmer not-italic font-black">Inner Circle</span>
      </h2>

      <form className="mt-12 flex justify-center gap-4">
        <input
          type="email"
          placeholder="you@exclusive.com"
          className="px-6 py-4 rounded-full bg-zinc-900 border border-white/10 text-white"
        />
        <button className="px-8 py-4 rounded-full bg-[var(--gold)] text-black font-black uppercase text-xs tracking-widest">
          Subscribe
        </button>
      </form>
    </section>
  );
}
