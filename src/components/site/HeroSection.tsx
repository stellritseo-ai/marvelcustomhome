import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";
import b4 from "@/assets/b4.png";

const SLIDE_DURATION_MS = 5600;

const HERO_SLIDES = [
  {
    id: "estate-exterior",
    src: b1,
    width: 1280,
    height: 853,
    objectClass: "object-center",
    kenClass: "hero-ken-a",
    alt: "Custom white stucco residence with clay roof tiles and arched window details",
  },
  {
    id: "bespoke-kitchen",
    src: b2,
    width: 1188,
    height: 890,
    objectClass: "object-center",
    kenClass: "hero-ken-b",
    alt: "Expansive custom kitchen with double marble islands and warm brass lighting",
  },
  {
    id: "primary-suite",
    src: b3,
    width: 736,
    height: 552,
    objectClass: "object-center",
    kenClass: "hero-ken-a",
    alt: "Architectural primary suite featuring wood paneling, backlit marble, and herringbone oak",
  },
  {
    id: "modern-facade",
    src: b4,
    width: 610,
    height: 762,
    objectClass: "object-[center_42%]",
    kenClass: "hero-ken-b",
    alt: "Sculptural modern custom home facade with warm cedar entry door and veined stone",
  },
] as const;

/* 01 — HERO */
export function HeroSection() {
  const [{ activeIndex, prevIndex }, setSlide] = useState<{
    activeIndex: number;
    prevIndex: number | null;
  }>({ activeIndex: 0, prevIndex: null });
  const [isPlaying, setIsPlaying] = useState(true);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (!isPlaying) return;
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    }

    const timer = window.setInterval(() => {
      setSlide((state) => ({
        activeIndex: (state.activeIndex + 1) % HERO_SLIDES.length,
        prevIndex: state.activeIndex,
      }));
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  function selectSlide(nextIndex: number) {
    const wrapped = (nextIndex + HERO_SLIDES.length) % HERO_SLIDES.length;
    setSlide((state) =>
      state.activeIndex === wrapped
        ? state
        : { activeIndex: wrapped, prevIndex: state.activeIndex },
    );
    setAnnouncement(`Slide ${wrapped + 1} of ${HERO_SLIDES.length}`);
  }

  return (
    <section
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-graphite text-ivory"
    >
      <div className="absolute inset-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          const isExiting = idx === prevIndex && idx !== activeIndex;
          const stateClass = isActive ? "is-active" : isExiting ? "is-exiting" : "";
          const pausedClass = isPlaying ? "" : "is-paused";

          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-[1300ms] ease-[var(--ease-lux)] ${
                isActive ? "z-10 opacity-100" : isExiting ? "z-0 opacity-0" : "-z-10 opacity-0"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                fetchPriority={idx === 0 ? "high" : "low"}
                decoding={idx === 0 ? "sync" : "async"}
                className={`hero-slide-img h-full w-full object-cover ${slide.objectClass} ${slide.kenClass} ${stateClass} ${pausedClass}`}
              />
            </div>
          );
        })}
      </div>

      <div className="hero-overlay pointer-events-none absolute inset-0 z-10" aria-hidden="true" />

      <div className="container-lux relative z-20 flex h-full flex-col justify-end pt-28 pb-14 sm:pb-16 md:pt-32 md:pb-20">
        <div
          className="animate-rise inline-flex items-center gap-4"
          style={{ animationDelay: "180ms" }}
        >
          <span className="h-px w-8 shrink-0 bg-champagne/80" aria-hidden="true" />
          <p className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.26em] text-champagne [text-shadow:0_1px_16px_oklch(0.1_0.005_120/0.6)] sm:text-[0.9375rem]">
            With Marvel Custom Homes
          </p>
        </div>

        <h1
          id="hero-heading"
          className="animate-rise mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-serif text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[1.03] tracking-[-0.02em] [text-shadow:0_2px_28px_oklch(0.1_0.005_120/0.55)] sm:gap-x-5"
          style={{ animationDelay: "320ms" }}
        >
          <span className="inline-flex items-center gap-x-3 sm:gap-x-5">
            <span>Design</span>
            <span aria-hidden="true" className="text-[0.38em] font-bold text-champagne">
              •
            </span>
            <em className="font-bold italic text-champagne">Customize</em>
          </span>
          <span
            aria-hidden="true"
            className="hidden text-[0.38em] font-bold text-champagne lg:inline"
          >
            •
          </span>
          <span className="inline-flex items-center gap-x-3 sm:gap-x-5">
            <span>Build</span>
            <span aria-hidden="true" className="text-[0.38em] font-bold text-champagne">
              •
            </span>
            <em className="font-bold italic text-champagne">Enjoy</em>
          </span>
        </h1>

        <div
          className="animate-rise mt-8 border-t border-ivory/20 pt-7 md:mt-10 md:pt-8"
          style={{ animationDelay: "480ms" }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-ivory/95 [text-shadow:0_1px_18px_oklch(0.1_0.005_120/0.6)] md:text-[1.125rem]">
              Experience the Marvel difference &ndash; where your dream home becomes a reality.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-7 lg:justify-end">
              <button
                type="button"
                className="eyebrow group inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-[4px] border border-ivory bg-ivory px-5 py-3 text-[0.7rem] font-semibold text-charcoal transition-all duration-500 ease-[var(--ease-lux)] hover:border-champagne hover:bg-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne sm:gap-4 sm:px-7 sm:py-3.5 sm:text-xs"
              >
                <span>CUSTOM YOUR HOME NOW</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform duration-500 ease-[var(--ease-lux)] group-hover:translate-x-1"
                />
              </button>

              <div
                className="inline-flex items-center gap-1 rounded-[50px] border border-ivory/20 bg-graphite/55 p-1.5 backdrop-blur-md"
                role="group"
                aria-label="Hero showcase controls"
              >
                <button
                  type="button"
                  onClick={() => selectSlide(activeIndex - 1)}
                  aria-label="Previous slide"
                  className="inline-flex h-9 w-9 touch-manipulation cursor-pointer items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/15 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-0.5 px-1">
                  {HERO_SLIDES.map((slide, idx) => {
                    const current = idx === activeIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => selectSlide(idx)}
                        aria-label={`Go to slide ${idx + 1} of ${HERO_SLIDES.length}`}
                        aria-current={current ? "true" : undefined}
                        className="inline-flex min-h-7 min-w-6 touch-manipulation cursor-pointer items-center justify-center rounded-full px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                      >
                        <span
                          className={`relative block h-1.5 overflow-hidden rounded-full transition-all duration-500 ease-[var(--ease-lux)] ${
                            current ? "w-7 bg-ivory/25" : "w-2 bg-ivory/40 hover:bg-ivory/75"
                          }`}
                        >
                          {current && (
                            <span
                              key={`prog-${activeIndex}-${isPlaying}`}
                              aria-hidden="true"
                              className={`hero-progress-bar absolute inset-0 rounded-full bg-champagne ${
                                isPlaying ? "is-running" : ""
                              }`}
                            />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => selectSlide(activeIndex + 1)}
                  aria-label="Next slide"
                  className="inline-flex h-9 w-9 touch-manipulation cursor-pointer items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/15 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  <ChevronRight aria-hidden="true" className="h-4 w-4" />
                </button>

                <span aria-hidden="true" className="mx-0.5 h-4 w-px bg-ivory/20" />

                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-label={isPlaying ? "Pause showcase slideshow" : "Play showcase slideshow"}
                  className="inline-flex h-9 w-9 touch-manipulation cursor-pointer items-center justify-center rounded-full text-champagne transition-colors hover:bg-ivory/15 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  {isPlaying ? (
                    <Pause aria-hidden="true" className="h-3.5 w-3.5" />
                  ) : (
                    <Play aria-hidden="true" className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </section>
  );
}
