import { ArrowUpRight, Compass, MapPin, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const COMMUNITIES = [
  {
    name: "Rockwall, TX",
    county: "Rockwall County",
    type: "Lakeside & Custom Estates",
    features:
      "Lake Ray Hubbard waterfront views, rolling topography, and bespoke family compounds.",
    tag: "Lake Living",
  },
  {
    name: "Heath, TX",
    county: "Rockwall County",
    type: "Private Acreage Enclaves",
    features: "Secluded multi-acre parcels, expansive outdoor living loggias, and private gates.",
    tag: "Luxury Acreage",
  },
  {
    name: "Fate, TX",
    county: "Rockwall County",
    type: "Modern Transitional Homes",
    features:
      "Dynamic growing enclaves, contemporary open-concept floorplans, and Texas limestone.",
    tag: "Premier Growth",
  },
  {
    name: "Mansfield, TX",
    county: "Tarrant / Johnson County",
    type: "Executive Custom Residences",
    features:
      "Spacious estate home sites, resort-style pools, and high-end transitional architecture.",
    tag: "Executive Living",
  },
  {
    name: "Midlothian, TX",
    county: "Ellis County",
    type: "Rolling Ranches & Acreage",
    features:
      "Generational countryside estates, equestrian parcels, and custom architectural retreats.",
    tag: "Ranch & Estate",
  },
  {
    name: "McKinney, TX",
    county: "Collin County",
    type: "Historic Charm & Modern Craft",
    features:
      "Refined architectural elegance blending Collin County charm with bespoke luxury finish-outs.",
    tag: "Heritage Craft",
  },
] as const;

export function AboutAreas() {
  return (
    <section className="relative overflow-hidden bg-[#121110] py-24 text-ivory sm:py-32">
      {/* Ambient Lighting Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-champagne/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/4 h-[420px] w-[420px] rounded-full bg-[#B89F74]/08 blur-[120px]"
      />

      <div className="container-lux relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-champagne sm:w-12" />
              <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-champagne">
                Areas We Serve
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.8vw,4.2rem)] font-light leading-[1.12] tracking-[-0.01em] text-ivory">
              Proudly Building <br />
              <span className="italic font-normal text-gradient-champagne">
                Across North Texas.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-5 font-sans text-[0.98rem] leading-[1.8] text-ivory/80 sm:text-base">
              Marvel Custom Homes is honored to serve homeowners and businesses throughout the
              thriving communities of North Texas building a strong relationships and delivering
              exceptional results.
            </p>
          </Reveal>
        </div>

        {/* 6 Communities Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITIES.map((community, idx) => (
            <Reveal key={community.name} delay={idx * 70}>
              <div className="group relative flex h-full flex-col justify-between rounded-[10px] border border-ivory/12 bg-ivory/[0.03] p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-champagne/70 hover:bg-ivory/[0.06] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]">
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-champagne/40 bg-champagne/15 text-champagne transition-transform duration-300 group-hover:scale-110">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="rounded-[50px] border border-ivory/15 bg-ivory/[0.05] px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-champagne">
                      {community.tag}
                    </span>
                  </div>

                  {/* Community Name */}
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ivory group-hover:text-champagne transition-colors duration-300">
                    {community.name}
                  </h3>

                  <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.16em] text-champagne/80">
                    {community.type}
                  </p>

                  <p className="mt-3 font-sans text-xs leading-[1.75] text-ivory/65">
                    {community.features}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="mt-6 border-t border-ivory/10 pt-4 flex items-center justify-between">
                  <span className="font-sans text-[0.68rem] text-ivory/50">{community.county}</span>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Build Here
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Regional Notice Banner */}
        <Reveal delay={250}>
          <div className="mt-12 rounded-[10px] border border-champagne/30 bg-gradient-to-r from-ivory/[0.04] via-ivory/[0.07] to-ivory/[0.04] p-6 text-center backdrop-blur-md sm:p-8">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-champagne/50 bg-champagne/20 text-champagne">
                <Compass className="h-4 w-4" />
              </span>
              <h4 className="font-serif text-xl font-semibold text-ivory sm:text-2xl">
                Building on Your Lot or Searching for Land?
              </h4>
              <p className="font-sans text-xs leading-relaxed text-ivory/70 sm:text-sm">
                We provide comprehensive site feasibility analysis, architectural layout planning,
                and custom consultation across the greater Dallas-Fort Worth metroplex.
              </p>
              <div className="mt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-[50px] border border-champagne bg-champagne px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-charcoal transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-charcoal"
                >
                  <span>Request Site Consultation</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
