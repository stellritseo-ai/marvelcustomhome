import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import processBg from "@/assets/processbg.jpg";
import { submitNewsletter } from "@/lib/contact.functions";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const EDITORIAL_PILLARS = [
  {
    n: "01",
    topic: "Home Construction & Remodeling",
    detail:
      "Structural foundations, turnkey ground-up execution, and high-return luxury home remodeling across North Texas.",
  },
  {
    n: "02",
    topic: "Design & Planning",
    detail:
      "Collaborative architectural consultations, 3D spatial planning, and lot orientation tailored to your family.",
  },
  {
    n: "03",
    topic: "Interior Design & Maintenance",
    detail:
      "Bespoke interior finish-outs, custom double vanities, and seasonal care guides to protect your investment.",
  },
] as const;

export function BlogsNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    const emailToSubmit = email.trim();
    setSubscribed(true);
    setEmail("");
    try {
      await submitNewsletter({
        data: {
          email: emailToSubmit,
          source: "Blog Journal Dispatch Form",
        },
      });
    } catch (err) {
      console.error("Blog newsletter subscription error:", err);
    }
  }

  return (
    <section className="relative overflow-x-clip bg-charcoal py-[70px] text-ivory sm:py-[90px]">
      {/* Atmospheric Background Image + Scrim */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={processBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/75 to-charcoal/92" />
      </div>

      <div className="container-lux relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Editorial Digest & Topic Pillars */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow n="03" light>
                Architectural Journal Digest
              </Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-ivory">
                <span className="block text-[clamp(1.4rem,1.05rem+1vw,2.15rem)] font-normal leading-[1.2] text-ivory/85">
                  Stay Informed on Custom
                </span>
                <em className="mt-1 block text-[clamp(2.35rem,1.35rem+3vw,4rem)] font-bold italic leading-[1.05] text-champagne">
                  Architecture &amp; Living.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 max-w-2xl font-sans text-[0.96rem] leading-[1.8] text-ivory/80">
                From choosing the right architectural design consultation to seasonal maintenance
                and custom double-vanity millwork, our journal shares the field-tested standards we
                bring to every Dallas–Fort Worth commission.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
                {EDITORIAL_PILLARS.map((item) => (
                  <div
                    key={item.n}
                    className="rounded-[6px] border border-ivory/15 bg-charcoal/80 p-4 backdrop-blur-md transition-colors hover:border-champagne/55"
                  >
                    <span className="font-serif text-lg font-bold italic text-champagne">
                      {item.n}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-ivory">{item.topic}</h3>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-ivory/72">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Journal Subscription & Direct Studio Card */}
          <div className="lg:col-span-5">
            <Reveal delay={160}>
              <div className="relative overflow-hidden rounded-[8px] border border-ivory/20 bg-charcoal/90 p-6 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-[#9B8766]"
                />

                <div className="inline-flex items-center gap-2 rounded-[50px] border border-champagne/35 bg-champagne/10 px-3.5 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  <Sparkles className="h-3 w-3" />
                  <span>Marvel Custom Homes Dispatch</span>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-ivory sm:text-3xl">
                  Receive New Editions &amp; Project Guides
                </h3>

                <p className="mt-2 font-sans text-sm leading-relaxed text-ivory/75">
                  Subscribe to receive new articles on custom home construction, interior
                  finish-outs, and design trends directly from our Dallas studio.
                </p>

                {subscribed ? (
                  <div className="mt-5 flex items-center gap-2.5 rounded-[6px] border border-champagne/45 bg-champagne/15 px-4 py-3.5 font-sans text-xs font-medium text-champagne">
                    <Check className="h-4 w-4 shrink-0" />
                    <span>Thank you for subscribing to the Marvel Custom Homes Journal.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <label htmlFor="blogs-journal-email" className="sr-only">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-champagne/75" />
                      <input
                        id="blogs-journal-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full rounded-[6px] border border-ivory/20 bg-ivory/[0.06] py-3 pr-4 pl-10 font-sans text-sm text-ivory placeholder:text-ivory/45 focus:border-champagne focus:ring-2 focus:ring-champagne/25 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group/sub relative inline-flex w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-[6px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_28px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-ivory"
                    >
                      <span>Subscribe to Our Blogs</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5" />
                    </button>
                  </form>
                )}

                <div className="mt-6 space-y-2.5 border-t border-ivory/12 pt-5 font-sans text-xs text-ivory/75">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-champagne" />
                    <span>
                      {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center gap-2 font-semibold text-champagne hover:text-ivory"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{BUSINESS.phone}</span>
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory hover:text-champagne"
                    >
                      <span>Contact Studio</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-champagne" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
