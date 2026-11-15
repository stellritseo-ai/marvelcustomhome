import { useEffect, useId, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
} from "lucide-react";
import b1 from "@/assets/b1.jpg";
import completeHomeConstruction from "@/assets/complete-home-construction.jpg";
import designConsultation from "@/assets/Design consultation - Architectural.png";
import doubleVanity from "@/assets/double-vanity.webp";
import interiorFinishOut from "@/assets/Interior Finish Out.jpg";
import kitchen from "@/assets/kitchen.jpg";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export type BlogCategory =
  | "All"
  | "Home Construction"
  | "Design & Planning"
  | "Interior Design"
  | "Maintenance"
  | "Home Remodeling";

export interface BlogPost {
  id: string;
  category: Exclude<BlogCategory, "All">;
  date: string;
  isoDate: string;
  readTime: string;
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  w: number;
  h: number;
  pullQuote: string;
  sections: readonly {
    heading: string;
    body: string;
  }[];
  takeaways: readonly string[];
}

export const BLOG_CATEGORIES: readonly BlogCategory[] = [
  "All",
  "Home Construction",
  "Design & Planning",
  "Interior Design",
  "Maintenance",
  "Home Remodeling",
] as const;

export const BLOG_POSTS = [
  {
    id: "01",
    category: "Home Construction",
    date: "Apr 01, 2025",
    isoDate: "2025-04-01",
    readTime: "6 min read",
    title: "Top 10 Essentials in Custom Home Construction",
    excerpt:
      "Explore the fundamental elements that define a high-quality custom home and how Marvel Custom Homes brings your vision to life.",
    img: completeHomeConstruction,
    alt: "Turnkey ground-up custom home construction by Marvel Custom Homes",
    w: 1600,
    h: 1067,
    pullQuote:
      "A generational residence is defined long before finishes are installed—in soil engineering, structural framing, and daylight orientation.",
    sections: [
      {
        heading: "1. Site Analysis, Soil Engineering & Post-Tension Foundations",
        body: "Across Dallas–Fort Worth and North Texas, expansive clay soils demand rigorous geotechnical testing and engineered post-tension slab systems. Every Marvel Custom Homes build begins with site-specific pier and slab engineering so your structure remains rock-solid across decades.",
      },
      {
        heading: "2. Architectural Flow, Envelope Integrity & Mechanical Precision",
        body: "From structural steel and timber framing to high-performance thermal glazing, spray-foam insulation, and zoned HVAC design, the unseen bones of your home dictate daily comfort, acoustics, and energy efficiency.",
      },
      {
        heading: "3. Timeless Masonry, Bespoke Millwork & Transparent Supervision",
        body: "Pairing hand-dressed limestone and brick exteriors with custom interior cabinetry, layered lighting, and dedicated on-site project management ensures that your custom residence moves seamlessly from blueprint to white-glove handover.",
      },
    ],
    takeaways: [
      "Engineered Post-Tension Foundations for DFW Soils",
      "High-Performance Thermal Envelopes & Glazing",
      "Turnkey Architectural & On-Site Supervision",
    ],
  },
  {
    id: "02",
    category: "Design & Planning",
    date: "Apr 10, 2025",
    isoDate: "2025-04-10",
    readTime: "5 min read",
    title: "Choosing the Right Architectural Design Consultation",
    excerpt:
      "Designing your dream home begins with expert consultation. Here’s how we help clients achieve spaces that are beautiful, functional, and future-ready.",
    img: designConsultation,
    alt: "Collaborative architectural design consultation and 3D spatial planning",
    w: 1600,
    h: 1067,
    pullQuote:
      "When architect, builder, and homeowner collaborate at the same table from day one, spatial beauty and budget clarity reinforce one another.",
    sections: [
      {
        heading: "Translating Lifestyle Into Spatial Proportion",
        body: "An effective architectural design consultation goes beyond room counts. At our Dallas studio, we study how your family wakes, gathers, entertains, and works—shaping ceiling heights, sightlines, and indoor-outdoor transitions around your daily rhythm.",
      },
      {
        heading: "3D Visualization & Early Material Curation",
        body: "By integrating 3D modeling with structural engineering and material sampling early in the planning phase, you can experience natural light choreography, roofline proportions, and stone-and-wood palettes before ground is broken.",
      },
      {
        heading: "Future-Ready Planning & Value Engineering",
        body: "We design with generational adaptability in mind—incorporating private multi-generational suites, concealed smart-home infrastructure, and transparent cost alignment so there are zero surprises during construction.",
      },
    ],
    takeaways: [
      "Collaborative Architect + Builder Pre-Construction",
      "3D Spatial Modeling & Daylight Orientation",
      "Future-Ready Floor Plans & Transparent Budgeting",
    ],
  },
  {
    id: "03",
    category: "Interior Design",
    date: "Apr 15, 2025",
    isoDate: "2025-04-15",
    readTime: "5 min read",
    title: "Why Professional Interior Finish-Outs Matter",
    excerpt:
      "An expertly executed interior finish-out enhances comfort, resale value, and the overall feel of your space.",
    img: interiorFinishOut,
    alt: "Bespoke interior finish-out with coffered ceilings and custom millwork",
    w: 1600,
    h: 1067,
    pullQuote:
      "The difference between an ordinary build and a signature residence lives in zero-tolerance millwork, layered illumination, and tactile surfaces.",
    sections: [
      {
        heading: "Architectural Trim, Coffered Ceilings & Custom Joinery",
        body: "Interior finish-out is where raw volume becomes intimate architecture. Precision crown molding, ceiling coffers, rift-cut white oak wall paneling, and solid-core doors create an immediate sense of permanence and quiet luxury.",
      },
      {
        heading: "Curated Stone Slabs & Cohesive Material Palettes",
        body: "Whether finishing a custom residence or an executive commercial suite, our finish-out specialists coordinate bookmatched marble, hardwood flooring, and architectural hardware so every room flows harmoniously.",
      },
      {
        heading: "Lasting Comfort & Long-Term Equity",
        body: "Professional finish-out execution prevents settling cracks, uneven reveals, and premature wear—protecting both your everyday enjoyment and the long-term appraisal value of your property.",
      },
    ],
    takeaways: [
      "Coffered Ceilings & Artisan Trim Carpentry",
      "Cohesive Stone, Hardwood & Hardware Palettes",
      "Enhanced Acoustic Comfort & Property Value",
    ],
  },
  {
    id: "04",
    category: "Maintenance",
    date: "Mar 28, 2025",
    isoDate: "2025-03-28",
    readTime: "4 min read",
    title: "Seasonal Maintenance for Custom Homes",
    excerpt:
      "Keep your custom-built home in pristine condition year-round with our seasonal maintenance tips.",
    img: b1,
    alt: "Custom limestone estate exterior and manicured grounds at twilight",
    w: 1920,
    h: 1080,
    pullQuote:
      "Proactive seasonal care preserves fine natural stone, custom wood finishes, and foundation equilibrium through every North Texas weather cycle.",
    sections: [
      {
        heading: "Spring & Summer: Moisture Balance, Roofline & Drainage",
        body: "North Texas spring storms and summer heat require consistent perimeter foundation moisture management, gutter and downspout inspection, and UV protection for exterior cedar soffits and custom entry doors.",
      },
      {
        heading: "Autumn & Winter: HVAC Calibration & Natural Stone Care",
        body: "Before cooler fronts arrive, service zoned HVAC filtration, inspect window and door weather-stripping, and reseal honed limestone, travertine, and marble surfaces to guard against holiday entertaining spills.",
      },
      {
        heading: "Preserving Generational Craftsmanship",
        body: "A simple quarterly walkthrough of exterior masonry joints, landscape irrigation grading, and interior humidity levels keeps hardwood floors, custom cabinetry, and architectural finishes looking freshly commissioned for decades.",
      },
    ],
    takeaways: [
      "Consistent Perimeter Foundation Moisture Care",
      "Annual Sealing for Marble, Limestone & Travertine",
      "Seasonal HVAC, Roofline & Exterior Timber Checks",
    ],
  },
  {
    id: "05",
    category: "Home Remodeling",
    date: "Apr 05, 2025",
    isoDate: "2025-04-05",
    readTime: "5 min read",
    title: "How Remodeling Increases the Value of Your Home",
    excerpt:
      "Strategic remodeling can dramatically enhance your home’s appeal and value—here’s how we do it right.",
    img: kitchen,
    alt: "Luxury kitchen remodel with bookmatched Calacatta marble island and white oak cabinetry",
    w: 1600,
    h: 1104,
    pullQuote:
      "High-return remodeling reimagines spatial flow, natural light, and culinary and bath sanctuaries so an existing residence lives like a new custom commission.",
    sections: [
      {
        heading: "Chef-Caliber Kitchens & Open-Concept Flow",
        body: "The kitchen remains the centerpiece of residential value. Removing dated partitions to introduce a monolithic waterfall stone island, custom cabinetry, concealed walk-in pantry storage, and professional appliances transforms both daily living and market desirability.",
      },
      {
        heading: "Primary Suite & Spa Bath Transformations",
        body: "Upgrading primary bathrooms with custom double vanities, frameless wet rooms, freestanding soaking tubs, and warm architectural lighting delivers an immediate resort-grade lifestyle upgrade.",
      },
      {
        heading: "Structural Integrity Meets Seamless Aesthetics",
        body: "Our remodeling team matches existing structural rooflines, masonry coursing, and millwork profiles so expansions and interior transformations feel original to the architecture.",
      },
    ],
    takeaways: [
      "Culinary Atelier & Open-Concept Transformations",
      "Spa-Caliber Primary Bath & Suite Upgrades",
      "Seamless Structural & Architectural Integration",
    ],
  },
  {
    id: "06",
    category: "Interior Design",
    date: "Apr 12, 2025",
    isoDate: "2025-04-12",
    readTime: "4 min read",
    title: "Double Vanity Designs That Maximize Space and Style",
    excerpt:
      "A double vanity adds convenience and luxury—discover the styles that suit modern custom homes.",
    img: doubleVanity,
    alt: "Custom double vanity suite with stone countertops, brass fixtures, and backlit mirrors",
    w: 1600,
    h: 1067,
    pullQuote:
      "Thoughtful double vanity architecture elevates morning and evening routines through symmetrical proportion, tailored storage, and flattering illumination.",
    sections: [
      {
        heading: "Floating vs. Furniture-Grade Millwork Profiles",
        body: "Modern custom homes often favor wall-hung floating vanities with under-cabinet LED toe-kick lighting to expand visual floor space, while Traditional and Transitional suites shine with fluted white oak or walnut furniture-style cabinetry.",
      },
      {
        heading: "Stone Countertops, Integrated Sinks & Brass Fixtures",
        body: "Bookmatched quartzite, Calacatta marble, and honed travertine countertops with tall backsplash slabs protect walls while showcasing natural veining alongside unlacquered brass or matte bronze faucets.",
      },
      {
        heading: " Concealed Storage & Layered Mirror Lighting",
        body: "We engineer custom drawer dividers, concealed in-drawer electrical outlets for styling tools, and vertical sconces paired with backlit mirrors for shadow-free illumination.",
      },
    ],
    takeaways: [
      "Floating & Furniture-Grade Custom Millwork",
      "Bookmatched Stone Counters & Brushed Brass Hardware",
      "Concealed Outlet Drawers & Backlit Mirror Illumination",
    ],
  },
] as const satisfies readonly BlogPost[];

export function BlogsSection() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const featuredPost = BLOG_POSTS[0];

  const activePostIndex =
    selectedPostId !== null ? BLOG_POSTS.findIndex((p) => p.id === selectedPostId) : -1;
  const activePost = activePostIndex >= 0 ? BLOG_POSTS[activePostIndex] : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedPostId !== null) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [selectedPostId]);

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
    if (selectedPostId === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        const nextIdx = (activePostIndex + 1) % BLOG_POSTS.length;
        const nextPost = BLOG_POSTS[nextIdx];
        if (nextPost) setSelectedPostId(nextPost.id);
      }
      if (e.key === "ArrowLeft") {
        const prevIdx = (activePostIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length;
        const prevPost = BLOG_POSTS[prevIdx];
        if (prevPost) setSelectedPostId(prevPost.id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPostId, activePostIndex]);

  return (
    <>
      {/* =================================================================
          PART 1: FEATURED EDITORIAL SPOTLIGHT (bg-ivory)
         ================================================================= */}
      <section className="relative overflow-x-clip bg-ivory py-[70px] text-charcoal sm:py-[90px]">
        <div className="container-lux">
          <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <Reveal className="lg:col-span-7">
              <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                <Eyebrow n="01">Featured Editorial</Eyebrow>
              </div>
              <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
                <span className="block text-[clamp(1.4rem,1.05rem+1vw,2.15rem)] font-normal leading-[1.2] text-charcoal/80">
                  Architectural Perspectives &amp;
                </span>
                <em className="mt-0.5 block text-[clamp(2.35rem,1.3rem+2.9vw,4rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                  Building Wisdom.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-5">
              <p className="font-sans text-[0.96rem] leading-[1.8] text-charcoal/80">
                Every article is authored to help North Texas homeowners and commercial clients make
                informed decisions on construction quality, architectural planning, interior
                finish-outs, and long-term property care.
              </p>
            </Reveal>
          </div>

          {/* Featured Lead Story Split Card */}
          <Reveal delay={160} className="mt-12">
            <div className="group/featured relative">
              <div
                aria-hidden="true"
                className="animate-welcome-frame pointer-events-none absolute -inset-2 hidden rounded-[6px] border border-[#9B8766]/30 bg-cream/55 lg:block"
              />

              <article className="relative z-10 grid overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal text-ivory shadow-[0_32px_72px_-20px_rgba(28,28,28,0.5)] lg:grid-cols-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-ivory"
                />

                {/* Left Image Column (7 Cols) */}
                <div className="relative min-h-[320px] overflow-hidden bg-graphite sm:min-h-[420px] lg:col-span-7">
                  <img
                    src={featuredPost.img}
                    alt={featuredPost.alt}
                    width={featuredPost.w}
                    height={featuredPost.h}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-lux)] group-hover/featured:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-charcoal/30"
                  />

                  <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2.5 rounded-[6px] border border-ivory/20 bg-charcoal/85 px-3.5 py-1.5 backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-champagne" />
                    <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                      Lead Edition · {featuredPost.category}
                    </span>
                  </div>

                  <div className="absolute right-5 bottom-5 left-5 z-20 hidden rounded-[6px] border border-ivory/15 bg-charcoal/85 p-4 backdrop-blur-md sm:block">
                    <p className="font-serif text-base italic leading-relaxed text-champagne">
                      “{featuredPost.pullQuote}”
                    </p>
                  </div>
                </div>

                {/* Right Editorial Column (5 Cols) */}
                <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 -bottom-5 font-serif text-[7.5rem] font-bold italic leading-none text-champagne/[0.07] select-none"
                  >
                    {featuredPost.id}
                  </span>

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 border-b border-ivory/12 pb-3.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                      <span>{featuredPost.category}</span>
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-champagne" />
                      <time dateTime={featuredPost.isoDate} className="text-ivory/80">
                        {featuredPost.date}
                      </time>
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-champagne" />
                      <span className="text-ivory/65">{featuredPost.readTime}</span>
                    </div>

                    <h3 className="mt-5 font-serif text-2xl font-bold leading-tight text-ivory sm:text-3xl">
                      {featuredPost.title}
                    </h3>

                    <p className="mt-3.5 font-sans text-[0.95rem] leading-[1.8] text-ivory/82">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-6 space-y-2">
                      {featuredPost.takeaways.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-champagne" />
                          <span className="font-sans text-[0.82rem] text-ivory/88">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 border-t border-ivory/15 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedPostId(featuredPost.id)}
                      className="group/btn relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_28px_-8px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-ivory"
                    >
                      <span className="relative z-10">
                        Read more
                        <span className="sr-only"> about {featuredPost.title}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-all duration-300 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================================
          PART 2: EXPLORE OUR BLOGS — ALL 6 ARTICLES GRID (bg-cream)
         ================================================================= */}
      <section
        id="all-blogs"
        aria-labelledby="explore-blogs-heading"
        className="relative overflow-x-clip bg-cream py-[70px] text-charcoal sm:py-[90px]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 right-1/4 h-96 w-96 rounded-full bg-champagne/25 blur-3xl"
        />

        <div className="container-lux relative z-10">
          {/* Section Header */}
          <div className="grid gap-8 border-b border-[#9B8766]/25 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <Reveal className="lg:col-span-7">
              <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                <Eyebrow n="02">Our Blogs</Eyebrow>
              </div>
              <h2
                id="explore-blogs-heading"
                className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal"
              >
                <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                  Curated Insights &amp; Guides
                </span>
                <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                  Explore our Blogs.
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
                  <p className="font-serif text-[1.2rem] font-semibold italic leading-snug text-charcoal">
                    Six essential guides for custom homeowners.
                  </p>
                  <p className="mt-1.5 font-sans text-[0.9rem] leading-[1.7] text-charcoal/80">
                    Filter by category below or select{" "}
                    <span className="font-semibold text-charcoal">Read more</span> on any card to
                    open the full architectural article.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Interactive Category Filter Bar */}
          <Reveal delay={180} className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === "All"
                    ? BLOG_POSTS.length
                    : BLOG_POSTS.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`group/tab relative inline-flex cursor-pointer items-center gap-2 rounded-[50px] border px-4 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive
                        ? "border-[#9B8766] bg-charcoal text-ivory shadow-[0_10px_24px_-8px_rgba(28,28,28,0.4)]"
                        : "border-charcoal/15 bg-ivory/80 text-charcoal/75 hover:-translate-y-0.5 hover:border-[#9B8766]/60 hover:bg-ivory hover:text-charcoal"
                    }`}
                  >
                    <span>{cat === "All" ? "All Blogs" : cat}</span>
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

            <div className="hidden items-center gap-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B] xl:inline-flex">
              <BookOpen className="h-3.5 w-3.5 text-[#9B8766]" />
              <span>Click Any Article to Read Full Edition</span>
            </div>
          </Reveal>

          {/* 6-Card Architectural Blog Grid (Semantic <article> with Direct Regions) */}
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, idx) => (
              <Reveal key={post.id} delay={(idx % 3) * 90}>
                <article className="group/card relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-ivory shadow-[0_22px_50px_-20px_rgba(28,28,28,0.18)] transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766] hover:shadow-[0_32px_68px_-18px_rgba(28,28,28,0.3)]">
                  {/* Region 1: Media (<img> as direct first child with aspect-ratio & object-fit: cover) */}
                  <img
                    src={post.img}
                    alt={post.alt}
                    width={post.w}
                    height={post.h}
                    loading="lazy"
                    decoding="async"
                    onClick={() => setSelectedPostId(post.id)}
                    className="aspect-[16/10] w-full cursor-pointer border-b border-charcoal/10 object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-[1.03]"
                  />

                  {/* Region 2: Header (<header> with Category, Date & Heading) */}
                  <header className="px-6 pt-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-charcoal/10 pb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#9B8766]/35 bg-cream/85 px-2.5 py-1 font-sans text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#6B593B]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#9B8766]" />
                        {post.category}
                      </span>

                      <div className="inline-flex items-center gap-1.5 font-sans text-[0.72rem] font-medium text-charcoal/70">
                        <Calendar className="h-3.5 w-3.5 text-[#9B8766]" />
                        <time dateTime={post.isoDate}>{post.date}</time>
                      </div>
                    </div>

                    <h3 className="mt-4 font-serif text-[1.5rem] font-bold leading-[1.22] text-charcoal transition-colors duration-300 group-hover/card:text-[#6B593B]">
                      <button
                        type="button"
                        onClick={() => setSelectedPostId(post.id)}
                        className="cursor-pointer text-left focus:outline-none"
                      >
                        {post.title}
                      </button>
                    </h3>
                  </header>

                  {/* Region 3: Content (Single <p> standing on its own) */}
                  <p className="px-6 pt-3 font-sans text-[0.92rem] leading-[1.75] text-charcoal/78">
                    {post.excerpt}
                  </p>

                  {/* Region 4: Footer (<footer> holding independent action with descriptive sr-only text) */}
                  <footer className="mt-6 flex items-center justify-between border-t border-charcoal/10 bg-cream/40 px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                      <Clock className="h-3 w-3 text-[#9B8766]" />
                      {post.readTime}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedPostId(post.id)}
                      className="group/read inline-flex cursor-pointer items-center gap-2 rounded-[50px] border border-[#9B8766]/45 bg-charcoal px-4 py-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-[#9B8766] hover:bg-[#9B8766]"
                    >
                      <span>
                        Read more
                        <span className="sr-only"> about {post.title}</span>
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-champagne transition-transform duration-300 group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5 group-hover/read:text-ivory" />
                    </button>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          PART 3: FULL-LENGTH NATIVE <dialog> EDITORIAL ARTICLE READER
         ================================================================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        {...({ closedby: "any" } as Record<string, string>)}
        onClose={() => setSelectedPostId(null)}
        className="m-auto max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-4xl overflow-hidden rounded-[6px] border border-ivory/20 bg-ivory p-0 text-charcoal shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] backdrop:bg-charcoal/90 backdrop:backdrop-blur-xl sm:w-[calc(100vw-3rem)] open:flex open:flex-col"
      >
        {activePost && (
          <>
            {/* Sticky Modal Header Bar */}
            <div className="flex items-center justify-between border-b border-charcoal/12 bg-charcoal px-5 py-3.5 text-ivory sm:px-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-[4px] border border-champagne/45 bg-champagne/15 px-2.5 py-0.5 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                  {activePost.category}
                </span>
                <time
                  dateTime={activePost.isoDate}
                  className="font-sans text-[0.72rem] font-medium text-ivory/80"
                >
                  {activePost.date}
                </time>
                <span className="hidden font-sans text-[0.68rem] text-ivory/60 sm:inline">
                  · {activePost.readTime}
                </span>
              </div>

              <form method="dialog">
                <button
                  type="submit"
                  autoFocus
                  aria-label="Close article reader"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Scrollable Article Content Body */}
            <div className="flex-1 overflow-y-auto">
              {/* Hero Banner Image Inside Modal */}
              <div className="relative h-64 w-full overflow-hidden bg-charcoal sm:h-80">
                <img
                  src={activePost.img}
                  alt={activePost.alt}
                  width={activePost.w}
                  height={activePost.h}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-transparent"
                />
                <div className="absolute right-6 bottom-6 left-6">
                  <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    Edition {activePost.id} · {activePost.category} · {activePost.date}
                  </p>
                  <h2
                    id={dialogTitleId}
                    className="mt-1.5 font-serif text-2xl font-bold leading-tight text-ivory sm:text-4xl"
                  >
                    {activePost.title}
                  </h2>
                </div>
              </div>

              {/* Article Body Copy */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Verbatim Lead Summary */}
                <p className="font-serif text-xl font-semibold italic leading-relaxed text-[#6B593B] sm:text-2xl">
                  {activePost.excerpt}
                </p>

                {/* Highlight Pull Quote */}
                <blockquote className="mt-6 rounded-[6px] border-l-3 border-[#9B8766] bg-cream/70 p-5 font-serif text-lg italic leading-relaxed text-charcoal">
                  “{activePost.pullQuote}”
                </blockquote>

                {/* Detailed Sections */}
                <div className="mt-8 space-y-6">
                  {activePost.sections.map((sec) => (
                    <div key={sec.heading}>
                      <h3 className="font-serif text-xl font-bold text-charcoal sm:text-2xl">
                        {sec.heading}
                      </h3>
                      <p className="mt-2 font-sans text-[0.96rem] leading-[1.82] text-charcoal/85">
                        {sec.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Takeaways Box */}
                <div className="mt-8 rounded-[6px] border border-[#9B8766]/35 bg-cream/65 p-5 sm:p-6">
                  <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#6B593B]">
                    Key Architectural Takeaways
                  </p>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
                    {activePost.takeaways.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-[5px] border border-charcoal/10 bg-ivory p-3 font-sans text-xs font-medium leading-snug text-charcoal"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6B593B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation Callout */}
                <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[6px] bg-charcoal p-5 text-ivory sm:flex-row sm:items-center sm:p-6">
                  <div>
                    <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                      Marvel Custom Homes · Dallas–Fort Worth
                    </p>
                    <p className="mt-1 font-serif text-lg font-bold text-ivory">
                      Planning a project in {activePost.category}?
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedPostId(null)}
                    className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-5 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory"
                  >
                    <span>Speak With Our Team</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal Footer: Prev / Next Article Navigation */}
            <div className="flex items-center justify-between border-t border-charcoal/12 bg-cream px-5 py-3.5 sm:px-7">
              <button
                type="button"
                onClick={() => {
                  const prevIdx = (activePostIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length;
                  const prevPost = BLOG_POSTS[prevIdx];
                  if (prevPost) setSelectedPostId(prevPost.id);
                }}
                className="inline-flex cursor-pointer items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-[#6B593B]"
              >
                <ArrowLeft className="h-4 w-4 text-[#9B8766]" />
                <span>Previous Article</span>
              </button>

              <span className="font-serif text-sm italic text-charcoal/70">
                Article {activePostIndex + 1} of {BLOG_POSTS.length}
              </span>

              <button
                type="button"
                onClick={() => {
                  const nextIdx = (activePostIndex + 1) % BLOG_POSTS.length;
                  const nextPost = BLOG_POSTS[nextIdx];
                  if (nextPost) setSelectedPostId(nextPost.id);
                }}
                className="inline-flex cursor-pointer items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-[#6B593B]"
              >
                <span>Next Article</span>
                <ArrowRight className="h-4 w-4 text-[#9B8766]" />
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
