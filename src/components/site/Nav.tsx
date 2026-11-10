import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-serif text-2xl tracking-[0.18em]">MARVEL</span>
      <span className="eyebrow mt-1 text-[0.55rem] tracking-[0.5em] opacity-80">Custom Homes</span>
    </span>
  );
}

export function Nav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = path === "/" && !scrolled;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const tone = overHero && !open ? "text-ivory" : "text-charcoal";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        overHero ? "bg-transparent py-7" : "bg-ivory/92 py-4 backdrop-blur-md border-b border-border"
      } ${tone}`}
    >
      <nav className="container-lux flex items-center justify-between" aria-label="Main">
        <Link to="/" aria-label="Marvel Custom Homes — home" className="relative z-10">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-10 lg:flex">
          {NAV.slice(1).map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="eyebrow link-line opacity-85 hover:opacity-100"
                activeProps={{ className: "opacity-100" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className={`eyebrow hidden border px-6 py-3 transition-colors duration-500 sm:inline-block ${
              overHero ? "border-ivory/60 hover:bg-ivory hover:text-charcoal" : "border-charcoal hover:bg-charcoal hover:text-ivory"
            }`}
          >
            Let's Talk
          </Link>
          <button
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`h-px w-7 bg-current transition-transform duration-500 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-7 bg-current transition-transform duration-500 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-ivory transition-[opacity,visibility] duration-700 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-lux flex h-full flex-col justify-between pb-10 pt-32 text-charcoal">
          <ul className="space-y-5">
            {NAV.map((n, i) => (
              <li key={n.to} className={open ? "animate-rise" : ""} style={{ animationDelay: `${i * 70}ms` }}>
                <Link to={n.to} className="font-serif text-5xl font-light">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="tel:+12148867527" className="block">(214) 886-7527</a>
            <a href="mailto:marvel.care@marvelcustomhomes.com" className="block">marvel.care@marvelcustomhomes.com</a>
          </div>
        </div>
      </div>
    </header>
  );
}
