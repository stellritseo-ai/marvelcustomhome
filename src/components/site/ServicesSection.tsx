import { ArrowUpRight } from "lucide-react";
import completeHomeConstruction from "@/assets/complete-home-construction.jpg";
import designConsultation from "@/assets/Design consultation - Architectural.png";
import doubleVanity from "@/assets/double-vanity.webp";
import interiorFinishOut from "@/assets/Interior Finish Out.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/* 03 — SERVICES */
const SERVICES = [
  {
    n: "01",
    id: "complete-home-construction",
    title: "Complete Home Construction",
    img: completeHomeConstruction,
    alt: "Complete custom home construction by Marvel Custom Homes",
    w: 1280,
    h: 854,
    copy: "From the foundation to the finishing touches, our complete home construction services deliver a seamless building experience. We handle everything...",
  },
  {
    n: "02",
    id: "design-consultation",
    title: "Architectural Design Consultation",
    img: designConsultation,
    alt: "Architectural design consultation blueprints and custom home planning",
    w: 915,
    h: 752,
    copy: "Transform your ideas into reality with our architectural design consultation services. We help you define your vision, develop functional floor plans, and ensure your project complies with local codes and zoning regulations...",
  },
  {
    n: "03",
    id: "interior-finish-out",
    title: "Interior Finish-Out",
    img: interiorFinishOut,
    alt: "Custom interior finish-out with refined lighting, flooring, and millwork",
    w: 750,
    h: 1019,
    copy: "Our interior finish-out services turn empty shells into fully functional and stunning living or working spaces. From drywall to flooring, lighting...",
  },
  {
    n: "04",
    id: "double-vanity",
    title: "Custom Interior Features & Double Vanities",
    img: doubleVanity,
    alt: "Custom double vanity installation with bespoke cabinetry and stone countertop",
    w: 1344,
    h: 768,
    copy: "Enhance your bathroom's style and functionality with a custom double vanity installation. Perfect for shared bathrooms, our vanities offer elegant...",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-cream py-[70px]">
      <div className="container-lux">
        <div className="relative grid gap-8 border-b border-[#9B8766]/25 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
              <Eyebrow n="02">Signature Services</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                The Art of Creating
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                Extraordinary Spaces.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-[#9B8766]/25 bg-ivory/75 p-5 shadow-[0_16px_38px_-18px_oklch(0.18_0.006_120/0.12)] backdrop-blur-sm sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#6B593B] via-[#9B8766] to-champagne"
              />
              <div className="pl-3 sm:pl-4">
                <p className="font-serif text-[1.25rem] font-semibold italic leading-snug text-charcoal sm:text-[1.35rem]">
                  Four disciplines, one standard.
                </p>
                <p className="mt-2 font-sans text-[0.96875rem] leading-[1.75] text-[#45443F]">
                  Every commission is guided from vision to completion by the same team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-12 flex flex-col gap-[40px] md:mt-14">
          {SERVICES.map((s, i) => {
            const isReversed = i % 2 === 1;
            return (
              <article
                key={s.n}
                id={s.id}
                style={{
                  top: `calc(6.25rem + ${i * 1.15}rem)`,
                  zIndex: (i + 1) * 10,
                }}
                className={`group/card sticky flex scroll-mt-32 flex-col items-center gap-8 overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-ivory p-6 shadow-[0_-14px_40px_-14px_oklch(0.18_0.006_120/0.18),0_28px_60px_-22px_oklch(0.18_0.006_120/0.24)] transition-all duration-700 ease-[var(--ease-lux)] hover:border-[#9B8766]/65 hover:shadow-[0_-16px_44px_-12px_oklch(0.18_0.006_120/0.24),0_36px_76px_-20px_oklch(0.18_0.006_120/0.32)] sm:p-8 md:min-h-[380px] ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } md:gap-[40px] lg:min-h-[400px] lg:p-10`}
              >
                {/* Persistent Top Bronze Hairline + Hover Gradient Accent Bar */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#9B8766]/25"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-x-100"
                />

                {/* Subtle Ambient Corner Glow & Floating Watermark Numeral */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-24 h-64 w-64 rounded-full bg-champagne/25 opacity-0 blur-3xl transition-opacity duration-700 group-hover/card:opacity-100 ${
                    isReversed ? "-left-24" : "-right-24"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-6 font-serif text-[8rem] font-bold italic leading-none text-[#9B8766]/[0.07] transition-all duration-700 ease-[var(--ease-lux)] select-none group-hover/card:-translate-y-3 group-hover/card:text-[#9B8766]/[0.14] md:text-[9.5rem] ${
                    isReversed ? "right-6 md:right-auto md:left-6" : "right-6"
                  }`}
                >
                  {s.n}
                </span>

                {/* 40% Image Column with Floating Frame, Sheen & Badges */}
                <div className="relative w-full shrink-0 md:w-[40%]">
                  <div className="relative">
                    {/* Animated Offset Architectural Frame */}
                    <div
                      aria-hidden="true"
                      className="animate-welcome-frame pointer-events-none absolute -inset-2 rounded-[6px] border border-[#9B8766]/40 bg-cream/65 transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:-translate-x-1.5 group-hover/card:-translate-y-1.5"
                    />

                    <div
                      className="relative z-10 block overflow-hidden rounded-[6px] bg-cream shadow-[0_18px_40px_-16px_oklch(0.18_0.006_120/0.3)] ring-1 ring-charcoal/12"
                      aria-label={s.title}
                    >
                      <img
                        src={s.img}
                        alt={s.alt}
                        width={s.w}
                        height={s.h}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] h-[240px] w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:scale-105 sm:h-[275px]"
                      />

                      {/* Subtle Vignette + Diagonal Glass Sheen Sweep */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-75 transition-opacity duration-500 group-hover/card:opacity-50"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/30 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:translate-x-full"
                      />

                      {/* Floating Top-Left Pulsing Badge */}
                      <div className="animate-welcome-badge absolute top-3.5 left-3.5 inline-flex items-center gap-2 rounded-[6px] border border-ivory/15 bg-charcoal/85 px-3 py-1.5 text-ivory backdrop-blur-md">
                        <span aria-hidden="true" className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
                        </span>
                        <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                          Service {s.n}
                        </span>
                      </div>

                      {/* Interactive Bottom-Right Arrow Orb */}
                      <span
                        aria-hidden="true"
                        className="absolute right-3.5 bottom-3.5 flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-charcoal/75 text-ivory backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] group-hover/card:scale-110 group-hover/card:border-champagne group-hover/card:bg-champagne group-hover/card:text-charcoal"
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-lux)] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* 60% Content Column */}
                <div className="relative z-10 w-full md:w-[60%]">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-6xl font-light text-[#9B8766] transition-colors duration-500 group-hover/card:text-[#6B593B] md:text-7xl">
                      {s.n}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-[#9B8766]/50 transition-all duration-700 ease-[var(--ease-lux)] group-hover/card:w-20 group-hover/card:bg-[#6B593B]"
                    />
                  </div>
                  <h3 className="mt-3 text-3xl font-bold text-charcoal transition-colors duration-500 group-hover/card:text-[#6B593B] md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-[1.8] text-muted-foreground">{s.copy}</p>
                  <div className="mt-7">
                    <button
                      type="button"
                      className="group/btn relative inline-flex min-h-12 cursor-pointer items-center gap-4 overflow-hidden rounded-[50px] bg-charcoal py-2 pr-2 pl-7 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_14px_30px_-10px_oklch(0.18_0.006_120/0.38)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:bg-[#171817] hover:shadow-[0_18px_38px_-10px_oklch(0.18_0.006_120/0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B593B]"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/15 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                      />
                      <span className="relative">Explore Service</span>
                      <span
                        aria-hidden="true"
                        className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ivory/14 text-champagne transition-all duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-champagne group-hover/btn:text-charcoal"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
