import { Link } from "@tanstack/react-router";
import { BUSINESS, NAV } from "@/lib/site";
import { Logo } from "./Nav";

const SERVICES = [
  "Complete Home Construction",
  "Architectural Design Consultation",
  "Interior Finish-Out",
  "Custom Interior Features",
];

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory">
      <div className="container-lux pt-24 pb-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-8 max-w-sm font-serif text-2xl font-light leading-snug text-ivory/80">
              Thoughtfully designed. Beautifully crafted. Distinctively yours.
            </p>
          </div>
          <FooterCol title="Explore" className="lg:col-span-2">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-champagne transition-colors">{n.label}</Link></li>
            ))}
          </FooterCol>
          <FooterCol title="Services" className="lg:col-span-3">
            {SERVICES.map((s) => (
              <li key={s}><Link to="/services" className="hover:text-champagne transition-colors">{s}</Link></li>
            ))}
          </FooterCol>
          <FooterCol title="Studio" className="lg:col-span-3">
            <li>{BUSINESS.street}<br />{BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}</li>
            <li><a href={BUSINESS.phoneHref} className="hover:text-champagne transition-colors">{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-champagne transition-colors">{BUSINESS.email}</a></li>
          </FooterCol>
        </div>

        <div className="mt-20 border-t border-ivory/10 pt-8">
          <p className="eyebrow text-champagne">Serving</p>
          <p className="mt-3 text-sm text-ivory/60">{["Dallas", ...BUSINESS.serviceAreas].join("  ·  ")}</p>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marvel Custom Homes. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-ivory">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-ivory">Facebook</a>
            <a href="#" className="hover:text-ivory">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow text-champagne">{title}</p>
      <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ivory/75">{children}</ul>
    </div>
  );
}
