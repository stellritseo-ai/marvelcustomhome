import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import livingImg from "@/assets/living.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const BLOG_HERO_META = [
  { index: "01", label: "Published Editions", value: "06 Curated Articles" },
  { index: "02", label: "Core Disciplines", value: "Construction, Design & Care" },
  { index: "03", label: "Editorial Focus", value: "Dallas–Fort Worth Custom Living" },
  { index: "04", label: "Studio Insight", value: "Architects & Master Builders" },
] as const;

export function BlogsHero() {
  return (
    <section
      aria-labelledby="blogs-hero-heading"
      className="relative flex min-h-[72svh] flex-col justify-between overflow-hidden bg-charcoal pt-28 pb-10 text-ivory sm:min-h-[78svh] sm:pt-36 sm:pb-14 lg:pt-40"
    >
      {/* Background Image with Slow Ken Burns Drift */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={livingImg}
          alt="Double-height custom living room with floor-to-ceiling glazing and limestone hearth"
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
        {/* Breadcrumb Pill: [Home]Blogs */}
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
                <span aria-current="page">Blogs</span>
              </li>
            </ol>
          </nav>
        </Reveal>

        {/* Eyebrow & Display Title */}
        <div className="max-w-4xl">
          <Reveal delay={60}>
            <Eyebrow light>Our Blogs</Eyebrow>
          </Reveal>

          <Reveal delay={120}>
            <h1
              id="blogs-hero-heading"
              className="mt-4 font-serif tracking-[-0.02em] text-balance text-ivory"
            >
              <span className="block text-[clamp(1.35rem,1rem+1.1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                The Marvel Custom Homes Journal
              </span>
              <em className="mt-1 block text-[clamp(2.4rem,1.45rem+3.5vw,4.75rem)] font-bold italic leading-[1.04] text-champagne">
                Explore our Blogs.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl font-sans text-[0.98rem] leading-[1.8] text-ivory/82 sm:text-[1.0625rem]">
              Perspectives from our Dallas architects, interior finish specialists, and master
              builders on custom home construction, design consultation, seasonal care, and timeless
              living across North Texas.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Bottom Architectural Metadata Strip */}
      <div className="container-lux relative z-10">
        <div className="grid grid-cols-2 gap-4 rounded-[6px] border border-ivory/15 bg-charcoal/75 p-4 backdrop-blur-md sm:p-5 lg:grid-cols-4 lg:gap-6">
          {BLOG_HERO_META.map((item) => (
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
  );
}
