import { ArrowUpRight, CheckCircle2, Compass, Layers, Sparkles } from "lucide-react";
import b1 from "@/assets/b1.jpg";
import b4 from "@/assets/b4.png";
import completeHome from "@/assets/complete-home-construction.jpg";
import interiorFinishOut from "@/assets/Interior Finish Out.jpg";
import kitchen from "@/assets/kitchen.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/* 07 — PORTFOLIO */
const FLAGSHIP_PROJECT = {
  id: "01",
  badge: "Flagship Commission",
  cat: "Complete Home Construction",
  title: "The Sovereign Limestone Estate",
  subtitle: "Turnkey Ground-Up Custom Residence & Private Grounds",
  desc: "Conceived from raw topography to white-glove handover, uniting hand-dressed Indiana limestone, structural steel framing, and bespoke white-oak interiors.",
  mainImg: b1,
  insetImg: completeHome,
  insetLabel: "Precision Structural Execution",
  metrics: [
    { label: "Commission", value: "Ground-Up Estate" },
    { label: "Envelope", value: "Limestone & Bronze" },
    { label: "Delivery", value: "Turnkey Residence" },
  ],
  highlights: [
    "Custom Architectural Blueprinting",
    "Double-Height Great Room & Loggia",
    "Integrated Smart-Home & Lighting",
  ],
} as const;

const SIGNATURE_PROJECTS = [
  {
    id: "02",
    cat: "Interior Finish-Out",
    title: "The Aurelia Great Room & Lounge",
    desc: "Architectural ceiling coffers, custom millwork wall panelling, and warm ambient lighting tailored for intimate evening living.",
    scope: "Full Interior Architecture",
    detail: "Custom Millwork & Lighting",
    img: interiorFinishOut,
    w: 1600,
    h: 1067,
  },
  {
    id: "03",
    cat: "Custom Kitchen & Millwork",
    title: "The Calacatta Culinary Atelier",
    desc: "Anchored by a waterfall bookmatched marble island, concealed walk-in scullery, and hand-rubbed rift-cut white oak cabinetry.",
    scope: "Bespoke Culinary Suite",
    detail: "Bookmatched Calacatta Slab",
    img: kitchen,
    w: 1600,
    h: 1104,
  },
  {
    id: "04",
    cat: "Architectural Design & Build",
    title: "The Belvedere Modern Pavilion",
    desc: "Expansive floor-to-ceiling glazing, cantilevered rooflines, and seamless indoor-outdoor entertaining terraces.",
    scope: "Modern Custom Estate",
    detail: "Steel & Limestone Facade",
    img: b4,
    w: 1920,
    h: 1080,
  },
] as const;

export function PortfolioSection() {
  return (
    <section className="relative overflow-x-clip bg-ivory py-[70px] text-charcoal">
      {/* Subtle Ambient Champagne Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 right-1/4 h-96 w-96 rounded-full bg-champagne/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-1/4 h-96 w-96 rounded-full bg-[#9B8766]/12 blur-3xl"
      />

      <div className="container-lux relative z-10">
        {/* Section Header */}
        <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold">
              <Eyebrow n="06">Signature Projects</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Crafted With Purpose.
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#9B8766]">
                Built to Inspire.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-charcoal/12 bg-bone/75 p-5 shadow-[0_16px_38px_-22px_rgba(28,28,28,0.18)] backdrop-blur-sm sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#9B8766] via-champagne to-transparent"
              />
              <div className="flex flex-col justify-between gap-4 pl-3 sm:pl-4">
                <p className="font-sans text-[0.95rem] leading-[1.75] text-charcoal/80">
                  Every Marvel commission is a one-of-one architectural work—guided from initial
                  sketch and material curation through master construction.
                </p>

                <div>
                  <button
                    type="button"
                    className="group/btn relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-[50px] border border-[#9B8766]/50 bg-charcoal px-6 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_28px_-10px_rgba(28,28,28,0.45)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-gradient-to-r hover:from-[#9B8766] hover:via-[#b89f74] hover:to-[#9B8766] hover:shadow-[0_18px_36px_-10px_rgba(155,135,102,0.5)]"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                    />
                    <span className="relative z-10">View All Projects</span>
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ivory/15 text-champagne transition-all duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =========================================================
            01 — FLAGSHIP COMMISSION SHOWCASE (Full-Width Split Card)
           ========================================================= */}
        <Reveal className="mt-12 lg:mt-14">
          <div className="group/flagship relative">
            {/* Floating Offset Champagne Frame */}
            <div
              aria-hidden="true"
              className="animate-welcome-frame pointer-events-none absolute -inset-2 rounded-[6px] border border-[#9B8766]/30 bg-bone/50"
            />

            <article className="relative z-10 grid overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal text-ivory shadow-[0_32px_72px_-20px_rgba(28,28,28,0.55)] lg:grid-cols-12">
              {/* Top Animated Champagne Hairline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-ivory"
              />

              {/* Left Image Column (7 Cols) */}
              <div className="relative min-h-[340px] overflow-hidden bg-graphite sm:min-h-[440px] lg:col-span-7 lg:min-h-[520px]">
                <img
                  src={FLAGSHIP_PROJECT.mainImg}
                  alt={FLAGSHIP_PROJECT.title}
                  width={1920}
                  height={1080}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/flagship:scale-105"
                />

                {/* Cinematic Scrim + Diagonal Light Sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-charcoal/25 lg:bg-gradient-to-r lg:from-transparent lg:via-charcoal/10 lg:to-charcoal/85"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/flagship:translate-x-full"
                />

                {/* Top-Left Pulsing Flagship Badge */}
                <div className="animate-welcome-badge absolute top-5 left-5 z-20 inline-flex items-center gap-2.5 rounded-[6px] border border-ivory/20 bg-charcoal/85 px-3.5 py-1.5 text-ivory shadow-lg backdrop-blur-md">
                  <span aria-hidden="true" className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
                  </span>
                  <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    {FLAGSHIP_PROJECT.id} • {FLAGSHIP_PROJECT.badge}
                  </span>
                </div>

                {/* Bottom-Left Floating Secondary Inset Card */}
                <div className="animate-welcome-card absolute bottom-5 left-5 z-20 hidden w-56 overflow-hidden rounded-[6px] border-2 border-champagne/55 bg-charcoal/90 shadow-[0_20px_44px_-10px_rgba(0,0,0,0.85)] backdrop-blur-md sm:block">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={FLAGSHIP_PROJECT.insetImg}
                      alt={FLAGSHIP_PROJECT.insetLabel}
                      width={1600}
                      height={1067}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/flagship:scale-110"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="font-serif text-xs font-bold text-ivory">
                      {FLAGSHIP_PROJECT.insetLabel}
                    </span>
                    <Sparkles className="h-3 w-3 text-champagne" />
                  </div>
                </div>
              </div>

              {/* Right Architectural Dossier Column (5 Cols) */}
              <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                {/* Watermark Numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 -bottom-5 font-serif text-[7.5rem] font-bold italic leading-none text-champagne/[0.07] select-none"
                >
                  {FLAGSHIP_PROJECT.id}
                </span>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-[4px] border border-champagne/35 bg-ivory/[0.06] px-3 py-1">
                    <Compass className="h-3.5 w-3.5 text-champagne" />
                    <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                      {FLAGSHIP_PROJECT.cat}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl font-bold leading-[1.12] text-ivory sm:text-4xl">
                    {FLAGSHIP_PROJECT.title}
                  </h3>

                  <p className="mt-1.5 font-serif text-base italic text-champagne">
                    {FLAGSHIP_PROJECT.subtitle}
                  </p>

                  <p className="mt-4 font-sans text-[0.94rem] leading-[1.75] text-ivory/80">
                    {FLAGSHIP_PROJECT.desc}
                  </p>

                  {/* 3-Column Telemetry Strip */}
                  <div className="mt-6 grid grid-cols-1 gap-2.5 rounded-[6px] border border-ivory/15 bg-ivory/[0.04] p-3.5 min-[420px]:grid-cols-3">
                    {FLAGSHIP_PROJECT.metrics.map((m) => (
                      <div key={m.label} className="min-w-0">
                        <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-champagne/85">
                          {m.label}
                        </p>
                        <p className="mt-1 truncate font-serif text-sm font-bold text-ivory">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Checklist */}
                  <div className="mt-5 grid gap-2">
                    {FLAGSHIP_PROJECT.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-champagne" />
                        <span className="font-sans text-[0.85rem] text-ivory/85">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 border-t border-ivory/15 pt-5">
                  <button
                    type="button"
                    className="group/btn relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_28px_-8px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-ivory hover:shadow-[0_18px_36px_-6px_rgba(155,135,102,0.55)]"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                    />
                    <span className="relative z-10">Explore Flagship Case Study</span>
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-all duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </Reveal>

        {/* =========================================================
            02, 03, 04 — 3-COLUMN BALANCED SIGNATURE PROJECT CARDS
           ========================================================= */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-7">
          {SIGNATURE_PROJECTS.map((p, idx) => (
            <Reveal
              key={p.id}
              delay={idx * 120}
              className="h-full md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="group/card relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-charcoal/12 bg-bone/75 p-4 shadow-[0_22px_50px_-22px_rgba(28,28,28,0.22)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-2 hover:border-[#9B8766] hover:bg-ivory hover:shadow-[0_32px_68px_-18px_rgba(28,28,28,0.35)] sm:p-5">
                {/* Top Animated Champagne Hover Bar */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-[#9B8766] transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-x-100"
                />

                {/* Subtle Watermark Numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 -bottom-4 font-serif text-[6rem] font-bold italic leading-none text-[#9B8766]/[0.07] transition-all duration-500 select-none group-hover/card:-translate-y-1 group-hover/card:text-[#9B8766]/[0.14]"
                >
                  {p.id}
                </span>

                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-charcoal/12 bg-charcoal">
                    <img
                      src={p.img}
                      alt={p.title}
                      width={p.w}
                      height={p.h}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:scale-108"
                    />

                    {/* Scrim + Light Sheen */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-charcoal/20"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:translate-x-full"
                    />

                    {/* Top-Left Category Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-[6px] border border-ivory/20 bg-charcoal/85 px-3 py-1 text-ivory backdrop-blur-md">
                      <span className="font-serif text-xs font-bold italic text-champagne">
                        {p.id}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-champagne" />
                      <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ivory">
                        {p.cat}
                      </span>
                    </div>

                    {/* Bottom-Right Interactive Arrow Orb */}
                    <span
                      aria-hidden="true"
                      className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/80 text-champagne backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] group-hover/card:scale-110 group-hover/card:border-champagne group-hover/card:bg-champagne group-hover/card:text-charcoal"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="relative z-10 mt-5">
                    <h3 className="font-serif text-2xl font-bold leading-snug text-charcoal transition-colors duration-300 group-hover/card:text-[#9B8766]">
                      {p.title}
                    </h3>

                    <p className="mt-2.5 font-sans text-[0.92rem] leading-[1.7] text-charcoal/75">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Specification Strip */}
                <div className="relative z-10 mt-6 border-t border-charcoal/10 pt-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-warm-gray">
                        Discipline
                      </p>
                      <p className="mt-0.5 truncate font-serif text-sm font-bold text-charcoal">
                        {p.scope}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-warm-gray">
                        Signature Detail
                      </p>
                      <p className="mt-0.5 truncate font-serif text-sm font-bold text-[#9B8766]">
                        {p.detail}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-3.5">
                    <span className="inline-flex items-center gap-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal group-hover/card:text-[#9B8766]">
                      <Layers className="h-3.5 w-3.5 text-[#9B8766]" />
                      <span>Project Dossier</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#9B8766] transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
