import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ChevronRight, Sparkles } from "lucide-react";
import exteriorDay from "@/assets/exterior-day.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const STYLE_ANCHORS = [
  {
    n: "01/",
    title: "Traditional",
    subtitle: "Classic Facades & Timeless Materials",
    href: "#style-01",
    count: "04 Plates",
  },
  {
    n: "02/",
    title: "Farm House",
    subtitle: "Wide Porches & Rustic Modern Warmth",
    href: "#style-02",
    count: "04 Plates",
  },
  {
    n: "03/",
    title: "Modern Design",
    subtitle: "Clean Lines & Serene Minimalism",
    href: "#style-03",
    count: "04 Plates",
  },
] as const;

export function OurHomesHero() {
  return (
    <section
      aria-labelledby="our-homes-hero-heading"
      className="relative flex min-h-[74svh] flex-col justify-between overflow-hidden bg-charcoal pt-28 pb-10 text-ivory sm:min-h-[80svh] sm:pt-36 sm:pb-14 lg:pt-40"
    >
      {/* Background Image with Slow Ken Burns Drift */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={exteriorDay}
          alt="Custom limestone and brick residence crafted by Marvel Custom Homes in North Texas"
          width={1600}
          height={1104}
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
        {/* Breadcrumb Pill: [Home] Our Homes */}
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
                <span aria-current="page">Our Homes</span>
              </li>
            </ol>
          </nav>
        </Reveal>

        {/* Eyebrow & Display Title */}
        <div className="max-w-4xl">
          <Reveal delay={60}>
            <Eyebrow light>Our Homes</Eyebrow>
          </Reveal>

          <Reveal delay={120}>
            <h1
              id="our-homes-hero-heading"
              className="mt-4 font-serif tracking-[-0.02em] text-balance text-ivory"
            >
              <span className="block text-[clamp(1.35rem,1rem+1.1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                Signature Architectural Collections
              </span>
              <em className="mt-1 block text-[clamp(2.4rem,1.45rem+3.5vw,4.75rem)] font-bold italic leading-[1.04] text-champagne">
                Designed Around How You Live.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl font-sans text-[0.98rem] leading-[1.8] text-ivory/82 sm:text-[1.0625rem]">
              Whether your vision calls for the enduring heritage of{" "}
              <span className="font-semibold text-champagne">Traditional</span> architecture, the
              welcoming warmth of a <span className="font-semibold text-champagne">Farm House</span>
              , or the serene minimalism of{" "}
              <span className="font-semibold text-champagne">Modern Design</span>, Marvel Custom
              Homes brings every detail to life across Dallas–Fort Worth.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Bottom Interactive Architectural Style Jump Bar */}
      <div className="container-lux relative z-10">
        <div className="grid gap-3.5 rounded-[6px] border border-ivory/15 bg-charcoal/80 p-4 backdrop-blur-md sm:grid-cols-3 sm:p-5 lg:gap-5">
          {STYLE_ANCHORS.map((item) => (
            <a
              key={item.n}
              href={item.href}
              className="group flex items-center justify-between gap-4 rounded-[5px] border border-ivory/12 bg-ivory/[0.04] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-champagne/65 hover:bg-ivory/[0.08]"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-bold italic text-champagne">
                    {item.n}
                  </span>
                  <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ivory/65">
                    {item.count}
                  </span>
                </div>
                <p className="mt-0.5 truncate font-serif text-xl font-bold text-ivory group-hover:text-champagne">
                  {item.title}
                </p>
                <p className="truncate font-sans text-xs text-ivory/70">{item.subtitle}</p>
              </div>

              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory/20 bg-charcoal/70 text-champagne transition-all duration-300 group-hover:border-champagne group-hover:bg-champagne group-hover:text-charcoal"
              >
                <ArrowDownRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-3 hidden items-center justify-end gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/65 sm:flex">
          <Sparkles className="h-3 w-3 text-champagne" />
          <span>Select Any Architectural Style Above or Scroll to Explore All 12 Captures</span>
        </div>
      </div>
    </section>
  );
}
