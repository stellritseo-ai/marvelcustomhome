import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, Sparkles, X } from "lucide-react";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";
import b4 from "@/assets/b4.png";
import bathroom from "@/assets/bathroom.jpg";
import bedroom from "@/assets/bedroom.jpg";
import completeHomeConstruction from "@/assets/complete-home-construction.jpg";
import designConsultation from "@/assets/Design consultation - Architectural.png";
import doubleVanity from "@/assets/double-vanity.webp";
import interiorFinishOut from "@/assets/Interior Finish Out.jpg";
import kitchen from "@/assets/kitchen.jpg";
import living from "@/assets/living.jpg";
import welcome1 from "@/assets/welcome1.png";
import welcome2 from "@/assets/welcome2.png";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/* 05 — INSPIRATION GALLERY */
type Category =
  "All" | "Exteriors & Estates" | "Living & Kitchens" | "Suites & Baths" | "Architecture & Craft";

interface GalleryItem {
  id: string;
  img: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  cls: string;
  w: number;
  h: number;
}

const CATEGORIES: readonly Category[] = [
  "All",
  "Exteriors & Estates",
  "Living & Kitchens",
  "Suites & Baths",
  "Architecture & Craft",
] as const;

const GALLERY: readonly GalleryItem[] = [
  {
    id: "01",
    img: b1,
    title: "Signature Custom Estate",
    subtitle: "Grand Architectural Exterior & Illuminated Grounds",
    category: "Exteriors & Estates",
    cls: "sm:col-span-2 md:col-span-7 md:row-span-2",
    w: 1920,
    h: 1080,
  },
  {
    id: "02",
    img: kitchen,
    title: "Calacatta Culinary Atelier",
    subtitle: "Bookmatched Marble Island & Custom White Oak Millwork",
    category: "Living & Kitchens",
    cls: "md:col-span-5 md:row-span-2",
    w: 1600,
    h: 1104,
  },
  {
    id: "03",
    img: living,
    title: "Double-Height Great Room",
    subtitle: "Floor-to-Ceiling Glazing & Sculptural Hearth",
    category: "Living & Kitchens",
    cls: "md:col-span-4 md:row-span-2",
    w: 1600,
    h: 1104,
  },
  {
    id: "04",
    img: b2,
    title: "Twilight Architectural Facade",
    subtitle: "Warm Interior Glow & Precision Stonework",
    category: "Exteriors & Estates",
    cls: "md:col-span-4 md:row-span-2",
    w: 1920,
    h: 1080,
  },
  {
    id: "05",
    img: interiorFinishOut,
    title: "Bespoke Interior Finish Out",
    subtitle: "Coffered Ceilings, Designer Lighting & Trim Detail",
    category: "Architecture & Craft",
    cls: "md:col-span-4 md:row-span-2",
    w: 1600,
    h: 1067,
  },
  {
    id: "06",
    img: completeHomeConstruction,
    title: "Complete Home Construction",
    subtitle: "Turnkey Ground-Up Custom Residence Execution",
    category: "Architecture & Craft",
    cls: "md:col-span-5 md:row-span-2",
    w: 1600,
    h: 1067,
  },
  {
    id: "07",
    img: doubleVanity,
    title: "Custom Double-Vanity Suite",
    subtitle: "Bespoke Stone Counters, Brass Fixtures & Illuminated Mirrors",
    category: "Suites & Baths",
    cls: "md:col-span-7 md:row-span-2",
    w: 1600,
    h: 1067,
  },
  {
    id: "08",
    img: b3,
    title: "Limestone Courtyard Residence",
    subtitle: "Timeless Proportion & Private Outdoor Living",
    category: "Exteriors & Estates",
    cls: "md:col-span-4 md:row-span-2",
    w: 1920,
    h: 1080,
  },
  {
    id: "09",
    img: bedroom,
    title: "Oak-Paneled Primary Sanctuary",
    subtitle: "Serene Textures & Tailored Architectural Lighting",
    category: "Suites & Baths",
    cls: "md:col-span-4 md:row-span-2",
    w: 1504,
    h: 1104,
  },
  {
    id: "10",
    img: bathroom,
    title: "Travertine Spa Bath",
    subtitle: "Walnut Cabinetry & Soaking Sanctuary",
    category: "Suites & Baths",
    cls: "md:col-span-4 md:row-span-2",
    w: 1104,
    h: 1504,
  },
  {
    id: "11",
    img: designConsultation,
    title: "Architectural Design Consultation",
    subtitle: "Collaborative Blueprinting, 3D Vision & Spatial Planning",
    category: "Architecture & Craft",
    cls: "md:col-span-6 md:row-span-2",
    w: 1600,
    h: 1067,
  },
  {
    id: "12",
    img: b4,
    title: "Modern Pavilion Residence",
    subtitle: "Indoor-Outdoor Flow & Resort-Caliber Architecture",
    category: "Exteriors & Estates",
    cls: "md:col-span-6 md:row-span-2",
    w: 1920,
    h: 1080,
  },
  {
    id: "13",
    img: welcome1,
    title: "Grand Residence Arrival",
    subtitle: "Handcrafted Masonry, Timber Accents & Manicured Entry",
    category: "Exteriors & Estates",
    cls: "md:col-span-7 md:row-span-2",
    w: 1600,
    h: 1067,
  },
  {
    id: "14",
    img: welcome2,
    title: "Evening Architectural Lounge",
    subtitle: "Curated Finishes, Custom Hearth & Warm Ambient Light",
    category: "Living & Kitchens",
    cls: "md:col-span-5 md:row-span-2",
    w: 1600,
    h: 1067,
  },
] as const;

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredGallery =
    activeCategory === "All" ? GALLERY : GALLERY.filter((item) => item.category === activeCategory);

  // First 2 rows: 5 items in the 12-col bento layout (Row 1: 7+5, Row 2: 4+4+4)
  const initialLimit = activeCategory === "All" ? 5 : 6;
  const visibleGallery = showAll ? filteredGallery : filteredGallery.slice(0, initialLimit);
  const remainingCount = Math.max(0, filteredGallery.length - visibleGallery.length);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") {
        setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % filteredGallery.length));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIdx((prev) =>
          prev === null ? null : (prev - 1 + filteredGallery.length) % filteredGallery.length,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, filteredGallery.length]);

  const activeLightboxItem = lightboxIdx !== null ? filteredGallery[lightboxIdx] : undefined;

  return (
    <section className="relative overflow-x-clip bg-ivory py-[70px] text-charcoal">
      {/* Subtle Ambient Architectural Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 right-1/4 h-96 w-96 rounded-full bg-champagne/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-1/4 h-96 w-96 rounded-full bg-[#9B8766]/10 blur-3xl"
      />

      <div className="container-lux relative z-10">
        {/* Section Header */}
        <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold">
              <Eyebrow n="04">Inspiration Portfolio</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Spaces That Inspire.
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#9B8766]">
                Details That Matter.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-charcoal/12 bg-bone/75 p-5 shadow-[0_16px_38px_-22px_rgba(28,28,28,0.18)] backdrop-blur-sm sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#9B8766] via-champagne to-transparent"
              />
              <div className="flex flex-col justify-between gap-4 pl-3 sm:pl-4">
                <p className="font-sans text-[0.95rem] leading-[1.75] text-charcoal/80">
                  Explore <span className="font-semibold text-charcoal">14 curated captures</span>{" "}
                  from our signature residences—spanning architectural exteriors, bespoke kitchens,
                  spa baths, and precision craftsmanship.
                </p>

                <div>
                  <button
                    type="button"
                    className="group/btn relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-[50px] border border-[#9B8766]/50 bg-charcoal px-6 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_28px_-10px_rgba(28,28,28,0.45)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-gradient-to-r hover:from-[#9B8766] hover:via-[#b89f74] hover:to-[#9B8766] hover:shadow-[0_18px_36px_-10px_rgba(155,135,102,0.5)]"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                    />
                    <span className="relative z-10">View the Gallery</span>
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ivory/15 text-champagne transition-all duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Interactive Category Filter Bar */}
        <Reveal delay={180} className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "All"
                  ? GALLERY.length
                  : GALLERY.filter((g) => g.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                    setLightboxIdx(null);
                  }}
                  className={`group/tab relative inline-flex items-center gap-2 rounded-[50px] border px-4 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-400 ease-[var(--ease-lux)] ${
                    isActive
                      ? "border-[#9B8766] bg-charcoal text-ivory shadow-[0_10px_24px_-8px_rgba(28,28,28,0.4)]"
                      : "border-charcoal/15 bg-bone/70 text-charcoal/75 hover:-translate-y-0.5 hover:border-[#9B8766]/60 hover:bg-bone hover:text-charcoal"
                  }`}
                >
                  <span>{category === "All" ? "All Works" : category}</span>
                  <span
                    className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[0.62rem] font-bold transition-colors ${
                      isActive
                        ? "bg-[#9B8766] text-ivory"
                        : "bg-charcoal/10 text-charcoal/70 group-hover/tab:bg-[#9B8766]/20 group-hover/tab:text-charcoal"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-warm-gray xl:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-[#9B8766]" />
            <span>Click Any Residence to Inspect Fullscreen</span>
          </div>
        </Reveal>

        {/* 2-Row Default Architectural Mosaic Grid (Expands on "View More") */}
        <div className="mt-8 grid auto-rows-[250px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[165px] md:grid-cols-12 md:gap-5">
          {visibleGallery.map((g, i) => {
            const layoutSpan =
              activeCategory === "All" ? g.cls : "md:col-span-6 lg:col-span-4 md:row-span-2";

            return (
              <Reveal
                key={g.id}
                delay={(i % 4) * 80}
                className={`${layoutSpan} group/card relative overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal shadow-[0_20px_48px_-20px_rgba(28,28,28,0.3)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766] hover:shadow-[0_32px_68px_-16px_rgba(28,28,28,0.5)]`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIdx(i)}
                  aria-label={`Inspect ${g.title}`}
                  className="relative block h-full w-full text-left focus:outline-none"
                >
                  {/* Animated Top Champagne Accent Bar */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-x-100"
                  />

                  {/* Residence Image with Smooth Architectural Zoom */}
                  <img
                    src={g.img}
                    alt={`${g.title} — ${g.subtitle}`}
                    width={g.w}
                    height={g.h}
                    loading={i < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:scale-108"
                  />

                  {/* Multi-Layer Cinematic Scrims */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-charcoal/25 opacity-85 transition-opacity duration-500 group-hover/card:opacity-95"
                  />

                  {/* Diagonal Glass Light Sheen Sweep */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:translate-x-full"
                  />

                  {/* Top Row: Floating Index/Category Badge & Expand Action */}
                  <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 rounded-[6px] border border-ivory/20 bg-charcoal/80 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                      {g.id} • {g.category}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/75 text-ivory backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] group-hover/card:scale-110 group-hover/card:border-champagne group-hover/card:bg-champagne group-hover/card:text-charcoal"
                    >
                      <Expand className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  {/* Bottom Frosted Caption Plate */}
                  <div className="absolute inset-x-4 bottom-4 z-20">
                    <div className="rounded-[6px] border border-ivory/15 bg-charcoal/80 p-3.5 backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] group-hover/card:border-champagne/55 group-hover/card:bg-charcoal/90 sm:p-4">
                      <div className="flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate font-serif text-lg font-bold text-ivory transition-colors duration-300 group-hover/card:text-champagne sm:text-xl">
                            {g.title}
                          </h3>
                          <p className="mt-0.5 line-clamp-1 font-sans text-[0.78rem] text-ivory/75">
                            {g.subtitle}
                          </p>
                        </div>
                        <span className="hidden shrink-0 items-center gap-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne sm:inline-flex">
                          View
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Centered "View More" / "Show Less" Action Bar */}
        {filteredGallery.length > initialLimit && (
          <Reveal delay={160} className="mt-12 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="hidden h-px w-16 bg-charcoal/15 sm:block" />
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="group/more relative inline-flex items-center gap-3.5 overflow-hidden rounded-[50px] border border-[#9B8766]/60 bg-charcoal px-8 py-4 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_18px_40px_-12px_rgba(28,28,28,0.45)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-gradient-to-r hover:from-[#9B8766] hover:via-[#b89f74] hover:to-[#9B8766] hover:shadow-[0_24px_48px_-10px_rgba(155,135,102,0.55)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/more:translate-x-full"
                />
                <span className="relative z-10">
                  {showAll
                    ? "Show Less"
                    : `View More (+${String(remainingCount).padStart(2, "0")})`}
                </span>
                <span
                  aria-hidden="true"
                  className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-ivory/15 text-champagne transition-all duration-500 ease-[var(--ease-lux)] group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5 group-hover/more:bg-ivory group-hover/more:text-charcoal"
                >
                  <ArrowUpRight
                    className={`h-4 w-4 transition-transform duration-500 ${
                      showAll ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
              <span aria-hidden="true" className="hidden h-px w-16 bg-charcoal/15 sm:block" />
            </div>

            <p className="font-sans text-[0.75rem] tracking-[0.12em] text-warm-gray">
              Showing <span className="font-semibold text-charcoal">{visibleGallery.length}</span>{" "}
              of <span className="font-semibold text-charcoal">{filteredGallery.length}</span>{" "}
              curated residences
            </p>
          </Reveal>
        )}
      </div>

      {/* Fullscreen Architectural Lightbox Modal */}
      {activeLightboxItem && lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[6px] border border-ivory/20 bg-charcoal shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-ivory/15 bg-charcoal/90 px-5 py-3.5 text-ivory">
              <div className="flex items-center gap-3">
                <span className="rounded-[4px] border border-champagne/40 bg-champagne/15 px-2.5 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                  {activeLightboxItem.id} / {String(filteredGallery.length).padStart(2, "0")}
                </span>
                <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory/80">
                  {activeLightboxItem.category}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIdx(null)}
                aria-label="Close gallery preview"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative flex min-h-[320px] flex-1 items-center justify-center overflow-hidden bg-graphite sm:min-h-[520px]">
              <img
                src={activeLightboxItem.img}
                alt={activeLightboxItem.title}
                className="max-h-[70vh] w-full object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                type="button"
                aria-label="Previous image"
                onClick={() =>
                  setLightboxIdx(
                    (lightboxIdx - 1 + filteredGallery.length) % filteredGallery.length,
                  )
                }
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory backdrop-blur-md transition-all hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={() => setLightboxIdx((lightboxIdx + 1) % filteredGallery.length)}
                className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory backdrop-blur-md transition-all hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="flex flex-col justify-between gap-4 border-t border-ivory/15 bg-charcoal/95 px-6 py-4 text-ivory sm:flex-row sm:items-center">
              <div>
                <h3 className="font-serif text-xl font-bold text-champagne sm:text-2xl">
                  {activeLightboxItem.title}
                </h3>
                <p className="mt-0.5 font-sans text-sm text-ivory/80">
                  {activeLightboxItem.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
