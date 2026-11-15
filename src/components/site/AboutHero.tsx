import { Link } from "@tanstack/react-router";
import { Building2, ChevronRight, Home, ShieldCheck, Sparkles } from "lucide-react";
import b2 from "@/assets/b2.png";
import b4 from "@/assets/b4.png";
import heroResidence from "@/assets/hero-residence.jpg";
import { Eyebrow } from "./Eyebrow";
import { Parallax, Reveal } from "./Reveal";

const HERO_META = [
  { index: "01", label: "Established", value: "Since 2017 · North Texas" },
  { index: "02", label: "Portfolio Scope", value: "Residences, Offices & Hotels" },
  { index: "03", label: "Service Region", value: "Dallas–Fort Worth Metroplex" },
  { index: "04", label: "Foundation", value: "Built on Trust & Durability" },
] as const;

const EXCELLENCE_PILLARS = [
  {
    icon: Home,
    step: "01 / Residential",
    title: "Elegant Family Residences",
    detail: "Bespoke custom estates engineered around how your family lives and gathers.",
  },
  {
    icon: Building2,
    step: "02 / Commercial",
    title: "Offices & Hotels",
    detail: "Large-scale commercial and hospitality spaces built to exacting standards.",
  },
  {
    icon: ShieldCheck,
    step: "03 / Enduring Craft",
    title: "Finest Materials",
    detail: "Premium products and structural precision that stand the test of time.",
  },
] as const;

export function AboutHero() {
  return (
    <>
      {/* =================================================================
          PART 1: FULL-BLEED CINEMATIC ARCHITECTURAL BANNER
         ================================================================= */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative flex min-h-[72svh] flex-col justify-between overflow-hidden bg-charcoal pt-28 pb-10 text-ivory sm:min-h-[78svh] sm:pt-36 sm:pb-14 lg:pt-40"
      >
        {/* Background Image with Slow Ken Burns Drift */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={heroResidence}
            alt="Illuminated luxury custom residence at twilight in Dallas, Texas"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="sync"
            className="hero-slide-img hero-ken-a is-active h-full w-full object-cover object-center"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/65" />
        </div>

        {/* Ambient Champagne Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-champagne/15 blur-3xl"
        />

        {/* Architectural Inset Hairline Frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3.5 rounded-[6px] border border-ivory/15 sm:inset-7"
        />

        <div className="container-lux relative z-10 my-auto py-10 sm:py-14">
          {/* Breadcrumb Pill */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="inline-flex items-center gap-2.5 rounded-[50px] border border-ivory/20 bg-charcoal/70 px-4 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory/75 backdrop-blur-md">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-champagne focus-visible:outline-none"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-champagne/60">
                  <ChevronRight className="h-3 w-3" />
                </li>
                <li className="text-champagne">
                  <span aria-current="page">About Us</span>
                </li>
              </ol>
            </nav>
          </Reveal>

          {/* Eyebrow & Display Title */}
          <div className="max-w-4xl">
            <Reveal delay={60}>
              <Eyebrow light>About Us</Eyebrow>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="about-hero-heading"
                className="mt-4 font-serif tracking-[-0.02em] text-balance text-ivory"
              >
                <span className="block text-[clamp(1.35rem,1rem+1.1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                  Marvel Custom Homes
                </span>
                <em className="mt-1 block text-[clamp(2.4rem,1.45rem+3.5vw,4.75rem)] font-bold italic leading-[1.04] text-champagne">
                  Crafting Excellence in Every Structure.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl font-sans text-[0.98rem] leading-[1.8] text-ivory/82 sm:text-[1.0625rem]">
                Committed to building superior homes and commercial spaces across Dallas–Fort Worth
                that reflect the highest standards of craftsmanship, durability, and design.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Bottom Architectural Metadata Strip */}
        <div className="container-lux relative z-10">
          <div className="grid grid-cols-2 gap-4 rounded-[6px] border border-ivory/15 bg-charcoal/75 p-4 backdrop-blur-md sm:p-5 lg:grid-cols-4 lg:gap-6">
            {HERO_META.map((item) => (
              <div
                key={item.index}
                className="border-l border-champagne/35 pl-3.5 transition-colors duration-300 hover:border-champagne"
              >
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  {item.index} · {item.label}
                </p>
                <p className="mt-1 font-serif text-[0.98rem] font-medium text-ivory sm:text-[1.05rem]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          PART 2: LAYERED ARCHITECTURAL COLLAGE & FULL NARRATIVE
         ================================================================= */}
      <section className="relative overflow-x-clip bg-ivory py-[70px] sm:py-[90px]">
        <div className="container-lux">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            {/* Left Column: Layered Architectural Gallery Composition */}
            <div className="relative grid grid-cols-12 items-start pb-8 sm:pb-10 lg:col-span-6">
              {/* Offset Warm Champagne Architectural Frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none col-start-1 col-end-10 row-start-1 aspect-[4/5] w-full -translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4"
              >
                <div className="animate-welcome-frame h-full w-full rounded-[6px] border border-[#9B8766]/45 bg-cream/65" />
              </div>

              {/* Primary Showcase Photograph (b4.png) */}
              <div className="relative z-10 col-start-1 col-end-10 row-start-1">
                <Reveal>
                  <div className="group/main relative overflow-hidden rounded-[6px] bg-cream shadow-[0_30px_60px_-20px_oklch(0.18_0.006_120/0.28)] ring-1 ring-charcoal/12">
                    <Parallax
                      src={b4}
                      alt="Sculptural modern custom home facade with warm cedar entry door and veined stone"
                      width={610}
                      height={762}
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

              {/* Secondary Overlapping Showcase Plate (b2.png — Bottom-Right) */}
              <div className="relative z-20 col-start-6 col-end-13 row-start-1 translate-y-6 self-end sm:col-start-6 sm:translate-y-8">
                <Reveal delay={240}>
                  <div className="animate-welcome-card group/sub rounded-[6px] bg-ivory p-2 shadow-[0_28px_60px_-18px_oklch(0.16_0.006_120/0.36)] ring-1 ring-charcoal/10 sm:p-2.5">
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[4px] bg-cream">
                      <img
                        src={b2}
                        alt="Expansive custom kitchen with double marble islands and warm brass lighting"
                        width={1188}
                        height={890}
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

            {/* Right Column: Editorial Narrative & Architectural Pillars */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                  <Eyebrow n="01">About Us</Eyebrow>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
                  <span className="block text-[clamp(1.4rem,1.05rem+1vw,2.15rem)] font-normal leading-[1.2] text-charcoal/80">
                    Crafting Excellence
                  </span>
                  <em className="mt-0.5 block text-[clamp(2.35rem,1.3rem+2.9vw,4rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                    in Every Structure
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-6 space-y-4">
                  <p className="max-w-[58ch] font-sans text-[1rem] leading-[1.82] text-pretty text-charcoal/90 sm:text-[1.0625rem]">
                    Marvel Custom Homes is committed to building superior homes and commercial
                    spaces that reflect the highest standards of craftsmanship, durability, and
                    design. From elegant family residences to office buildings and hotels, we ensure
                    every detail reflects our commitment to excellence.
                  </p>

                  <p className="max-w-[58ch] border-l-2 border-[#9B8766] pl-4 font-sans text-[0.95rem] leading-[1.8] text-pretty text-charcoal/80">
                    Our team of experienced builders uses only the finest products and materials to
                    ensure your space not only looks stunning but also stands the test of time.
                    Built on a foundation of trust, every member of our team contributes to
                    delivering results that exceed expectations. Whether it’s a custom home or a
                    large-scale commercial project, we proudly serve the Dallas-Fort Worth community
                    with professionalism, care, and an unwavering dedication to quality.
                  </p>
                </div>
              </Reveal>

              {/* 3 Architectural Pillars */}
              <Reveal delay={200}>
                <dl className="mt-8 grid grid-cols-1 gap-3 border-y border-charcoal/12 py-5 sm:grid-cols-3 sm:gap-4">
                  {EXCELLENCE_PILLARS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group rounded-[6px] border border-charcoal/10 bg-cream/45 px-4 py-3.5 transition-all duration-300 hover:border-[#9B8766]/55 hover:bg-cream/85"
                      >
                        <div className="flex items-center justify-between">
                          <dt className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                            {item.step}
                          </dt>
                          <Icon className="h-3.5 w-3.5 text-[#9B8766]" />
                        </div>
                        <dd className="mt-1.5 font-serif text-[1.08rem] font-bold text-charcoal">
                          {item.title}
                        </dd>
                        <p className="mt-1 font-sans text-[0.76rem] leading-relaxed text-charcoal/70">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </dl>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-7 inline-flex items-center gap-2.5 rounded-[50px] border border-[#9B8766]/40 bg-cream/70 px-4 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                  <Sparkles className="h-3.5 w-3.5 text-[#9B8766]" />
                  <span>Dallas–Fort Worth Residential &amp; Commercial Builders</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
