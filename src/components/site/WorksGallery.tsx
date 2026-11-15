import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  LayoutGrid,
  ListFilter,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { CATEGORIES, GALLERY, type Category } from "./GallerySection";
import { Reveal } from "./Reveal";

type ViewMode = "mosaic" | "dossier";

export function WorksGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("mosaic");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  const filteredGallery =
    activeCategory === "All" ? GALLERY : GALLERY.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (lightboxIdx !== null) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [lightboxIdx]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;
    const outside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    const onDown = (e: PointerEvent) => {
      pressedOutside = outside(e);
    };
    const onUp = (e: PointerEvent) => {
      if (pressedOutside && outside(e)) dialog.close();
    };
    dialog.addEventListener("pointerdown", onDown);
    dialog.addEventListener("pointerup", onUp);
    return () => {
      dialog.removeEventListener("pointerdown", onDown);
      dialog.removeEventListener("pointerup", onUp);
    };
  }, []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
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
    <section
      id="exhibition"
      className="relative overflow-x-clip bg-cream py-[70px] text-charcoal sm:py-[90px]"
    >
      {/* Subtle Ambient Architectural Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 right-1/4 h-96 w-96 rounded-full bg-champagne/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-1/4 h-96 w-96 rounded-full bg-[#9B8766]/12 blur-3xl"
      />

      <div className="container-lux relative z-10">
        {/* Section Editorial Split Header */}
        <div className="grid gap-8 border-b border-[#9B8766]/25 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
              <Eyebrow n="02">Complete Architectural Exhibition</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Curated Residences &amp;
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                Signature Craftsmanship.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-[#9B8766]/25 bg-ivory/85 p-5 shadow-[0_16px_38px_-18px_oklch(0.18_0.006_120/0.12)] backdrop-blur-sm sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#6B593B] via-[#9B8766] to-champagne"
              />
              <div className="pl-3 sm:pl-4">
                <p className="font-serif text-[1.2rem] font-semibold italic leading-snug text-charcoal sm:text-[1.3rem]">
                  All {GALLERY.length} signature works, unfiltered.
                </p>
                <p className="mt-2 font-sans text-[0.92rem] leading-[1.75] text-charcoal/80">
                  Filter by architectural discipline, switch between our{" "}
                  <span className="font-semibold text-charcoal">Bento Mosaic</span> and{" "}
                  <span className="font-semibold text-charcoal">Architectural Dossier</span> views,
                  or select any plate to inspect full specifications.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Interactive Filter & View Mode Toolbar */}
        <Reveal delay={180} className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {/* Category Filter Pills */}
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
                    setLightboxIdx(null);
                  }}
                  className={`group/tab relative inline-flex cursor-pointer items-center gap-2 rounded-[50px] border px-4 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-400 ease-[var(--ease-lux)] ${
                    isActive
                      ? "border-[#9B8766] bg-charcoal text-ivory shadow-[0_10px_24px_-8px_rgba(28,28,28,0.4)]"
                      : "border-charcoal/15 bg-ivory/80 text-charcoal/75 hover:-translate-y-0.5 hover:border-[#9B8766]/60 hover:bg-ivory hover:text-charcoal"
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

          {/* Right Controls: View Switcher & Hint */}
          <div className="flex items-center gap-3">
            <div
              role="group"
              aria-label="Gallery layout view"
              className="inline-flex items-center rounded-[50px] border border-charcoal/15 bg-ivory p-1 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setViewMode("mosaic")}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-[50px] px-3.5 py-1.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  viewMode === "mosaic"
                    ? "bg-charcoal text-champagne shadow-sm"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span>Mosaic</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("dossier")}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-[50px] px-3.5 py-1.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  viewMode === "dossier"
                    ? "bg-charcoal text-champagne shadow-sm"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                <ListFilter className="h-3.5 w-3.5" />
                <span>Dossier</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* =================================================================
            VIEW MODE 1: COMPLETE 14-WORK ARCHITECTURAL MOSAIC BENTO GRID
           ================================================================= */}
        {viewMode === "mosaic" ? (
          <div className="mt-8 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[175px] md:grid-cols-12 md:gap-5">
            {filteredGallery.map((g, i) => {
              const layoutSpan =
                activeCategory === "All" ? g.cls : "md:col-span-6 lg:col-span-4 md:row-span-2";

              return (
                <Reveal
                  key={g.id}
                  delay={(i % 4) * 70}
                  className={`${layoutSpan} group/card relative overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal shadow-[0_20px_48px_-20px_rgba(28,28,28,0.3)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766] hover:shadow-[0_32px_68px_-16px_rgba(28,28,28,0.5)]`}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(i)}
                    aria-label={`Inspect ${g.title} in ${g.location}`}
                    className="relative block h-full w-full cursor-pointer text-left focus:outline-none"
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
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:scale-108"
                    />

                    {/* Multi-Layer Cinematic Scrims */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/20 to-charcoal/30 opacity-85 transition-opacity duration-500 group-hover/card:opacity-95"
                    />

                    {/* Diagonal Glass Light Sheen Sweep */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/card:translate-x-full"
                    />

                    {/* Top Row: Floating Index/Category Badge, Location & Expand Action */}
                    <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-2 rounded-[6px] border border-ivory/20 bg-charcoal/80 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                          {g.id} • {g.category}
                        </span>
                        <span className="hidden items-center gap-1 rounded-[6px] border border-ivory/15 bg-charcoal/70 px-2.5 py-1 font-sans text-[0.58rem] font-medium uppercase tracking-[0.16em] text-ivory/85 backdrop-blur-md lg:inline-flex">
                          <MapPin className="h-2.5 w-2.5 text-champagne" />
                          {g.location}
                        </span>
                      </div>

                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/75 text-ivory backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] group-hover/card:scale-110 group-hover/card:border-champagne group-hover/card:bg-champagne group-hover/card:text-charcoal"
                      >
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* Bottom Frosted Caption Plate */}
                    <div className="absolute inset-x-4 bottom-4 z-20">
                      <div className="rounded-[6px] border border-ivory/15 bg-charcoal/82 p-3.5 backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] group-hover/card:border-champagne/55 group-hover/card:bg-charcoal/92 sm:p-4">
                        <div className="flex items-end justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne/85">
                              {g.scope} · {g.location}
                            </p>
                            <h3 className="mt-0.5 truncate font-serif text-lg font-bold text-ivory transition-colors duration-300 group-hover/card:text-champagne sm:text-xl">
                              {g.title}
                            </h3>
                            <p className="mt-0.5 line-clamp-1 font-sans text-[0.78rem] text-ivory/75">
                              {g.subtitle}
                            </p>
                          </div>
                          <span className="hidden shrink-0 items-center gap-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne sm:inline-flex">
                            Inspect
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
        ) : (
          /* =================================================================
              VIEW MODE 2: ARCHITECTURAL DOSSIER CATALOGUE GRID (2-COLUMN)
             ================================================================= */
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-7">
            {filteredGallery.map((g, i) => (
              <Reveal key={g.id} delay={(i % 4) * 70}>
                <article className="group/dossier relative flex h-full flex-col overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-ivory p-5 shadow-[0_22px_48px_-20px_rgba(28,28,28,0.18)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766] hover:shadow-[0_32px_68px_-18px_rgba(28,28,28,0.28)] sm:flex-row sm:items-stretch sm:gap-6 sm:p-6">
                  {/* Persistent Top Bronze Hairline + Hover Accent */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#9B8766]/25"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne transition-transform duration-700 ease-[var(--ease-lux)] group-hover/dossier:scale-x-100"
                  />

                  {/* Watermark Numeral */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 -bottom-5 font-serif text-[6rem] font-bold italic leading-none text-[#9B8766]/[0.07] select-none"
                  >
                    {g.id}
                  </span>

                  {/* Left Image Plate */}
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(i)}
                    aria-label={`Open fullscreen preview of ${g.title}`}
                    className="relative w-full shrink-0 cursor-pointer overflow-hidden rounded-[5px] bg-charcoal text-left ring-1 ring-charcoal/12 sm:w-[44%]"
                  >
                    <img
                      src={g.img}
                      alt={`${g.title} — ${g.subtitle}`}
                      width={g.w}
                      height={g.h}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover/dossier:scale-105 sm:aspect-[4/5]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-[4px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                      Plate {g.id}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/80 text-ivory backdrop-blur-md transition-colors group-hover/dossier:border-champagne group-hover/dossier:bg-champagne group-hover/dossier:text-charcoal"
                    >
                      <Expand className="h-3.5 w-3.5" />
                    </span>
                  </button>

                  {/* Right Dossier Specification Column */}
                  <div className="relative z-10 mt-5 flex flex-1 flex-col justify-between sm:mt-0">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-charcoal/10 pb-2.5">
                        <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                          {g.category}
                        </span>
                        <span className="inline-flex items-center gap-1 font-sans text-[0.62rem] font-medium text-charcoal/70">
                          <MapPin className="h-3 w-3 text-[#9B8766]" />
                          {g.location}
                        </span>
                      </div>

                      <h3 className="mt-3 font-serif text-[1.55rem] font-bold leading-snug text-charcoal">
                        {g.title}
                      </h3>

                      <p className="mt-1 font-serif text-[0.98rem] italic text-[#6B593B]">
                        {g.subtitle}
                      </p>

                      <p className="mt-2.5 font-sans text-[0.86rem] leading-[1.72] text-charcoal/78">
                        {g.description}
                      </p>
                    </div>

                    <div className="mt-4 space-y-2.5 border-t border-charcoal/10 pt-3.5">
                      <div>
                        <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                          Material Palette &amp; Systems
                        </p>
                        <p className="mt-0.5 font-sans text-[0.76rem] font-medium text-charcoal/88">
                          {g.materials}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="rounded-[4px] border border-[#9B8766]/30 bg-cream/80 px-2.5 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#6B593B]">
                          {g.scope}
                        </span>
                        <button
                          type="button"
                          onClick={() => setLightboxIdx(i)}
                          className="inline-flex cursor-pointer items-center gap-1.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-[#6B593B]"
                        >
                          <span>Inspect Plate</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#9B8766]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* Exhibition Summary Footer Strip */}
        <Reveal delay={160} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-[6px] border border-[#9B8766]/30 bg-ivory/85 px-6 py-4 backdrop-blur-sm sm:flex-row">
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 shrink-0 text-[#9B8766]" />
              <p className="font-sans text-[0.82rem] text-charcoal/80">
                Displaying{" "}
                <span className="font-semibold text-charcoal">{filteredGallery.length}</span> of{" "}
                <span className="font-semibold text-charcoal">{GALLERY.length}</span> architectural
                captures in{" "}
                <span className="font-semibold text-[#6B593B]">
                  {activeCategory === "All" ? "All Categories" : activeCategory}
                </span>
              </p>
            </div>

            {activeCategory !== "All" && (
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="cursor-pointer font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B] underline decoration-[#9B8766]/50 underline-offset-4 transition-colors hover:text-charcoal"
              >
                Reset Filter · Show All {GALLERY.length} Works
              </button>
            )}
          </div>
        </Reveal>
      </div>

      {/* =================================================================
          FULLSCREEN NATIVE <dialog> ARCHITECTURAL LIGHTBOX WITH FILMSTRIP
         ================================================================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        {...({ closedby: "any" } as Record<string, string>)}
        onClose={() => setLightboxIdx(null)}
        className="m-auto max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-6xl overflow-hidden rounded-[6px] border border-ivory/20 bg-charcoal p-0 text-ivory shadow-[0_40px_100px_-20px_rgba(0,0,0,0.92)] backdrop:bg-charcoal/92 backdrop:backdrop-blur-xl sm:w-[calc(100vw-3rem)] open:flex open:flex-col"
      >
        {activeLightboxItem && lightboxIdx !== null && (
          <>
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-ivory/15 bg-charcoal/95 px-5 py-3.5 text-ivory">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-[4px] border border-champagne/40 bg-champagne/15 px-2.5 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                  Plate {activeLightboxItem.id} / {String(filteredGallery.length).padStart(2, "0")}
                </span>
                <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory/80">
                  {activeLightboxItem.category}
                </span>
                <span className="hidden items-center gap-1 font-sans text-[0.68rem] text-champagne/85 sm:inline-flex">
                  <MapPin className="h-3 w-3" />
                  {activeLightboxItem.location}
                </span>
              </div>

              <form method="dialog">
                <button
                  type="submit"
                  autoFocus
                  aria-label="Close exhibition lightbox"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Main Image & Architectural Dossier Split */}
            <div className="grid flex-1 overflow-y-auto lg:grid-cols-12">
              {/* Left Image Stage */}
              <div className="relative flex min-h-[280px] items-center justify-center bg-graphite p-4 sm:min-h-[460px] lg:col-span-8">
                <img
                  src={activeLightboxItem.img}
                  alt={activeLightboxItem.title}
                  width={activeLightboxItem.w}
                  height={activeLightboxItem.h}
                  className="max-h-[60vh] w-full object-contain"
                />

                {/* Prev / Next Controls */}
                <button
                  type="button"
                  aria-label="Previous work"
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + filteredGallery.length) % filteredGallery.length,
                    )
                  }
                  className="absolute left-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory backdrop-blur-md transition-all hover:border-champagne hover:bg-champagne hover:text-charcoal sm:left-4 sm:h-11 sm:w-11"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  aria-label="Next work"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % filteredGallery.length)}
                  className="absolute right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory backdrop-blur-md transition-all hover:border-champagne hover:bg-champagne hover:text-charcoal sm:right-4 sm:h-11 sm:w-11"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Specification Panel */}
              <div className="flex flex-col justify-between border-t border-ivory/15 bg-charcoal/95 p-5 sm:p-6 lg:col-span-4 lg:border-t-0 lg:border-l">
                <div>
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    {activeLightboxItem.scope}
                  </p>
                  <h3
                    id={dialogTitleId}
                    className="mt-1.5 font-serif text-2xl font-bold text-ivory sm:text-[1.7rem]"
                  >
                    {activeLightboxItem.title}
                  </h3>
                  <p className="mt-1 font-serif text-sm italic text-champagne/90">
                    {activeLightboxItem.subtitle}
                  </p>

                  <p className="mt-4 font-sans text-[0.86rem] leading-[1.75] text-ivory/80">
                    {activeLightboxItem.description}
                  </p>

                  <dl className="mt-5 space-y-3 border-t border-ivory/12 pt-4">
                    <div>
                      <dt className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-champagne/80">
                        Community Location
                      </dt>
                      <dd className="mt-0.5 font-serif text-base text-ivory">
                        {activeLightboxItem.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-champagne/80">
                        Materials &amp; Finishes
                      </dt>
                      <dd className="mt-0.5 font-sans text-xs leading-relaxed text-ivory/85">
                        {activeLightboxItem.materials}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Filmstrip Thumbnail Selector */}
                <div className="mt-6 border-t border-ivory/12 pt-3.5">
                  <p className="mb-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ivory/55">
                    Quick Jump ({filteredGallery.length} Plates)
                  </p>
                  <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {filteredGallery.map((thumb, tIdx) => {
                      const isCurrent = tIdx === lightboxIdx;
                      return (
                        <button
                          key={thumb.id}
                          type="button"
                          onClick={() => setLightboxIdx(tIdx)}
                          aria-label={`Select plate ${thumb.id}: ${thumb.title}`}
                          className={`relative h-11 w-14 shrink-0 cursor-pointer overflow-hidden rounded-[3px] border transition-all ${
                            isCurrent
                              ? "border-champagne ring-1 ring-champagne"
                              : "border-ivory/20 opacity-55 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={thumb.img}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
