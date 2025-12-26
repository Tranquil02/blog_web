import { Twitter, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import SectionReveal from './ui/SectionReveal';

const socials = [
  { name: 'Twitter', icon: Twitter, handle: '@Midnight' },
  { name: 'GitHub', icon: Github, handle: 'MidnightStudio' },
  { name: 'LinkedIn', icon: Linkedin, handle: 'Midnight Anthology' },
  { name: 'Instagram', icon: Instagram, handle: '@midnight.curated' },
];

export default function Connect() {
  return (
    <section id="connect" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <SectionReveal>
          <div>
            <h2 className="text-7xl md:text-8xl font-playfair italic text-white leading-[0.9]">
              Stay <br /> Linked
            </h2>
            <p className="mt-8 text-zinc-500 text-xl max-w-md">
              Follow our curated channels for real-time insights, releases,
              and restoration logs.
            </p>
          </div>
        </SectionReveal>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {socials.map((item, i) => (
            <SectionReveal key={item.name} delay={i * 100}>
              <div
                className="group relative p-10 rounded-3xl border border-white/5 
                           bg-zinc-900/50 backdrop-blur cursor-pointer
                           transition-all duration-700
                           hover:border-[var(--gold)]/40 hover:-translate-y-2"
              >
                <item.icon
                  size={40}
                  className="text-zinc-600 group-hover:text-[var(--gold)] 
                             transition-all duration-700"
                />

                <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">
                  {item.name}
                </p>

                <p className="mt-2 font-playfair italic text-zinc-400 
                              group-hover:text-white transition-colors">
                  {item.handle}
                </p>

                <ArrowUpRight
                  size={20}
                  className="absolute top-8 right-8 text-zinc-700 
                             group-hover:text-[var(--gold)] 
                             transition-all duration-700"
                />
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
