import {
  ArrowUpRight,
  Building2,
  CalendarCheck,
  ChevronDown,
  Clock,
  Compass,
  FileCheck2,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import about1Img from "@/assets/about1.png";
import b2Img from "@/assets/b2.png";
import processBg from "@/assets/processbg.jpg";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Parallax, Reveal } from "./Reveal";

const CONSULTATION_STEPS = [
  {
    step: "01",
    timing: "Within 24 Hours",
    icon: Phone,
    title: "Principal Discovery Call",
    summary:
      "A senior builder or architect from our Dallas desk connects with you directly to listen to your goals, discuss your preferred architectural style, and review your target timeline.",
    deliverable: "Initial Vision & Feasibility Alignment",
  },
  {
    step: "02",
    timing: "Days 3 – 7",
    icon: CalendarCheck,
    title: "Studio Session & Lot Walkthrough",
    summary:
      "Visit our North Central Expressway studio (Ste. 130) to explore material palettes and floor plans, or meet us on your North Texas property to evaluate topography, orientation, and utilities.",
    deliverable: "On-Site Lot Assessment & Design Brief",
  },
  {
    step: "03",
    timing: "Weeks 2 – 3",
    icon: FileCheck2,
    title: "Bespoke Scope & Proposal",
    summary:
      "Receive a comprehensive architectural and construction roadmap detailing conceptual direction, transparent specification allowances, and milestone scheduling.",
    deliverable: "Custom Project Charter & Schedule",
  },
] as const;

const STUDIO_FAQS = [
  {
    q: "Do I need to own a lot in North Texas before scheduling a consultation?",
    a: "Not at all. Many clients engage Marvel Custom Homes before purchasing land so our builders and architects can evaluate candidate lots in Rockwall, Heath, Fate, Mansfield, Midlothian, McKinney, Allen, or Dallas for topography, soil conditions, drainage, and architectural orientation.",
  },
  {
    q: "Can you build from my existing architectural plans, or do you provide full design?",
    a: "We offer both pathways. Our in-house Architectural Design Consultation team can conceive your floor plans, elevations, and 3D renderings from a blank canvas, or our construction team can collaborate seamlessly with your independent architect’s completed blueprints.",
  },
  {
    q: "What types of projects does Marvel Custom Homes undertake?",
    a: "We specialize in ground-up custom residences (Traditional, Farm House, and Modern Design), large-scale commercial spaces including office buildings and hotels, comprehensive interior finish-outs, strategic home remodeling, and bespoke double vanity bath suites.",
  },
  {
    q: "How are project budgets, material selections, and timelines managed?",
    a: "Every commission begins with a transparent specification charter and milestone schedule. In our Dallas studio, you work directly with our specialists to curate stonework, millwork, cabinetry, glazing, and fixtures with clear allowance visibility at every phase.",
  },
  {
    q: "Where is your Dallas studio located, and how do I prepare for our first meeting?",
    a: "Our studio is located at 10830 N. Central Expressway Ste. 130, Dallas, TX 75231. Simply bring any inspiration photographs, land surveys (if applicable), or a rough wish-list of rooms and lifestyle priorities—we will guide every step from there.",
  },
] as const;

export function ContactStudioSection() {
  return (
    <>
      {/* =================================================================
          PART 1: DARK-OBSIDIAN 3-STEP CONSULTATION PROTOCOL
         ================================================================= */}
      <section
        aria-labelledby="consultation-protocol-heading"
        className="relative overflow-hidden bg-charcoal py-[70px] text-ivory sm:py-[90px]"
      >
        {/* Atmospheric Architectural Backdrop */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
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

        {/* Ambient Champagne Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/10 blur-3xl"
        />

        <div className="container-lux relative z-10">
          {/* Header Row */}
          <div className="grid gap-8 border-b border-ivory/15 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow n="02" light>
                Consultation Protocol
              </Eyebrow>
              <h2
                id="consultation-protocol-heading"
                className="mt-5 font-serif tracking-[-0.02em] text-balance text-ivory"
              >
                <span className="block text-[clamp(1.35rem,1rem+1vw,2.05rem)] font-normal leading-[1.2] text-ivory/80">
                  What Happens Next
                </span>
                <em className="mt-1 block text-[clamp(2.2rem,1.3rem+2.8vw,3.9rem)] font-bold italic leading-[1.06] text-champagne">
                  From First Conversation to Groundbreaking.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <p className="font-sans text-[0.96rem] leading-[1.8] text-ivory/80">
                Commissioning a custom home or commercial structure should feel effortless and
                inspiring. Here is how our Dallas studio guides your inquiry from day one.
              </p>
            </Reveal>
          </div>

          {/* 3-Step Roadmap Cards */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CONSULTATION_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.step} delay={idx * 90}>
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-ivory/15 bg-charcoal/85 p-7 backdrop-blur-md transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-champagne/65 sm:p-8">
                    {/* Top Gold Accent Bar */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6B593B] via-champagne to-[#6B593B] opacity-75 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Watermark Step Number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 -bottom-5 font-serif text-[6rem] font-bold italic leading-none text-champagne/[0.06] select-none"
                    >
                      {item.step}
                    </span>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/35 bg-champagne/10 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                          <span>Step {item.step}</span>
                          <span aria-hidden="true" className="h-2.5 w-px bg-champagne/40" />
                          <span>{item.timing}</span>
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-champagne/30 bg-ivory/[0.05] text-champagne transition-colors duration-300 group-hover:bg-champagne group-hover:text-charcoal">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <h3 className="mt-6 font-serif text-2xl font-bold text-ivory">
                        {item.title}
                      </h3>

                      <p className="mt-3 font-sans text-[0.9rem] leading-[1.75] text-ivory/78">
                        {item.summary}
                      </p>
                    </div>

                    <div className="relative z-10 mt-7 border-t border-ivory/12 pt-4">
                      <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-champagne/80">
                        Key Deliverable
                      </p>
                      <p className="mt-1 font-serif text-[0.98rem] italic text-ivory">
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
          PART 2: DALLAS HEADQUARTERS SHOWCASE & CONSULTATION FAQ
         ================================================================= */}
      <section
        aria-labelledby="dallas-studio-faq-heading"
        className="relative overflow-x-clip bg-cream/55 py-[70px] text-charcoal sm:py-[90px]"
      >
        <div className="container-lux">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* LEFT 6 COLUMNS: Dallas Architectural Studio Dossier & Visual Collage */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="[&_p]:font-semibold [&_p]:text-[#6B593B]">
                  <Eyebrow n="03">Dallas Architectural Studio</Eyebrow>
                </div>
                <h2
                  id="dallas-studio-faq-heading"
                  className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal"
                >
                  <span className="block text-[clamp(1.35rem,1.05rem+0.9vw,1.95rem)] font-normal leading-[1.2] text-charcoal/80">
                    Visit Our Headquarters
                  </span>
                  <em className="mt-0.5 block text-[clamp(2.1rem,1.25rem+2.5vw,3.45rem)] font-bold italic leading-[1.06] text-[#6B593B]">
                    North Central Expressway, Dallas.
                  </em>
                </h2>
                <p className="mt-4 font-sans text-[0.95rem] leading-[1.78] text-charcoal/80">
                  Our private design suite at Suite 130 brings together architectural drafting,
                  structural engineering, and curated stone, timber, and hardware libraries under
                  one roof.
                </p>
              </Reveal>

              {/* Layered Architectural Studio Visual + Address Card */}
              <Reveal delay={120} className="mt-8">
                <div className="overflow-hidden rounded-[6px] border border-[#9B8766]/35 bg-ivory shadow-[0_26px_60px_-20px_rgba(28,28,28,0.2)]">
                  {/* Dual Image Header */}
                  <div className="grid grid-cols-12 gap-2 bg-charcoal p-2">
                    <div className="relative col-span-7 overflow-hidden rounded-[4px]">
                      <Parallax
                        src={about1Img}
                        alt="Marvel Custom Homes architectural design studio showcase"
                        width={960}
                        height={640}
                        className="aspect-[16/11] w-full"
                      />
                      <span className="absolute bottom-2.5 left-2.5 rounded-[4px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md">
                        32.8953° N · 96.7698° W
                      </span>
                    </div>
                    <div className="relative col-span-5 overflow-hidden rounded-[4px]">
                      <img
                        src={b2Img}
                        alt="Bespoke kitchen and interior material finishes"
                        width={1188}
                        height={890}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/11] h-full w-full object-cover"
                      />
                      <span className="absolute bottom-2.5 left-2.5 rounded-[4px] border border-ivory/20 bg-charcoal/80 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ivory backdrop-blur-md">
                        Material Suite
                      </span>
                    </div>
                  </div>

                  {/* Studio Telemetry Details */}
                  <div className="p-6 sm:p-7">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="inline-flex items-center gap-1.5 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                          <MapPin className="h-3.5 w-3.5 text-[#9B8766]" />
                          Studio Location
                        </p>
                        <p className="mt-1.5 font-serif text-[1.1rem] font-bold text-charcoal">
                          {BUSINESS.street}
                        </p>
                        <p className="font-sans text-sm text-charcoal/75">
                          {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                        </p>
                      </div>

                      <div>
                        <p className="inline-flex items-center gap-1.5 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                          <Clock className="h-3.5 w-3.5 text-[#9B8766]" />
                          Consultation Hours
                        </p>
                        <p className="mt-1.5 font-serif text-[1.1rem] font-bold text-charcoal">
                          Mon – Fri · 8:00 AM – 6:00 PM
                        </p>
                        <p className="font-sans text-sm text-charcoal/75">
                          Saturday by Private Appointment
                        </p>
                      </div>
                    </div>

                    {/* Service Communities Bar */}
                    <div className="mt-6 border-t border-charcoal/10 pt-5">
                      <p className="inline-flex items-center gap-1.5 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                        <Compass className="h-3.5 w-3.5 text-[#9B8766]" />
                        Communities We Proudly Serve Across North Texas
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {[
                          "Rockwall, TX",
                          "Heath, TX",
                          "Fate, TX",
                          "Mansfield, TX",
                          "Midlothian, TX",
                          "McKinney, TX",
                          "Allen, TX",
                          "Dallas, TX",
                        ].map((city) => (
                          <span
                            key={city}
                            className="rounded-[4px] border border-[#9B8766]/30 bg-cream/70 px-2.5 py-1 font-sans text-[0.68rem] font-semibold text-charcoal/85"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-charcoal/10 pt-5">
                      <a
                        href="https://maps.google.com/?q=10830+N.+Central+Expressway+Ste.130+Dallas,+TX+75231"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-[6px] border border-charcoal bg-charcoal px-5 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-[#6B593B] hover:bg-[#6B593B]"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-champagne transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                      <a
                        href={BUSINESS.phoneHref}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] border border-[#9B8766]/45 bg-cream px-5 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:border-charcoal hover:bg-ivory"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#6B593B]" />
                        <span>{BUSINESS.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT 6 COLUMNS: Private Consultation FAQ Accordion */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#9B8766]" />
                  <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                    04 / Client Guidance &amp; FAQ
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-[clamp(1.75rem,1.2rem+1.6vw,2.6rem)] font-bold leading-[1.12] text-charcoal">
                  Frequently Asked Questions Before Your{" "}
                  <em className="italic text-[#6B593B]">Consultation.</em>
                </h3>
                <p className="mt-3 font-sans text-[0.94rem] leading-[1.75] text-charcoal/78">
                  Everything you need to know about lot evaluations, architectural plans, material
                  selections, and building across Dallas–Fort Worth.
                </p>
              </Reveal>

              <div className="mt-7 space-y-3.5">
                {STUDIO_FAQS.map((faq, idx) => (
                  <Reveal key={faq.q} delay={idx * 65}>
                    <details
                      name="contact-faq"
                      open={idx === 0}
                      className="group overflow-hidden rounded-[6px] border border-[#9B8766]/30 bg-ivory transition-all duration-300 open:border-[#9B8766] open:shadow-[0_18px_40px_-20px_rgba(28,28,28,0.18)]"
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

              {/* Commercial & Residential Callout Banner */}
              <Reveal delay={350}>
                <div className="mt-6 flex items-center justify-between gap-4 rounded-[6px] border border-charcoal/15 bg-charcoal p-5 text-ivory">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-champagne/35 bg-ivory/[0.06] text-champagne">
                      <Building2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                        Residential &amp; Commercial Commissions
                      </p>
                      <p className="mt-0.5 font-serif text-sm text-ivory/90">
                        Have architectural blueprints ready for bid? Email{" "}
                        <a
                          href={`mailto:${BUSINESS.email}`}
                          className="underline decoration-champagne/50 underline-offset-4 hover:text-champagne"
                        >
                          {BUSINESS.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
