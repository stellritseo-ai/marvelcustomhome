import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Building2, Home } from "lucide-react";
import exteriorImg from "@/assets/exterior-day.jpg";
import welcome1Img from "@/assets/welcome1.png";
import { Reveal, Parallax } from "./Reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      {/* Subtle Luxury Gradient Background Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-champagne/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-[#B89F74]/08 blur-[100px]"
      />

      <div className="container-lux relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="inline-flex items-center gap-2 rounded-[50px] border border-charcoal/10 bg-ivory/80 px-4 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal/65 backdrop-blur-md">
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-champagne focus-visible:outline-none"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-charcoal/30">
              <ChevronRight className="h-3 w-3" />
            </li>
            <li className="font-bold text-charcoal">
              <span aria-current="page">About Us</span>
            </li>
          </ol>
        </nav>

        {/* Top Eyebrow Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-champagne sm:w-12" />
            <span className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/50 bg-[#F4EFEA] px-3.5 py-1 font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#6F5D40]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
              </span>
              Crafting Excellence in Every Structure
            </span>
          </div>
        </Reveal>

        {/* Hero Title & Main Narrative Grid */}
        <div className="mt-6 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Headline */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <h1 className="font-serif text-[clamp(2.75rem,5.8vw,5.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-charcoal">
                Crafting Excellence <br />
                <span className="italic font-normal text-gradient-champagne">
                  in Every Structure.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 space-y-5 font-sans text-[0.98rem] leading-[1.8] text-charcoal/80 sm:text-[1.04rem]">
                <p>
                  Marvel Custom Homes is committed to building superior homes and commercial spaces
                  that reflect the highest standards of craftsmanship, durability, and design. From
                  elegant family residences to office buildings and hotels, we ensure every detail
                  reflects our commitment to excellence.
                </p>
                <p className="text-charcoal/70">
                  Our team of experienced builders uses only the finest products and materials to
                  ensure your space not only looks stunning but also stands the test of time. Built
                  on a foundation of trust, every member of our team contributes to delivering
                  results that exceed expectations. Whether it’s a custom home or a large-scale
                  commercial project, we proudly serve the Dallas-Fort Worth community with
                  professionalism, care, and an unwavering dedication to quality.
                </p>
              </div>
            </Reveal>

            {/* Quick Core Strengths Cards */}
            <Reveal delay={240}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="group rounded-[8px] border border-charcoal/10 bg-ivory/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[0_12px_28px_-10px_rgba(155,135,102,0.18)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-champagne/40 bg-[#F4EFEA] text-[#6F5D40]">
                    <Home className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-charcoal">
                    Custom Estates
                  </h3>
                  <p className="mt-1 font-sans text-xs text-charcoal/65">
                    Family residences tailored to generational living.
                  </p>
                </div>

                <div className="group rounded-[8px] border border-charcoal/10 bg-ivory/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[0_12px_28px_-10px_rgba(155,135,102,0.18)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-champagne/40 bg-[#F4EFEA] text-[#6F5D40]">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-charcoal">Commercial</h3>
                  <p className="mt-1 font-sans text-xs text-charcoal/65">
                    High-standard office buildings & hospitality suites.
                  </p>
                </div>

                <div className="group col-span-2 rounded-[8px] border border-charcoal/10 bg-ivory/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[0_12px_28px_-10px_rgba(155,135,102,0.18)] sm:col-span-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-champagne/40 bg-[#F4EFEA] text-[#6F5D40]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-charcoal">Built to Last</h3>
                  <p className="mt-1 font-sans text-xs text-charcoal/65">
                    Premium products engineered for longevity.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer Luxury Frame */}
                <div className="relative overflow-hidden rounded-[10px] border border-charcoal/15 bg-charcoal shadow-[0_25px_50px_-12px_rgba(18,17,16,0.22)]">
                  <img
                    src={exteriorImg}
                    alt="Marvel Custom Homes luxury residence under Dallas blue skies"
                    width={800}
                    height={600}
                    className="h-[460px] w-full object-cover object-center transition-transform duration-700 ease-[var(--ease-lux)] hover:scale-105 sm:h-[520px]"
                  />
                  {/* Subtle Scrim */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-black/20"
                  />

                  {/* Floating Medallion Badge */}
                  <div className="absolute right-4 bottom-4 left-4 rounded-[8px] border border-ivory/20 bg-charcoal/80 p-4 text-ivory backdrop-blur-md sm:right-6 sm:bottom-6 sm:left-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.2em] text-champagne">
                          Dallas–Fort Worth Excellence
                        </p>
                        <p className="mt-0.5 font-serif text-base font-semibold text-ivory">
                          Residential & Commercial Craftsmanship
                        </p>
                      </div>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-champagne/50 bg-champagne/20 text-champagne">
                        <Sparkles className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Offset Backdrop Border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[10px] border border-champagne/35"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
