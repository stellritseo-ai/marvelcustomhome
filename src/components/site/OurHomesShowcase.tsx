import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Expand,
  Home,
  Layers,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";
import bathroomPng from "@/assets/bathroom.png";
import farmHouse1 from "@/assets/farm-house1.jpg";
import farmHouse2 from "@/assets/farm-house2.jpg";
import farmHouse3 from "@/assets/farm-house3.jpg";
import farmHouse4 from "@/assets/farm-house4.jpg";
import processBg from "@/assets/processbg.jpg";
import rug from "@/assets/rug.jpg";
import traditionalHouse1 from "@/assets/traditional-house1.jpg";
import traditionalHouse2 from "@/assets/traditional-house2.jpg";
import traditionalHouse3 from "@/assets/traditional-house3.jpg";
import traditionalHouse4 from "@/assets/traditional-house4.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export interface HomeStylePlate {
  code: string;
  name: string;
  caption: string;
  detail: string;
  src: string;
  w: number;
  h: number;
}

export interface HomeStyleSection {
  id: string;
  num: string;
  eyebrowNum: string;
  title: string;
  tagline: string;
  description: string;
  features: readonly [string, string, string, string];
  theme: "ivory" | "dark" | "cream";
  plates: readonly [HomeStylePlate, HomeStylePlate, HomeStylePlate, HomeStylePlate];
}

export const HOME_STYLES = [
  {
    id: "style-01",
    num: "01/",
    eyebrowNum: "01",
    title: "Traditional",
    tagline: "Heritage, Symmetry & Enduring Charm",
    description:
      "Traditional home design features classic architectural details, symmetrical facades, and timeless materials such as brick, wood, and stone. Interiors often include formal living and dining areas, crown molding, and warm color palettes. This style emphasizes comfort, familiarity, and elegance, reflecting a sense of heritage and enduring charm.",
    features: [
      "Classic Facades",
      "Formal Living Spaces",
      "Elegant Interiors",
      "Timeless Materials",
    ],
    theme: "ivory",
    plates: [
      {
        code: "01.1",
        name: "traditional-house2",
        caption: "Classic Timber & Tile Gable Architecture",
        detail:
          "Traditional shuttered fenestration, natural wood cladding, and pitched clay roofing.",
        src: traditionalHouse2,
        w: 1280,
        h: 1920,
      },
      {
        code: "01.2",
        name: "traditional-house1",
        caption: "Symmetrical Brick & Stone Manor",
        detail: "Hand-laid brick quoins, flint stone masonry, and dual-chimney heritage elevation.",
        src: traditionalHouse1,
        w: 1280,
        h: 720,
      },
      {
        code: "01.3",
        name: "traditional-house3",
        caption: "Courtyard Stone Residence & Balustrade",
        detail:
          "Dressed stone coursing, carved stone balcony balustrade, and warm timber shutters.",
        src: traditionalHouse3,
        w: 1280,
        h: 720,
      },
      {
        code: "01.4",
        name: "traditional-house4",
        caption: "Symmetrical Gabled Heritage Facade",
        detail:
          "Balanced sash windows, covered portico entry, and timeless clapboard craftsmanship.",
        src: traditionalHouse4,
        w: 4288,
        h: 2848,
      },
    ],
  },
  {
    id: "style-02",
    num: "02/",
    eyebrowNum: "02",
    title: "Farm House",
    tagline: "Wide Front Porches, Gabled Roofs & Gathering Flow",
    description:
      "Farmhouse design embraces comfort, simplicity, and function with its signature wide front porches and classic gabled roofs. Board-and-batten siding adds timeless character, while neutral color palettes create a calm, airy atmosphere. With open floor plans that encourage family gathering and easy flow, this style blends rustic charm with modern living—delivering both practicality and warmth in every corner of the home.",
    features: ["Outdoor Spaces", "Open Floor Plans", "Large Windows & Doors", "Natural Material"],
    theme: "dark",
    plates: [
      {
        code: "02.1",
        name: "farm-house2",
        caption: "Gabled Farmhouse & Covered Front Porch",
        detail: "Symmetrical central gable, recessed colonnade porch, and calm neutral siding.",
        src: farmHouse2,
        w: 1280,
        h: 853,
      },
      {
        code: "02.2",
        name: "farm-house1",
        caption: "Natural Timber & Steep-Gable Homestead",
        detail: "Authentic wood joinery, steeped roofline, and expansive pastoral acreage views.",
        src: farmHouse1,
        w: 1280,
        h: 857,
      },
      {
        code: "02.3",
        name: "farm-house3",
        caption: "Pastoral Estate with Covered Veranda",
        detail: "Stone foundation base, sheltered corner porch, and abundant daylight windows.",
        src: farmHouse3,
        w: 1280,
        h: 853,
      },
      {
        code: "02.4",
        name: "farm-house4",
        caption: "Rustic Timber-Clad Hillside Farmhouse",
        detail:
          "Warm natural wood facade, wrap-around lower veranda, and organic site integration.",
        src: farmHouse4,
        w: 1280,
        h: 1920,
      },
    ],
  },
  {
    id: "style-03",
    num: "03/",
    eyebrowNum: "03",
    title: "Modern Design",
    tagline: "Clean Lines, Minimalist Lighting & Serene Openness",
    description:
      "Modern Design embraces simplicity, functionality, and minimalism to create beautiful and calming spaces. Characterized by clean lines, neutral colors, and open floor plans, this style focuses on creating tranquility and efficiency. Natural materials like wood and stone bring a touch of the outdoors inside, while large windows and minimalist lighting enhance the sense of openness and connection with nature. Discover Modern design with Marvel Custom Homes for a serene and stylish living environment.",
    features: ["Outdoor Spaces", "Open Floor Plans", "Large Windows & Doors", "Natural Material"],
    theme: "cream",
    plates: [
      {
        code: "03.1",
        name: "about1",
        caption: "Minimalist Calacatta Island & Linear Illumination",
        detail:
          "Clean-lined handleless cabinetry, architectural linear ceiling light, and veined marble.",
        src: about1,
        w: 735,
        h: 919,
      },
      {
        code: "03.2",
        name: "about2",
        caption: "Monolithic Bookmatched Stone & Dark Wood Atelier",
        detail:
          "Full-height marble slab feature wall, waterfall island, and matte dark timber millwork.",
        src: about2,
        w: 736,
        h: 736,
      },
      {
        code: "03.3",
        name: "bathroom",
        caption: "Serene Natural Stone Spa & Picture Windows",
        detail: "Frameless glass wet room, soaking tub, and large windows inviting natural light.",
        src: bathroomPng,
        w: 275,
        h: 183,
      },
      {
        code: "03.4",
        name: "rug",
        caption: "Warm Organic Neutral Palette & Sculptural Texture",
        detail:
          "Calming layered sand, ivory, and champagne tones that ground minimalist interiors.",
        src: rug,
        w: 1380,
        h: 785,
      },
    ],
  },
] as const satisfies readonly HomeStyleSection[];

const FEATURE_ICONS = [Home, Layers, Sun, Sparkles] as const;

export function OurHomesShowcase() {
  const [lightboxState, setLightboxState] = useState<{
    styleIdx: number;
    plateIdx: number;
  } | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (lightboxState !== null) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [lightboxState]);

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
    if (lightboxState === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxState((prev) =>
          prev === null ? null : { ...prev, plateIdx: (prev.plateIdx + 1) % 4 },
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxState((prev) =>
          prev === null ? null : { ...prev, plateIdx: (prev.plateIdx + 3) % 4 },
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState]);

  const activeStyle = lightboxState !== null ? HOME_STYLES[lightboxState.styleIdx] : undefined;
  const activePlate =
    activeStyle && lightboxState !== null ? activeStyle.plates[lightboxState.plateIdx] : undefined;

  return (
    <>
      {HOME_STYLES.map((style, styleIdx) => {
        const isDark = style.theme === "dark";
        const bgClass =
          style.theme === "ivory"
            ? "bg-ivory text-charcoal"
            : style.theme === "dark"
              ? "bg-charcoal text-ivory"
              : "bg-cream text-charcoal";

        const [plate1, plate2, plate3, plate4] = style.plates;
        const isReversed = styleIdx === 1; // 02/ Farm House reverses the portrait/landscape side for visual rhythm

        return (
          <section
            key={style.id}
            id={style.id}
            aria-labelledby={`${style.id}-heading`}
            className={`relative scroll-mt-24 overflow-x-clip py-[75px] sm:py-[95px] ${bgClass}`}
          >
            {/* Dark Atmospheric Background for 02/ Farm House */}
            {isDark && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
              >
                <img
                  src={processBg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/75 to-charcoal/92" />
              </div>
            )}

            {/* Ambient Champagne Glows */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -top-36 ${
                isReversed ? "left-1/4" : "right-1/4"
              } z-0 h-96 w-96 rounded-full ${
                isDark ? "bg-[#9B8766]/15" : "bg-champagne/25"
              } blur-3xl`}
            />

            <div className="container-lux relative z-10">
              {/* =============================================================
                  TOP EDITORIAL NARRATIVE & 4 ARCHITECTURAL PILLARS
                 ============================================================= */}
              <div
                className={`grid items-start gap-10 border-b pb-12 lg:grid-cols-12 lg:gap-14 ${
                  isDark ? "border-ivory/15" : "border-charcoal/12"
                }`}
              >
                {/* Left Column: Monumental Number 01/ 02/ 03/ + Title */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span
                        className={`inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-[6px] border px-3.5 font-serif text-2xl font-bold italic shadow-sm sm:h-16 sm:min-w-[4rem] sm:text-3xl ${
                          isDark
                            ? "border-champagne/50 bg-champagne/15 text-champagne"
                            : "border-[#9B8766]/45 bg-charcoal text-champagne"
                        }`}
                      >
                        {style.num}
                      </span>
                      <div className={isDark ? "" : "[&_p]:font-semibold [&_p]:text-[#6B593B]"}>
                        <Eyebrow n={style.eyebrowNum} light={isDark}>
                          Architectural Style
                        </Eyebrow>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={80}>
                    <h2
                      id={`${style.id}-heading`}
                      className={`mt-5 font-serif text-[clamp(2.5rem,1.5rem+3.2vw,4.35rem)] font-bold leading-[1.04] tracking-[-0.02em] ${
                        isDark ? "text-ivory" : "text-charcoal"
                      }`}
                    >
                      {style.title}
                    </h2>
                    <p
                      className={`mt-2 font-serif text-lg italic sm:text-xl ${
                        isDark ? "text-champagne" : "text-[#6B593B]"
                      }`}
                    >
                      {style.tagline}
                    </p>
                  </Reveal>

                  <Reveal delay={140}>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        to="/contact"
                        className={`group/cta inline-flex items-center gap-2.5 rounded-[50px] border px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 ${
                          isDark
                            ? "border-champagne/75 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] text-ivory shadow-[0_12px_28px_-8px_rgba(0,0,0,0.6)]"
                            : "border-charcoal bg-charcoal text-ivory hover:border-[#9B8766] hover:bg-[#9B8766]"
                        }`}
                      >
                        <span>Inquire About {style.title}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setLightboxState({ styleIdx, plateIdx: 0 })}
                        className={`inline-flex cursor-pointer items-center gap-2 rounded-[50px] border px-4 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                          isDark
                            ? "border-ivory/20 bg-ivory/[0.05] text-champagne hover:border-champagne"
                            : "border-[#9B8766]/40 bg-ivory/80 text-[#6B593B] hover:border-[#9B8766] hover:text-charcoal"
                        }`}
                      >
                        <Expand className="h-3 w-3" />
                        <span>Inspect 4 Plates</span>
                      </button>
                    </div>
                  </Reveal>
                </div>

                {/* Right Column: Verbatim Description + 4 Highlight Cards */}
                <div className="lg:col-span-7">
                  <Reveal delay={100}>
                    <div
                      className={`relative rounded-[6px] border p-6 backdrop-blur-sm sm:p-7 ${
                        isDark
                          ? "border-ivory/15 bg-ivory/[0.05]"
                          : "border-[#9B8766]/30 bg-ivory/90 shadow-[0_18px_40px_-20px_rgba(28,28,28,0.14)]"
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-y-5 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#9B8766] via-champagne to-transparent"
                      />
                      <p
                        className={`pl-3 font-sans text-[0.98rem] leading-[1.85] sm:pl-4 sm:text-[1.05rem] ${
                          isDark ? "text-ivory/88" : "text-charcoal/88"
                        }`}
                      >
                        {style.description}
                      </p>
                    </div>
                  </Reveal>

                  {/* 4 Architectural Highlights */}
                  <Reveal delay={180}>
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5">
                      {style.features.map((feat, fIdx) => {
                        const Icon = FEATURE_ICONS[fIdx % FEATURE_ICONS.length] ?? Sparkles;
                        return (
                          <div
                            key={feat}
                            className={`group relative overflow-hidden rounded-[6px] border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                              isDark
                                ? "border-ivory/15 bg-charcoal/80 hover:border-champagne/65"
                                : "border-[#9B8766]/30 bg-ivory hover:border-[#9B8766] hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`font-sans text-[0.6rem] font-bold uppercase tracking-[0.2em] ${
                                  isDark ? "text-champagne" : "text-[#6B593B]"
                                }`}
                              >
                                0{fIdx + 1}
                              </span>
                              <Icon
                                className={`h-3.5 w-3.5 ${
                                  isDark ? "text-champagne" : "text-[#9B8766]"
                                }`}
                              />
                            </div>
                            <p
                              className={`mt-2.5 font-serif text-[1.08rem] font-bold leading-snug ${
                                isDark ? "text-ivory" : "text-charcoal"
                              }`}
                            >
                              {feat}
                            </p>
                            <div
                              className={`mt-2 inline-flex items-center gap-1 font-sans text-[0.6rem] font-medium uppercase tracking-[0.16em] ${
                                isDark ? "text-ivory/60" : "text-charcoal/60"
                              }`}
                            >
                              <CheckCircle2
                                className={`h-2.5 w-2.5 ${
                                  isDark ? "text-champagne" : "text-[#6B593B]"
                                }`}
                              />
                              <span>Signature Element</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* =============================================================
                  4-IMAGE ASYMMETRIC ARCHITECTURAL EXHIBITION BENTO
                 ============================================================= */}
              <div className="mt-10 sm:mt-12">
                {!isReversed ? (
                  /* Layout A (01/ Traditional & 03/ Modern Design):
                     Left 5 Cols = Tall Portrait (Plate 1)
                     Right 7 Cols = Top Row (Plate 2 + Plate 3) + Bottom Wide (Plate 4) */
                  <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
                    {/* Plate 1 — Tall Portrait Column (5 Cols) */}
                    <Reveal className="lg:col-span-5">
                      <StylePlateCard
                        plate={plate1}
                        aspectClass="aspect-[4/5] lg:h-full lg:min-h-[540px]"
                        onOpen={() => setLightboxState({ styleIdx, plateIdx: 0 })}
                      />
                    </Reveal>

                    {/* Right 7 Columns: 2 Top Cards + 1 Wide Bottom Card */}
                    <div className="grid gap-4 sm:gap-5 lg:col-span-7">
                      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                        <Reveal delay={80}>
                          <StylePlateCard
                            plate={plate2}
                            aspectClass="aspect-[16/11] sm:h-[260px]"
                            onOpen={() => setLightboxState({ styleIdx, plateIdx: 1 })}
                          />
                        </Reveal>
                        <Reveal delay={140}>
                          <StylePlateCard
                            plate={plate3}
                            aspectClass="aspect-[16/11] sm:h-[260px]"
                            onOpen={() => setLightboxState({ styleIdx, plateIdx: 2 })}
                          />
                        </Reveal>
                      </div>

                      <Reveal delay={200}>
                        <StylePlateCard
                          plate={plate4}
                          aspectClass="aspect-[16/9] sm:h-[260px]"
                          onOpen={() => setLightboxState({ styleIdx, plateIdx: 3 })}
                        />
                      </Reveal>
                    </div>
                  </div>
                ) : (
                  /* Layout B (02/ Farm House):
                     Left 7 Cols = Top Wide (Plate 1: farm-house2) + Bottom 2-Col (Plate 2: farm-house1 + Plate 3: farm-house3)
                     Right 5 Cols = Tall Portrait (Plate 4: farm-house4) */
                  <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
                    {/* Left 7 Columns */}
                    <div className="grid gap-4 sm:gap-5 lg:col-span-7">
                      <Reveal>
                        <StylePlateCard
                          plate={plate1}
                          aspectClass="aspect-[16/9] sm:h-[260px]"
                          onOpen={() => setLightboxState({ styleIdx, plateIdx: 0 })}
                        />
                      </Reveal>

                      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                        <Reveal delay={80}>
                          <StylePlateCard
                            plate={plate2}
                            aspectClass="aspect-[16/11] sm:h-[260px]"
                            onOpen={() => setLightboxState({ styleIdx, plateIdx: 1 })}
                          />
                        </Reveal>
                        <Reveal delay={140}>
                          <StylePlateCard
                            plate={plate3}
                            aspectClass="aspect-[16/11] sm:h-[260px]"
                            onOpen={() => setLightboxState({ styleIdx, plateIdx: 2 })}
                          />
                        </Reveal>
                      </div>
                    </div>

                    {/* Right 5 Columns: Tall Portrait (farm-house4) */}
                    <Reveal delay={200} className="lg:col-span-5">
                      <StylePlateCard
                        plate={plate4}
                        aspectClass="aspect-[4/5] lg:h-full lg:min-h-[540px]"
                        onOpen={() => setLightboxState({ styleIdx, plateIdx: 3 })}
                      />
                    </Reveal>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* =================================================================
          FULLSCREEN NATIVE <dialog> ARCHITECTURAL STYLE LIGHTBOX
         ================================================================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        {...({ closedby: "any" } as Record<string, string>)}
        onClose={() => setLightboxState(null)}
        className="m-auto max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-6xl overflow-hidden rounded-[6px] border border-ivory/20 bg-charcoal p-0 text-ivory shadow-[0_40px_100px_-20px_rgba(0,0,0,0.92)] backdrop:bg-charcoal/92 backdrop:backdrop-blur-xl sm:w-[calc(100vw-3rem)] open:flex open:flex-col"
      >
        {activeStyle && activePlate && lightboxState !== null && (
          <>
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-ivory/15 bg-charcoal/95 px-5 py-3.5 text-ivory">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-[4px] border border-champagne/40 bg-champagne/15 px-2.5 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                  {activeStyle.num} {activeStyle.title} · Plate {activePlate.code}
                </span>
                <span className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-ivory/65">
                  Asset: {activePlate.name}
                </span>
              </div>

              <form method="dialog">
                <button
                  type="submit"
                  autoFocus
                  aria-label="Close style preview"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Split Image & Style Dossier */}
            <div className="grid flex-1 overflow-y-auto lg:grid-cols-12">
              {/* Left Image Stage */}
              <div className="relative flex min-h-[280px] items-center justify-center bg-graphite p-4 sm:min-h-[460px] lg:col-span-8">
                <img
                  src={activePlate.src}
                  alt={`${activeStyle.title} — ${activePlate.caption}`}
                  width={activePlate.w}
                  height={activePlate.h}
                  className="max-h-[62vh] w-full object-contain"
                />

                {/* Prev / Next Controls */}
                <button
                  type="button"
                  aria-label="Previous plate"
                  onClick={() =>
                    setLightboxState({
                      ...lightboxState,
                      plateIdx: (lightboxState.plateIdx + 3) % 4,
                    })
                  }
                  className="absolute left-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory backdrop-blur-md transition-all hover:border-champagne hover:bg-champagne hover:text-charcoal sm:left-4 sm:h-11 sm:w-11"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  aria-label="Next plate"
                  onClick={() =>
                    setLightboxState({
                      ...lightboxState,
                      plateIdx: (lightboxState.plateIdx + 1) % 4,
                    })
                  }
                  className="absolute right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory backdrop-blur-md transition-all hover:border-champagne hover:bg-champagne hover:text-charcoal sm:right-4 sm:h-11 sm:w-11"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Details Panel */}
              <div className="flex flex-col justify-between border-t border-ivory/15 bg-charcoal/95 p-5 sm:p-6 lg:col-span-4 lg:border-t-0 lg:border-l">
                <div>
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    {activeStyle.num} {activeStyle.title}
                  </p>
                  <h3
                    id={dialogTitleId}
                    className="mt-1.5 font-serif text-2xl font-bold text-ivory"
                  >
                    {activePlate.caption}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ivory/80">
                    {activePlate.detail}
                  </p>

                  <div className="mt-5 border-t border-ivory/12 pt-4">
                    <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                      Signature Characteristics
                    </p>
                    <ul className="mt-2.5 grid grid-cols-2 gap-2">
                      {activeStyle.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-1.5 rounded-[4px] border border-ivory/12 bg-ivory/[0.04] px-2.5 py-1.5 font-sans text-xs text-ivory/90"
                        >
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-champagne" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4-Plate Thumbnail Strip */}
                <div className="mt-6 border-t border-ivory/12 pt-4">
                  <p className="mb-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ivory/55">
                    {activeStyle.title} Plates (4)
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {activeStyle.plates.map((p, pIdx) => {
                      const isCurrent = pIdx === lightboxState.plateIdx;
                      return (
                        <button
                          key={p.code}
                          type="button"
                          onClick={() => setLightboxState({ ...lightboxState, plateIdx: pIdx })}
                          aria-label={`Select plate ${p.code}: ${p.caption}`}
                          className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[4px] border transition-all ${
                            isCurrent
                              ? "border-champagne ring-1 ring-champagne"
                              : "border-ivory/20 opacity-55 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={p.src}
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
    </>
  );
}

function StylePlateCard({
  plate,
  aspectClass,
  onOpen,
}: {
  plate: HomeStylePlate;
  aspectClass: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Inspect ${plate.caption}`}
      className={`group/plate relative block w-full cursor-pointer overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal text-left shadow-[0_22px_50px_-20px_rgba(28,28,28,0.35)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766] hover:shadow-[0_32px_68px_-16px_rgba(28,28,28,0.55)] focus:outline-none ${aspectClass}`}
    >
      {/* Top Animated Champagne Accent Bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-700 ease-[var(--ease-lux)] group-hover/plate:scale-x-100"
      />

      {/* Image */}
      <img
        src={plate.src}
        alt={`${plate.caption} — ${plate.detail}`}
        width={plate.w}
        height={plate.h}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/plate:scale-106"
      />

      {/* Multi-Layer Cinematic Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/20 to-charcoal/25 opacity-85 transition-opacity duration-500 group-hover/plate:opacity-95"
      />

      {/* Diagonal Light Sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/plate:translate-x-full"
      />

      {/* Top Badge & Expand Orb */}
      <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-[5px] border border-ivory/20 bg-charcoal/80 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
          Plate {plate.code}
        </span>

        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/75 text-ivory backdrop-blur-md transition-all duration-500 group-hover/plate:scale-110 group-hover/plate:border-champagne group-hover/plate:bg-champagne group-hover/plate:text-charcoal"
        >
          <Expand className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Bottom Frosted Caption Plate */}
      <div className="absolute inset-x-4 bottom-4 z-20">
        <div className="rounded-[6px] border border-ivory/15 bg-charcoal/82 p-3.5 backdrop-blur-md transition-all duration-500 group-hover/plate:border-champagne/55 group-hover/plate:bg-charcoal/92 sm:p-4">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate font-serif text-lg font-bold text-ivory transition-colors duration-300 group-hover/plate:text-champagne sm:text-xl">
                {plate.caption}
              </h3>
              <p className="mt-0.5 line-clamp-1 font-sans text-[0.76rem] text-ivory/75">
                {plate.detail}
              </p>
            </div>
            <span className="hidden shrink-0 items-center gap-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne sm:inline-flex">
              View
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/plate:translate-x-0.5 group-hover/plate:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
