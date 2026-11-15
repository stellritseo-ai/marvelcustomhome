import { useEffect, useId, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  Expand,
  FileCheck2,
  Layers,
  PencilRuler,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import b4Img from "@/assets/b4.png";
import designConsultationPng from "@/assets/Design consultation - Architectural.png";
import designConsultJpg from "@/assets/design-consult.jpg";
import processDesignJpg from "@/assets/process-design.jpg";
import processBg from "@/assets/processbg.jpg";
import { BUSINESS } from "@/lib/site";
import { CtaSection } from "./CtaSection";
import { Eyebrow } from "./Eyebrow";
import { Parallax, Reveal } from "./Reveal";

const HERO_TELEMETRY = [
  {
    index: "01",
    label: "Visualization Suite",
    value: "2D Floor Plans & 3D Renderings",
  },
  {
    index: "02",
    label: "Documentation",
    value: "Construction-Ready Blueprints",
  },
  {
    index: "03",
    label: "Regulatory Alignment",
    value: "Structural & Local Building Codes",
  },
  {
    index: "04",
    label: "Design Scope",
    value: "Blank-Canvas & Layout Modifications",
  },
] as const;

const CORE_PILLARS = [
  {
    code: "01",
    icon: PencilRuler,
    title: "Starting From Scratch",
    summary:
      "Bespoke blank-canvas spatial programming tailored to your family’s daily rituals, lot topography, and architectural taste.",
  },
  {
    code: "02",
    icon: Layers,
    title: "Modifying Existing Layouts",
    summary:
      "Reconfiguring floor plans, structural spans, and room adjacencies to unlock natural light, volume, and seamless flow.",
  },
  {
    code: "03",
    icon: Box,
    title: "2D & 3D Visualizations",
    summary:
      "Photorealistic 3D exterior elevations and interior perspectives so you can clearly experience your home before construction begins.",
  },
  {
    code: "04",
    icon: ShieldCheck,
    title: "Structural & Code Precision",
    summary:
      "Complete alignment with structural engineering requirements, DFW municipal building regulations, and HOA review standards.",
  },
] as const;

const DESIGN_PROTOCOL_STAGES = [
  {
    stage: "01",
    phase: "Phase I · Ideation",
    icon: Compass,
    title: "Vision & Lifestyle Programming",
    description:
      "We begin by listening to how you live, entertain, and gather—establishing room relationships, architectural character, and target investment parameters.",
    deliverable: "Architectural Program & Spatial Brief",
  },
  {
    stage: "02",
    phase: "Phase II · Site Study",
    icon: Sun,
    title: "Lot Orientation & Regulatory Review",
    description:
      "Our team evaluates your North Texas property for solar path, views, topography, drainage, zoning setbacks, and local building regulations.",
    deliverable: "Site Envelope & Setback Study",
  },
  {
    stage: "03",
    phase: "Phase III · Schematic",
    icon: PencilRuler,
    title: "Initial Sketches & 2D Floor Plans",
    description:
      "Translating concepts into scaled schematic sketches and 2D floor plans—whether originating from scratch or refining an existing layout.",
    deliverable: "Scaled 2D Schematic Floor Plans",
  },
  {
    stage: "04",
    phase: "Phase IV · Immersive",
    icon: Box,
    title: "3D Architectural Visualizations",
    description:
      "We generate high-resolution 3D visualizations of exterior facades, rooflines, and signature interior spaces so you can inspect every angle prior to build.",
    deliverable: "Photorealistic 3D Renderings & Massing",
  },
  {
    stage: "05",
    phase: "Phase V · Engineering",
    icon: Ruler,
    title: "Structural & Systems Integration",
    description:
      "Coordinating foundation design, structural framing spans, window loads, and mechanical corridors so aesthetic ambition meets structural integrity.",
    deliverable: "Engineered Structural Alignment",
  },
  {
    stage: "06",
    phase: "Phase VI · Blueprint",
    icon: FileCheck2,
    title: "Construction-Ready Blueprints",
    description:
      "Finalizing comprehensive, code-compliant construction drawings ready for municipal permitting and turnkey execution by our build team.",
    deliverable: "Permit & Construction Blueprint Set",
  },
] as const;

interface StudioPlate {
  code: string;
  title: string;
  category: string;
  detail: string;
  src: string;
  w: number;
  h: number;
}

const STUDIO_PLATES: readonly [StudioPlate, StudioPlate, StudioPlate, StudioPlate] = [
  {
    code: "02.1",
    title: "Construction-Ready Blueprint & Elevation Package",
    category: "Technical Documentation",
    detail:
      "Dimensioned floor plans, roof geometry, and structural framing callouts prepared for North Texas municipal permitting and precision site execution.",
    src: designConsultationPng,
    w: 915,
    h: 752,
  },
  {
    code: "02.2",
    title: "Collaborative Architectural Studio Session",
    category: "Creative & Technical Guidance",
    detail:
      "Working side-by-side in our Dallas studio to refine room proportions, window placements, and material transitions.",
    src: designConsultJpg,
    w: 1280,
    h: 853,
  },
  {
    code: "02.3",
    title: "Photorealistic 2D & 3D Visualization Study",
    category: "Pre-Construction Visualization",
    detail:
      "Interactive 3D architectural modeling that lets you evaluate ceiling volumes, natural daylighting, and exterior symmetry before groundbreaking.",
    src: processDesignJpg,
    w: 1024,
    h: 1024,
  },
  {
    code: "02.4",
    title: "Built Architecture Realized From Studio Plans",
    category: "Concept to Completion",
    detail:
      "Seamless translation from initial architectural sketches and 3D renderings into a timeless custom residence.",
    src: b4Img,
    w: 610,
    h: 762,
  },
];

const DOSSIER_CHECKLIST = [
  "Initial Concept Sketches & Massing Studies",
  "Dimensioned 2D Floor Plans (All Levels)",
  "Existing Layout Modification & Optimization",
  "Photorealistic 3D Exterior & Interior Visualizations",
  "4-Sided Exterior Architectural Elevations",
  "Roof Plan, Framing & Structural Alignment",
  "Reflected Ceiling & Architectural Lighting Layout",
  "Local Building Code & HOA Submission Package",
] as const;

const DESIGN_FAQS = [
  {
    q: "Can you help if I am starting from a blank canvas with only inspiration photos?",
    a: "Yes. Most of our commissions begin with a conversation around your lifestyle, lot, and visual inspiration. Our architectural design consultation team translates those ideas into initial sketches, scaled 2D floor plans, and photorealistic 3D visualizations step by step.",
  },
  {
    q: "Can you modify or re-engineer an existing floor plan I already own?",
    a: "Absolutely. Whether you want to expand a primary suite, open up the kitchen and living flow, adjust exterior elevations, or adapt an existing plan to fit a specific North Texas lot and local building codes, we provide both creative input and structural expertise.",
  },
  {
    q: "What is included in your 2D and 3D visualizations?",
    a: "Our 2D deliverables cover dimensioned floor plans, furniture and circulation layouts, and exterior elevations. Our 3D visualizations provide realistic perspective views of your home’s facade, roofline, and key interior volumes so you can see proportions, lighting, and materials clearly before construction begins.",
  },
  {
    q: "How do you ensure my design meets structural and local building regulations?",
    a: "Every drawing is developed in alignment with North Texas municipal zoning codes, setback rules, structural load requirements, and HOA architectural review guidelines across Dallas, Rockwall, Heath, Fate, Mansfield, Midlothian, McKinney, and Allen.",
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
    num: "03/",
    hash: "interior-finish-out",
    title: "Interior Finish Out",
    desc: "Transforming raw residential and commercial shells with insulation, drywall, flooring, ceilings, and trim.",
  },
  {
    num: "04/",
    hash: "double-vanity",
    title: "Double Vanity",
    desc: "Custom dual-sink bath installations, stone countertops, glass shower walls, and freestanding tubs.",
  },
] as const;

export function DesignConsultationPage() {
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
        setActivePlateIdx((prev) => (prev === null ? null : (prev + 1) % STUDIO_PLATES.length));
      }
      if (e.key === "ArrowLeft") {
        setActivePlateIdx((prev) =>
          prev === null ? null : (prev + STUDIO_PLATES.length - 1) % STUDIO_PLATES.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePlateIdx]);

  const activePlate = activePlateIdx !== null ? STUDIO_PLATES[activePlateIdx] : undefined;

  return (
    <>
      {/* =================================================================
          1. FULL-BLEED ARCHITECTURAL DESIGN CONSULTATION HERO BANNER
         ================================================================= */}
      <section
        aria-labelledby="design-consultation-hero-heading"
        className="relative flex min-h-[74svh] flex-col justify-between overflow-hidden bg-charcoal pt-28 pb-10 text-ivory sm:min-h-[80svh] sm:pt-36 sm:pb-14 lg:pt-40"
      >
        {/* Background Image with Slow Ken Burns Drift */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={designConsultJpg}
            alt="Architectural design consultation blueprints and 3D custom home planning at Marvel Custom Homes"
            width={1280}
            height={853}
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
          {/* Breadcrumb Pill: Home > Services > Architectural Design Consultation */}
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
                  <span aria-current="page">Architectural Design Consultation</span>
                </li>
              </ol>
            </nav>
          </Reveal>

          {/* Eyebrow & Monumental Display Title */}
          <div className="max-w-4xl">
            <Reveal delay={60}>
              <Eyebrow light>02 / Signature Service · Architectural Studio</Eyebrow>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="design-consultation-hero-heading"
                className="mt-4 font-serif tracking-[-0.02em] text-balance text-ivory"
              >
                <span className="block text-[clamp(1.35rem,1rem+1.1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                  Design Consultation – Architectural
                </span>
                <em className="mt-1 block text-[clamp(2.35rem,1.45rem+3.4vw,4.65rem)] font-bold italic leading-[1.04] text-champagne">
                  Where Vision Becomes Living Architecture.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl font-sans text-[0.98rem] leading-[1.8] text-ivory/85 sm:text-[1.0625rem]">
                From initial concept sketches and existing layout modifications to interactive{" "}
                <span className="font-semibold text-champagne">2D &amp; 3D visualizations</span> and{" "}
                <span className="font-semibold text-champagne">construction-ready blueprints</span>,
                our Dallas architectural team harmonizes creative expression with structural
                precision.
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
                  <span className="relative z-10">Schedule Design Consultation</span>
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>

                <a
                  href="#design-protocol"
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-[50px] border border-ivory/30 bg-charcoal/70 px-6 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-md transition-all duration-300 hover:border-champagne hover:text-champagne"
                >
                  <span>Explore 06-Stage Design Protocol</span>
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
          2. LAYERED ARCHITECTURAL COLLAGE & VERBATIM CORE NARRATIVE
         ================================================================= */}
      <section
        aria-labelledby="design-consultation-overview-heading"
        className="relative overflow-x-clip bg-ivory py-[75px] text-charcoal sm:py-[95px]"
      >
        <div className="container-lux">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            {/* Left Column: Layered Blueprint & Visualization Composition */}
            <div className="relative grid grid-cols-12 items-start pb-8 sm:pb-10 lg:col-span-6">
              {/* Offset Warm Champagne Architectural Frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none col-start-1 col-end-10 row-start-1 aspect-[4/5] w-full -translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4"
              >
                <div className="animate-welcome-frame h-full w-full rounded-[6px] border border-[#9B8766]/45 bg-cream/65" />
              </div>

              {/* Primary Showcase Photograph (Design consultation - Architectural.png) */}
              <div className="relative z-10 col-start-1 col-end-10 row-start-1">
                <Reveal>
                  <div className="group/main relative overflow-hidden rounded-[6px] bg-cream shadow-[0_30px_60px_-20px_oklch(0.18_0.006_120/0.28)] ring-1 ring-charcoal/12">
                    <Parallax
                      src={designConsultationPng}
                      alt="Architectural blueprints, elevation drawings, and custom residence floor plans"
                      width={915}
                      height={752}
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
                        02 / Architectural Atelier
                      </p>
                      <p className="mt-0.5 font-serif text-[0.9375rem] italic leading-tight text-ivory">
                        2D Blueprints &amp; 3D Visualization
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Secondary Overlapping Showcase Plate (process-design.jpg — Bottom-Right) */}
              <div className="relative z-20 col-start-6 col-end-13 row-start-1 translate-y-6 self-end sm:col-start-6 sm:translate-y-8">
                <Reveal delay={240}>
                  <div className="animate-welcome-card group/sub rounded-[6px] bg-ivory p-2 shadow-[0_28px_60px_-18px_oklch(0.16_0.006_120/0.36)] ring-1 ring-charcoal/10 sm:p-2.5">
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[4px] bg-cream">
                      <img
                        src={processDesignJpg}
                        alt="3D architectural model and material palette review"
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

            {/* Right Column: Verbatim Narrative & 4 Architectural Pillars */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-[6px] border border-[#9B8766]/45 bg-charcoal px-3.5 font-serif text-2xl font-bold italic text-champagne shadow-sm">
                    02/
                  </span>
                  <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                    <Eyebrow n="01">Architectural Design Consultation</Eyebrow>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h2
                  id="design-consultation-overview-heading"
                  className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal"
                >
                  <span className="block text-[clamp(1.4rem,1.05rem+1vw,2.15rem)] font-normal leading-[1.2] text-charcoal/80">
                    Design Consultation – Architectural
                  </span>
                  <em className="mt-0.5 block text-[clamp(2.25rem,1.3rem+2.8vw,3.85rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                    Creative Vision Meets Technical Precision.
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-6 space-y-4">
                  <p className="max-w-[60ch] font-sans text-[1rem] leading-[1.85] text-pretty text-charcoal/90 sm:text-[1.0625rem]">
                    Our architectural design consultation service offers expert guidance to help
                    bring your vision to life. Whether you&apos;re starting from scratch or
                    modifying an existing layout, we provide creative input and technical expertise
                    to ensure a harmonious design that meets your functional needs and aesthetic
                    preferences.
                  </p>

                  <p className="max-w-[60ch] border-l-2 border-[#9B8766] pl-4 font-sans text-[0.96rem] leading-[1.82] text-pretty text-charcoal/82">
                    From initial sketches to construction-ready blueprints, we ensure every aspect
                    of the design aligns with structural requirements and local building
                    regulations. We also provide 2D and 3D visualizations so you can clearly see
                    your project before it begins.
                  </p>
                </div>
              </Reveal>

              {/* 4 Core Architectural Pillars */}
              <Reveal delay={200}>
                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {CORE_PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.code}
                        className="group rounded-[6px] border border-[#9B8766]/30 bg-cream/55 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-cream"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#6B593B]">
                            Pillar {pillar.code}
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
          3. DARK-OBSIDIAN 6-STAGE ARCHITECTURAL DESIGN PROTOCOL
         ================================================================= */}
      <section
        id="design-protocol"
        aria-labelledby="design-protocol-heading"
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
                Architectural Methodology
              </Eyebrow>
              <h2
                id="design-protocol-heading"
                className="mt-5 font-serif tracking-[-0.02em] text-balance text-ivory"
              >
                <span className="block text-[clamp(1.35rem,1rem+1vw,2.05rem)] font-normal leading-[1.2] text-ivory/80">
                  From Initial Sketches to Construction-Ready Blueprints
                </span>
                <em className="mt-1 block text-[clamp(2.2rem,1.3rem+2.8vw,3.9rem)] font-bold italic leading-[1.06] text-champagne">
                  Our 06-Stage Architectural Design Protocol.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <p className="font-sans text-[0.96rem] leading-[1.8] text-ivory/80">
                Every great structure begins with rigorous architectural planning. We guide you
                through six structured stages so aesthetics, engineering, and municipal codes align
                effortlessly.
              </p>
            </Reveal>
          </div>

          {/* 6-Stage Architectural Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DESIGN_PROTOCOL_STAGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.stage} delay={idx * 70}>
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-ivory/15 bg-charcoal/85 p-6 backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-champagne/65 sm:p-7">
                    {/* Top Gold Accent Bar */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-500 group-hover:scale-x-100"
                    />

                    {/* Watermark Stage Number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 -bottom-5 font-serif text-[5.5rem] font-bold italic leading-none text-champagne/[0.06] select-none"
                    >
                      {item.stage}
                    </span>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/35 bg-champagne/10 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                          <span>Stage {item.stage}</span>
                          <span aria-hidden="true" className="h-2.5 w-px bg-champagne/40" />
                          <span>{item.phase}</span>
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
                        Primary Deliverable
                      </p>
                      <p className="mt-0.5 font-serif text-[0.95rem] italic text-ivory">
                        {item.deliverable}
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
          4. 2D/3D VISUALIZATION EXHIBITION & DELIVERABLES DOSSIER
         ================================================================= */}
      <section
        aria-labelledby="visualization-suite-heading"
        className="relative overflow-x-clip bg-cream py-[75px] text-charcoal sm:py-[95px]"
      >
        <div className="container-lux">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left 5 Columns: Architectural Dossier Checklist Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                  <Eyebrow n="03">2D &amp; 3D Visualization Suite</Eyebrow>
                </div>
                <h2
                  id="visualization-suite-heading"
                  className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal"
                >
                  <span className="block text-[clamp(1.35rem,1rem+0.9vw,1.95rem)] font-normal leading-[1.2] text-charcoal/80">
                    Clarity Before Groundbreaking
                  </span>
                  <em className="mt-0.5 block text-[clamp(2.1rem,1.25rem+2.4vw,3.4rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                    See Your Project Before It Begins.
                  </em>
                </h2>
                <p className="mt-4 font-sans text-[0.95rem] leading-[1.8] text-charcoal/80">
                  We pair technical construction blueprints with immersive 2D and 3D visualizations
                  so you can walk through sightlines, ceiling heights, and exterior elevations with
                  complete confidence.
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
                        Complete Architectural Dossier
                      </span>
                    </div>
                    <span className="font-sans text-[0.6rem] uppercase tracking-[0.18em] text-ivory/60">
                      08 Deliverables
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {DOSSIER_CHECKLIST.map((item) => (
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
                      <span>Start Your Blueprint</span>
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

            {/* Right 7 Columns: 4-Plate Interactive Studio Bento */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
              {STUDIO_PLATES.map((plate, idx) => (
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
          5. ARCHITECTURAL CONSULTATION FAQ & SISTER SERVICES SWITCHER
         ================================================================= */}
      <section
        aria-labelledby="design-faq-heading"
        className="relative overflow-x-clip bg-ivory py-[75px] text-charcoal sm:py-[95px]"
      >
        <div className="container-lux">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left 7 Columns: FAQ Accordion */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                  <Eyebrow n="04">Architectural Consultation FAQ</Eyebrow>
                </div>
                <h2
                  id="design-faq-heading"
                  className="mt-5 font-serif text-[clamp(1.85rem,1.25rem+1.8vw,2.85rem)] font-bold leading-[1.1] text-charcoal"
                >
                  Common Questions About{" "}
                  <em className="italic text-[#6B593B]">Architectural Design &amp; Blueprints.</em>
                </h2>
              </Reveal>

              <div className="mt-7 space-y-3.5">
                {DESIGN_FAQS.map((faq, idx) => (
                  <Reveal key={faq.q} delay={idx * 65}>
                    <details
                      name="design-consultation-faq"
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
                  Pair your architectural blueprints with our turnkey construction and interior
                  finishing teams.
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
          6. FULLSCREEN NATIVE <dialog> LIGHTBOX FOR STUDIO PLATES
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
                02/ Architectural Design · Plate {activePlate.code}
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
                      (activePlateIdx + STUDIO_PLATES.length - 1) % STUDIO_PLATES.length,
                    )
                  }
                  className="absolute left-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ivory/25 bg-charcoal/85 text-ivory hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next plate"
                  onClick={() => setActivePlateIdx((activePlateIdx + 1) % STUDIO_PLATES.length)}
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
                    <span>Book Architectural Consultation</span>
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
