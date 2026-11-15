import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  MapPin,
  Sparkles,
} from "lucide-react";
import processBg from "@/assets/processbg.jpg";
import { Eyebrow } from "./Eyebrow";
import { GALLERY } from "./GallerySection";
import { Reveal } from "./Reveal";

const CASE_STUDIES = [
  {
    id: "01",
    chapter: "Commission Study I",
    discipline: "Ground-Up Custom Estate",
    title: "The Sovereign Limestone & Courtyard Estates",
    location: "Rockwall & Heath, TX",
    primary: GALLERY[0], // b1: Signature Custom Estate
    secondary: GALLERY[7], // b3: Limestone Courtyard Residence
    summary:
      "Conceived for multi-generational living on expansive North Texas lots, uniting hand-dressed Indiana and Texas limestone, clay tile roofing, and private courtyard loggias.",
    metrics: [
      { label: "Structural System", value: "Post-Tension & Steel" },
      { label: "Exterior Envelope", value: "Hand-Dressed Limestone" },
      { label: "Delivery Model", value: "Turnkey Ground-Up" },
    ],
    deliverables: [
      "Custom Architectural Elevations & Site Grading",
      "Illuminated Motor Courts & Twilight Landscape Lighting",
      "Four-Season Sheltered Courtyard & Outdoor Living",
    ],
  },
  {
    id: "02",
    chapter: "Commission Study II",
    discipline: "Culinary & Living Architecture",
    title: "The Calacatta Atelier & Double-Height Great Room",
    location: "Dallas & McKinney, TX",
    primary: GALLERY[1], // kitchen: Calacatta Culinary Atelier
    secondary: GALLERY[2], // living: Double-Height Great Room
    summary:
      "Designed around effortless hospitality and daily family rituals—pairing bookmatched Calacatta marble waterfall islands and rift-cut white oak millwork with soaring glazed living volumes.",
    metrics: [
      { label: "Centerpiece Stone", value: "Bookmatched Calacatta" },
      { label: "Custom Millwork", value: "Rift-Cut White Oak" },
      { label: "Glazing Profile", value: "Floor-to-Ceiling Thermal" },
    ],
    deliverables: [
      "Waterfall Stone Island & Concealed Walk-In Scullery",
      "Double-Height Great Room with Sculptural Stone Hearth",
      "Layered Warm Architectural & Cove Illumination",
    ],
  },
  {
    id: "03",
    chapter: "Commission Study III",
    discipline: "Primary Suites & Spa Sanctuaries",
    title: "Bespoke Double-Vanity & Roman Travertine Retreats",
    location: "Mansfield & Midlothian, TX",
    primary: GALLERY[6], // doubleVanity: Custom Double-Vanity Suite
    secondary: GALLERY[9], // bathroom: Travertine Spa Bath
    summary:
      "Private primary wings engineered for five-star serenity, featuring symmetrical custom double vanities, backlit mirrors, American walnut cabinetry, and honed travertine wet rooms.",
    metrics: [
      { label: "Vanity Craft", value: "Bespoke Dual Quartzite" },
      { label: "Wet Room Stone", value: "Honed Roman Travertine" },
      { label: "Primary Suite", value: "Acoustic White Oak" },
    ],
    deliverables: [
      "Symmetrical Custom Double Vanity with Brass Sconces",
      "Freestanding Sculptural Soaking Tub & Frameless Rain Shower",
      "Tailored Oak Wall Paneling & Indirect Perimeter Lighting",
    ],
  },
  {
    id: "04",
    chapter: "Commission Study IV",
    discipline: "Design Consultation & Interior Finish-Out",
    title: "From 3D Blueprint Studio to Coffered Millwork",
    location: "Dallas–Fort Worth Metroplex",
    primary: GALLERY[10], // designConsultation: Architectural Design Consultation
    secondary: GALLERY[4], // interiorFinishOut: Bespoke Interior Finish Out
    summary:
      "Every detail is resolved before construction begins—combining collaborative 3D spatial planning at our Dallas headquarters with artisan coffered ceilings, custom trim, and turnkey execution.",
    metrics: [
      { label: "Pre-Construction", value: "3D BIM & Material Curation" },
      { label: "Ceiling Detail", value: "Bespoke Coffered Millwork" },
      { label: "Execution Scope", value: "Residential & Commercial" },
    ],
    deliverables: [
      "In-House Architectural Blueprinting & Finish Selection",
      "Zero-Tolerance Interior Trim, Coffers & Custom Doors",
      "Dedicated Principal Supervision Through Handover",
    ],
  },
] as const;

export function WorksSpotlight() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = CASE_STUDIES[activeIdx] ?? CASE_STUDIES[0];

  function prevStudy() {
    setActiveIdx((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  }

  function nextStudy() {
    setActiveIdx((prev) => (prev + 1) % CASE_STUDIES.length);
  }

  return (
    <section className="relative overflow-x-clip bg-charcoal py-[70px] text-ivory sm:py-[90px]">
      {/* Atmospheric Background Image + Multi-Layer Scrim */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={processBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/75 to-charcoal/92" />
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
        {/* Top Editorial Split Header */}
        <div className="grid gap-10 border-b border-ivory/15 pb-12 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow n="03" light>
                Featured Case Studies
              </Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-ivory">
                <span className="block text-[clamp(1.4rem,1.05rem+1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                  Inside Our Signature
                </span>
                <em className="mt-1 block text-[clamp(2.35rem,1.35rem+3vw,4.15rem)] font-bold italic leading-[1.05] text-champagne">
                  Architectural Commissions.
                </em>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <p className="font-sans text-[0.96rem] leading-[1.8] text-ivory/82">
                Examine four representative studies across our core building disciplines—pairing
                exterior permanence, culinary artistry, spa sanctuaries, and interior finish-out
                mastery.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Interactive Case Study Selector Tabs */}
        <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="grid flex-1 grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3">
            {CASE_STUDIES.map((study, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group flex cursor-pointer flex-col items-start rounded-[6px] border px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-champagne bg-gradient-to-b from-[#9B8766] to-[#7E6B4F] text-ivory shadow-[0_14px_30px_-8px_rgba(184,159,116,0.5)]"
                      : "border-ivory/15 bg-charcoal/80 text-ivory/75 hover:border-champagne/50 hover:text-ivory"
                  }`}
                >
                  <span
                    className={`font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] ${
                      isActive ? "text-ivory/90" : "text-champagne"
                    }`}
                  >
                    {study.id} · {study.location}
                  </span>
                  <span className="mt-1 line-clamp-1 font-serif text-base font-bold sm:text-lg">
                    {study.discipline}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={prevStudy}
              aria-label="Previous case study"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/[0.05] text-ivory transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-charcoal"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextStudy}
              aria-label="Next case study"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/[0.05] text-ivory transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-charcoal"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Active Case Study Showcase Card */}
        <div className="mt-7 overflow-hidden rounded-[8px] border border-ivory/18 bg-charcoal/80 shadow-[0_32px_72px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <div className="grid items-stretch lg:grid-cols-12">
            {/* Left Dual-Image Stage (7 Cols) */}
            <div className="relative min-h-[340px] overflow-hidden bg-graphite sm:min-h-[440px] lg:col-span-7">
              <img
                key={current.primary.id}
                src={current.primary.img}
                alt={current.primary.title}
                width={current.primary.w}
                height={current.primary.h}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-charcoal/30"
              />

              {/* Top-Left Study Badge */}
              <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 rounded-[6px] border border-ivory/20 bg-charcoal/85 px-3.5 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-champagne" />
                <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  {current.chapter} · Plate {current.primary.id}
                </span>
              </div>

              {/* Bottom-Left Primary Caption */}
              <div className="absolute bottom-5 left-5 z-20 max-w-xs rounded-[6px] border border-ivory/15 bg-charcoal/85 p-3.5 backdrop-blur-md">
                <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                  Primary Capture
                </p>
                <p className="mt-0.5 font-serif text-lg font-bold text-ivory">
                  {current.primary.title}
                </p>
                <p className="font-sans text-xs text-ivory/75">{current.primary.subtitle}</p>
              </div>

              {/* Bottom-Right Secondary Companion Plate */}
              <div className="animate-welcome-card absolute right-5 bottom-5 z-20 hidden w-56 overflow-hidden rounded-[6px] border-2 border-champagne/60 bg-charcoal/90 shadow-[0_20px_44px_-10px_rgba(0,0,0,0.85)] backdrop-blur-md sm:block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={current.secondary.img}
                    alt={current.secondary.title}
                    width={current.secondary.w}
                    height={current.secondary.h}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent"
                  />
                  <span className="absolute top-2 left-2 rounded-[3px] bg-charcoal/80 px-2 py-0.5 font-sans text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-champagne">
                    Plate {current.secondary.id}
                  </span>
                </div>
                <div className="px-3 py-2">
                  <p className="truncate font-serif text-xs font-bold text-ivory">
                    {current.secondary.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Architectural Dossier Column (5 Cols) */}
            <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 -bottom-5 font-serif text-[7.5rem] font-bold italic leading-none text-champagne/[0.07] select-none"
              >
                {current.id}
              </span>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ivory/12 pb-3.5">
                  <span className="inline-flex items-center gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    <Compass className="h-3.5 w-3.5" />
                    {current.discipline}
                  </span>
                  <span className="inline-flex items-center gap-1 font-sans text-[0.65rem] text-ivory/70">
                    <MapPin className="h-3.5 w-3.5 text-champagne" />
                    {current.location}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold leading-tight text-ivory sm:text-3xl">
                  {current.title}
                </h3>

                <p className="mt-3.5 font-sans text-[0.94rem] leading-[1.78] text-ivory/82">
                  {current.summary}
                </p>

                {/* 3-Column Telemetry Strip */}
                <div className="mt-6 grid grid-cols-1 gap-2.5 rounded-[6px] border border-ivory/15 bg-ivory/[0.04] p-3.5 min-[420px]:grid-cols-3">
                  {current.metrics.map((m) => (
                    <div key={m.label} className="min-w-0">
                      <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-champagne/85">
                        {m.label}
                      </p>
                      <p className="mt-1 truncate font-serif text-sm font-bold text-ivory">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Deliverable Checklist */}
                <div className="mt-5 space-y-2.5">
                  {current.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                      <span className="font-sans text-[0.84rem] leading-snug text-ivory/88">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/12 pt-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-ivory/55">
                    Study {activeIdx + 1} of {CASE_STUDIES.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {CASE_STUDIES.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        aria-label={`Select case study ${s.id}`}
                        className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                          idx === activeIdx
                            ? "w-7 bg-champagne"
                            : "w-2 bg-ivory/25 hover:bg-ivory/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="group/cta inline-flex items-center gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-champagne transition-colors hover:text-ivory"
                >
                  <span>Inquire About Commission</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
