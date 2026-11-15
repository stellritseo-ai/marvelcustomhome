import { Award, CheckCircle2, HeartHandshake, Home, Layers, Users2 } from "lucide-react";
import detailStone from "@/assets/detail-stone.jpg";
import processBuild from "@/assets/process-build.jpg";
import processCustomize from "@/assets/process-customize.jpg";
import processDesign from "@/assets/process-design.jpg";
import processEnjoy from "@/assets/process-enjoy.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const PROCESS_PILLARS = [
  {
    n: "01",
    phase: "Pillar One",
    title: "Superior Quality",
    copy: "Work closely with our talented architects to bring your vision to life.",
    detail:
      "Every Marvel structure begins with architectural rigor — pairing visionary spatial planning with the finest structural materials so your residence or commercial build stands the test of time.",
    tags: ["Architectural Drafting", "Structural Engineering", "Finest Materials"],
    icon: Award,
    img: processDesign,
    alt: "Architects reviewing custom home blueprints and material samples",
  },
  {
    n: "02",
    phase: "Pillar Two",
    title: "Comprehensive Services",
    copy: "Choose from a wide range of options to ensure every element, from the layout to the finishes,",
    detail:
      "is curated to your exact standard. From ground-up construction and commercial shells to bespoke interior finish-outs, lighting, and custom double vanities, we manage every discipline seamlessly.",
    tags: ["Turnkey Construction", "Bespoke Finish-Outs", "Custom Millwork"],
    icon: Layers,
    img: processCustomize,
    alt: "Curated stone slabs, wood finishes, and architectural hardware",
  },
  {
    n: "03",
    phase: "Pillar Three",
    title: "Personalized Solutions",
    copy: "Watch your dream home take shape as our experienced builders bring your plans to reality.",
    detail:
      "No two commissions are alike. We tailor floor plan flow, ceiling heights, natural light orientation, and indoor-outdoor living spaces around your family’s daily rhythm and future.",
    tags: ["Tailored Floor Plans", "Custom Elevations", "On-Site Precision"],
    icon: Home,
    img: processBuild,
    alt: "Custom residence under construction with precision framing",
  },
  {
    n: "04",
    phase: "Pillar Four",
    title: "Trusted Professionals",
    copy: "With Marvel Custom Homes, your dream home is not just a place to live, but a place to love.",
    detail:
      "Built on a foundation of trust, every member of our team — from master masons to site superintendents — contributes decades of field expertise to deliver results that exceed expectations.",
    tags: ["Master Tradespeople", "Licensed & Insured", "Proven DFW Track Record"],
    icon: Users2,
    img: detailStone,
    alt: "Fine limestone masonry and architectural craftsmanship detail",
  },
  {
    n: "05",
    phase: "Pillar Five",
    title: "Client-First Commitment",
    copy: "With Marvel Custom Homes, your dream home is not just a place to live, but a place to love.",
    detail:
      "We serve the Dallas–Fort Worth community with transparent communication, scheduled milestone walkthroughs, and attentive care from your first consultation through generational ownership.",
    tags: ["Transparent Milestones", "Direct Principal Access", "Generational Care"],
    icon: HeartHandshake,
    img: processEnjoy,
    alt: "Illuminated custom home terrace overlooking resort pool at dusk",
  },
] as const;

export function AboutProcess() {
  return (
    <section className="relative overflow-x-clip bg-cream py-[70px] sm:py-[90px]">
      <div className="container-lux">
        {/* Section Editorial Split Header */}
        <div className="relative grid gap-8 border-b border-[#9B8766]/25 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
              <Eyebrow n="03">Our Process</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Complete Solutions for
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                Custom Living.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-[#9B8766]/25 bg-ivory/80 p-5 shadow-[0_16px_38px_-18px_oklch(0.18_0.006_120/0.12)] backdrop-blur-sm sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#6B593B] via-[#9B8766] to-champagne"
              />
              <div className="pl-3 sm:pl-4">
                <p className="font-serif text-[1.25rem] font-semibold italic leading-snug text-charcoal sm:text-[1.35rem]">
                  Five pillars, one unwavering standard.
                </p>
                <p className="mt-2 font-sans text-[0.95rem] leading-[1.75] text-[#45443F]">
                  From initial architectural conception to final white-glove handover, every phase
                  is engineered around your vision.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Top Row: First 3 Architectural Pillars (3-Column Editorial Cards) */}
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {PROCESS_PILLARS.slice(0, 3).map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.n} delay={idx * 90}>
                <article className="group/card relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-ivory p-6 shadow-[0_24px_50px_-20px_oklch(0.18_0.006_120/0.18)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766]/70 hover:shadow-[0_32px_68px_-18px_oklch(0.18_0.006_120/0.28)] sm:p-7">
                  {/* Persistent Top Bronze Hairline + Hover Gradient Accent Bar */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#9B8766]/25"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-x-100"
                  />

                  {/* Watermark Numeral */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -bottom-5 font-serif text-[6.5rem] font-bold italic leading-none text-[#9B8766]/[0.08] transition-all duration-700 select-none group-hover/card:-translate-y-2 group-hover/card:text-[#9B8766]/[0.15]"
                  >
                    {pillar.n}
                  </span>

                  <div>
                    {/* Image Showcase Plate */}
                    <div className="relative overflow-hidden rounded-[5px] bg-charcoal ring-1 ring-charcoal/10">
                      <img
                        src={pillar.img}
                        alt={pillar.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-[4px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                        <span>{pillar.n}</span>
                        <span aria-hidden="true" className="h-2.5 w-px bg-champagne/40" />
                        <span>{pillar.phase}</span>
                      </div>
                      <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/50 bg-charcoal/85 text-champagne backdrop-blur-md transition-colors duration-300 group-hover/card:bg-champagne group-hover/card:text-charcoal">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Title & Copy */}
                    <h3 className="mt-6 font-serif text-[1.6rem] font-bold leading-snug text-charcoal">
                      {pillar.title}
                    </h3>

                    <p className="mt-2.5 border-l-2 border-[#9B8766] pl-3.5 font-serif text-[1.06rem] font-semibold italic leading-relaxed text-[#6B593B]">
                      “{pillar.copy}”
                    </p>

                    <p className="mt-3 font-sans text-[0.9rem] leading-[1.75] text-charcoal/78">
                      {pillar.detail}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="relative z-10 mt-6 flex flex-wrap gap-1.5 border-t border-charcoal/10 pt-4">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-[4px] border border-[#9B8766]/30 bg-cream/75 px-2.5 py-1 font-sans text-[0.65rem] font-medium text-charcoal/80"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-[#6B593B]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Row: Pillars 04 & 05 (2 Wide Panoramic Split Cards) */}
        <div className="mt-7 grid gap-7 lg:grid-cols-2">
          {PROCESS_PILLARS.slice(3, 5).map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.n} delay={250 + idx * 100}>
                <article className="group/card relative flex h-full flex-col overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-ivory p-6 shadow-[0_24px_50px_-20px_oklch(0.18_0.006_120/0.18)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766]/70 hover:shadow-[0_32px_68px_-18px_oklch(0.18_0.006_120/0.28)] sm:flex-row sm:items-center sm:gap-7 sm:p-7">
                  {/* Persistent Top Bronze Hairline + Hover Gradient Accent Bar */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#9B8766]/25"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-x-100"
                  />

                  {/* Watermark Numeral */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -bottom-5 font-serif text-[7rem] font-bold italic leading-none text-[#9B8766]/[0.08] transition-all duration-700 select-none group-hover/card:-translate-y-2 group-hover/card:text-[#9B8766]/[0.15]"
                  >
                    {pillar.n}
                  </span>

                  {/* Image Column */}
                  <div className="relative w-full shrink-0 overflow-hidden rounded-[5px] bg-charcoal ring-1 ring-charcoal/10 sm:w-[42%]">
                    <img
                      src={pillar.img}
                      alt={pillar.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-105 sm:aspect-[4/5]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-[4px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                      <span>{pillar.n}</span>
                      <span aria-hidden="true" className="h-2.5 w-px bg-champagne/40" />
                      <span>{pillar.phase}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="relative z-10 mt-5 flex flex-1 flex-col justify-between sm:mt-0">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                          Marvel Standard
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#9B8766]/40 bg-cream text-[#6B593B] transition-colors duration-300 group-hover/card:bg-[#6B593B] group-hover/card:text-ivory">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      <h3 className="mt-2 font-serif text-[1.65rem] font-bold leading-snug text-charcoal">
                        {pillar.title}
                      </h3>

                      <p className="mt-2.5 border-l-2 border-[#9B8766] pl-3.5 font-serif text-[1.05rem] font-semibold italic leading-relaxed text-[#6B593B]">
                        “{pillar.copy}”
                      </p>

                      <p className="mt-2.5 font-sans text-[0.88rem] leading-[1.75] text-charcoal/78">
                        {pillar.detail}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-charcoal/10 pt-3.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-[4px] border border-[#9B8766]/30 bg-cream/75 px-2.5 py-1 font-sans text-[0.65rem] font-medium text-charcoal/80"
                        >
                          <CheckCircle2 className="h-2.5 w-2.5 text-[#6B593B]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
