import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { GALLERY } from "./GallerySection";
import { Reveal } from "./Reveal";

const CRAFT_STANDARDS = [
  {
    n: "01",
    title: "Structural Permanence & Masonry",
    subtitle: "Engineered for North Texas Topography",
    description:
      "Every residence and commercial structure is anchored by engineered post-tension foundations, structural steel framing, and hand-dressed limestone and brick coursing.",
    points: [
      "Post-Tension Slab & Pier Engineering",
      "Hand-Selected Texas & Indiana Limestone",
      "High-Performance Thermal Envelope",
    ],
    img: GALLERY[5].img, // 06: Complete Home Construction
    alt: GALLERY[5].title,
  },
  {
    n: "02",
    title: "Bespoke Millwork & Stone Slabs",
    subtitle: "Artisan Joinery & Material Curation",
    description:
      "Our finish carpenters and stone fabricators craft custom coffered ceilings, rift-cut white oak cabinetry, bookmatched Calacatta islands, and symmetrical double vanities.",
    points: [
      "Bookmatched Marble, Quartzite & Travertine",
      "Furniture-Grade White Oak & Walnut Millwork",
      "Coffered Ceilings & Zero-Tolerance Trim",
    ],
    img: GALLERY[4].img, // 05: Bespoke Interior Finish Out
    alt: GALLERY[4].title,
  },
  {
    n: "03",
    title: "Indoor-Outdoor Living & Lighting",
    subtitle: "Resort-Caliber Spatial Choreography",
    description:
      "Expansive glazing, cantilevered pavilions, and multi-layered warm architectural illumination unite interior salons with private North Texas terraces and pools.",
    points: [
      "Floor-to-Ceiling Thermal Window Walls",
      "Custom Hearth & Evening Lounge Lighting",
      "Turnkey Landscape & Motor Court Arrival",
    ],
    img: GALLERY[11].img, // 12: Modern Pavilion Residence
    alt: GALLERY[11].title,
  },
] as const;

export function WorksCraft() {
  return (
    <section className="relative overflow-x-clip bg-ivory py-[70px] text-charcoal sm:py-[90px]">
      <div className="container-lux">
        {/* Section Editorial Split Header */}
        <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
              <Eyebrow n="04">Architectural Standards</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                The Materiality Behind
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                Every Marvel Structure.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <p className="font-sans text-[0.96rem] leading-[1.8] text-charcoal/80">
              Beauty that endures for generations requires uncompromising execution behind the walls
              as well as on the surface. Discover the three foundational standards present in every
              commission we build.
            </p>
          </Reveal>
        </div>

        {/* 3 Architectural Standard Cards */}
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {CRAFT_STANDARDS.map((item, idx) => (
            <Reveal key={item.n} delay={idx * 90}>
              <article className="group/card relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-cream/55 p-6 shadow-[0_22px_48px_-20px_rgba(28,28,28,0.16)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766] hover:bg-ivory hover:shadow-[0_32px_68px_-18px_rgba(28,28,28,0.26)] sm:p-7">
                {/* Persistent Top Bronze Hairline + Hover Gradient */}
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
                  className="pointer-events-none absolute -right-2 -bottom-5 font-serif text-[6.5rem] font-bold italic leading-none text-[#9B8766]/[0.08] select-none"
                >
                  {item.n}
                </span>

                <div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] bg-charcoal ring-1 ring-charcoal/10">
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-[4px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                      Standard {item.n}
                    </span>
                  </div>

                  <p className="mt-5 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-1.5 font-serif text-[1.6rem] font-bold leading-snug text-charcoal">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 font-sans text-[0.9rem] leading-[1.75] text-charcoal/78">
                    {item.description}
                  </p>
                </div>

                <ul className="relative z-10 mt-6 space-y-2 border-t border-charcoal/10 pt-4">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 font-sans text-[0.78rem] font-medium text-charcoal/85"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#6B593B]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom Private Portfolio Consultation Banner */}
        <Reveal delay={200} className="mt-12">
          <div className="relative overflow-hidden rounded-[8px] border border-charcoal/15 bg-charcoal p-6 text-ivory shadow-[0_28px_60px_-20px_rgba(28,28,28,0.5)] sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-[#9B8766]"
            />

            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/35 bg-ivory/[0.06] px-3.5 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  <Sparkles className="h-3 w-3" />
                  <span>Commission Your Custom Residence or Commercial Build</span>
                </div>
                <h3 className="mt-3.5 font-serif text-2xl font-bold text-ivory sm:text-3xl">
                  Ready to Turn Your Architectural Vision Into Reality?
                </h3>
                <p className="mt-2 max-w-2xl font-sans text-[0.92rem] leading-[1.75] text-ivory/78">
                  Visit our Dallas headquarters for a private architectural walkthrough and material
                  consultation across{" "}
                  <span className="text-champagne">
                    Rockwall, Heath, Fate, Mansfield, Midlothian, McKinney, and Allen
                  </span>
                  .
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 font-sans text-xs text-ivory/75">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-champagne" />
                    {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-champagne" />
                    At Your Service Since 2017
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Hammer className="h-3.5 w-3.5 text-champagne" />
                    Residential &amp; Commercial
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <Link
                  to="/contact"
                  className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_14px_30px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory"
                >
                  <span>Schedule Consultation</span>
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
