import SectionReveal from "./ui/SectionReveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[var(--bg-primary)]">
      <SectionReveal>
        <div>
          <h1 className="text-[15vw] md:text-[10rem] font-editorial italic text-[var(--text-heading)]">
            Journey in
          </h1>
          <h1 className="text-[15vw] md:text-[12rem] font-black gold-shimmer leading-[0.8]">
            Eternal Movement
          </h1>
          <p className="mt-10 max-w-xl mx-auto text-lg text-[var(--text-secondary)]">
            A curated anthology at the intersection of design and intelligence.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
