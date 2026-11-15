import { useEffect, useId, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Expand,
  Hammer,
  Home,
  Layers,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import about2Img from "@/assets/about2.png";
import b2Img from "@/assets/b2.png";
import interiorFinishOutJpg from "@/assets/Interior Finish Out.jpg";
import kitchenJpg from "@/assets/kitchen.jpg";
import processCustomizeJpg from "@/assets/process-customize.jpg";
import processBg from "@/assets/processbg.jpg";
import { BUSINESS } from "@/lib/site";
import { CtaSection } from "./CtaSection";
import { Eyebrow } from "./Eyebrow";
import { Parallax, Reveal } from "./Reveal";

const HERO_TELEMETRY = [
  {
    index: "01",
    label: "Core Interior Trades",
    value: "Insulation, Drywall, Paint, Flooring, Ceilings & Trim",
  },
  {
    index: "02",
    label: "Sector Expertise",
    value: "Residential Estates & Commercial Spaces",
  },
  {
    index: "03",
    label: "Ideal Commission",
    value: "Shell Space Completion & Interior Remodeling",
  },
  {
    index: "04",
    label: "Project Outcome",
    value: "Refined, Move-In-Ready Environments",
  },
] as const;

const APPLICATION_PILLARS = [
  {
    code: "01",
    icon: Home,
    title: "Residential Custom Estates",
    summary:
      "Tailored living rooms, culinary kitchens, private studies, and bedrooms finished with museum-grade millwork and natural stone.",
  },
  {
    code: "02",
    icon: Building2,
    title: "Commercial & Executive Suites",
    summary:
      "High-impact office buildings, hospitality lobbies, and professional tenant build-outs engineered for durability and prestige.",
  },
  {
    code: "03",
    icon: Layers,
    title: "Raw Shell Space Completion",
    summary:
      "Taking unfinished structural shells from exposed framing and concrete slabs to fully conditioned, move-in-ready interiors.",
  },
  {
    code: "04",
    icon: Wrench,
    title: "Full-Scope Interior Remodeling",
    summary:
      "Reimagining existing residences with upgraded acoustic insulation, smooth drywall, wide-plank flooring, and custom trim work.",
  },
] as const;

const INTERIOR_TRADES = [
  {
    num: "01",
    trade: "Thermal & Acoustic Control",
    icon: ShieldCheck,
    title: "Insulation",
    description:
      "High-performance thermal and sound-attenuating insulation installed across exterior envelopes, interior partition walls, and floor assemblies for whisper-quiet comfort and energy efficiency.",
    spec: "Spray-Foam, Rigid & Acoustic Batt Systems",
  },
  {
    num: "02",
    trade: "Architectural Surfaces",
    icon: Layers,
    title: "Drywall",
    description:
      "Precision board hanging, laser-straight corner bead alignment, moisture-resistant substrates, and smooth Level-4/Level-5 finishes or custom hand-troweled textures.",
    spec: "Museum-Smooth & Artisanal Wall Finishes",
  },
  {
    num: "03",
    trade: "Color & Atmospheric Depth",
    icon: Paintbrush,
    title: "Painting",
    description:
      "Multi-stage surface preparation, fine architectural wall coatings, zero-VOC designer palettes, and furniture-grade catalyzed enamel spraying for cabinetry and doors.",
    spec: "Designer Palettes & Enamel Millwork Coatings",
  },
  {
    num: "04",
    trade: "Foundation Underfoot",
    icon: Ruler,
    title: "Flooring",
    description:
      "Expert subfloor leveling and precision installation of wide-plank European white oak, herringbone hardwood, large-format porcelain slabs, and natural travertine or marble.",
    spec: "Hardwood, Natural Stone & Porcelain Slabs",
  },
  {
    num: "05",
    trade: "Overhead Volume & Light",
    icon: Sparkles,
    title: "Ceilings",
    description:
      "Custom coffered, tray, and vaulted ceiling treatments, hand-wrapped timber beams, recessed architectural lighting coves, and acoustic commercial ceiling grids.",
    spec: "Coffered Volumes, Timber Beams & Light Coves",
  },
  {
    num: "06",
    trade: "Bespoke Architectural Detail",
    icon: Hammer,
    title: "Trim Work",
    description:
      "Mitered multi-piece crown molding, tall architectural baseboards, solid-core door casings, wainscoting, custom wall paneling, and built-in cabinetry.",
    spec: "Crown Molding, Casing, Wainscoting & Built-Ins",
  },
] as const;

interface FinishPlate {
  code: string;
  title: string;
  category: string;
  detail: string;
  src: string;
  w: number;
  h: number;
}

const FINISH_PLATES: readonly [FinishPlate, FinishPlate, FinishPlate, FinishPlate] = [
  {
    code: "03.1",
    title: "Move-In-Ready Custom Interior Finish-Out",
    category: "Flooring, Ceilings & Trim",
    detail:
      "Seamless integration of wide-plank flooring, recessed ceiling illumination, smooth drywall, and tailored architectural trim.",
    src: interiorFinishOutJpg,
    w: 750,
    h: 1019,
  },
  {
    code: "03.2",
    title: "Double-Island Culinary & Coffered Ceiling Suite",
    category: "Residential Finish-Out",
    detail:
      "Custom cabinetry, waterfall marble islands, warm brass pendant lighting, and precision ceiling millwork.",
    src: b2Img,
    w: 1188,
    h: 890,
  },
  {
    code: "03.3",
    title: "Bookmatched Stone & Dark Timber Millwork Atelier",
    category: "Bespoke Wall & Ceiling Craft",
    detail:
      "Full-height veined stone feature wall paired with custom dark-stained wood cabinetry and architectural linear lighting.",
    src: about2Img,
    w: 736,
    h: 736,
  },
  {
    code: "03.4",
    title: "Tailored Kitchen Cabinetry & Stone Finish-Out",
    category: "Remodeling & Shell Completion",
    detail:
      "Precision installation of custom range hoods, stone countertops, under-cabinet lighting, and hardwood floors.",
    src: kitchenJpg,
    w: 1280,
    h: 853,
  },
];

const COORDINATION_CHECKLIST = [
  "Raw Shell Space Assessment & Laser Field Measuring",
  "Thermal & Acoustic Insulation Installation",
  "Precision Drywall Hanging, Taping & Smooth Skimming",
  "Fine Architectural Painting, Staining & Enamel Work",
  "Hardwood, Natural Stone & Large-Format Tile Flooring",
  "Coffered, Tray & Timber-Beam Ceiling Construction",
  "Custom Crown Molding, Baseboards, Casings & Trim Work",
  "Final White-Glove Punch List & Move-In-Ready Walkthrough",
] as const;

const FINISH_FAQS = [
  {
    q: "Do you handle both residential and commercial interior finish-outs?",
    a: "Yes. Whether you are finishing a custom family residence, remodeling an existing home, or completing a commercial office, retail, or hospitality shell space across Dallas–Fort Worth, our team manages the entire interior scope.",
  },
  {
    q: "What specific trades are included in your Interior Finish Out service?",
    a: "We handle the full scope of interior finishing—including thermal and acoustic insulation, drywall hanging and finishing, interior painting and specialty coatings, hardwood/stone/tile flooring, custom ceilings, and bespoke trim work and millwork.",
  },
  {
    q: "Can you take an unfinished white-box or raw shell space to move-in ready?",
    a: "Absolutely. This service is specifically designed for property owners completing raw shell spaces or remodeling interiors. We coordinate every trade sequentially so you have a single point of accountability from bare studs to final walkthrough.",
  },
  {
    q: "Can you customize the finishes to match a specific architectural style?",
    a: "Every material, paint sheen, floor plank, ceiling profile, and trim detail is tailored in our Dallas studio to match your aesthetic—whether Traditional elegance, warm Farm House charm, or clean-lined Modern Design.",
  },
] as const;

const SISTER_SERVICES = [
  {
    num: "01/",
    hash: "complete-home-construction",
    title: "Complete Home Construction",
    desc: "Turnkey ground-up building from site preparation and permitting to final interior finishes.",
  },
  {
    num: "02/",
    hash: "design-consultation",
    title: "Design Consultation – Architectural",
    desc: "Initial sketches, 2D & 3D visualizations, and construction-ready blueprints aligned with local codes.",
  },
  {
    num: "04/",
    hash: "double-vanity",
    title: "Double Vanity",
    desc: "Custom dual-sink bath installations, stone countertops, glass shower walls, and freestanding tubs.",
  },
] as const;

export function InteriorFinishOutPage() {
  const [activePlateIdx, setActivePlateIdx] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activePlateIdx !== null) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activePlateIdx]);

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
    if (activePlateIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActivePlateIdx((prev) => (prev === null ? null : (prev + 1) % FINISH_PLATES.length));
      }
      if (e.key === "ArrowLeft") {
        setActivePlateIdx((prev) =>
          prev === null ? null : (prev + FINISH_PLATES.length - 1) % FINISH_PLATES.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePlateIdx]);

  const activePlate = activePlateIdx !== null ? FINISH_PLATES[activePlateIdx] : undefined;

  return (
    <>
      {/* =================================================================
          1. FULL-BLEED INTERIOR FINISH OUT HERO BANNER
         ================================================================= */}
      <section
        aria-labelledby="interior-finish-hero-heading"
        className="relative flex min-h-[74svh] flex-col justify-between overflow-hidden bg-charcoal pt-28 pb-10 text-ivory sm:min-h-[80svh] sm:pt-36 sm:pb-14 lg:pt-40"
      >
        {/* Background Image with Slow Ken Burns Drift */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={b2Img}
            alt="Refined custom interior finish-out with marble islands, brass lighting, flooring, and ceiling millwork"
            width={1188}
            height={890}
            fetchPriority="high"
            decoding="sync"
            className="hero-slide-img hero-ken-a is-active h-full w-full object-cover object-center"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/65" />
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
          {/* Breadcrumb Pill: Home > Services > Interior Finish Out */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="inline-flex flex-wrap items-center gap-2 rounded-[50px] border border-ivory/20 bg-charcoal/75 px-4 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory/75 backdrop-blur-md">
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
                <li>
                  <Link
                    to="/services"
                    hash="complete-home-construction"
                    className="transition-colors duration-300 hover:text-champagne focus-visible:outline-none"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-champagne/60">
                  <ChevronRight className="h-3 w-3" />
                </li>
                <li className="text-champagne">
                  <span aria-current="page">Interior Finish Out</span>
                </li>
              </ol>
            </nav>
          </Reveal>

          {/* Eyebrow & Monumental Display Title */}
          <div className="max-w-4xl">
            <Reveal delay={60}>
              <Eyebrow light>03 / Signature Service · Residential &amp; Commercial</Eyebrow>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="interior-finish-hero-heading"
                className="mt-4 font-serif tracking-[-0.02em] text-balance text-ivory"
              >
                <span className="block text-[clamp(1.35rem,1rem+1.1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                  Interior Finish Out
                </span>
                <em className="mt-1 block text-[clamp(2.35rem,1.45rem+3.4vw,4.65rem)] font-bold italic leading-[1.04] text-champagne">
                  Transforming Raw Spaces Into Refined Environments.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl font-sans text-[0.98rem] leading-[1.8] text-ivory/85 sm:text-[1.0625rem]">
                Whether completing a new residential or commercial shell space or remodeling an
                existing interior, we execute the full scope of{" "}
                <span className="font-semibold text-champagne">
                  insulation, drywall, painting, flooring, ceilings, and trim work
                </span>{" "}
                with turnkey precision.
              </p>
            </Reveal>

            {/* Hero Action Buttons */}
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group/btn relative inline-flex min-h-12 items-center gap-3.5 overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-7 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_18px_42px_-10px_rgba(0,0,0,0.65)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-ivory"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                  />
                  <span className="relative z-10">Request Finish-Out Consultation</span>
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>

                <a
                  href="#interior-trades"
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-[50px] border border-ivory/30 bg-charcoal/70 px-6 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-md transition-all duration-300 hover:border-champagne hover:text-champagne"
                >
                  <span>Explore All 06 Interior Trades</span>
                  <ArrowDownRight className="h-3.5 w-3.5 text-champagne" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom 4-Column Architectural Telemetry Strip */}
        <div className="container-lux relative z-10">
          <div className="grid grid-cols-1 gap-4 rounded-[6px] border border-ivory/15 bg-charcoal/80 p-4 backdrop-blur-md sm:grid-cols-2 sm:p-5 lg:grid-cols-4 lg:gap-6">
            {HERO_TELEMETRY.map((item) => (
              <div
                key={item.index}
                className="border-l border-champagne/35 pl-3.5 transition-colors duration-300 hover:border-champagne"
              >
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  {item.index} · {item.label}
                </p>
                <p className="mt-1 font-serif text-[0.98rem] font-medium text-ivory sm:text-[1.04rem]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          2. LAYERED INTERIOR FINISH COLLAGE & VERBATIM CORE NARRATIVE
         ================================================================= */}
      <section
        aria-labelledby="interior-finish-overview-heading"
        className="relative overflow-x-clip bg-ivory py-[75px] text-charcoal sm:py-[95px]"
      >
        <div className="container-lux">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            {/* Left Column: Layered Interior Finish-Out Visual Composition */}
            <div className="relative grid grid-cols-12 items-start pb-8 sm:pb-10 lg:col-span-6">
              {/* Offset Warm Champagne Architectural Frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none col-start-1 col-end-10 row-start-1 aspect-[4/5] w-full -translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4"
              >
                <div className="animate-welcome-frame h-full w-full rounded-[6px] border border-[#9B8766]/45 bg-cream/65" />
              </div>

              {/* Primary Showcase Photograph (Interior Finish Out.jpg) */}
              <div className="relative z-10 col-start-1 col-end-10 row-start-1">
                <Reveal>
                  <div className="group/main relative overflow-hidden rounded-[6px] bg-cream shadow-[0_30px_60px_-20px_oklch(0.18_0.006_120/0.28)] ring-1 ring-charcoal/12">
                    <Parallax
                      src={interiorFinishOutJpg}
                      alt="Custom interior finish-out with refined lighting, flooring, ceilings, and millwork"
                      width={750}
                      height={1019}
                      className="aspect-[4/5] w-full transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/main:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-charcoal/25 via-transparent to-ivory/10 opacity-75 transition-opacity duration-700 group-hover/main:opacity-40"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Floating Obsidian Architectural Tag (Top-Right Straddle) */}
              <div className="relative z-20 col-start-4 col-end-13 row-start-1 mt-4 mr-1 self-start justify-self-end sm:mt-6 sm:mr-3">
                <Reveal delay={160}>
                  <div className="animate-welcome-badge inline-flex items-center gap-3 rounded-[6px] border border-ivory/15 bg-charcoal/92 px-4 py-2.5 text-ivory shadow-[0_18px_40px_-12px_oklch(0.12_0.005_120/0.5)] backdrop-blur-md sm:px-4.5 sm:py-3">
                    <span aria-hidden="true" className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-champagne" />
                    </span>
                    <div>
                      <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-champagne">
                        03 / Shell to Turnkey
                      </p>
                      <p className="mt-0.5 font-serif text-[0.9375rem] italic leading-tight text-ivory">
                        Residential &amp; Commercial
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Secondary Overlapping Showcase Plate (process-customize.jpg — Bottom-Right) */}
              <div className="relative z-20 col-start-6 col-end-13 row-start-1 translate-y-6 self-end sm:col-start-6 sm:translate-y-8">
                <Reveal delay={240}>
                  <div className="animate-welcome-card group/sub rounded-[6px] bg-ivory p-2 shadow-[0_28px_60px_-18px_oklch(0.16_0.006_120/0.36)] ring-1 ring-charcoal/10 sm:p-2.5">
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[4px] bg-cream">
                      <img
                        src={processCustomizeJpg}
                        alt="Curated flooring, stone, and architectural trim material palette"
                        width={1024}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/25 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/sub:translate-x-full"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Verbatim Narrative & 4 Application Cards */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-[6px] border border-[#9B8766]/45 bg-charcoal px-3.5 font-serif text-2xl font-bold italic text-champagne shadow-sm">
                    03/
                  </span>
                  <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                    <Eyebrow n="01">Interior Finish Out</Eyebrow>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h2
                  id="interior-finish-overview-heading"
                  className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal"
                >
                  <span className="block text-[clamp(1.4rem,1.05rem+1vw,2.15rem)] font-normal leading-[1.2] text-charcoal/80">
                    Interior Finish Out
                  </span>
                  <em className="mt-0.5 block text-[clamp(2.25rem,1.3rem+2.8vw,3.85rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                    Move-In-Ready Craftsmanship.
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-6 space-y-4">
                  <p className="max-w-[60ch] font-sans text-[1rem] leading-[1.85] text-pretty text-charcoal/90 sm:text-[1.0625rem]">
                    Our interior finish-out service takes raw spaces and transforms them into
                    refined, move-in-ready environments. Whether residential or commercial, we
                    handle the full scope of interior finishing, including insulation, drywall,
                    painting, flooring, ceilings, and trim work. We tailor every element to match
                    your design style and functional requirements.
                  </p>

                  <p className="max-w-[60ch] border-l-2 border-[#9B8766] pl-4 font-sans text-[0.96rem] leading-[1.82] text-pretty text-charcoal/82">
                    This service is ideal for property owners completing shell spaces or remodeling
                    interiors. We coordinate all aspects of the project to ensure smooth execution
                    and high-end results. The outcome is a beautifully finished space that’s both
                    comfortable and visually impressive.
                  </p>
                </div>
              </Reveal>

              {/* 4 Application Pillars */}
              <Reveal delay={200}>
                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {APPLICATION_PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.code}
                        className="group rounded-[6px] border border-[#9B8766]/30 bg-cream/55 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-cream"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#6B593B]">
                            Scope {pillar.code}
                          </span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-[5px] border border-[#9B8766]/35 bg-ivory text-[#6B593B] transition-colors group-hover:bg-charcoal group-hover:text-champagne">
                            <Icon className="h-4 w-4" />
                          </span>
                        </div>
                        <h3 className="mt-2.5 font-serif text-[1.18rem] font-bold text-charcoal">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 font-sans text-[0.82rem] leading-relaxed text-charcoal/75">
                          {pillar.summary}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. DARK-OBSIDIAN 6-TRADE INTERIOR FINISHING MATRIX
         ================================================================= */}
      <section
        id="interior-trades"
        aria-labelledby="interior-trades-heading"
        className="relative scroll-mt-24 overflow-hidden bg-charcoal py-[75px] text-ivory sm:py-[95px]"
      >
        {/* Atmospheric Backdrop */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
          <img
            src={processBg}
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />
        </div>

        <div className="container-lux relative z-10">
          {/* Section Header */}
          <div className="grid gap-8 border-b border-ivory/15 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow n="02" light>
                Full-Scope Interior Finishing
              </Eyebrow>
              <h2
                id="interior-trades-heading"
                className="mt-5 font-serif tracking-[-0.02em] text-balance text-ivory"
              >
                <span className="block text-[clamp(1.35rem,1rem+1vw,2.05rem)] font-normal leading-[1.2] text-ivory/80">
                  Insulation, Drywall, Painting, Flooring, Ceilings &amp; Trim Work
                </span>
                <em className="mt-1 block text-[clamp(2.2rem,1.3rem+2.8vw,3.9rem)] font-bold italic leading-[1.06] text-champagne">
                  Six Master Trades. One Seamless Execution.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <p className="font-sans text-[0.96rem] leading-[1.8] text-ivory/80">
                Every trade is sequenced and supervised by our Dallas project management team to
                ensure crisp transitions, acoustic quietness, and lasting architectural beauty.
              </p>
            </Reveal>
          </div>

          {/* 6-Trade Cards Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INTERIOR_TRADES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.num} delay={idx * 70}>
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-ivory/15 bg-charcoal/85 p-6 backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-champagne/65 sm:p-7">
                    {/* Top Gold Accent Bar */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-500 group-hover:scale-x-100"
                    />

                    {/* Watermark Number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 -bottom-5 font-serif text-[5.5rem] font-bold italic leading-none text-champagne/[0.06] select-none"
                    >
                      {item.num}
                    </span>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/35 bg-champagne/10 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                          <span>Trade {item.num}</span>
                          <span aria-hidden="true" className="h-2.5 w-px bg-champagne/40" />
                          <span>{item.trade}</span>
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-champagne/30 bg-ivory/[0.05] text-champagne transition-colors duration-300 group-hover:bg-champagne group-hover:text-charcoal">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-2xl font-bold text-ivory">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 font-sans text-[0.88rem] leading-[1.75] text-ivory/78">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 border-t border-ivory/12 pt-3.5">
                      <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-champagne/80">
                        Specification Standard
                      </p>
                      <p className="mt-0.5 font-serif text-[0.95rem] italic text-ivory">
                        {item.spec}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          4. TURNKEY COORDINATION CHECKLIST & 4-PLATE PORTFOLIO BENTO
         ================================================================= */}
      <section
        aria-labelledby="finish-portfolio-heading"
        className="relative overflow-x-clip bg-cream py-[75px] text-charcoal sm:py-[95px]"
      >
        <div className="container-lux">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left 5 Columns: Turnkey Execution Dossier Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                  <Eyebrow n="03">Shell-to-Turnkey Execution</Eyebrow>
                </div>
                <h2
                  id="finish-portfolio-heading"
                  className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal"
                >
                  <span className="block text-[clamp(1.35rem,1rem+0.9vw,1.95rem)] font-normal leading-[1.2] text-charcoal/80">
                    Smooth Execution &amp; High-End Results
                  </span>
                  <em className="mt-0.5 block text-[clamp(2.1rem,1.25rem+2.4vw,3.4rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                    Comfortable &amp; Visually Impressive.
                  </em>
                </h2>
                <p className="mt-4 font-sans text-[0.95rem] leading-[1.8] text-charcoal/80">
                  Completing a raw shell or remodeling an occupied property demands disciplined
                  scheduling. Our team coordinates every finish trade from rough-in inspection to
                  final polish.
                </p>
              </Reveal>

              <Reveal delay={120} className="mt-7">
                <div className="relative overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal p-6 text-ivory shadow-[0_26px_60px_-20px_rgba(28,28,28,0.45)] sm:p-7">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-ivory"
                  />

                  <div className="flex items-center justify-between border-b border-ivory/12 pb-4">
                    <div className="inline-flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-champagne" />
                      <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                        Interior Finish-Out Scope
                      </span>
                    </div>
                    <span className="font-sans text-[0.6rem] uppercase tracking-[0.18em] text-ivory/60">
                      08 Milestones
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {COORDINATION_CHECKLIST.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-[5px] border border-ivory/10 bg-ivory/[0.04] px-3.5 py-2.5 font-sans text-[0.84rem] text-ivory/90"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-champagne" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ivory/12 pt-5">
                    <Link
                      to="/contact"
                      className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-[6px] border border-champagne bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-4 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-ivory"
                    >
                      <span>Schedule Walkthrough</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <a
                      href={BUSINESS.phoneHref}
                      aria-label={`Call ${BUSINESS.phone}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-ivory/20 bg-ivory/[0.06] text-champagne transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Columns: 4-Plate Interactive Finish-Out Bento */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
              {FINISH_PLATES.map((plate, idx) => (
                <Reveal key={plate.code} delay={idx * 80}>
                  <button
                    type="button"
                    onClick={() => setActivePlateIdx(idx)}
                    aria-label={`Inspect ${plate.title}`}
                    className="group/plate relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal text-left shadow-[0_22px_50px_-20px_rgba(28,28,28,0.35)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-[#9B8766] focus:outline-none sm:h-[285px]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-700 group-hover/plate:scale-x-100"
                    />

                    <img
                      src={plate.src}
                      alt={`${plate.title} — ${plate.detail}`}
                      width={plate.w}
                      height={plate.h}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/plate:scale-105"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/25 to-charcoal/20 opacity-85 transition-opacity duration-500 group-hover/plate:opacity-95"
                    />

                    <div className="absolute inset-x-3.5 top-3.5 z-20 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-[5px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                        <span>Plate {plate.code}</span>
                        <span aria-hidden="true" className="h-2 w-px bg-champagne/40" />
                        <span>{plate.category}</span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/75 text-ivory backdrop-blur-md transition-all duration-500 group-hover/plate:scale-110 group-hover/plate:border-champagne group-hover/plate:bg-champagne group-hover/plate:text-charcoal"
                      >
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    <div className="absolute inset-x-3.5 bottom-3.5 z-20">
                      <div className="rounded-[6px] border border-ivory/15 bg-charcoal/82 p-3.5 backdrop-blur-md transition-all duration-500 group-hover/plate:border-champagne/55 group-hover/plate:bg-charcoal/92">
                        <h3 className="truncate font-serif text-lg font-bold text-ivory group-hover/plate:text-champagne">
                          {plate.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-ivory/75">
                          {plate.detail}
                        </p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          5. INTERIOR FINISH-OUT FAQ & SISTER SERVICES SWITCHER
         ================================================================= */}
      <section
        aria-labelledby="finish-faq-heading"
        className="relative overflow-x-clip bg-ivory py-[75px] text-charcoal sm:py-[95px]"
      >
        <div className="container-lux">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left 7 Columns: FAQ Accordion */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                  <Eyebrow n="04">Interior Finish-Out FAQ</Eyebrow>
                </div>
                <h2
                  id="finish-faq-heading"
                  className="mt-5 font-serif text-[clamp(1.85rem,1.25rem+1.8vw,2.85rem)] font-bold leading-[1.1] text-charcoal"
                >
                  Common Questions About{" "}
                  <em className="italic text-[#6B593B]">Shell Completion &amp; Remodeling.</em>
                </h2>
              </Reveal>

              <div className="mt-7 space-y-3.5">
                {FINISH_FAQS.map((faq, idx) => (
                  <Reveal key={faq.q} delay={idx * 65}>
                    <details
                      name="interior-finish-faq"
                      open={idx === 0}
                      className="group overflow-hidden rounded-[6px] border border-[#9B8766]/30 bg-cream/45 transition-all duration-300 open:border-[#9B8766] open:bg-ivory open:shadow-[0_18px_40px_-20px_rgba(28,28,28,0.16)]"
                    >
                      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-serif text-[1.12rem] font-bold text-charcoal transition-colors hover:text-[#6B593B] [&::-webkit-details-marker]:hidden">
                        <span className="flex items-baseline gap-3">
                          <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#9B8766]">
                            0{idx + 1}
                          </span>
                          <span>{faq.q}</span>
                        </span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#9B8766]/35 bg-cream text-[#6B593B] transition-transform duration-300 group-open:rotate-180 group-open:border-charcoal group-open:bg-charcoal group-open:text-champagne">
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </summary>
                      <div className="border-t border-charcoal/10 px-5 pt-3.5 pb-5 pl-12 font-sans text-[0.9rem] leading-[1.78] text-charcoal/80">
                        {faq.a}
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Explore Other Marvel Services */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                  05 / Integrated Disciplines
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-charcoal sm:text-3xl">
                  Explore Our Complementary <em className="italic text-[#6B593B]">Services.</em>
                </h3>
                <p className="mt-2.5 font-sans text-[0.9rem] leading-[1.75] text-charcoal/75">
                  Combine your interior finish-out with architectural design consultation, custom
                  double vanities, or turnkey construction.
                </p>
              </Reveal>

              <div className="mt-6 space-y-4">
                {SISTER_SERVICES.map((svc, idx) => (
                  <Reveal key={svc.hash} delay={idx * 80}>
                    <Link
                      to="/services"
                      hash={svc.hash}
                      className="group relative flex items-start justify-between gap-4 overflow-hidden rounded-[6px] border border-[#9B8766]/30 bg-cream/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-ivory hover:shadow-md"
                    >
                      <div>
                        <span className="font-serif text-lg font-bold italic text-[#6B593B]">
                          {svc.num}
                        </span>
                        <h4 className="mt-1 font-serif text-xl font-bold text-charcoal group-hover:text-[#6B593B]">
                          {svc.title}
                        </h4>
                        <p className="mt-1.5 font-sans text-xs leading-relaxed text-charcoal/75">
                          {svc.desc}
                        </p>
                      </div>
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#9B8766]/35 bg-ivory text-[#6B593B] transition-all duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-champagne">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          6. FULLSCREEN NATIVE <dialog> LIGHTBOX FOR FINISH-OUT PLATES
         ================================================================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        {...({ closedby: "any" } as Record<string, string>)}
        onClose={() => setActivePlateIdx(null)}
        className="m-auto max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-5xl overflow-hidden rounded-[6px] border border-ivory/20 bg-charcoal p-0 text-ivory shadow-[0_40px_100px_-20px_rgba(0,0,0,0.92)] backdrop:bg-charcoal/92 backdrop:backdrop-blur-xl sm:w-[calc(100vw-3rem)] open:flex open:flex-col"
      >
        {activePlate && activePlateIdx !== null && (
          <>
            <div className="flex items-center justify-between border-b border-ivory/15 bg-charcoal/95 px-5 py-3.5">
              <span className="rounded-[4px] border border-champagne/40 bg-champagne/15 px-2.5 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                03/ Interior Finish Out · Plate {activePlate.code}
              </span>
              <form method="dialog">
                <button
                  type="submit"
                  autoFocus
                  aria-label="Close preview"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="grid flex-1 overflow-y-auto lg:grid-cols-12">
              <div className="relative flex min-h-[280px] items-center justify-center bg-graphite p-4 sm:min-h-[440px] lg:col-span-8">
                <img
                  src={activePlate.src}
                  alt={activePlate.title}
                  width={activePlate.w}
                  height={activePlate.h}
                  className="max-h-[60vh] w-full object-contain"
                />
                <button
                  type="button"
                  aria-label="Previous plate"
                  onClick={() =>
                    setActivePlateIdx(
                      (activePlateIdx + FINISH_PLATES.length - 1) % FINISH_PLATES.length,
                    )
                  }
                  className="absolute left-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next plate"
                  onClick={() => setActivePlateIdx((activePlateIdx + 1) % FINISH_PLATES.length)}
                  className="absolute right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col justify-between border-t border-ivory/15 bg-charcoal/95 p-5 sm:p-6 lg:col-span-4 lg:border-t-0 lg:border-l">
                <div>
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    {activePlate.category}
                  </p>
                  <h3
                    id={dialogTitleId}
                    className="mt-1.5 font-serif text-2xl font-bold text-ivory"
                  >
                    {activePlate.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-sm leading-relaxed text-ivory/80">
                    {activePlate.detail}
                  </p>
                </div>

                <div className="mt-6 border-t border-ivory/12 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[6px] border border-champagne bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-4 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory"
                  >
                    <span>Request Finish-Out Consultation</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>

      <CtaSection />
    </>
  );
}
