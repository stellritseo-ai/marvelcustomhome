import { useEffect, useId, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bath,
  Building2,
  CheckCircle2,
  Compass,
  Droplets,
  Expand,
  Hammer,
  Layers,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import b2Img from "@/assets/b2.png";
import bathroomJpg from "@/assets/bathroom.jpg";
import bathroomPng from "@/assets/bathroom.png";
import completeHomeConstruction from "@/assets/complete-home-construction.jpg";
import constructionImg from "@/assets/construction.jpg";
import designConsultation from "@/assets/Design consultation - Architectural.png";
import designConsultJpg from "@/assets/design-consult.jpg";
import doubleVanity from "@/assets/double-vanity.webp";
import interiorFinishOut from "@/assets/Interior Finish Out.jpg";
import processBuild from "@/assets/process-build.jpg";
import processCustomize from "@/assets/process-customize.jpg";
import processDesign from "@/assets/process-design.jpg";
import processBg from "@/assets/processbg.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export interface ServicePlate {
  code: string;
  caption: string;
  detail: string;
  src: string;
  w: number;
  h: number;
}

export interface BathFeatureHighlight {
  code: string;
  title: string;
  description: string;
}

export interface DedicatedServiceItem {
  id: string;
  num: string;
  eyebrowNum: string;
  title: string;
  subtitle: string;
  paragraphs: readonly [string, string];
  scopeLabel: string;
  pillars: readonly [string, string, string, string, string, string];
  theme: "ivory" | "dark" | "cream";
  plates: readonly [ServicePlate, ServicePlate, ServicePlate];
  bathFeatures?: readonly [
    BathFeatureHighlight,
    BathFeatureHighlight,
    BathFeatureHighlight,
    BathFeatureHighlight,
  ];
}

export const DEDICATED_SERVICES = [
  {
    id: "complete-home-construction",
    num: "01/",
    eyebrowNum: "01",
    title: "Complete Home Construction",
    subtitle: "Site Preparation, Permitting & Turnkey Custom Execution",
    paragraphs: [
      "Our complete home construction service covers everything from site preparation and permitting to final interior finishes. We partner with you to design a space that suits your lifestyle, then execute the build using high-quality materials and best-in-class practices. Our team manages all phases of construction with transparency and professionalism, ensuring that timelines and budgets are respected.",
      "Whether you're building a modern custom home, a traditional family residence, or an investment property, we deliver exceptional craftsmanship and structural integrity. With customizable layouts, energy-efficient solutions, and personalized finishes, your new home will be both functional and timeless.",
    ],
    scopeLabel: "Turnkey Construction Phases",
    pillars: [
      "Site Preparation & Municipal Permitting",
      "Engineered Foundation & Structural Framing",
      "Modern, Traditional & Investment Residences",
      "Customizable Architectural Layouts",
      "Energy-Efficient Envelope & MEP Systems",
      "Personalized Final Interior Finishes",
    ],
    theme: "ivory",
    plates: [
      {
        code: "01.1",
        caption: "Complete Custom Residence Construction",
        detail:
          "Full-lifecycle ground-up residential construction managed from grading and permitting through turnkey delivery.",
        src: completeHomeConstruction,
        w: 1280,
        h: 854,
      },
      {
        code: "01.2",
        caption: "Structural Integrity & Master Framing",
        detail:
          "Engineered slabs, precision timber and steel framing, and rigorous site supervision at every milestone.",
        src: constructionImg,
        w: 1280,
        h: 853,
      },
      {
        code: "01.3",
        caption: "Architectural Exterior & Envelope Craft",
        detail:
          "High-performance glazing, hand-laid masonry, and energy-efficient systems built to endure generations.",
        src: processBuild,
        w: 1024,
        h: 1024,
      },
    ],
  },
  {
    id: "design-consultation",
    num: "02/",
    eyebrowNum: "02",
    title: "Design Consultation – Architectural",
    subtitle: "Initial Sketches, 2D & 3D Visualizations & Construction Blueprints",
    paragraphs: [
      "Our architectural design consultation service offers expert guidance to help bring your vision to life. Whether you're starting from scratch or modifying an existing layout, we provide creative input and technical expertise to ensure a harmonious design that meets your functional needs and aesthetic preferences.",
      "From initial sketches to construction-ready blueprints, we ensure every aspect of the design aligns with structural requirements and local building regulations. We also provide 2D and 3D visualizations so you can clearly see your project before it begins.",
    ],
    scopeLabel: "Architectural Design Deliverables",
    pillars: [
      "Ground-Up Concept Sketches & Ideation",
      "Existing Floor Plan & Layout Modifications",
      "Construction-Ready Architectural Blueprints",
      "Structural Engineering Alignment",
      "Local Building Code & Zoning Compliance",
      "Interactive 2D & 3D Visualizations",
    ],
    theme: "dark",
    plates: [
      {
        code: "02.1",
        caption: "Architectural Blueprint & Spatial Planning",
        detail:
          "Construction-ready architectural drawings engineered around natural light, proportion, and daily flow.",
        src: designConsultation,
        w: 915,
        h: 752,
      },
      {
        code: "02.2",
        caption: "Collaborative Studio Design Consultation",
        detail:
          "One-on-one sessions with our architectural specialists to refine elevations, layouts, and structural details.",
        src: designConsultJpg,
        w: 1280,
        h: 853,
      },
      {
        code: "02.3",
        caption: "2D & 3D Architectural Visualization Suite",
        detail:
          "Photorealistic 3D massing and interior perspectives so you can experience every room before groundbreaking.",
        src: processDesign,
        w: 1024,
        h: 1024,
      },
    ],
  },
  {
    id: "interior-finish-out",
    num: "03/",
    eyebrowNum: "03",
    title: "Interior Finish Out",
    subtitle: "Residential & Commercial Shell Transformation Into Move-In-Ready Spaces",
    paragraphs: [
      "Our interior finish-out service takes raw spaces and transforms them into refined, move-in-ready environments. Whether residential or commercial, we handle the full scope of interior finishing, including insulation, drywall, painting, flooring, ceilings, and trim work. We tailor every element to match your design style and functional requirements.",
      "This service is ideal for property owners completing shell spaces or remodeling interiors. We coordinate all aspects of the project to ensure smooth execution and high-end results. The outcome is a beautifully finished space that’s both comfortable and visually impressive.",
    ],
    scopeLabel: "Full-Scope Interior Finishing Trades",
    pillars: [
      "Thermal & Acoustic Insulation Systems",
      "Precision Drywall & Level-5 Finishing",
      "Fine Architectural Painting & Wall Finishes",
      "Hardwood, Natural Stone & Tile Flooring",
      "Custom Coffered & Architectural Ceilings",
      "Bespoke Millwork, Casing & Trim Work",
    ],
    theme: "cream",
    plates: [
      {
        code: "03.1",
        caption: "Turnkey Interior Finish-Out Execution",
        detail:
          "Transforming raw residential and commercial shells into luminous, move-in-ready architectural interiors.",
        src: interiorFinishOut,
        w: 750,
        h: 1019,
      },
      {
        code: "03.2",
        caption: "Custom Cabinetry, Stonework & Ceiling Detail",
        detail:
          "Seamless coordination of flooring, custom millwork, lighting coves, and curated stone surfaces.",
        src: b2Img,
        w: 1188,
        h: 890,
      },
      {
        code: "03.3",
        caption: "Curated Materiality & Trim Craftsmanship",
        detail:
          "Tailored finishes selected in our Dallas studio to elevate both residential estates and commercial suites.",
        src: processCustomize,
        w: 1024,
        h: 1024,
      },
    ],
  },
  {
    id: "double-vanity",
    num: "04/",
    eyebrowNum: "04",
    title: "Double Vanity",
    subtitle: "Custom Dual-Sink Installations, Countertops, Cabinetry & Spa Bath Features",
    paragraphs: [
      "A double vanity adds both luxury and convenience to any shared bathroom. Our custom installations provide generous counter space, dual sinks, and efficient storage, making busy mornings more manageable. We offer a variety of cabinet styles, countertop materials, and hardware finishes to match your desired look.",
      "From classic elegance to contemporary minimalism, each vanity is built for durability and designed to elevate your space. We handle every aspect—from plumbing adjustments to precision installation—ensuring a flawless final result that enhances both form and function.",
    ],
    scopeLabel: "Custom Vanity & Bath Craftsmanship",
    pillars: [
      "Generous Counter Space & Dual Sinks",
      "Efficient Custom Cabinetry & Drawer Storage",
      "Natural Marble, Quartz & Stone Countertops",
      "Curated Brushed Brass & Designer Hardware",
      "Full Plumbing Adjustments & Rough-Ins",
      "Precision Leveling & Seamless Installation",
    ],
    theme: "ivory",
    plates: [
      {
        code: "04.1",
        caption: "Bespoke Double Vanity & Dual-Sink Suite",
        detail:
          "Symmetrical dual-sink layout with custom furniture-grade cabinetry, stone countertops, and warm lighting.",
        src: doubleVanity,
        w: 1344,
        h: 768,
      },
      {
        code: "04.2",
        caption: "Freestanding Soaking Tub & Glass Enclosure",
        detail:
          "Spa-inspired primary bath uniting frameless glass shower walls, freestanding tub, and tile accent walls.",
        src: bathroomJpg,
        w: 1280,
        h: 853,
      },
      {
        code: "04.3",
        caption: "Contemporary Minimalist Bath Sanctuary",
        detail:
          "Clean architectural lines, natural daylight glazing, and moisture-resilient stone and timber finishes.",
        src: bathroomPng,
        w: 275,
        h: 183,
      },
    ],
    bathFeatures: [
      {
        code: "01",
        title: "Glass Shower Walls",
        description: "Sleek and modern, providing openness and a clean aesthetic.",
      },
      {
        code: "02",
        title: "Dual Sink (Double Vanity)",
        description: "Ideal for shared spaces, offering convenience and symmetry.",
      },
      {
        code: "03",
        title: "Tile Accent Walls",
        description: "Adds texture, color, and elegance to the space.",
      },
      {
        code: "04",
        title: "Freestanding Tub",
        description: "A luxurious centerpiece perfect for soaking and relaxation.",
      },
    ],
  },
] as const satisfies readonly DedicatedServiceItem[];

const DISCIPLINE_ICONS = [Hammer, Ruler, Paintbrush, Bath] as const;
const BATH_FEATURE_ICONS = [Layers, Droplets, Sparkles, Bath] as const;

export function ServicesDedicatedShowcase() {
  const hash = useRouterState({
    select: (s) => s.location.hash.replace(/^#/, ""),
  });

  const [lightboxState, setLightboxState] = useState<{
    serviceIdx: number;
    plateIdx: number;
  } | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  // Smooth scroll when navigating to /services#interior-finish-out or /services#double-vanity
  useEffect(() => {
    if (!hash || hash === "complete-home-construction") return;
    const target = document.getElementById(hash);
    if (!target) return;
    const raf = requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, [hash]);

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
          prev === null ? null : { ...prev, plateIdx: (prev.plateIdx + 1) % 3 },
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxState((prev) =>
          prev === null ? null : { ...prev, plateIdx: (prev.plateIdx + 2) % 3 },
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState]);

  const activeService =
    lightboxState !== null ? DEDICATED_SERVICES[lightboxState.serviceIdx] : undefined;
  const activePlate =
    activeService && lightboxState !== null
      ? activeService.plates[lightboxState.plateIdx]
      : undefined;

  return (
    <>
      {DEDICATED_SERVICES.map((service, serviceIdx) => {
        const isDark = service.theme === "dark";
        const bgClass =
          service.theme === "ivory"
            ? "bg-ivory text-charcoal"
            : service.theme === "dark"
              ? "bg-charcoal text-ivory"
              : "bg-cream text-charcoal";

        const [plate1, plate2, plate3] = service.plates;
        const isReversed = serviceIdx % 2 === 1;
        const DisciplineIcon = DISCIPLINE_ICONS[serviceIdx % DISCIPLINE_ICONS.length] ?? Building2;

        return (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className={`relative scroll-mt-24 overflow-x-clip border-b py-[75px] sm:py-[95px] ${
              isDark ? "border-ivory/12" : "border-charcoal/10"
            } ${bgClass}`}
          >
            {/* Dark Atmospheric Backdrop for 02/ Design Consultation */}
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
                  className="h-full w-full object-cover object-center opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/92 via-charcoal/78 to-charcoal/95" />
              </div>
            )}

            {/* Subtle Ambient Champagne Glow */}
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
                  ROW 1: MONUMENTAL NUMBER, VERBATIM NARRATIVE & SCOPE MATRIX
                 ============================================================= */}
              <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
                {/* Narrative Column (7 Cols) */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <Reveal>
                    <div className="flex flex-wrap items-center gap-4">
                      <span
                        className={`inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-[6px] border px-3.5 font-serif text-2xl font-bold italic shadow-sm sm:h-16 sm:min-w-[4rem] sm:text-3xl ${
                          isDark
                            ? "border-champagne/50 bg-champagne/15 text-champagne"
                            : "border-[#9B8766]/45 bg-charcoal text-champagne"
                        }`}
                      >
                        {service.num}
                      </span>
                      <div className={isDark ? "" : "[&_p]:font-semibold [&_p]:text-[#6B593B]"}>
                        <Eyebrow n={service.eyebrowNum} light={isDark}>
                          Signature Service
                        </Eyebrow>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={70}>
                    <h2
                      id={`${service.id}-heading`}
                      className={`mt-5 font-serif text-[clamp(2.25rem,1.4rem+2.9vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] ${
                        isDark ? "text-ivory" : "text-charcoal"
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={`mt-2 font-serif text-lg italic sm:text-xl ${
                        isDark ? "text-champagne" : "text-[#6B593B]"
                      }`}
                    >
                      {service.subtitle}
                    </p>
                  </Reveal>

                  {/* Verbatim Paragraphs */}
                  <Reveal delay={130}>
                    <div
                      className={`relative mt-6 space-y-4 rounded-[6px] border p-6 backdrop-blur-sm sm:p-7 ${
                        isDark
                          ? "border-ivory/15 bg-ivory/[0.05]"
                          : "border-[#9B8766]/30 bg-ivory/95 shadow-[0_18px_40px_-20px_rgba(28,28,28,0.14)]"
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-y-5 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#9B8766] via-champagne to-transparent"
                      />
                      <p
                        className={`pl-3 font-sans text-[0.98rem] leading-[1.85] sm:pl-4 sm:text-[1.04rem] ${
                          isDark ? "text-ivory/90" : "text-charcoal/90"
                        }`}
                      >
                        {service.paragraphs[0]}
                      </p>
                      <p
                        className={`pl-3 font-sans text-[0.95rem] leading-[1.82] sm:pl-4 sm:text-[1rem] ${
                          isDark ? "text-ivory/80" : "text-charcoal/80"
                        }`}
                      >
                        {service.paragraphs[1]}
                      </p>
                    </div>
                  </Reveal>

                  {/* 6-Point Architectural Scope & Deliverables Grid */}
                  <Reveal delay={190}>
                    <div className="mt-7">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`inline-flex items-center gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
                            isDark ? "text-champagne" : "text-[#6B593B]"
                          }`}
                        >
                          <DisciplineIcon className="h-3.5 w-3.5 text-[#9B8766]" />
                          <span>{service.scopeLabel}</span>
                        </span>
                        <span
                          className={`font-sans text-[0.62rem] uppercase tracking-[0.18em] ${
                            isDark ? "text-ivory/55" : "text-charcoal/55"
                          }`}
                        >
                          Dallas–Fort Worth Standard
                        </span>
                      </div>

                      <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                        {service.pillars.map((pillar, pIdx) => (
                          <li
                            key={pillar}
                            className={`flex items-center gap-3 rounded-[6px] border px-4 py-3 transition-colors duration-300 ${
                              isDark
                                ? "border-ivory/12 bg-charcoal/80 text-ivory/90 hover:border-champagne/55"
                                : "border-[#9B8766]/25 bg-ivory text-charcoal/90 hover:border-[#9B8766]"
                            }`}
                          >
                            <span
                              className={`font-sans text-[0.6rem] font-bold tabular-nums tracking-[0.18em] ${
                                isDark ? "text-champagne" : "text-[#6B593B]"
                              }`}
                            >
                              0{pIdx + 1}
                            </span>
                            <span
                              aria-hidden="true"
                              className={`h-3 w-px ${isDark ? "bg-ivory/20" : "bg-charcoal/15"}`}
                            />
                            <span className="font-sans text-[0.84rem] font-medium leading-snug">
                              {pillar}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  {/* Action Bar */}
                  <Reveal delay={240}>
                    <div className="mt-8 flex flex-wrap items-center gap-3.5">
                      <Link
                        to="/contact"
                        className={`group/cta inline-flex min-h-12 items-center gap-3 rounded-[50px] border px-6 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 ${
                          isDark
                            ? "border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] text-ivory shadow-[0_14px_34px_-10px_rgba(0,0,0,0.65)]"
                            : "border-charcoal bg-charcoal text-ivory hover:border-[#9B8766] hover:bg-[#9B8766]"
                        }`}
                      >
                        <span>Request {service.title} Consultation</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setLightboxState({ serviceIdx, plateIdx: 0 })}
                        className={`inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-[50px] border px-5 py-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                          isDark
                            ? "border-ivory/20 bg-ivory/[0.05] text-champagne hover:border-champagne"
                            : "border-[#9B8766]/40 bg-ivory/85 text-[#6B593B] hover:border-charcoal hover:text-charcoal"
                        }`}
                      >
                        <Expand className="h-3.5 w-3.5" />
                        <span>Inspect Portfolio Plates</span>
                      </button>
                    </div>
                  </Reveal>
                </div>

                {/* Layered 3-Plate Visual Showcase Column (5 Cols) */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="grid gap-4">
                    {/* Primary Plate */}
                    <Reveal>
                      <ServicePlateCard
                        plate={plate1}
                        serviceNum={service.num}
                        aspectClass="aspect-[4/3] sm:h-[320px] lg:h-[340px]"
                        onOpen={() => setLightboxState({ serviceIdx, plateIdx: 0 })}
                      />
                    </Reveal>

                    {/* Secondary 2-Plate Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <Reveal delay={100}>
                        <ServicePlateCard
                          plate={plate2}
                          serviceNum={service.num}
                          aspectClass="aspect-[4/3] sm:h-[195px]"
                          compact
                          onOpen={() => setLightboxState({ serviceIdx, plateIdx: 1 })}
                        />
                      </Reveal>
                      <Reveal delay={160}>
                        <ServicePlateCard
                          plate={plate3}
                          serviceNum={service.num}
                          aspectClass="aspect-[4/3] sm:h-[195px]"
                          compact
                          onOpen={() => setLightboxState({ serviceIdx, plateIdx: 2 })}
                        />
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>

              {/* =============================================================
                  ROW 2 (ONLY FOR 04/ DOUBLE VANITY):
                  4 SIGNATURE LUXURY BATH & VANITY ELEMENTS SHOWCASE
                 ============================================================= */}
              {"bathFeatures" in service && service.bathFeatures && (
                <Reveal delay={220}>
                  <div className="mt-14 overflow-hidden rounded-[8px] border border-charcoal/15 bg-charcoal p-6 text-ivory shadow-[0_30px_68px_-20px_rgba(28,28,28,0.45)] sm:p-9">
                    {/* Top Champagne Hairline */}
                    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ivory/15 pb-6">
                      <div>
                        <span className="inline-flex items-center gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                          <Sparkles className="h-3.5 w-3.5 text-champagne" />
                          04 / Signature Bath &amp; Sanctuary Elements
                        </span>
                        <h3 className="mt-2 font-serif text-2xl font-bold text-ivory sm:text-3xl">
                          Architectural Elements That Elevate{" "}
                          <em className="italic text-champagne">Every Shared Bathroom.</em>
                        </h3>
                      </div>
                      <span className="rounded-[50px] border border-champagne/35 bg-ivory/[0.05] px-3.5 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                        Custom Installed by Marvel
                      </span>
                    </div>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {service.bathFeatures.map((feat, fIdx) => {
                        const FeatIcon =
                          BATH_FEATURE_ICONS[fIdx % BATH_FEATURE_ICONS.length] ?? Sparkles;
                        return (
                          <div
                            key={feat.title}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-[6px] border border-ivory/15 bg-ivory/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/65 hover:bg-ivory/[0.07]"
                          >
                            {/* Top Gold Accent */}
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-500 group-hover:scale-x-100"
                            />

                            <div>
                              <div className="flex items-center justify-between">
                                <span className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.22em] text-champagne">
                                  Feature {feat.code}
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-champagne/35 bg-charcoal text-champagne transition-colors group-hover:bg-champagne group-hover:text-charcoal">
                                  <FeatIcon className="h-4 w-4" />
                                </span>
                              </div>

                              <h4 className="mt-4 font-serif text-[1.3rem] font-bold leading-snug text-ivory group-hover:text-champagne">
                                {feat.title}
                              </h4>

                              <p className="mt-2.5 font-sans text-[0.88rem] leading-[1.7] text-ivory/80">
                                {feat.description}
                              </p>
                            </div>

                            <div className="mt-5 flex items-center gap-1.5 border-t border-ivory/10 pt-3 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-champagne/85">
                              <ShieldCheck className="h-3.5 w-3.5 text-champagne" />
                              <span>Precision Installed</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

      {/* =================================================================
          FULLSCREEN NATIVE <dialog> SERVICE PORTFOLIO LIGHTBOX
         ================================================================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        {...({ closedby: "any" } as Record<string, string>)}
        onClose={() => setLightboxState(null)}
        className="m-auto max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-6xl overflow-hidden rounded-[6px] border border-ivory/20 bg-charcoal p-0 text-ivory shadow-[0_40px_100px_-20px_rgba(0,0,0,0.92)] backdrop:bg-charcoal/92 backdrop:backdrop-blur-xl sm:w-[calc(100vw-3rem)] open:flex open:flex-col"
      >
        {activeService && activePlate && lightboxState !== null && (
          <>
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-ivory/15 bg-charcoal/95 px-5 py-3.5 text-ivory">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-[4px] border border-champagne/40 bg-champagne/15 px-2.5 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                  {activeService.num} {activeService.title} · Plate {activePlate.code}
                </span>
              </div>

              <form method="dialog">
                <button
                  type="submit"
                  autoFocus
                  aria-label="Close service preview"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Split Image & Service Dossier */}
            <div className="grid flex-1 overflow-y-auto lg:grid-cols-12">
              {/* Left Image Stage */}
              <div className="relative flex min-h-[280px] items-center justify-center bg-graphite p-4 sm:min-h-[460px] lg:col-span-8">
                <img
                  src={activePlate.src}
                  alt={`${activeService.title} — ${activePlate.caption}`}
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
                      plateIdx: (lightboxState.plateIdx + 2) % 3,
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
                      plateIdx: (lightboxState.plateIdx + 1) % 3,
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
                    {activeService.num} {activeService.title}
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
                      {activeService.scopeLabel}
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {activeService.pillars.map((pillar) => (
                        <li
                          key={pillar}
                          className="flex items-center gap-2 rounded-[4px] border border-ivory/12 bg-ivory/[0.04] px-2.5 py-1.5 font-sans text-xs text-ivory/90"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-champagne" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3-Plate Thumbnail Strip */}
                <div className="mt-6 border-t border-ivory/12 pt-4">
                  <p className="mb-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ivory/55">
                    {activeService.title} Plates (3)
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {activeService.plates.map((p, pIdx) => {
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

function ServicePlateCard({
  plate,
  serviceNum,
  aspectClass,
  compact = false,
  onOpen,
}: {
  plate: ServicePlate;
  serviceNum: string;
  aspectClass: string;
  compact?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Inspect ${plate.caption}`}
      className={`group/plate relative block w-full cursor-pointer overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal text-left shadow-[0_22px_50px_-20px_rgba(28,28,28,0.35)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-[#9B8766] hover:shadow-[0_32px_68px_-16px_rgba(28,28,28,0.55)] focus:outline-none ${aspectClass}`}
    >
      {/* Top Animated Champagne Accent Bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-ivory transition-transform duration-700 ease-[var(--ease-lux)] group-hover/plate:scale-x-100"
      />

      <img
        src={plate.src}
        alt={`${plate.caption} — ${plate.detail}`}
        width={plate.w}
        height={plate.h}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/plate:scale-105"
      />

      {/* Gradient Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-charcoal/20 opacity-85 transition-opacity duration-500 group-hover/plate:opacity-95"
      />

      {/* Diagonal Light Sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/plate:translate-x-full"
      />

      {/* Top Badge & Expand Orb */}
      <div className="absolute inset-x-3.5 top-3.5 z-20 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-[5px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
          <Compass className="h-2.5 w-2.5 text-champagne" />
          <span>
            {serviceNum} · {plate.code}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/75 text-ivory backdrop-blur-md transition-all duration-500 group-hover/plate:scale-110 group-hover/plate:border-champagne group-hover/plate:bg-champagne group-hover/plate:text-charcoal"
        >
          <Expand className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Bottom Frosted Caption Plate */}
      <div className="absolute inset-x-3.5 bottom-3.5 z-20">
        <div
          className={`rounded-[6px] border border-ivory/15 bg-charcoal/82 backdrop-blur-md transition-all duration-500 group-hover/plate:border-champagne/55 group-hover/plate:bg-charcoal/92 ${
            compact ? "p-2.5" : "p-3.5 sm:p-4"
          }`}
        >
          <h3
            className={`truncate font-serif font-bold text-ivory transition-colors duration-300 group-hover/plate:text-champagne ${
              compact ? "text-sm sm:text-base" : "text-lg sm:text-xl"
            }`}
          >
            {plate.caption}
          </h3>
          {!compact && (
            <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-ivory/75">
              {plate.detail}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
