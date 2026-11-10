import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const RESIDENCES = [
  {
    n: "01",
    series: "Limestone Estate",
    title: "Modern Texas Limestone",
    subtitle: "Broad overhangs, quiet stone massing, and walls of thermally broken glass.",
    img: IMAGES.hero,
    alt: "Contemporary limestone residence illuminated beside a reflecting pool at dusk",
    w: 1920,
    h: 1088,
    notes: [
      "Single- & Two-Story Configurations",
      "Indoor–Outdoor Courtyard Loggia",
      "Custom Steel & Rift-Cut Oak",
    ],
  },
  {
    n: "02",
    series: "Architectural Manor",
    title: "Warm Transitional Residence",
    subtitle:
      "Crisp pitched rooflines paired with arched limestone entries and proportioned galleries.",
    img: IMAGES.exterior,
    alt: "Arched limestone residential facade bathed in warm afternoon sunlight",
    w: 1600,
    h: 1104,
    notes: [
      "Double-Height Great Rooms",
      "Chef's Scullery & Calacatta Kitchens",
      "Private Primary Wing",
    ],
  },
  {
    n: "03",
    series: "Pavilion Living",
    title: "Courtyard & Loggia Homes",
    subtitle: "Designed around sheltered outdoor rooms, fireplace hearths, and shaded terraces.",
    img: IMAGES.outdoor,
    alt: "Stone outdoor loggia with fireplace overlooking a tranquil twilight pool",
    w: 1920,
    h: 1088,
    notes: [
      "Covered Entertaining Pavilions",
      "Resort Pool Sightlines",
      "Natural Stone & Bronze Details",
    ],
  },
];

export function HomesSection() {
  return (
    <section className="section-y bg-cream">
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow n="01">Architectural Studies</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.75rem)]">
              Homes Tailored to <em className="italic">Site &amp; Story.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted-foreground">
              Each residence begins from your lot orientation, family rhythms, and material
              sensibilities — never repeated off the shelf.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-8">
          {RESIDENCES.map((r, i) => (
            <Reveal key={r.n} delay={i * 120} className="flex flex-col">
              <div className="img-zoom aspect-[4/5] bg-graphite/10">
                <img
                  src={r.img}
                  alt={r.alt}
                  width={r.w}
                  height={r.h}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-7 flex flex-1 flex-col border-t border-border pt-6">
                <p className="eyebrow text-bronze">
                  {r.n} · {r.series}
                </p>
                <h3 className="mt-3 text-3xl font-light">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.subtitle}</p>
                <ul className="mt-6 space-y-2 border-t border-border/60 pt-5 text-xs text-muted-foreground">
                  {r.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link to="/contact" className="eyebrow link-line">
                    Inquire About This Study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
