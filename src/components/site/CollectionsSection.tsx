import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Layers, Sparkles } from "lucide-react";
import b1 from "@/assets/b1.jpg";
import bathroom from "@/assets/bathroom.jpg";
import doubleVanity from "@/assets/double-vanity.webp";
import exterior from "@/assets/exterior-day.jpg";
import interiorFinishOut from "@/assets/Interior Finish Out.jpg";
import kitchen from "@/assets/kitchen.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/* 06 — COLLECTIONS */
interface CollectionItem {
  n: string;
  shortTitle: string;
  label: string;
  tag: string;
  quote: string;
  quoteAccent: string;
  desc: string;
  specs: readonly string[];
  primaryImg: string;
  primaryAlt: string;
  secondaryImg: string;
  secondaryCaption: string;
  materialTitle: string;
  materialSummary: string;
  ctaText: string;
  ctaTo: "/inspiration" | "/contact";
}

const COLLECTIONS: readonly CollectionItem[] = [
  {
    n: "01",
    shortTitle: "Kitchens",
    label: "01 — The Kitchen Collection",
    tag: "Culinary Architecture",
    quote: "Where thoughtful design meets",
    quoteAccent: "exceptional functionality.",
    desc: "Anchored by monolithic stone islands, concealed sculleries, and bespoke millwork engineered for effortless entertaining and daily culinary artistry.",
    specs: [
      "Bookmatched Calacatta Marble",
      "Rift-Cut White Oak Millwork",
      "Chef-Grade Integrated Appliances",
    ],
    primaryImg: kitchen,
    primaryAlt: "The Kitchen Collection — marble island and oak millwork",
    secondaryImg: interiorFinishOut,
    secondaryCaption: "Bespoke Cabinetry & Trim Detail",
    materialTitle: "Monolithic Stone & Millwork",
    materialSummary: "Hand-selected Italian slabs paired with furniture-grade joinery.",
    ctaText: "Explore Kitchens",
    ctaTo: "/inspiration",
  },
  {
    n: "02",
    shortTitle: "Bathrooms",
    label: "02 — The Bathroom Collection",
    tag: "Private Spa Sanctuaries",
    quote: "Refined materials. Beautiful proportions.",
    quoteAccent: "Everyday luxury.",
    desc: "Designed as restorative private retreats—featuring honed travertine walls, floating double vanities, architectural lighting, and sculptural soaking vessels.",
    specs: [
      "Honed Travertine & Stone Slabs",
      "Custom Walnut & Brass Vanities",
      "Spa-Caliber Soaking Sanctuaries",
    ],
    primaryImg: bathroom,
    primaryAlt: "The Bathroom Collection — travertine and walnut",
    secondaryImg: doubleVanity,
    secondaryCaption: "Custom Double-Vanity Suite",
    materialTitle: "Honed Travertine & Bronze",
    materialSummary: "Warm natural stone textures balanced with unlacquered brass fixtures.",
    ctaText: "Explore Bathrooms",
    ctaTo: "/inspiration",
  },
  {
    n: "03",
    shortTitle: "Exteriors",
    label: "03 — Architectural Exteriors",
    tag: "Timeless Estate Elevations",
    quote: "Distinctive architecture with",
    quoteAccent: "timeless visual appeal.",
    desc: "Every elevation is composed for generational permanence—uniting hand-dressed limestone, architectural bronze fenestration, and twilight landscape illumination.",
    specs: [
      "Hand-Selected Indiana Limestone",
      "Architectural Steel & Timber Framing",
      "Resort-Inspired Estate Grounds",
    ],
    primaryImg: exterior,
    primaryAlt: "Architectural Exteriors — limestone arched entry",
    secondaryImg: b1,
    secondaryCaption: "Twilight Estate Elevation",
    materialTitle: "Indiana Limestone & Steel",
    materialSummary: "Enduring masonry envelopes crafted for multi-generational presence.",
    ctaText: "Commission Your Home",
    ctaTo: "/contact",
  },
] as const;

export function CollectionsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [swappedImageMap, setSwappedImageMap] = useState<Record<number, boolean>>({});

  const toggleSecondaryImage = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSwappedImageMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="relative overflow-x-clip bg-cream py-[70px] text-charcoal">
      {/* Subtle Ambient Champagne Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/4 h-96 w-96 rounded-full bg-champagne/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 -bottom-36 h-96 w-96 rounded-full bg-[#9B8766]/15 blur-3xl"
      />

      <div className="container-lux relative z-10">
        {/* Section Header */}
        <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold">
              <Eyebrow n="05">Featured Collections</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Discover the
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#9B8766]">
                Marvel Collection.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-charcoal/12 bg-ivory/90 p-5 shadow-[0_16px_38px_-22px_rgba(28,28,28,0.18)] backdrop-blur-sm sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#9B8766] via-champagne to-transparent"
              />
              <div className="pl-3 sm:pl-4">
                <p className="font-sans text-[0.95rem] leading-[1.7] text-charcoal/80">
                  Three signature architectural collections—each crafted with rare natural stone,
                  bespoke millwork, and enduring proportions.
                </p>

                {/* Interactive Collection Switcher Pills */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {COLLECTIONS.map((col, idx) => {
                    const isActive = idx === activeIdx;
                    return (
                      <button
                        key={col.n}
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        className={`inline-flex items-center gap-2 rounded-[50px] border px-3.5 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-all duration-400 ${
                          isActive
                            ? "border-[#9B8766] bg-charcoal text-ivory shadow-sm"
                            : "border-charcoal/15 bg-bone/80 text-charcoal/70 hover:border-[#9B8766]/60 hover:text-charcoal"
                        }`}
                      >
                        <span
                          className={`font-serif italic ${
                            isActive ? "text-champagne" : "text-[#9B8766]"
                          }`}
                        >
                          {col.n}
                        </span>
                        <span>{col.shortTitle}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Interactive 3-Panel Expanding Architectural Triptych */}
        <Reveal delay={180} className="mt-12 lg:mt-14">
          <div className="relative">
            {/* Floating Offset Outer Frame */}
            <div
              aria-hidden="true"
              className="animate-welcome-frame pointer-events-none absolute -inset-2 hidden rounded-[6px] border border-[#9B8766]/25 bg-ivory/40 lg:block"
            />

            <div className="relative z-10 flex flex-col gap-5 lg:h-[640px] lg:flex-row lg:gap-4">
              {COLLECTIONS.map((col, idx) => {
                const isActive = idx === activeIdx;
                const isSwapped = Boolean(swappedImageMap[idx]);
                const mainImg = isSwapped ? col.secondaryImg : col.primaryImg;
                const thumbImg = isSwapped ? col.primaryImg : col.secondaryImg;

                return (
                  <article
                    key={col.n}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`group/panel relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[6px] border bg-charcoal text-ivory transition-all duration-700 ease-[var(--ease-lux)] ${
                      isActive
                        ? "min-h-[540px] border-[#9B8766] shadow-[0_32px_72px_-18px_rgba(28,28,28,0.65)] lg:min-h-0 lg:flex-[2.6]"
                        : "min-h-[220px] border-charcoal/20 opacity-90 shadow-[0_20px_44px_-20px_rgba(28,28,28,0.4)] hover:border-[#9B8766]/70 hover:opacity-100 lg:min-h-0 lg:flex-[0.85]"
                    }`}
                  >
                    {/* Top Champagne Accent Bar */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-700 ease-[var(--ease-lux)] ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover/panel:scale-x-100"
                      }`}
                    />

                    {/* Full-Bleed Collection Photograph */}
                    <img
                      src={mainImg}
                      alt={col.primaryAlt}
                      width={1600}
                      height={1104}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] ${
                        isActive
                          ? "scale-100 group-hover/panel:scale-105"
                          : "scale-105 group-hover/panel:scale-110"
                      }`}
                    />

                    {/* Multi-Layer Cinematic Scrims */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                        isActive
                          ? "bg-gradient-to-t from-charcoal/95 via-charcoal/35 to-charcoal/35"
                          : "bg-gradient-to-t from-charcoal/92 via-charcoal/55 to-charcoal/40"
                      }`}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/65 via-transparent to-transparent"
                    />

                    {/* Top Bar of Panel */}
                    <div className="relative z-20 flex items-start justify-between gap-3 p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-serif text-lg font-bold italic transition-all duration-500 ${
                            isActive
                              ? "border-champagne bg-gradient-to-br from-champagne via-[#b89f74] to-[#9B8766] text-charcoal shadow-[0_0_24px_rgba(217,199,165,0.45)]"
                              : "border-ivory/30 bg-charcoal/80 text-champagne backdrop-blur-md group-hover/panel:border-champagne"
                          }`}
                        >
                          {col.n}
                        </span>

                        {isActive && (
                          <div className="animate-welcome-badge inline-flex items-center gap-2 rounded-[6px] border border-ivory/20 bg-charcoal/80 px-3 py-1.5 backdrop-blur-md">
                            <Sparkles className="h-3.5 w-3.5 text-champagne" />
                            <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                              {col.tag}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Secondary Detail Image Swap Card (Visible on Active Panel) */}
                      {isActive ? (
                        <button
                          type="button"
                          onClick={(e) => toggleSecondaryImage(idx, e)}
                          title="Click to swap collection view"
                          className="animate-welcome-card group/swap hidden w-44 overflow-hidden rounded-[6px] border-2 border-champagne/60 bg-charcoal/90 text-left shadow-[0_18px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-ivory sm:block"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                              src={thumbImg}
                              alt={col.secondaryCaption}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover/swap:scale-110"
                            />
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent"
                            />
                            <span className="absolute top-1.5 right-1.5 inline-flex items-center gap-1 rounded-[4px] bg-charcoal/85 px-1.5 py-0.5 font-sans text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-champagne">
                              <Layers className="h-2.5 w-2.5" />
                              Swap View
                            </span>
                          </div>
                          <div className="px-2.5 py-1.5">
                            <p className="truncate font-serif text-xs font-bold text-ivory">
                              {col.secondaryCaption}
                            </p>
                          </div>
                        </button>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/75 text-champagne backdrop-blur-md transition-all duration-500 group-hover/panel:border-champagne group-hover/panel:bg-champagne group-hover/panel:text-charcoal"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      )}
                    </div>

                    {/* Bottom Content Area */}
                    <div className="relative z-20 p-5 sm:p-6">
                      {isActive ? (
                        /* Expanded Editorial Plate */
                        <div className="relative overflow-hidden rounded-[6px] border border-ivory/20 bg-charcoal/85 p-5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-md sm:p-7">
                          {/* Subtle Watermark Numeral */}
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute right-4 -bottom-5 font-serif text-[6.5rem] font-bold italic leading-none text-champagne/[0.08] select-none"
                          >
                            {col.n}
                          </span>

                          <div className="relative z-10">
                            <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                              {col.label}
                            </span>

                            <h3 className="mt-2 font-serif text-2xl font-bold leading-[1.15] text-ivory sm:text-3xl lg:text-[2.15rem]">
                              “{col.quote}{" "}
                              <em className="font-bold italic text-champagne">{col.quoteAccent}</em>
                              ”
                            </h3>

                            <p className="mt-3 max-w-2xl font-sans text-[0.925rem] leading-[1.7] text-ivory/80">
                              {col.desc}
                            </p>

                            {/* Specification Pills + CTA Row */}
                            <div className="mt-5 flex flex-col gap-4 border-t border-ivory/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex flex-wrap gap-2">
                                {col.specs.map((spec) => (
                                  <span
                                    key={spec}
                                    className="inline-flex items-center gap-1.5 rounded-[4px] border border-champagne/30 bg-ivory/[0.06] px-2.5 py-1 font-sans text-[0.68rem] font-medium text-ivory/90"
                                  >
                                    <CheckCircle2 className="h-3 w-3 shrink-0 text-champagne" />
                                    {spec}
                                  </span>
                                ))}
                              </div>

                              <button
                                type="button"
                                onClick={(e) => e.stopPropagation()}
                                className="group/btn relative inline-flex shrink-0 cursor-pointer items-center gap-3 self-start overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-5 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_28px_-8px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-ivory hover:shadow-[0_16px_36px_-6px_rgba(155,135,102,0.55)] sm:self-auto"
                              >
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                                />
                                <span className="relative z-10">{col.ctaText}</span>
                                <span
                                  aria-hidden="true"
                                  className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-all duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                                >
                                  <ArrowUpRight className="h-3 w-3" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Compact Vertical Pillar Plate for Inactive Panels */
                        <div className="rounded-[6px] border border-ivory/15 bg-charcoal/80 p-4 backdrop-blur-md transition-all duration-500 group-hover/panel:border-champagne/50 group-hover/panel:bg-charcoal/90">
                          <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                            {col.tag}
                          </span>
                          <h3 className="mt-1 font-serif text-2xl font-bold text-ivory group-hover/panel:text-champagne">
                            {col.shortTitle}
                          </h3>
                          <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-ivory/70">
                            “{col.quote} {col.quoteAccent}”
                          </p>
                          <div className="mt-3 inline-flex items-center gap-1.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                            <span>Expand Collection</span>
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/panel:translate-x-0.5 group-hover/panel:-translate-y-0.5" />
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Bottom 3-Column Architectural Material & Specification Ledger */}
        <Reveal delay={240} className="mt-6 grid gap-4 md:grid-cols-3">
          {COLLECTIONS.map((col, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={col.n}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`group/ledger relative flex items-center justify-between gap-4 overflow-hidden rounded-[6px] border p-4 text-left transition-all duration-500 ease-[var(--ease-lux)] sm:p-5 ${
                  isActive
                    ? "border-[#9B8766] bg-charcoal text-ivory shadow-[0_18px_40px_-16px_rgba(28,28,28,0.45)]"
                    : "border-charcoal/12 bg-ivory/85 text-charcoal hover:-translate-y-0.5 hover:border-[#9B8766]/50 hover:bg-ivory"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#9B8766] via-champagne to-transparent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0 group-hover/ledger:opacity-60"
                  }`}
                />
                <div className="min-w-0 pl-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-serif text-base font-bold italic ${
                        isActive ? "text-champagne" : "text-[#9B8766]"
                      }`}
                    >
                      {col.n}
                    </span>
                    <span
                      className={`font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                        isActive ? "text-champagne" : "text-warm-gray"
                      }`}
                    >
                      {col.shortTitle}
                    </span>
                  </div>
                  <h4
                    className={`mt-1 truncate font-serif text-lg font-bold ${
                      isActive ? "text-ivory" : "text-charcoal"
                    }`}
                  >
                    {col.materialTitle}
                  </h4>
                  <p
                    className={`mt-0.5 line-clamp-1 font-sans text-xs ${
                      isActive ? "text-ivory/75" : "text-charcoal/70"
                    }`}
                  >
                    {col.materialSummary}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-champagne bg-champagne text-charcoal"
                      : "border-charcoal/15 bg-bone text-charcoal group-hover/ledger:border-[#9B8766] group-hover/ledger:text-[#9B8766]"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
