import { ArrowUpRight } from "lucide-react";
import outdoor from "@/assets/outdoor.jpg";
import { Parallax, Reveal } from "./Reveal";

/* 10 — CINEMATIC CTA */
export function CtaSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-charcoal py-20 text-ivory sm:h-[88vh] sm:min-h-[560px] sm:py-0">
      {/* Full-Bleed Parallax Background */}
      <Parallax
        src={outdoor}
        alt="Candlelit stone loggia overlooking a pool at twilight"
        width={1920}
        height={1088}
        className="absolute inset-0"
        speed={0.18}
      />

      {/* Multi-Layer Cinematic Scrims */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/50 to-charcoal/80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,28,28,0.15)_0%,rgba(28,28,28,0.72)_100%)]"
      />

      {/* Subtle Ambient Champagne Center Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/15 blur-3xl"
      />

      {/* Subtle Architectural Inset Frame Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3.5 rounded-[6px] border border-ivory/15 sm:inset-8"
      />

      <div className="container-lux relative z-10 flex h-full flex-col items-center justify-center px-2 text-center sm:px-0">
        {/* Eyebrow Pill with Flanking Hairlines */}
        <Reveal>
          <div className="inline-flex items-center gap-3.5">
            <span aria-hidden="true" className="h-px w-8 bg-champagne/60 sm:w-12" />
            <span className="animate-welcome-badge inline-flex items-center gap-2 rounded-[50px] border border-champagne/40 bg-charcoal/70 px-4 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-champagne backdrop-blur-md">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
              </span>
              Begin
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-champagne/60 sm:w-12" />
          </div>
        </Reveal>

        {/* Monumental Centered Heading */}
        <Reveal delay={120}>
          <h2 className="mt-7 max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,5.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-balance text-ivory drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">
            Your Vision Deserves Something{" "}
            <em className="font-bold italic text-champagne">Extraordinary.</em>
          </h2>
        </Reveal>

        {/* Centered Editorial Subcopy */}
        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[1.02rem] leading-[1.8] text-pretty text-ivory/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-[1.08rem]">
            Let’s create a home that reflects your lifestyle, your aspirations, and your definition
            of exceptional living.
          </p>
        </Reveal>

        {/* Centered Premium Pill CTA Button */}
        <Reveal delay={320}>
          <div className="mt-10">
            <button
              type="button"
              className="group/btn relative inline-flex cursor-pointer items-center gap-4 overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-8 py-4 font-sans text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_20px_48px_-10px_rgba(0,0,0,0.7)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-ivory hover:shadow-[0_26px_56px_-8px_rgba(155,135,102,0.65)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
              />
              <span className="relative z-10">Start Your Project</span>
              <span
                aria-hidden="true"
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-all duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
