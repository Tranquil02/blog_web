import SectionReveal from './ui/SectionReveal';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <SectionReveal>
        <div>
          <h1 className="text-[15vw] md:text-[10rem] font-playfair italic text-white">
            CRAFTING
          </h1>
          <h1 className="text-[15vw] md:text-[12rem] font-black gold-shimmer leading-[0.8]">
            THE SIGNAL
          </h1>
          <p className="mt-10 max-w-xl mx-auto text-zinc-500 text-lg">
            A curated anthology at the intersection of design and intelligence.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
