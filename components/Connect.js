import { Twitter, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import SectionReveal from "./ui/SectionReveal";

const socials = [
  { name: "Twitter", icon: Twitter, handle: "@Midnight" },
  { name: "GitHub", icon: Github, handle: "MidnightStudio" },
  { name: "LinkedIn", icon: Linkedin, handle: "Midnight Anthology" },
  { name: "Instagram", icon: Instagram, handle: "@midnight.curated" },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="py-32 px-6 bg-[var(--bg-primary)]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* <SectionReveal> */}
          <div>
            <h2 className="text-7xl md:text-8xl font-editorial italic text-[var(--text-heading)] leading-[0.9]">
              Stay <br /> Linked
            </h2>
            <p className="mt-8 text-xl max-w-md text-[var(--text-secondary)]">
              Follow our curated channels for real-time insights, releases,
              and restoration logs.
            </p>
          </div>
        {/* </SectionReveal> */}

        <div className="grid sm:grid-cols-2 gap-6">
          {socials.map((item, i) => (
            <div key={item.name}>
            {/* // <SectionReveal key={item.name} delay={i * 100}> */}
              <div
                className="
                  group relative p-10 rounded-3xl
                  border border-[var(--border-light)]
                  bg-[var(--bg-secondary)]/60 backdrop-blur
                  cursor-pointer
                  transition-all duration-700
                  hover:border-[var(--accent-secondary)]/40
                  hover:-translate-y-2
                "
              >
                <item.icon
                  size={40}
                  className="
                    text-[var(--text-muted)]
                    group-hover:text-[var(--accent-secondary)]
                    transition-all duration-700
                  "
                />

                <p className="mt-6 text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  {item.name}
                </p>

                <p
                  className="
                    mt-2 font-editorial italic
                    text-[var(--text-secondary)]
                    group-hover:text-[var(--text-heading)]
                    transition-colors
                  "
                >
                  {item.handle}
                </p>

                <ArrowUpRight
                  size={20}
                  className="
                    absolute top-8 right-8
                    text-[var(--text-muted)]
                    group-hover:text-[var(--accent-secondary)]
                    transition-all duration-700
                  "
                />
              </div>
              </div>
            // </SectionReveal> 
          ))}
        </div>

      </div>
    </section>
  );
}
