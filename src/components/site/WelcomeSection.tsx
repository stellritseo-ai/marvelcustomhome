import { ArrowRight } from "lucide-react";
import welcome1 from "@/assets/welcome1.png";
import welcome2 from "@/assets/welcome2.png";
import { Eyebrow } from "./Eyebrow";
import { Parallax, Reveal } from "./Reveal";

/* 02 — WELCOME / INTRO */
const PILLARS = [
  { step: "Design", label: "Architectural Planning" },
  { step: "Customize", label: "Bespoke Interiors" },
  { step: "Build", label: "Master Craftsmanship" },
] as const;

export function WelcomeSection() {
  return (
    <section className="relative overflow-x-clip bg-ivory py-[60px]">
      <div className="container-lux">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left Column: Layered Architectural Gallery Composition */}
          <div className="relative grid grid-cols-12 items-start pb-8 sm:pb-10 lg:col-span-6">
            {/* Offset Warm Champagne Architectural Frame with Gentle Drift */}
            <div
              aria-hidden="true"
              className="pointer-events-none col-start-1 col-end-10 row-start-1 aspect-[4/5] w-full -translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4"
            >
              <div className="animate-welcome-frame h-full w-full rounded-[6px] border border-[#9B8766]/45 bg-cream/65" />
            </div>

            {/* Primary Showcase Photograph (welcome1.png) */}
            <div className="relative z-10 col-start-1 col-end-10 row-start-1">
              <Reveal>
                <div className="group/main relative overflow-hidden rounded-[6px] bg-cream shadow-[0_30px_60px_-20px_oklch(0.18_0.006_120/0.28)] ring-1 ring-charcoal/12">
                  <Parallax
                    src={welcome1}
                    alt="Luxury custom kitchen with bookmatched Calacatta marble waterfall island and dark walnut cabinetry"
                    width={736}
                    height={736}
                    className="aspect-[4/5] w-full transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/main:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-charcoal/20 via-transparent to-ivory/10 opacity-75 transition-opacity duration-700 group-hover/main:opacity-40"
                  />
                </div>
              </Reveal>
            </div>

            {/* Floating Obsidian Architectural Tag (Top-Right Straddle) */}
            <div className="relative z-20 col-start-4 col-end-13 row-start-1 mt-4 mr-1 self-start justify-self-end sm:mt-6 sm:mr-3">
              <Reveal delay={160}>
                <div className="animate-welcome-badge inline-flex items-center gap-3 rounded-[6px] border border-ivory/15 bg-charcoal/90 px-4 py-2.5 text-ivory shadow-[0_18px_40px_-12px_oklch(0.12_0.005_120/0.5)] backdrop-blur-md sm:px-4.5 sm:py-3">
                  <span aria-hidden="true" className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-champagne" />
                  </span>
                  <div>
                    <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-champagne">
                      Dallas–Fort Worth
                    </p>
                    <p className="mt-0.5 font-serif text-[0.9375rem] italic leading-tight text-ivory">
                      Residential &amp; Commercial
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Secondary Overlapping Showcase Plate (welcome2.png — Bottom-Right) */}
            <div className="relative z-20 col-start-6 col-end-13 row-start-1 translate-y-6 self-end sm:col-start-6 sm:translate-y-8">
              <Reveal delay={240}>
                <div className="animate-welcome-card group/sub rounded-[6px] bg-ivory p-2 shadow-[0_28px_60px_-18px_oklch(0.16_0.006_120/0.36)] ring-1 ring-charcoal/10 sm:p-2.5">
                  <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[4px] bg-cream">
                    <img
                      src={welcome2}
                      alt="Bespoke contemporary kitchen featuring a veined marble island, integrated sink, and warm ambient lighting"
                      width={735}
                      height={919}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/25 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/sub:translate-x-full"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: About Us Story, Craft Pillars & Bespoke Pill CTA */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                <Eyebrow n="01">About Us</Eyebrow>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
                <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                  Welcome to
                </span>
                <em className="mt-0 -mb-[20px] block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                  Marvel Custom Homes
                </em>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-6 space-y-4">
                <p className="max-w-[56ch] font-sans text-[1rem] leading-[1.82] text-pretty text-charcoal/90 sm:text-[1.0625rem]">
                  At Marvel Custom Homes, we are dedicated to building superior homes for your
                  family and future. Our unwavering commitment to excellence ensures that each home
                  we construct meets the highest standards of quality and craftsmanship. Our name is
                  built on trust, and every member of Superior Homes Custom, Inc. plays a crucial
                  role in making your dream home a reality.
                </p>

                <p className="max-w-[56ch] font-sans text-[0.96875rem] leading-[1.82] text-pretty text-[#45443F] sm:text-[1.03125rem]">
                  Our experienced builders understand the importance of using only the finest
                  products and materials. This dedication to quality not only creates stunning
                  beauty but also ensures the longevity and durability of your home. In addition to
                  residential construction, we specialize in commercial reconstruction, hotels, and
                  office buildings, proudly serving the Dallas-Fort Worth area.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 grid grid-cols-1 gap-4 border-y border-charcoal/14 py-5 min-[480px]:grid-cols-3 min-[480px]:gap-5">
                {PILLARS.map((item, idx) => (
                  <li
                    key={item.step}
                    className={`group/pillar relative transition-transform duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 ${
                      idx > 0
                        ? "min-[480px]:border-l min-[480px]:border-charcoal/12 min-[480px]:pl-5"
                        : ""
                    }`}
                  >
                    <span className="flex items-center gap-2 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-[#6B593B]">
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-[#6B593B] transition-all duration-500 ease-[var(--ease-lux)] group-hover/pillar:w-3"
                      />
                      {item.step}
                    </span>
                    <span className="mt-1 block font-serif text-[1.125rem] font-medium leading-snug text-charcoal">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8">
                <button
                  type="button"
                  className="group relative inline-flex min-h-12 cursor-pointer items-center gap-4 overflow-hidden rounded-[50px] bg-charcoal py-2 pr-2 pl-7 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_14px_30px_-10px_oklch(0.18_0.006_120/0.4)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:bg-[#171817] hover:shadow-[0_18px_38px_-10px_oklch(0.18_0.006_120/0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B593B]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/10 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover:translate-x-full"
                  />
                  <span className="relative">Discover Our Story</span>
                  <span
                    aria-hidden="true"
                    className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ivory/14 text-champagne transition-all duration-500 ease-[var(--ease-lux)] group-hover:translate-x-0.5 group-hover:bg-champagne group-hover:text-charcoal"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
