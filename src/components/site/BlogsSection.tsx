import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "@/lib/images";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const ARTICLES = [
  {
    n: "01",
    category: "Architecture",
    readTime: "4 min read",
    title: "Designing Around North Texas Light and Year-Round Courtyard Living",
    excerpt:
      "How deep limestone overhangs, cross-ventilation, and shaded loggias soften western sun while extending entertaining outdoors across seasons.",
    body: "Great custom architecture in Dallas–Fort Worth starts with orientation on the lot before floor plans are drawn. Positioning deep masonry loggias along the west and south exposures shields interior glazing from summer heat while inviting winter sun across living terraces.",
    img: IMAGES.outdoor,
    alt: "Stone courtyard loggia overlooking a pool at dusk",
    w: 1920,
    h: 1088,
  },
  {
    n: "02",
    category: "Materiality",
    readTime: "5 min read",
    title: "Limestone, Rift-Cut Oak, and Bronze: Selecting Patinas That Age Gracefully",
    excerpt:
      "Why honest architectural materials gain quiet warmth over decades instead of dating quickly.",
    body: "When finishes are chosen to live together — honed limestone hearths, matte rift-sawn white oak millwork, and living bronze hardware — every touchpoint develops richer character with time rather than demanding early replacement.",
    img: IMAGES.stone,
    alt: "Close study of carved limestone, warm bronze hardware, and white oak",
    w: 1008,
    h: 1312,
  },
  {
    n: "03",
    category: "Interior Craft",
    readTime: "4 min read",
    title: "Proportion & Millwork in Custom Primary Double Vanities",
    excerpt:
      "Integrating floating cabinetry, concealed electrical channels, and book-matched stone slabs into serene daily rituals.",
    body: "A custom double vanity succeeds through millwork discipline: balanced drawer reveals, recessed lighting under stone aprons, plumbing integrated within deep toe-kicks, and natural walnut grain wrapping continuously across cabinet fronts.",
    img: IMAGES.bathroom,
    alt: "Primary bath with custom walnut double vanity and travertine stonework",
    w: 1104,
    h: 1504,
  },
  {
    n: "04",
    category: "Pre-Construction",
    readTime: "6 min read",
    title: "Why Early Design Consultation Protects Both Budget and Craftsmanship",
    excerpt:
      "Aligning architectural detailing, engineering, and finish allowances before ground is broken removes costly field surprises.",
    body: "Bringing builder, architect, and finish specifications into the same early conversation allows structural spans, HVAC chases, and custom cabinetry clearances to resolve cleanly on paper — protecting both craft quality and schedule predictability.",
    img: IMAGES.consult,
    alt: "Architectural scale model beside natural oak, limestone, and bronze samples",
    w: 1200,
    h: 1504,
  },
] as const;

export function BlogsSection() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(ARTICLES[0].n);

  return (
    <section className="section-y">
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow n="01">Field Notes</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.75rem)]">
              Reflections on <em className="italic">Architecture &amp; Craft.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted-foreground">
              Perspectives from our studio on site planning, natural materials, interior millwork,
              and building with clarity.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-2">
          {ARTICLES.map((article, i) => {
            const isOpen = expandedIndex === article.n;
            const panelId = `blog-essay-${article.n}`;
            return (
              <Reveal key={article.n} delay={(i % 2) * 120} className="flex flex-col">
                <div className="img-zoom aspect-[16/11] bg-cream">
                  <img
                    src={article.img}
                    alt={article.alt}
                    width={article.w}
                    height={article.h}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-7 flex flex-1 flex-col border-t border-border pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow text-bronze">
                      {article.n} · {article.category}
                    </span>
                    <span className="eyebrow text-[0.625rem] text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl leading-tight font-light">{article.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{article.excerpt}</p>

                  {isOpen && (
                    <p
                      id={panelId}
                      className="mt-5 border-l border-bronze/50 pl-4 text-sm leading-[1.85] text-foreground/85"
                    >
                      {article.body}
                    </p>
                  )}

                  <div className="mt-auto pt-7">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setExpandedIndex(isOpen ? null : article.n)}
                      className="eyebrow link-line cursor-pointer"
                    >
                      <span>{isOpen ? "Close Note" : "Read Note"}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
