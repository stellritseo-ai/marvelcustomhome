import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowDownRight, ChevronRight, Sparkles } from "lucide-react";
import completeHomeConstruction from "@/assets/complete-home-construction.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const SERVICE_ANCHORS = [
  {
    n: "01/",
    id: "complete-home-construction",
    title: "Complete Home Construction",
    subtitle: "Site Prep, Permitting & Turnkey Build",
  },
  {
    n: "02/",
    id: "design-consultation",
    title: "Design Consultation – Architectural",
    subtitle: "2D/3D Visualizations & Blueprints",
  },
  {
    n: "03/",
    id: "interior-finish-out",
    title: "Interior Finish Out",
    subtitle: "Residential & Commercial Shell Finish",
  },
  {
    n: "04/",
    id: "double-vanity",
    title: "Double Vanity",
    subtitle: "Bespoke Bath Suites & Custom Vanities",
  },
] as const;

export function ServicesHero() {
  const activeHash = useRouterState({
    select: (s) => s.location.hash.replace(/^#/, ""),
  });

  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative flex min-h-[74svh] flex-col justify-between overflow-hidden bg-charcoal pt-28 pb-10 text-ivory sm:min-h-[80svh] sm:pt-36 sm:pb-14 lg:pt-40"
    >
      {/* Background Image with Slow Ken Burns Drift */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={completeHomeConstruction}
          alt="Luxury custom home construction in Dallas–Fort Worth by Marvel Custom Homes"
          width={1280}
          height={854}
          fetchPriority="high"
          decoding="sync"
          className="hero-slide-img hero-ken-a is-active h-full w-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/65" />
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
        {/* Breadcrumb Pill: [Home] > Services */}
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
                <span aria-current="page">Services</span>
              </li>
            </ol>
          </nav>
        </Reveal>

        {/* Eyebrow & Display Title */}
        <div className="max-w-4xl">
          <Reveal delay={60}>
            <Eyebrow light>Services · Four Signature Disciplines</Eyebrow>
          </Reveal>

          <Reveal delay={120}>
            <h1
              id="services-hero-heading"
              className="mt-4 font-serif tracking-[-0.02em] text-balance text-ivory"
            >
              <span className="block text-[clamp(1.35rem,1rem+1.1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                Services
              </span>
              <em className="mt-1 block text-[clamp(2.4rem,1.45rem+3.5vw,4.75rem)] font-bold italic leading-[1.04] text-champagne">
                Complete Solutions From Vision to Keys.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl font-sans text-[0.98rem] leading-[1.8] text-ivory/82 sm:text-[1.0625rem]">
              From <span className="font-semibold text-champagne">Complete Home Construction</span>{" "}
              and{" "}
              <span className="font-semibold text-champagne">
                Design Consultation – Architectural
              </span>{" "}
              to <span className="font-semibold text-champagne">Interior Finish Out</span> and
              bespoke <span className="font-semibold text-champagne">Double Vanity</span> suites,
              every commission is executed with transparency, precision, and enduring craft.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Bottom Interactive 4-Discipline Jump Bar */}
      <div className="container-lux relative z-10">
        <div className="grid gap-3.5 rounded-[6px] border border-ivory/15 bg-charcoal/80 p-4 backdrop-blur-md sm:grid-cols-2 sm:p-5 lg:grid-cols-4 lg:gap-4">
          {SERVICE_ANCHORS.map((item) => {
            const isCurrent =
              activeHash === item.id || (!activeHash && item.id === "complete-home-construction");
            return (
              <Link
                key={item.id}
                to="/services"
                hash={item.id}
                className={`group flex items-center justify-between gap-3 rounded-[5px] border px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 ${
                  isCurrent
                    ? "border-champagne bg-champagne/15 shadow-[0_14px_30px_-12px_rgba(215,195,154,0.35)]"
                    : "border-ivory/12 bg-ivory/[0.04] hover:border-champagne/65 hover:bg-ivory/[0.08]"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg font-bold italic text-champagne">
                      {item.n}
                    </span>
                    <span className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ivory/65">
                      Discipline
                    </span>
                  </div>
                  <p className="mt-0.5 truncate font-serif text-[1.08rem] font-bold text-ivory group-hover:text-champagne">
                    {item.title}
                  </p>
                  <p className="truncate font-sans text-[0.72rem] text-ivory/70">{item.subtitle}</p>
                </div>

                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isCurrent
                      ? "border-champagne bg-champagne text-charcoal"
                      : "border-ivory/20 bg-charcoal/70 text-champagne group-hover:border-champagne group-hover:bg-champagne group-hover:text-charcoal"
                  }`}
                >
                  <ArrowDownRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-3 hidden items-center justify-end gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/65 sm:flex">
          <Sparkles className="h-3 w-3 text-champagne" />
          <span>
            Select Any Service Above or Scroll to Explore All 04 Architectural Disciplines
          </span>
        </div>
      </div>
    </section>
  );
}
