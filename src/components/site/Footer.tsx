import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { submitNewsletter } from "@/lib/contact.functions";
import { BUSINESS } from "@/lib/site";
import { Logo } from "./Logo";

const QUICK_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Works", to: "/projects" },
  { label: "Our Homes", to: "/our-homes" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
] as const;

const OUR_SERVICES = [
  {
    label: "Complete Home Construction",
    to: "/services",
    hash: "complete-home-construction",
  },
  {
    label: "Design Consultation – Architectural",
    to: "/services",
    hash: "design-consultation",
  },
  {
    label: "Interior Finish Out",
    to: "/services",
    hash: "interior-finish-out",
  },
  {
    label: "Double Vanity",
    to: "/services",
    hash: "double-vanity",
  },
] as const;

const AREAS_WE_SERVE = [
  "Allen TX",
  "McKinney TX",
  "Fate TX",
  "Midlothian TX",
  "Heath TX",
  "Rockwall TX",
  "Mansfield TX",
] as const;

const SEO_LINKS: readonly {
  label: string;
  to: "/our-homes" | "/services" | "/projects" | "/blogs" | "/contact" | "/about";
  hash?: string;
}[] = [
  { label: "Custom Home Builder Dallas", to: "/our-homes" },
  { label: "Luxury Home Builder Dallas", to: "/our-homes" },
  { label: "Cost to Build a Custom Home in Dallas", to: "/contact" },
  { label: "How to Choose the Right Dallas Custom Home Builder", to: "/blogs" },
  { label: "Top Design Trends for Dallas Luxury Homes", to: "/blogs" },
  {
    label: "Energy-Efficient Features for Luxury Homes",
    to: "/services",
    hash: "complete-home-construction",
  },
  { label: "Modern vs. Transitional Styles in Dallas Homes", to: "/our-homes" },
  { label: "Designing the Perfect Master Suite", to: "/services", hash: "double-vanity" },
  { label: "High-End Kitchen Design Dallas", to: "/projects" },
  { label: "Dallas Luxury Custom Homes", to: "/our-homes" },
  { label: "Custom Home Design Dallas", to: "/services", hash: "design-consultation" },
  { label: "Home Building Process Dallas", to: "/about" },
  { label: "Build on Your Lot Dallas", to: "/services", hash: "complete-home-construction" },
  { label: "Build On Your Lot Home Builder", to: "/services", hash: "complete-home-construction" },
  { label: "Custom Home Builder in Texas", to: "/our-homes" },
  { label: "Custom Homes in DFW", to: "/our-homes" },
  { label: "Custom Homes in North Texas", to: "/about", hash: "areas-we-serve" },
  { label: "Luxury Custom Homes in Dallas TX", to: "/projects" },
  { label: "Modern Custom Homes in Texas", to: "/our-homes", hash: "style-03" },
  {
    label: "Residential Architect Services in Texas",
    to: "/services",
    hash: "design-consultation",
  },
] as const;

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    const emailToSubmit = newsletterEmail.trim();
    setSubscribed(true);
    setNewsletterEmail("");
    try {
      await submitNewsletter({
        data: {
          email: emailToSubmit,
          source: "Footer Newsletter Form",
        },
      });
    } catch (err) {
      console.error("Footer newsletter subscription error:", err);
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-ivory/15 bg-charcoal text-ivory">
      {/* Top Champagne Gradient Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-champagne to-transparent"
      />

      {/* Ambient Champagne Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#9B8766]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 -bottom-40 h-96 w-96 rounded-full bg-champagne/10 blur-3xl"
      />

      <div className="container-lux relative z-10 pt-[70px] pb-10">
        {/* =========================================================
            ROW 1: BRAND, QUICK LINKS, OUR SERVICES, AREAS WE SERVE
           ========================================================= */}
        <div className="grid gap-10 border-b border-ivory/12 pb-12 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Description (4 Cols) */}
          <div className="lg:col-span-4 lg:pr-6">
            <Link
              to="/"
              className="inline-block focus-visible:outline-none"
              aria-label="Marvel Custom Homes"
            >
              <Logo tone="light" className="h-16 sm:h-20" />
            </Link>
            <p className="mt-5 max-w-sm font-sans text-[0.92rem] leading-[1.75] text-ivory/75">
              Staying connected and operating efficiently are essential for any business, especially
              those that operate primarily online.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-[50px] border border-champagne/30 bg-ivory/[0.04] px-3.5 py-1.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
              <Sparkles className="h-3 w-3 text-champagne" />
              Design • Customize • Build • Enjoy
            </div>
          </div>

          {/* Col 2: QUICK LINKS (2 Cols) */}
          <div className="lg:col-span-2">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 font-sans text-[0.9rem] text-ivory/80 transition-colors duration-200 hover:text-champagne"
                  >
                    <span className="h-1 w-1 rounded-full bg-champagne/50 group-hover:bg-champagne" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: OUR SERVICES (3 Cols) */}
          <div className="lg:col-span-3">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="mt-5 space-y-3">
              {OUR_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    hash={service.hash}
                    className="group inline-flex items-start gap-2 font-sans text-[0.9rem] leading-snug text-ivory/80 transition-colors duration-200 hover:text-champagne"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne/50 group-hover:bg-champagne" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: AREAS WE SERVE (3 Cols, 2-Column Grid) */}
          <div className="lg:col-span-3">
            <FooterHeading>Areas We Serve</FooterHeading>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {AREAS_WE_SERVE.map((area) => (
                <li key={area}>
                  <Link
                    to="/about"
                    hash="areas-we-serve"
                    className="group inline-flex items-center gap-1.5 font-sans text-[0.88rem] text-ivory/80 transition-colors duration-200 hover:text-champagne"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-champagne/75 group-hover:text-champagne" />
                    <span>{area}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================================
            ROW 2: CONTACT, SUBSCRIBE NEWSLETTER, FOLLOW US ON
           ========================================================= */}
        <div className="grid items-start gap-10 border-b border-ivory/12 py-10 lg:grid-cols-12 lg:gap-8">
          {/* CONTACT (4 Cols) */}
          <div className="lg:col-span-4">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-3.5 font-sans text-[0.9rem] text-ivory/85">
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-champagne"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] border border-ivory/15 bg-ivory/[0.05] text-champagne transition-colors group-hover:border-champagne/60">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span className="break-all">{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-champagne"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] border border-ivory/15 bg-ivory/[0.05] text-champagne transition-colors group-hover:border-champagne/60">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-ivory group-hover:text-champagne">
                    {BUSINESS.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=10830+N.+Central+Expressway+Ste.130+Dallas,+TX+75231"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-start gap-3 text-ivory/80 transition-colors duration-200 hover:text-champagne"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] border border-ivory/15 bg-ivory/[0.05] text-champagne transition-colors group-hover:border-champagne/60">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-1">
                    {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* SUBSCRIBE NEWSLETTER (5 Cols) */}
          <div className="lg:col-span-5">
            <FooterHeading>Subscribe Newsletter</FooterHeading>
            <p className="mt-3 font-sans text-xs text-ivory/65">
              Receive curated architectural insights, new custom residence unveilings, and design
              trends.
            </p>

            {subscribed ? (
              <div className="mt-4 inline-flex items-center gap-2.5 rounded-[6px] border border-champagne/40 bg-ivory/[0.06] px-4 py-3 font-sans text-xs font-medium text-champagne">
                <Check className="h-4 w-4 text-champagne" />
                <span>Thank you for subscribing to the Marvel Custom Homes newsletter.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex max-w-md flex-col gap-2.5 sm:flex-row sm:items-stretch"
              >
                <label className="sr-only" htmlFor="footer-newsletter-email">
                  Email
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email"
                  className="min-w-0 flex-1 rounded-[6px] border border-ivory/20 bg-ivory/[0.06] px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory/45 focus:border-champagne focus:ring-2 focus:ring-champagne/25 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group/sub relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[6px] border border-champagne/80 bg-gradient-to-r from-[#9B8766] via-[#b89f74] to-[#9B8766] px-6 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_10px_24px_-8px_rgba(0,0,0,0.6)] transition-all duration-400 hover:border-ivory hover:shadow-[0_14px_30px_-6px_rgba(155,135,102,0.55)]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/sub:translate-x-full"
                  />
                  <span className="relative z-10">Subscribe</span>
                  <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>

          {/* FOLLOW US ON (3 Cols) */}
          <div className="lg:col-span-3">
            <FooterHeading>Follow Us On</FooterHeading>
            <p className="mt-3 font-sans text-xs text-ivory/65">
              Connect with our studio on social media.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Marvel Custom Homes on Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-ivory/[0.05] text-ivory transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Marvel Custom Homes on Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-ivory/[0.05] text-ivory transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Marvel Custom Homes on Twitter"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-ivory/[0.05] text-ivory transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:bg-champagne hover:text-charcoal"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            ROW 3: FEATURED ARCHITECTURAL & CUSTOM HOME TOPICS (SEO LINKS)
           ========================================================= */}
        <div className="border-b border-ivory/12 py-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
            {SEO_LINKS.map((topic) => (
              <Link
                key={topic.label}
                to={topic.to}
                {...(topic.hash ? { hash: topic.hash } : {})}
                className="font-sans text-[0.78rem] text-ivory/65 underline decoration-ivory/25 underline-offset-4 transition-colors duration-300 hover:text-champagne hover:decoration-champagne"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================================
            ROW 4: COPYRIGHT & LEGAL BOTTOM BAR
           ========================================================= */}
        <div className="mt-8 flex flex-col gap-4 font-sans text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marvel Custom Homes. All rights reserved.</p>
          <p>
            Design and Develop by{" "}
            <a
              href="https://stellrit.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-champagne transition-colors hover:text-ivory"
            >
              StellR IT LLC.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden="true" className="h-3.5 w-[2px] rounded-full bg-champagne" />
      <h3 className="font-sans text-[0.74rem] font-bold uppercase tracking-[0.22em] text-champagne">
        {children}
      </h3>
    </div>
  );
}
