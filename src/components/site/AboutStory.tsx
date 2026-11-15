import { useState } from "react";
import { Calendar, Check, Milestone, Sparkles } from "lucide-react";
import constructionImg from "@/assets/construction.jpg";
import welcome2Img from "@/assets/welcome2.png";
import { Reveal } from "./Reveal";

const MILESTONES = [
  {
    year: "2017",
    tag: "Founding Vision",
    title: "Established in North Texas",
    description:
      "Founded with an uncompromising commitment to structural integrity, timeless brick & stone masonry, and bespoke residential framing across the Dallas area.",
  },
  {
    year: "2019",
    tag: "Estate Expansion",
    title: "Custom Architectural Homes",
    description:
      "Expanded into large-scale luxury estate commissions, tailoring custom floor plans and engineering homes built to endure North Texas weather extremes.",
  },
  {
    year: "2021",
    tag: "Commercial Division",
    title: "Office Buildings & Hospitality",
    description:
      "Brought our signature residential precision to premier commercial developments, office buildings, and boutique hospitality spaces requiring superior commercial endurance.",
  },
  {
    year: "2023",
    tag: "Turnkey Design",
    title: "Integrated Design & Finish-Out Studio",
    description:
      "Formalized our in-house architectural design consultation, complete interior finish-out services, custom cabinetry, and bespoke double vanities.",
  },
  {
    year: "2024",
    tag: "Regional Footprint",
    title: "Serving Thriving DFW Communities",
    description:
      "Deepened our footprint across North Texas enclaves including Rockwall, Heath, Fate, Mansfield, Midlothian, and McKinney with dozens of successful handovers.",
  },
  {
    year: "2025",
    tag: "Next-Gen Craft",
    title: "Pioneering Sustainable Luxury",
    description:
      "Leading with advanced thermal envelopes, high-efficiency building technologies, smart-home automation, and generational luxury living for the modern family.",
  },
] as const;

export function AboutStory() {
  const [activeYear, setActiveYear] = useState<string>("2025");

  return (
    <section className="relative overflow-hidden bg-[#181715] py-24 text-ivory sm:py-32">
      {/* Background Lighting Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-[500px] w-[500px] rounded-full bg-champagne/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-[#9B8766]/08 blur-[120px]"
      />

      <div className="container-lux relative z-10">
        {/* Section Eyebrow & Main Headings */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-champagne sm:w-12" />
              <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-champagne">
                Our Story & Heritage
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.8vw,4.2rem)] font-light leading-[1.12] tracking-[-0.01em] text-ivory">
              Where Dreams Take Shape, <br />
              <span className="italic font-normal text-gradient-champagne">
                One Brick at a Time.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Story Narrative Prose */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal delay={150}>
              <p className="font-sans text-[1.02rem] leading-[1.8] text-ivory/85 sm:text-[1.08rem]">
                At Marvel Custom Homes, our journey began with a vision: to craft homes that aren’t
                just beautiful but also built to last for generations. Guided by a passion for
                quality and integrity, we’ve established ourselves as a trusted name in residential
                and commercial construction across the Dallas-Fort Worth area.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative rounded-[8px] border-l-2 border-champagne bg-ivory/[0.04] p-6 sm:p-7">
                <p className="font-serif text-xl italic leading-snug text-champagne sm:text-2xl">
                  “Every project we take on is driven by our core belief — that a home is more than
                  just a place to live; it’s where your story unfolds.”
                </p>
                <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
                  — The Marvel Custom Homes Philosophy
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="font-sans text-[0.96rem] leading-[1.8] text-ivory/70">
                Whether selecting hand-hewn Texas limestone, laying foundational rebar with extreme
                tolerances, or crafting bespoke ceiling beams, our craftspeople treat every element
                as a permanent legacy.
              </p>
            </Reveal>
          </div>

          {/* Visual Vignette */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative overflow-hidden rounded-[10px] border border-ivory/15 bg-charcoal shadow-2xl">
                <img
                  src={constructionImg}
                  alt="Marvel Custom Homes masonry and precision framing craftsmanship"
                  width={720}
                  height={520}
                  className="h-[380px] w-full object-cover transition-transform duration-700 ease-[var(--ease-lux)] hover:scale-105 sm:h-[440px]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"
                />
                <div className="absolute right-5 bottom-5 left-5 rounded-[6px] border border-ivory/20 bg-charcoal/80 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/40 bg-champagne/15 text-champagne">
                      <Milestone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.2em] text-champagne">
                        Dallas-Fort Worth Trusted
                      </p>
                      <p className="font-serif text-sm font-semibold text-ivory">
                        Unwavering Dedication to Quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* =================================================================
            TIMELINE: AT YOUR SERVICE SINCE (2017 - 2025)
           ================================================================= */}
        <div className="mt-20 border-t border-ivory/12 pt-16 sm:mt-28 sm:pt-20">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-2 text-champagne">
                  <Calendar className="h-4 w-4" />
                  <span className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.24em]">
                    Heritage & Growth
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-3xl font-light text-ivory sm:text-4xl">
                  At your service since{" "}
                  <span className="italic font-normal text-gradient-champagne">2017</span>
                </h3>
              </div>
              <p className="max-w-md font-sans text-xs text-ivory/60 sm:text-right">
                Explore our milestone journey over the years serving homeowners and commercial
                partners across North Texas.
              </p>
            </div>
          </Reveal>

          {/* Year Selector Tabs */}
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
              {MILESTONES.map((item) => {
                const isActive = activeYear === item.year;
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveYear(item.year)}
                    className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-[50px] border px-4 py-2 font-sans text-xs font-bold transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm ${
                      isActive
                        ? "border-champagne bg-champagne text-charcoal shadow-[0_8px_20px_-6px_rgba(184,159,116,0.6)]"
                        : "border-ivory/15 bg-ivory/[0.04] text-ivory/80 hover:border-champagne/60 hover:text-ivory"
                    }`}
                  >
                    <span>{item.year}</span>
                    {isActive && <Check className="h-3.5 w-3.5 text-charcoal" />}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active Milestone Card Display */}
          <div className="mt-8">
            {MILESTONES.map((item) => {
              if (item.year !== activeYear) return null;
              return (
                <div
                  key={item.year}
                  className="rounded-[10px] border border-champagne/30 bg-ivory/[0.03] p-6 backdrop-blur-md transition-all duration-500 sm:p-10"
                >
                  <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-3">
                      <span className="inline-block font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-champagne">
                        {item.tag}
                      </span>
                      <p className="mt-1 font-serif text-5xl font-light text-ivory sm:text-6xl">
                        {item.year}
                      </p>
                    </div>

                    <div className="lg:col-span-9">
                      <h4 className="font-serif text-2xl font-semibold text-ivory sm:text-3xl">
                        {item.title}
                      </h4>
                      <p className="mt-3 max-w-2xl font-sans text-[0.96rem] leading-[1.8] text-ivory/80 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grid Overview for All Years on Larger Screens */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((item) => {
              const isSelected = activeYear === item.year;
              return (
                <div
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`group cursor-pointer rounded-[8px] border p-5 transition-all duration-300 ${
                    isSelected
                      ? "border-champagne bg-ivory/[0.06] shadow-[0_10px_24px_-8px_rgba(184,159,116,0.25)]"
                      : "border-ivory/10 bg-ivory/[0.02] hover:border-champagne/40 hover:bg-ivory/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-serif text-2xl font-bold ${
                        isSelected ? "text-champagne" : "text-ivory/90 group-hover:text-champagne"
                      }`}
                    >
                      {item.year}
                    </span>
                    <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne/80">
                      {item.tag}
                    </span>
                  </div>
                  <h5 className="mt-2 font-serif text-base font-semibold text-ivory">
                    {item.title}
                  </h5>
                  <p className="mt-1 line-clamp-2 font-sans text-xs text-ivory/65">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
