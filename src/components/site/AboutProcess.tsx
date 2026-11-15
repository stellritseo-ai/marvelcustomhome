import { Award, Compass, HeartHandshake, Home, Layers, Sparkles, Users2 } from "lucide-react";
import { Reveal } from "./Reveal";

const PROCESS_PILLARS = [
  {
    num: "01",
    title: "Superior Quality",
    lead: "Work closely with our talented architects to bring your vision to life.",
    description:
      "We select only premium-grade materials, structural steel reinforcement, and certified master trades. Rigorous engineering inspections at every milestone guarantee your home endures for generations.",
    icon: Award,
  },
  {
    num: "02",
    title: "Comprehensive Services",
    lead: "Choose from a wide range of options to ensure every element, from the layout to the finishes, is perfected.",
    description:
      "From architectural concept drafting and site planning to bespoke interior finish-outs, cabinetry, and double vanity millwork — we orchestrate every dimension under one trusted roof.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Personalized Solutions",
    lead: "Watch your dream home take shape as our experienced builders bring your plans to reality.",
    description:
      "Every family lives uniquely. We customize spatial layouts, private courtyards, natural lighting orientation, and bespoke lifestyle amenities tailored precisely to your daily rhythm.",
    icon: Home,
  },
  {
    num: "04",
    title: "Trusted Professionals",
    lead: "With Marvel Custom Homes, your dream home is not just a place to live, but a place to love.",
    description:
      "Our licensed builders, project managers, and artisan craftsmen possess decades of specialized North Texas construction experience, upholding the highest standards of safety, ethics, and care.",
    icon: Users2,
  },
  {
    num: "05",
    title: "Client-First Commitment",
    lead: "With Marvel Custom Homes, your dream home is not just a place to live, but a place to love.",
    description:
      "We believe in radical transparency, open communication, scheduled on-site walkthroughs, and proactive client updates throughout your build journey and long after move-in day.",
    icon: HeartHandshake,
  },
] as const;

export function AboutProcess() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 text-charcoal sm:py-32">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/3 h-96 w-96 rounded-full bg-champagne/10 blur-[100px]"
      />

      <div className="container-lux relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-champagne sm:w-12" />
              <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#6F5D40]">
                Our Process & Principles
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-champagne sm:w-12" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.8vw,4.2rem)] font-light leading-[1.12] tracking-[-0.01em] text-charcoal">
              Complete Solutions <br />
              <span className="italic font-normal text-gradient-champagne">for Custom Living.</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-5 font-sans text-[0.98rem] leading-relaxed text-charcoal/70 sm:text-base">
              A disciplined, client-centered approach that unites architectural vision, fine
              materials, and master craftsmanship into structures of enduring grace.
            </p>
          </Reveal>
        </div>

        {/* 5 Pillars Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isLast = idx === PROCESS_PILLARS.length - 1;
            return (
              <Reveal key={pillar.num} delay={idx * 80}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-[10px] border border-charcoal/10 bg-ivory/80 p-8 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-champagne hover:bg-white hover:shadow-[0_18px_36px_-12px_rgba(155,135,102,0.22)] ${
                    isLast ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    {/* Top Pill & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6F5D40]">
                          Pillar {pillar.num}
                        </span>
                        <span aria-hidden="true" className="h-3 w-px bg-champagne/40" />
                      </div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-champagne/40 bg-[#F7F3EE] text-[#6F5D40] transition-colors duration-300 group-hover:border-champagne group-hover:bg-champagne group-hover:text-charcoal">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-6 font-serif text-2xl font-bold text-charcoal">
                      {pillar.title}
                    </h3>

                    {/* User's Exact Lead Copy */}
                    <p className="mt-3 font-sans text-sm font-semibold leading-relaxed text-[#6F5D40]">
                      “{pillar.lead}”
                    </p>

                    {/* Detailed Architecture Expansion */}
                    <p className="mt-3 font-sans text-xs leading-[1.8] text-charcoal/65 sm:text-[0.84rem]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className="mt-6 pt-4 border-t border-charcoal/[0.08] flex items-center justify-between text-[0.7rem] font-sans font-medium text-charcoal/50">
                    <span>Marvel Standard</span>
                    <span className="inline-flex items-center gap-1 text-champagne group-hover:translate-x-1 transition-transform duration-300">
                      Precision Built
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
