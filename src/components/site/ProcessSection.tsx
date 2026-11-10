import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import processBuild from "@/assets/process-build.jpg";
import processCustomize from "@/assets/process-customize.jpg";
import processDesign from "@/assets/process-design.jpg";
import processEnjoy from "@/assets/process-enjoy.jpg";
import processBg from "@/assets/processbg.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/* 04 — PROCESS */
const STEPS = [
  {
    n: "01",
    phase: "Phase One",
    subtitle: "Architectural Blueprint & Site Vision",
    t: "Design",
    d: "Work closely with our talented architects to bring your vision to life.",
    deliverables: ["Site & Lot Analysis", "3D Architectural Modeling", "Structural Engineering"],
    duration: "Weeks 01–06",
    img: processDesign,
    w: 1200,
    h: 896,
  },
  {
    n: "02",
    phase: "Phase Two",
    subtitle: "Bespoke Material & Finish Curation",
    t: "Customize",
    d: "Choose from a wide range of options to ensure every element, from the layout to the finishes.",
    deliverables: [
      "Bookmatched Stone Slabs",
      "Custom Millwork & Cabinetry",
      "Designer Hardware & Lighting",
    ],
    duration: "Weeks 07–12",
    img: processCustomize,
    w: 1200,
    h: 896,
  },
  {
    n: "03",
    phase: "Phase Three",
    subtitle: "Master Craftsmanship & Execution",
    t: "Build",
    d: "Watch your dream home take shape as our experienced builders bring your plans to reality.",
    deliverables: [
      "Precision Framing & Masonry",
      "Dedicated Site Supervision",
      "Multi-Point Quality Audits",
    ],
    duration: "Months 04–14",
    img: processBuild,
    w: 1200,
    h: 896,
  },
  {
    n: "04",
    phase: "Phase Four",
    subtitle: "White-Glove Handover & Living",
    t: "Enjoy",
    d: "With Marvel Custom Homes, your dream home is not just a place to live, but a place to love.",
    deliverables: [
      "Final Architectural Walkthrough",
      "Smart-Home Commissioning",
      "Dedicated Warranty Concierge",
    ],
    duration: "Move-In & Beyond",
    img: processEnjoy,
    w: 1920,
    h: 1088,
  },
] as const;

export function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STEPS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeStep = STEPS[activeIdx] ?? STEPS[0];

  return (
    <section
      className="relative overflow-x-clip bg-charcoal py-[70px] text-ivory"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Background Image (processbg.jpg) + Balanced Scrim */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={processBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/72 via-charcoal/54 to-charcoal/78" />
      </div>

      {/* Subtle Ambient Champagne Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 z-0 h-96 w-96 rounded-full bg-[#9B8766]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 -bottom-40 z-0 h-96 w-96 rounded-full bg-champagne/15 blur-3xl"
      />

      <div className="container-lux relative z-10">
        {/* Section Header */}
        <div className="grid gap-8 border-b border-ivory/20 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] [&_p]:font-semibold">
              <Eyebrow n="03" light>
                Our Process
              </Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-ivory drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-ivory/90">
                From Vision
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-champagne">
                to Reality.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-ivory/20 bg-charcoal/80 p-5 shadow-[0_20px_44px_-20px_rgba(0,0,0,0.65)] backdrop-blur-md sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-champagne via-[#9B8766] to-transparent"
              />
              <div className="pl-3 sm:pl-4">
                <p className="font-serif text-[1.2rem] font-semibold italic leading-snug text-champagne sm:text-[1.3rem]">
                  Design • Customize • Build • Enjoy
                </p>
                <p className="mt-2 font-sans text-[0.95rem] leading-[1.75] text-ivory/85">
                  A seamless, four-stage architectural journey guided with precision, transparency,
                  and master craftsmanship at every step.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Interactive Split-Stage Architectural Showcase */}
        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* LEFT COLUMN: Connected 4-Step Architectural Timeline Accordion */}
          <Reveal className="flex flex-col justify-between lg:col-span-5">
            <div className="relative flex h-full flex-col justify-between gap-4">
              {/* Vertical Connecting Hairline Spine */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-8 bottom-8 left-[27px] hidden w-px bg-gradient-to-b from-champagne/60 via-ivory/20 to-champagne/60 sm:block"
              />

              {STEPS.map((s, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={s.n}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`group/item relative w-full overflow-hidden rounded-[6px] border text-left transition-all duration-500 ease-[var(--ease-lux)] ${
                      isActive
                        ? "border-champagne/80 bg-charcoal/90 p-5 shadow-[0_26px_60px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-6"
                        : "border-ivory/15 bg-charcoal/70 p-4 backdrop-blur-md hover:border-champagne/45 hover:bg-charcoal/85 sm:px-5 sm:py-4"
                    }`}
                  >
                    {/* Active Left Champagne Accent Bar */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-champagne via-[#9B8766] to-champagne transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover/item:opacity-50"
                      }`}
                    />

                    {/* Subtle Watermark Numeral */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-4 -bottom-3 font-serif font-bold italic leading-none select-none transition-all duration-500 ${
                        isActive
                          ? "text-[5.25rem] text-champagne/[0.12]"
                          : "text-[4rem] text-ivory/[0.04] group-hover/item:text-champagne/[0.08]"
                      }`}
                    >
                      {s.n}
                    </span>

                    <div className="relative z-10 flex items-start gap-4">
                      {/* Step Node Medallion */}
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-serif text-lg font-bold italic transition-all duration-500 ${
                          isActive
                            ? "border-champagne bg-gradient-to-br from-champagne via-[#b89f74] to-[#9B8766] text-charcoal shadow-[0_0_24px_rgba(217,199,165,0.45)]"
                            : "border-ivory/25 bg-charcoal/90 text-champagne group-hover/item:border-champagne/60"
                        }`}
                      >
                        {s.n}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                            {s.phase} • {s.duration}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                              isActive
                                ? "text-champagne"
                                : "text-ivory/45 group-hover/item:text-ivory/80"
                            }`}
                          >
                            {isActive ? "Active Stage" : "Explore"}
                            <ArrowUpRight
                              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                                isActive
                                  ? "translate-x-0.5 -translate-y-0.5 text-champagne"
                                  : "group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                              }`}
                            />
                          </span>
                        </div>

                        <h3
                          className={`mt-1 font-serif font-bold transition-colors duration-300 ${
                            isActive
                              ? "text-2xl text-ivory sm:text-[1.65rem]"
                              : "text-xl text-ivory/90 group-hover/item:text-champagne"
                          }`}
                        >
                          {s.t}
                        </h3>

                        <p
                          className={`mt-1.5 font-sans text-[0.9rem] leading-[1.68] text-pretty transition-colors duration-300 ${
                            isActive ? "text-ivory/85" : " line-clamp-2 text-ivory/65"
                          }`}
                        >
                          {s.d}
                        </p>

                        {/* Expanded Deliverable Pills when Active */}
                        {isActive && (
                          <div className="mt-4 flex flex-wrap gap-2 border-t border-ivory/12 pt-3.5">
                            {s.deliverables.map((item) => (
                              <span
                                key={item}
                                className="inline-flex items-center gap-1.5 rounded-[4px] border border-champagne/30 bg-ivory/[0.06] px-2.5 py-1 font-sans text-[0.68rem] font-medium tracking-[0.04em] text-ivory/90"
                              >
                                <CheckCircle2 className="h-3 w-3 shrink-0 text-champagne" />
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* RIGHT COLUMN: Master Architectural Stage + 4-Image Process Filmstrip */}
          <Reveal delay={160} className="flex flex-col justify-between lg:col-span-7">
            <div className="flex h-full flex-col justify-between gap-5">
              {/* Master Stage Frame */}
              <div className="group/stage relative flex-1">
                {/* Floating Offset Champagne Frame */}
                <div
                  aria-hidden="true"
                  className="animate-welcome-frame pointer-events-none absolute -inset-2 rounded-[6px] border border-champagne/30 bg-ivory/[0.03]"
                />

                <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-between overflow-hidden rounded-[6px] border border-ivory/20 bg-charcoal/90 shadow-[0_32px_72px_-20px_rgba(0,0,0,0.85)] sm:min-h-[460px]">
                  {/* Crossfading Stage Images */}
                  {STEPS.map((s, i) => {
                    const isActive = i === activeIdx;
                    return (
                      <img
                        key={s.n}
                        src={s.img}
                        alt={`${s.t} — ${s.subtitle}`}
                        width={s.w}
                        height={s.h}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-[var(--ease-lux)] ${
                          isActive
                            ? "z-10 scale-100 opacity-100"
                            : "pointer-events-none z-0 scale-105 opacity-0"
                        }`}
                      />
                    );
                  })}

                  {/* Layered Cinematic Scrims */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-charcoal/40"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-charcoal/55 via-transparent to-transparent"
                  />

                  {/* Top Stage Bar: Floating Phase Badge & Prev/Next Controls */}
                  <div className="relative z-30 flex items-center justify-between gap-2 p-3.5 sm:gap-4 sm:p-6">
                    <div className="animate-welcome-badge inline-flex items-center gap-2 rounded-[6px] border border-ivory/20 bg-charcoal/85 px-3 py-1.5 text-ivory shadow-lg backdrop-blur-md sm:gap-2.5 sm:px-3.5">
                      <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
                      </span>
                      <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne sm:text-[0.68rem] sm:tracking-[0.22em]">
                        Step {activeStep.n} of 04 — {activeStep.t}
                      </span>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                      <button
                        type="button"
                        aria-label="Previous process step"
                        onClick={() =>
                          setActiveIdx((prev) => (prev - 1 + STEPS.length) % STEPS.length)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/80 text-ivory backdrop-blur-md transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-charcoal sm:h-10 sm:w-10"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next process step"
                        onClick={() => setActiveIdx((prev) => (prev + 1) % STEPS.length)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/80 text-ivory backdrop-blur-md transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-charcoal sm:h-10 sm:w-10"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Stage Overlay Card: Active Phase Details + CTA */}
                  <div className="relative z-30 p-3.5 sm:p-6">
                    <div className="rounded-[6px] border border-ivory/20 bg-charcoal/85 p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-6">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-xl">
                          <div className="inline-flex items-center gap-2 text-champagne">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
                              {activeStep.subtitle}
                            </span>
                          </div>
                          <h3 className="mt-1.5 font-serif text-2xl font-bold text-ivory sm:text-3xl">
                            <span className="mr-2.5 font-light italic text-champagne">
                              {activeStep.n}.
                            </span>
                            {activeStep.t}
                          </h3>
                          <p className="mt-2 font-sans text-[0.95rem] leading-[1.7] text-ivory/85">
                            {activeStep.d}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="group/btn relative inline-flex shrink-0 cursor-pointer items-center gap-3 self-start overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_28px_-8px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-ivory hover:shadow-[0_16px_36px_-6px_rgba(155,135,102,0.55)] sm:self-end"
                        >
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                          />
                          <span className="relative z-10">Start Your Project</span>
                          <span
                            aria-hidden="true"
                            className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-transform duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Card Interactive Process Image Filmstrip (All 4 Generated Images Visible) */}
              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                {STEPS.map((s, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={s.n}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={`group/thumb relative overflow-hidden rounded-[6px] border text-left transition-all duration-500 ease-[var(--ease-lux)] ${
                        isActive
                          ? "-translate-y-1 border-champagne ring-2 ring-champagne/50 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.8)]"
                          : "border-ivory/20 opacity-75 hover:-translate-y-0.5 hover:border-champagne/60 hover:opacity-100"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                        <img
                          src={s.img}
                          alt={s.t}
                          width={s.w}
                          height={s.h}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover/thumb:scale-110"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent"
                        />
                        <div className="absolute inset-x-2.5 bottom-2 flex items-center justify-between gap-1">
                          <span className="font-serif text-sm font-bold text-ivory">
                            <span className="mr-1 italic text-champagne">{s.n}</span>
                            {s.t}
                          </span>
                          <span
                            className={`h-2 w-2 rounded-full transition-colors ${
                              isActive
                                ? "bg-champagne"
                                : "bg-ivory/35 group-hover/thumb:bg-champagne"
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
