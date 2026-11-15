import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Compass, MapPin, Phone, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const STYLE_MATRIX = [
  {
    num: "01/",
    name: "Traditional",
    facade: "Symmetrical elevations, classic brick & stone masonry, pitched gables",
    interiors: "Formal living & dining rooms, crown molding, warm heritage palettes",
    materials: "Hand-laid brick, quarried stone, rich hardwoods, classic millwork",
    signature: [
      "Classic Facades",
      "Formal Living Spaces",
      "Elegant Interiors",
      "Timeless Materials",
    ],
    href: "#style-01",
  },
  {
    num: "02/",
    name: "Farm House",
    facade: "Wide welcoming front porches, classic gabled roofs, board-and-batten siding",
    interiors: "Calm airy neutral palettes, open floor plans built for family gathering",
    materials: "Natural timber beams, stone accents, wide-plank oak, oversized windows",
    signature: ["Outdoor Spaces", "Open Floor Plans", "Large Windows & Doors", "Natural Material"],
    href: "#style-02",
  },
  {
    num: "03/",
    name: "Modern Design",
    facade: "Clean architectural lines, minimalist geometry, expansive floor-to-ceiling glass",
    interiors: "Tranquil uncluttered volumes, linear lighting, indoor-outdoor harmony",
    materials: "Bookmatched marble slabs, natural wood & stone, architectural steel",
    signature: ["Outdoor Spaces", "Open Floor Plans", "Large Windows & Doors", "Natural Material"],
    href: "#style-03",
  },
] as const;

export function OurHomesComparison() {
  return (
    <section className="relative overflow-x-clip bg-ivory py-[70px] text-charcoal sm:py-[90px]">
      <div className="container-lux">
        {/* Section Header */}
        <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
              <Eyebrow n="04">Architectural Comparison</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Choose Your Signature Style—or
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                Blend Them Into One.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <p className="font-sans text-[0.96rem] leading-[1.8] text-charcoal/80">
              Every Marvel home is custom-drafted from the ground up. Compare our three core
              architectural vocabularies below, or work with our architects to unite Traditional
              masonry, Farmhouse warmth, and Modern minimalism.
            </p>
          </Reveal>
        </div>

        {/* 3-Column Architectural Comparison Matrix */}
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {STYLE_MATRIX.map((item, idx) => (
            <Reveal key={item.num} delay={idx * 90}>
              <article className="group/matrix relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-cream/55 p-6 shadow-[0_22px_48px_-20px_rgba(28,28,28,0.16)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#9B8766] hover:bg-ivory hover:shadow-[0_32px_68px_-18px_rgba(28,28,28,0.26)] sm:p-7">
                {/* Persistent Top Bronze Hairline */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne"
                />

                {/* Watermark Numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 -bottom-5 font-serif text-[6rem] font-bold italic leading-none text-[#9B8766]/[0.08] select-none"
                >
                  {item.num}
                </span>

                <div>
                  <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
                    <div>
                      <span className="font-serif text-lg font-bold italic text-[#6B593B]">
                        {item.num}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-charcoal sm:text-[1.75rem]">
                        {item.name}
                      </h3>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9B8766]/40 bg-ivory text-[#6B593B]">
                      <Compass className="h-4 w-4" />
                    </span>
                  </div>

                  <dl className="mt-5 space-y-4">
                    <div>
                      <dt className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                        Exterior &amp; Roofline
                      </dt>
                      <dd className="mt-1 font-sans text-[0.86rem] leading-relaxed text-charcoal/82">
                        {item.facade}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                        Interior Spatial Flow
                      </dt>
                      <dd className="mt-1 font-sans text-[0.86rem] leading-relaxed text-charcoal/82">
                        {item.interiors}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                        Primary Materials
                      </dt>
                      <dd className="mt-1 font-sans text-[0.86rem] leading-relaxed text-charcoal/82">
                        {item.materials}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="relative z-10 mt-6 border-t border-charcoal/10 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.signature.map((sig) => (
                      <span
                        key={sig}
                        className="inline-flex items-center gap-1 rounded-[4px] border border-[#9B8766]/30 bg-ivory px-2.5 py-1 font-sans text-[0.64rem] font-medium text-charcoal/85"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-[#6B593B]" />
                        {sig}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-2">
                    <a
                      href={item.href}
                      className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B] underline decoration-[#9B8766]/50 underline-offset-4 hover:text-charcoal"
                    >
                      Review {item.name}
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-charcoal hover:text-[#6B593B]"
                    >
                      <span>Start Design</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#9B8766]" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom Dallas Studio Consultation Banner */}
        <Reveal delay={220} className="mt-12">
          <div className="relative overflow-hidden rounded-[8px] border border-charcoal/15 bg-charcoal p-6 text-ivory shadow-[0_28px_60px_-20px_rgba(28,28,28,0.5)] sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-[#9B8766]"
            />

            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/35 bg-ivory/[0.06] px-3.5 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  <Sparkles className="h-3 w-3" />
                  <span>Custom Architectural Consultation · Dallas–Fort Worth</span>
                </div>
                <h3 className="mt-3.5 font-serif text-2xl font-bold text-ivory sm:text-3xl">
                  Bring Your Traditional, Farmhouse, or Modern Vision to Life
                </h3>
                <p className="mt-2 max-w-2xl font-sans text-[0.92rem] leading-[1.75] text-ivory/78">
                  Meet with our architects and builders at{" "}
                  <span className="text-champagne">
                    {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                  </span>{" "}
                  to explore floor plans, elevations, and material samples tailored to your lot.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 font-sans text-xs text-ivory/70">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-champagne" />
                    Serving Rockwall, Heath, Fate, Mansfield, Midlothian, McKinney &amp; Allen
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <Link
                  to="/contact"
                  className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_14px_30px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory"
                >
                  <span>Book Design Consultation</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>

                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-[50px] border border-ivory/25 bg-ivory/[0.06] px-5 py-3.5 font-sans text-[0.75rem] font-semibold tracking-[0.08em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
                >
                  <Phone className="h-3.5 w-3.5 text-champagne" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
