import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import b1 from "@/assets/b1.jpg";
import b3 from "@/assets/b3.png";
import completeHomeImg from "@/assets/complete-home-construction.jpg";
import constructionImg from "@/assets/construction.jpg";
import designConsultImg from "@/assets/Design consultation - Architectural.png";
import exteriorImg from "@/assets/exterior-day.jpg";
import processBg from "@/assets/processbg.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const MILESTONES = [
  {
    year: "2017",
    chapter: "Chapter I · Founding Vision",
    title: "Where the Foundation Was Laid",
    subtitle: "Residential Craftsmanship in Dallas–Fort Worth",
    description:
      "Our journey began in 2017 with a clear vision: to craft custom residences defined by structural integrity, fine masonry, and generational durability across North Texas.",
    highlights: [
      "Master Masonry & Structural Framing",
      "Bespoke Single-Family Residences",
      "Dedicated On-Site Supervision",
    ],
    img: constructionImg,
    alt: "Custom residence framing and structural masonry in Dallas",
  },
  {
    year: "2019",
    chapter: "Chapter II · Architectural Evolution",
    title: "Expanding Custom Estate Commissions",
    subtitle: "Tailored Floorplans & Luxury Elevations",
    description:
      "By 2019, word-of-mouth trust propelled Marvel Custom Homes into multi-acre estate residences, uniting classical limestone architecture with modern open-concept living.",
    highlights: [
      "Custom Architectural Blueprinting",
      "Multi-Generational Estate Layouts",
      "High-Performance Building Envelopes",
    ],
    img: exteriorImg,
    alt: "Limestone and white brick custom residence in North Texas",
  },
  {
    year: "2021",
    chapter: "Chapter III · Commercial Excellence",
    title: "Offices, Retail & Hospitality Spaces",
    subtitle: "Commercial-Grade Precision & Scale",
    description:
      "Expanding beyond residential estates, we brought our signature attention to detail to commercial construction — delivering executive office buildings and boutique hotels across DFW.",
    highlights: [
      "Executive Office Developments",
      "Boutique Hospitality & Hotel Suites",
      "Strict Commercial Code & Timeline Mastery",
    ],
    img: b1,
    alt: "Custom architectural facade with clay roof tiles and arched detailing",
  },
  {
    year: "2023",
    chapter: "Chapter IV · Turnkey Design Studio",
    title: "Architectural Consultation & Interior Finish-Out",
    subtitle: "From Concept Sketch to Bespoke Millwork",
    description:
      "We integrated full-spectrum architectural design consultation and interior finish-out under one roof — curating bookmatched stone slabs, custom cabinetry, and double vanities.",
    highlights: [
      "In-House Architectural Design Consultation",
      "Complete Interior Finish-Out Execution",
      "Custom Double Vanities & Artisan Millwork",
    ],
    img: designConsultImg,
    alt: "Architectural design consultation and material curation studio",
  },
  {
    year: "2024",
    chapter: "Chapter V · North Texas Footprint",
    title: "Building Across Premier DFW Enclaves",
    subtitle: "Rockwall, Heath, Fate, Mansfield, Midlothian & McKinney",
    description:
      "Deepened our presence across the fastest-growing luxury communities of North Texas, forging lasting relationships with homeowners, land developers, and local municipalities.",
    highlights: [
      "Lakeside Estates in Rockwall & Heath",
      "Acreage Retreats in Midlothian & Mansfield",
      "Bespoke Builds in McKinney & Fate",
    ],
    img: completeHomeImg,
    alt: "Complete custom home construction in North Texas",
  },
  {
    year: "2025",
    chapter: "Chapter VI · Next-Generation Living",
    title: "Crafting the Future of Custom Architecture",
    subtitle: "Enduring Beauty, Smart Living & Unwavering Trust",
    description:
      "Today and beyond, Marvel Custom Homes continues to set the benchmark for residential and commercial construction in Dallas–Fort Worth — where every brick tells your story.",
    highlights: [
      "Smart-Home & Energy-Efficient Integration",
      "White-Glove Client Experience",
      "Generational Structural Warranty",
    ],
    img: b3,
    alt: "Luxury primary suite with custom wood paneling and backlit marble",
  },
] as const;

export function AboutStory() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % MILESTONES.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeMilestone = MILESTONES[activeIdx] ?? MILESTONES[0];

  function prevYear() {
    setActiveIdx((prev) => (prev - 1 + MILESTONES.length) % MILESTONES.length);
  }

  function nextYear() {
    setActiveIdx((prev) => (prev + 1) % MILESTONES.length);
  }

  return (
    <section
      className="relative overflow-x-clip bg-charcoal py-[70px] text-ivory sm:py-[90px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Atmospheric Background Image + Multi-Layer Scrim */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={processBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal/90" />
      </div>

      {/* Subtle Ambient Champagne Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 z-0 h-96 w-96 rounded-full bg-[#9B8766]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 -bottom-32 z-0 h-96 w-96 rounded-full bg-champagne/12 blur-3xl"
      />

      <div className="container-lux relative z-10">
        {/* =================================================================
            TOP EDITORIAL SPLIT: OUR STORY
           ================================================================= */}
        <div className="grid gap-10 border-b border-ivory/15 pb-12 lg:grid-cols-12 lg:items-end lg:gap-14 lg:pb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow n="02" light>
                Our Story
              </Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-ivory">
                <span className="block text-[clamp(1.4rem,1.05rem+1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                  Where Dreams Take Shape,
                </span>
                <em className="mt-1 block text-[clamp(2.35rem,1.35rem+3vw,4.15rem)] font-bold italic leading-[1.05] text-champagne">
                  One Brick at a Time.
                </em>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={140}>
              <div className="space-y-4">
                <p className="font-sans text-[0.98rem] leading-[1.82] text-ivory/85 sm:text-[1.04rem]">
                  At Marvel Custom Homes, our journey began with a vision: to craft homes that
                  aren’t just beautiful but also built to last for generations. Guided by a passion
                  for quality and integrity, we’ve established ourselves as a trusted name in
                  residential and commercial construction across the Dallas-Fort Worth area.
                </p>
                <div className="rounded-[6px] border-l-2 border-champagne bg-ivory/[0.05] px-5 py-4 backdrop-blur-sm">
                  <p className="font-serif text-[1.15rem] italic leading-relaxed text-champagne sm:text-[1.25rem]">
                    “Every project we take on is driven by our core belief — that a home is more
                    than just a place to live; it’s where your story unfolds.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* =================================================================
            INTERACTIVE HERITAGE TIMELINE: AT YOUR SERVICE SINCE 2017–2025
           ================================================================= */}
        <div className="mt-12 sm:mt-16">
          {/* Timeline Header & Controls */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/40 bg-champagne/15 px-3.5 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                <Sparkles className="h-3 w-3" />
                <span>At your service since</span>
              </span>
              <span className="font-serif text-xl italic text-ivory/80 sm:text-2xl">
                2017 — 2025
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={prevYear}
                aria-label="Previous milestone year"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/[0.05] text-ivory transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextYear}
                aria-label="Next milestone year"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/[0.05] text-ivory transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Year Node Track */}
          <div className="relative mt-8">
            {/* Connecting Hairline Track */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-ivory/15 md:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-0 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#9B8766] to-champagne transition-all duration-500 md:block"
              style={{ width: `${(activeIdx / (MILESTONES.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6 sm:gap-3">
              {MILESTONES.map((item, idx) => {
                const isActive = idx === activeIdx;
                const isPast = idx < activeIdx;
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`group relative z-10 flex cursor-pointer flex-col items-center justify-center rounded-[6px] border px-3 py-3.5 text-center transition-all duration-300 ${
                      isActive
                        ? "border-champagne bg-gradient-to-b from-[#9B8766] to-[#7E6B4F] text-ivory shadow-[0_14px_30px_-8px_rgba(184,159,116,0.55)] -translate-y-0.5"
                        : isPast
                          ? "border-champagne/40 bg-charcoal/90 text-champagne hover:border-champagne"
                          : "border-ivory/15 bg-charcoal/85 text-ivory/70 hover:border-champagne/50 hover:text-ivory"
                    }`}
                  >
                    <span
                      className={`font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] ${
                        isActive ? "text-ivory/90" : "text-champagne/75"
                      }`}
                    >
                      Year 0{idx + 1}
                    </span>
                    <span className="mt-0.5 font-serif text-2xl font-bold tracking-tight sm:text-[1.65rem]">
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Year Showcase Stage */}
          <div className="mt-8 overflow-hidden rounded-[8px] border border-ivory/18 bg-charcoal/75 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md">
            <div className="grid items-stretch lg:grid-cols-12">
              {/* Left: Architectural Photograph + Watermark Year */}
              <div className="relative min-h-[280px] overflow-hidden bg-graphite sm:min-h-[360px] lg:col-span-5">
                <img
                  key={activeMilestone.year}
                  src={activeMilestone.img}
                  alt={activeMilestone.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-[var(--ease-lux)] hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="inline-block rounded-[4px] border border-champagne/50 bg-charcoal/80 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                      {activeMilestone.chapter}
                    </span>
                    <p className="mt-2 font-serif text-4xl font-bold text-ivory sm:text-5xl">
                      {activeMilestone.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Editorial Details & Highlights */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-ivory/12 pb-4">
                    <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                      {activeMilestone.subtitle}
                    </span>
                    <span className="font-serif text-sm italic text-ivory/60">
                      Milestone {activeIdx + 1} of {MILESTONES.length}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[clamp(1.65rem,2.5vw,2.35rem)] font-bold leading-tight text-ivory">
                    {activeMilestone.title}
                  </h3>

                  <p className="mt-3.5 font-sans text-[0.95rem] leading-[1.8] text-ivory/82 sm:text-[1rem]">
                    {activeMilestone.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
                    {activeMilestone.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2 rounded-[6px] border border-ivory/12 bg-ivory/[0.04] p-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne" />
                        <span className="font-sans text-[0.76rem] font-medium leading-snug text-ivory/90">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Quick Year Pills */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ivory/12 pt-4">
                  <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ivory/55">
                    At your service since 2017
                  </span>
                  <div className="flex items-center gap-1.5">
                    {MILESTONES.map((m, i) => (
                      <button
                        key={m.year}
                        type="button"
                        onClick={() => setActiveIdx(i)}
                        aria-label={`Select year ${m.year}`}
                        className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                          i === activeIdx ? "w-7 bg-champagne" : "w-2 bg-ivory/25 hover:bg-ivory/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
