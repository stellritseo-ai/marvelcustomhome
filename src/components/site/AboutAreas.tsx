import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, MapPin, Phone, Sparkles } from "lucide-react";
import exteriorImg from "@/assets/exterior-day.jpg";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const COMMUNITIES = [
  {
    n: "01",
    name: "Rockwall, TX",
    county: "Rockwall County",
    coords: "32.9312° N, 96.4597° W",
    character: "Lake Ray Hubbard & Custom Estates",
    summary:
      "Waterfront residences, panoramic hillside estates, and custom commercial developments overlooking Lake Ray Hubbard.",
    distance: "25 Mi East of Dallas Studio",
  },
  {
    n: "02",
    name: "Heath, TX",
    county: "Rockwall County",
    coords: "32.8371° N, 96.4753° W",
    character: "Private Acreage Sanctuaries",
    summary:
      "Sprawling multi-acre compounds, private gated residences, and resort-style outdoor loggias tailored to refined lakeside living.",
    distance: "24 Mi East of Dallas Studio",
  },
  {
    n: "03",
    name: "Fate, TX",
    county: "Rockwall County",
    coords: "32.9415° N, 96.3814° W",
    character: "Modern Transitional Enclaves",
    summary:
      "Thoughtfully planned family residences uniting Texas limestone masonry with contemporary open-concept architecture.",
    distance: "30 Mi Northeast of Dallas Studio",
  },
  {
    n: "04",
    name: "Mansfield, TX",
    county: "Tarrant & Johnson Counties",
    coords: "32.5632° N, 97.1417° W",
    character: "Executive Family Estates",
    summary:
      "Distinguished custom homes, commercial office suites, and multi-generational estates across South DFW’s premier corridor.",
    distance: "34 Mi Southwest of Dallas Studio",
  },
  {
    n: "05",
    name: "Midlothian, TX",
    county: "Ellis County",
    coords: "32.4824° N, 96.9945° W",
    character: "Rolling Ranches & Custom Acreage",
    summary:
      "Expansive countryside estates, custom workshops, and architectural ranch residences built to endure generations.",
    distance: "32 Mi South of Dallas Studio",
  },
  {
    n: "06",
    name: "McKinney, TX",
    county: "Collin County",
    coords: "33.1972° N, 96.6153° W",
    character: "Historic Charm & Modern Craft",
    summary:
      "Sophisticated luxury homes and commercial spaces blending Collin County’s celebrated heritage with bespoke interior finish-outs.",
    distance: "26 Mi North of Dallas Studio",
  },
] as const;

export function AboutAreas() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeCommunity = COMMUNITIES[selectedIdx] ?? COMMUNITIES[0];

  return (
    <section className="relative overflow-x-clip bg-ivory py-[70px] sm:py-[90px]">
      <div className="container-lux">
        {/* Top Editorial Split Header */}
        <div className="grid gap-8 border-b border-[#9B8766]/25 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-6">
            <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
              <Eyebrow n="04">Areas We Serve</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Proudly Building
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#6B593B]">
                Across North Texas.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-6">
            <p className="font-sans text-[1rem] leading-[1.82] text-charcoal/85 sm:text-[1.05rem]">
              Marvel Custom Homes is honored to serve homeowners and businesses throughout the
              thriving communities of North Texas building a strong relationships and delivering
              exceptional results.
            </p>
          </Reveal>
        </div>

        {/* Main Content: Left Obsidian Regional Atlas Card + Right 6 Community Plates */}
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Obsidian DFW Regional Command Card */}
          <div className="lg:col-span-4">
            <Reveal className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[8px] border border-charcoal/20 bg-charcoal p-6 text-ivory shadow-[0_28px_60px_-20px_rgba(18,17,16,0.45)] sm:p-8">
                {/* Top Gold Hairline */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6B593B] via-champagne to-[#6B593B]"
                />

                {/* Subtle Ambient Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-champagne/15 blur-3xl"
                />

                <div>
                  {/* Studio Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/40 bg-champagne/15 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                      <Compass className="h-3 w-3" />
                      <span>DFW Regional Atlas</span>
                    </span>
                    <span className="font-sans text-[0.65rem] font-medium text-ivory/55">
                      6 Premier Corridors
                    </span>
                  </div>

                  {/* Active Community Spotlight */}
                  <div className="mt-6 overflow-hidden rounded-[6px] border border-ivory/15 bg-ivory/[0.04] p-4">
                    <div className="flex items-center justify-between text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                      <span>Spotlight · {activeCommunity.n}</span>
                      <span>{activeCommunity.coords}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-ivory">
                      {activeCommunity.name}
                    </h3>
                    <p className="mt-0.5 font-sans text-xs font-medium text-champagne/90">
                      {activeCommunity.character}
                    </p>
                    <p className="mt-2.5 font-sans text-xs leading-relaxed text-ivory/75">
                      {activeCommunity.summary}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-ivory/10 pt-2.5 font-sans text-[0.65rem] text-ivory/60">
                      <span>{activeCommunity.county}</span>
                      <span>{activeCommunity.distance}</span>
                    </div>
                  </div>

                  {/* Architectural Preview Thumbnail */}
                  <div className="relative mt-5 overflow-hidden rounded-[6px] border border-ivory/15">
                    <img
                      src={exteriorImg}
                      alt="North Texas custom residence by Marvel Custom Homes"
                      loading="lazy"
                      decoding="async"
                      className="h-36 w-full object-cover opacity-85"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent"
                    />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-champagne">
                        Build On Your Lot
                      </span>
                      <span className="font-serif text-xs italic text-ivory/85">
                        Residential &amp; Commercial
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dallas Headquarters Footer */}
                <div className="mt-6 border-t border-ivory/15 pt-5">
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    Dallas Architectural Studio
                  </p>
                  <p className="mt-1.5 font-sans text-xs leading-relaxed text-ivory/80">
                    {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <Link
                      to="/contact"
                      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-[6px] border border-champagne bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-4 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-ivory"
                    >
                      <span>Schedule Consultation</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <a
                      href={BUSINESS.phoneHref}
                      aria-label={`Call ${BUSINESS.phone}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-ivory/20 bg-ivory/[0.06] text-champagne transition-colors hover:border-champagne hover:bg-champagne hover:text-charcoal"
                    >
                      <Phone className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 6 North Texas Community Plates */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {COMMUNITIES.map((community, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <Reveal key={community.name} delay={idx * 60}>
                  <div
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    onClick={() => setSelectedIdx(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedIdx(idx);
                      }
                    }}
                    className={`group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[6px] border p-6 transition-all duration-500 ease-[var(--ease-lux)] ${
                      isSelected
                        ? "border-[#9B8766] bg-cream/90 shadow-[0_22px_48px_-16px_oklch(0.18_0.006_120/0.22)] -translate-y-1"
                        : "border-[#9B8766]/30 bg-ivory hover:-translate-y-1 hover:border-[#9B8766]/65 hover:bg-cream/50"
                    }`}
                  >
                    {/* Top Accent Hairline */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne transition-transform duration-500 origin-left ${
                        isSelected ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />

                    {/* Watermark Index */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 -bottom-4 font-serif text-[5.5rem] font-bold italic leading-none text-[#9B8766]/[0.08] select-none"
                    >
                      {community.n}
                    </span>

                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                          <span>{community.n}</span>
                          <span aria-hidden="true" className="h-2.5 w-px bg-[#9B8766]/50" />
                          <span>{community.county}</span>
                        </span>
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 ${
                            isSelected
                              ? "border-[#6B593B] bg-[#6B593B] text-ivory"
                              : "border-[#9B8766]/40 bg-cream text-[#6B593B] group-hover:border-[#6B593B]"
                          }`}
                        >
                          <MapPin className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-[1.6rem] font-bold text-charcoal">
                        {community.name}
                      </h3>

                      <p className="mt-1 font-serif text-[0.98rem] font-semibold italic text-[#6B593B]">
                        {community.character}
                      </p>

                      <p className="mt-2.5 font-sans text-[0.86rem] leading-[1.72] text-charcoal/78">
                        {community.summary}
                      </p>
                    </div>

                    <div className="relative z-10 mt-5 flex items-center justify-between border-t border-charcoal/10 pt-3.5 font-sans text-[0.68rem] text-charcoal/60">
                      <span className="tabular-nums">{community.coords}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#6B593B]">
                        <Sparkles className="h-3 w-3 text-[#9B8766]" />
                        <span>Active Service</span>
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
