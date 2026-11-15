import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import exteriorImg from "@/assets/exterior-day.jpg";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const CONTACT_CHANNELS = [
  {
    index: "01",
    icon: Phone,
    tag: "Direct Principal Line",
    title: "Call Our Dallas Desk",
    value: BUSINESS.phone,
    sub: "Mon – Sat · 8:00 AM – 6:00 PM CST · Immediate consultation & lot inquiries",
    href: BUSINESS.phoneHref,
    cta: "Place Direct Call",
    external: false,
  },
  {
    index: "02",
    icon: Mail,
    tag: "Electronic Correspondence",
    title: "Write the Design Studio",
    value: BUSINESS.email,
    sub: "Share architectural plans, land surveys, or custom home specifications",
    href: `mailto:${BUSINESS.email}`,
    cta: "Compose Email",
    external: false,
  },
  {
    index: "03",
    icon: MapPin,
    tag: "Dallas Headquarters",
    title: "Visit Our Private Studio",
    value: `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postal}`,
    sub: "North Central Expressway Suite 130 · Material library & blueprint review",
    href: "https://maps.google.com/?q=10830+N.+Central+Expressway+Ste.130+Dallas,+TX+75231",
    cta: "Get Directions",
    external: true,
  },
] as const;

const HERO_TELEMETRY = [
  {
    index: "01",
    label: "Direct Telephone",
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
  },
  {
    index: "02",
    label: "Electronic Mail",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    index: "03",
    label: "Dallas Studio",
    value: `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postal}`,
    href: "https://maps.google.com/?q=10830+N.+Central+Expressway+Ste.130+Dallas,+TX+75231",
  },
  {
    index: "04",
    label: "Response Commitment",
    value: "Principal Review Within 24 Hours",
  },
] as const;

export function ContactHero() {
  return (
    <>
      {/* =================================================================
          PART 1: FULL-BLEED CINEMATIC ARCHITECTURAL BANNER
         ================================================================= */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative flex min-h-[72svh] flex-col justify-between overflow-hidden bg-charcoal pt-28 pb-10 text-ivory sm:min-h-[78svh] sm:pt-36 sm:pb-14 lg:pt-40"
      >
        {/* Background Image with Slow Ken Burns Drift */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={exteriorImg}
            alt="Custom residence with manicured courtyard and warm architectural lighting in North Texas"
            width={1600}
            height={1067}
            fetchPriority="high"
            decoding="sync"
            className="hero-slide-img hero-ken-a is-active h-full w-full object-cover object-center"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/65" />
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
          {/* Breadcrumb Pill: [Home] > Contact Us */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="inline-flex items-center gap-2.5 rounded-[50px] border border-ivory/20 bg-charcoal/70 px-4 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory/75 backdrop-blur-md">
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
                <li className="text-champagne">
                  <span aria-current="page">Contact Us</span>
                </li>
              </ol>
            </nav>
          </Reveal>

          {/* Eyebrow & Display Title */}
          <div className="max-w-4xl">
            <Reveal delay={60}>
              <Eyebrow light>Contact Us · Private Consultation</Eyebrow>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="contact-hero-heading"
                className="mt-4 font-serif tracking-[-0.02em] text-balance text-ivory"
              >
                <span className="block text-[clamp(1.35rem,1rem+1.1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                  Begin the Conversation
                </span>
                <em className="mt-1 block text-[clamp(2.4rem,1.45rem+3.5vw,4.75rem)] font-bold italic leading-[1.04] text-champagne">
                  Let’s Build Your Vision Together.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl font-sans text-[0.98rem] leading-[1.8] text-ivory/82 sm:text-[1.0625rem]">
                Whether you are planning a ground-up custom residence on your North Texas lot,
                seeking an architectural design consultation, or commissioning a bespoke interior
                finish-out, our Dallas studio is ready to bring your vision to life.
              </p>
            </Reveal>

            {/* Hero Action Bar */}
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group/btn relative inline-flex min-h-12 items-center gap-3.5 overflow-hidden rounded-[50px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-7 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_18px_42px_-10px_rgba(0,0,0,0.65)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-ivory"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                  />
                  <span className="relative z-10">Request Private Consultation</span>
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/25 text-ivory transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>

                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-[50px] border border-ivory/30 bg-charcoal/70 px-6 py-3.5 font-sans text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-md transition-all duration-300 hover:border-champagne hover:bg-charcoal/90 hover:text-champagne"
                >
                  <Phone className="h-3.5 w-3.5 text-champagne" />
                  <span>Call {BUSINESS.phone}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Architectural Telemetry Strip */}
        <div className="container-lux relative z-10">
          <div className="grid grid-cols-1 gap-4 rounded-[6px] border border-ivory/15 bg-charcoal/75 p-4 backdrop-blur-md sm:grid-cols-2 sm:p-5 lg:grid-cols-4 lg:gap-6">
            {HERO_TELEMETRY.map((item) => (
              <div
                key={item.index}
                className="border-l border-champagne/35 pl-3.5 transition-colors duration-300 hover:border-champagne"
              >
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  {item.index} · {item.label}
                </p>
                {"href" in item ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-1 block truncate font-serif text-[0.96rem] font-medium text-ivory transition-colors hover:text-champagne sm:text-[1.02rem]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-serif text-[0.96rem] font-medium text-ivory sm:text-[1.02rem]">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          PART 2: DIRECT ARCHITECTURAL CONCIERGE CHANNELS BAR
         ================================================================= */}
      <section
        aria-label="Direct Contact Channels"
        className="relative border-b border-charcoal/10 bg-cream/65 py-12 sm:py-16"
      >
        <div className="container-lux">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 text-[#9B8766]" />
              <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                Direct Concierge Desk · Dallas, Texas
              </span>
            </div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-charcoal/70">
              <Clock className="h-3.5 w-3.5 text-[#9B8766]" />
              <span>
                Every inquiry is reviewed directly by our principal builders &amp; architects
              </span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {CONTACT_CHANNELS.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.index} delay={idx * 80}>
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer" : undefined}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[6px] border border-[#9B8766]/30 bg-ivory p-6 shadow-[0_20px_48px_-22px_rgba(28,28,28,0.18)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-[#9B8766] hover:shadow-[0_28px_60px_-18px_rgba(155,135,102,0.3)] sm:p-7"
                  >
                    {/* Top Gold Accent Bar */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6B593B] via-[#9B8766] to-champagne transition-transform duration-500 group-hover:scale-x-100"
                    />

                    {/* Watermark Index */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 -bottom-4 font-serif text-[5.5rem] font-bold italic leading-none text-[#9B8766]/[0.07] select-none"
                    >
                      {channel.index}
                    </span>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                          {channel.index} · {channel.tag}
                        </span>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-[#9B8766]/35 bg-cream text-[#6B593B] transition-colors duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-champagne">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <h2 className="mt-4 font-serif text-[1.45rem] font-bold text-charcoal">
                        {channel.title}
                      </h2>

                      <p className="mt-2 break-words font-serif text-[1.12rem] font-semibold italic text-[#6B593B]">
                        {channel.value}
                      </p>

                      <p className="mt-2.5 font-sans text-[0.84rem] leading-[1.68] text-charcoal/75">
                        {channel.sub}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4">
                      <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal group-hover:text-[#6B593B]">
                        {channel.cta}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#9B8766]/40 bg-cream/80 text-[#6B593B] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-champagne">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
