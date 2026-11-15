import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const MATRIX_ROWS = [
  {
    num: "01/",
    id: "complete-home-construction",
    title: "Complete Home Construction",
    application: "Modern Custom Homes, Traditional Family Residences & Investment Properties",
    coreScope: "Site preparation, permitting, structural build & final interior finishes",
    highlights: ["Customizable Layouts", "Energy-Efficient Solutions", "Personalized Finishes"],
  },
  {
    num: "02/",
    id: "design-consultation",
    title: "Design Consultation – Architectural",
    application: "Ground-Up Custom Designs & Existing Layout Modifications",
    coreScope: "Initial sketches, construction-ready blueprints, 2D & 3D visualizations",
    highlights: ["2D & 3D Visualizations", "Structural Alignment", "Local Code Compliance"],
  },
  {
    num: "03/",
    id: "interior-finish-out",
    title: "Interior Finish Out",
    application: "Residential & Commercial Shell Spaces + Interior Remodeling",
    coreScope: "Insulation, drywall, painting, flooring, ceilings & bespoke trim work",
    highlights: ["Shell-to-Turnkey", "Residential & Commercial", "Full Trade Coordination"],
  },
  {
    num: "04/",
    id: "double-vanity",
    title: "Double Vanity",
    application: "Shared Primary Bathrooms, Spa Suites & Luxury Bath Renovations",
    coreScope: "Custom cabinetry, stone countertops, dual sinks, plumbing & installation",
    highlights: [
      "Glass Shower Walls",
      "Dual Sink (Double Vanity)",
      "Tile Accent Walls & Freestanding Tub",
    ],
  },
] as const;

export function ServicesExecutionMatrix() {
  return (
    <section
      aria-labelledby="services-matrix-heading"
      className="relative overflow-hidden bg-cream py-[70px] text-charcoal sm:py-[90px]"
    >
      <div className="container-lux relative z-10">
        {/* Top Editorial Header */}
        <div className="grid gap-8 border-b border-[#9B8766]/25 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
              <Eyebrow n="05">Commissioning Guide</Eyebrow>
            </div>
            <h2
              id="services-matrix-heading"
              className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal"
            >
              <span className="block text-[clamp(1.35rem,1rem+1vw,2.05rem)] font-normal leading-[1.2] text-charcoal/80">
                Four Integrated Disciplines
              </span>
              <em className="mt-1 block text-[clamp(2.2rem,1.3rem+2.8vw,3.85rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                Tailored to Your Scope &amp; Vision.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <p className="font-sans text-[0.96rem] leading-[1.8] text-charcoal/80">
              Engage Marvel Custom Homes for a single specialized discipline or combine all four
              under one roof for a seamless, single-point-of-accountability building experience
              across Dallas–Fort Worth.
            </p>
          </Reveal>
        </div>

        {/* 4-Card Architectural Comparison Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MATRIX_ROWS.map((row, idx) => (
            <Reveal key={row.id} delay={idx * 75}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-ivory p-6 shadow-[0_22px_50px_-22px_rgba(28,28,28,0.18)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-[#9B8766] hover:shadow-[0_28px_64px_-18px_rgba(155,135,102,0.3)]">
                {/* Top Gold Accent Bar */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold italic text-[#6B593B]">
                      {row.num}
                    </span>
                    <a
                      href={`#${row.id}`}
                      className="rounded-[50px] border border-[#9B8766]/35 bg-cream px-2.5 py-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#6B593B] transition-colors hover:border-charcoal hover:bg-charcoal hover:text-champagne"
                    >
                      Review Scope
                    </a>
                  </div>

                  <h3 className="mt-4 font-serif text-[1.35rem] font-bold leading-snug text-charcoal">
                    {row.title}
                  </h3>

                  <div className="mt-4 border-t border-charcoal/10 pt-3.5">
                    <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                      Ideal Application
                    </p>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-charcoal/80">
                      {row.application}
                    </p>
                  </div>

                  <div className="mt-3.5 border-t border-charcoal/10 pt-3.5">
                    <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                      Core Execution
                    </p>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-charcoal/80">
                      {row.coreScope}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-1.5 border-t border-charcoal/10 pt-3.5">
                    {row.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 font-sans text-xs font-medium text-charcoal/85"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#9B8766]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-charcoal/10 pt-4">
                  <Link
                    to="/contact"
                    className="group/link inline-flex w-full items-center justify-between font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-[#6B593B]"
                  >
                    <span>Discuss {row.num} Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#9B8766] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Obsidian Direct Consultation Strip */}
        <Reveal delay={260}>
          <div className="mt-10 flex flex-col justify-between gap-6 rounded-[6px] border border-charcoal/20 bg-charcoal p-6 text-ivory shadow-[0_26px_60px_-20px_rgba(28,28,28,0.45)] sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] border border-champagne/40 bg-ivory/[0.06] text-champagne">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="inline-flex items-center gap-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  <Sparkles className="h-3 w-3" />
                  <span>Transparent Timelines &amp; Budgets</span>
                </div>
                <p className="mt-1 font-serif text-xl font-bold text-ivory sm:text-2xl">
                  Ready to plan your custom build, architectural blueprints, or interior finish-out?
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center gap-3 rounded-[50px] border border-champagne bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-ivory"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-12 items-center gap-2 rounded-[50px] border border-ivory/25 bg-ivory/[0.06] px-5 py-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
              >
                <Phone className="h-3.5 w-3.5 text-champagne" />
                <span>{BUSINESS.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
