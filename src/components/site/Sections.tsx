import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Parallax, Reveal } from "./Reveal";
import hero from "@/assets/hero-residence.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import living from "@/assets/living.jpg";
import stone from "@/assets/detail-stone.jpg";
import construction from "@/assets/construction.jpg";
import consult from "@/assets/design-consult.jpg";
import bedroom from "@/assets/bedroom.jpg";
import exterior from "@/assets/exterior-day.jpg";
import outdoor from "@/assets/outdoor.jpg";

function Eyebrow({ n, children, light = false }: { n?: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${light ? "text-champagne" : "text-bronze"}`}>
      {n && <span>{n}</span>}
      <span className="h-px w-10 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}

/* 01 — HERO */
export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-graphite text-ivory">
      <img
        src={hero}
        alt="Contemporary limestone custom residence glowing at dusk beside a reflecting pool"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="animate-hero absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-lux relative flex h-full flex-col justify-end pb-24 md:pb-28">
        <p className="eyebrow animate-rise text-champagne" style={{ animationDelay: "300ms" }}>
          Dallas · Custom Homes &amp; Interiors
        </p>
        <h1 className="display animate-rise mt-6 max-w-5xl text-[clamp(3rem,8.5vw,8.5rem)]" style={{ animationDelay: "450ms" }}>
          Where Extraordinary <em className="font-light italic text-champagne">Living</em> Takes Shape.
        </h1>
        <div className="animate-rise mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between" style={{ animationDelay: "700ms" }}>
          <p className="max-w-md text-base leading-relaxed text-ivory/80">
            Thoughtfully designed. Beautifully crafted. Distinctively yours. Discover the art of custom living with Marvel Custom Homes.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <Link to="/projects" className="eyebrow link-line">Explore Our Work</Link>
            <Link to="/contact" className="eyebrow group inline-flex items-center gap-4 bg-ivory px-8 py-4 text-charcoal transition-colors duration-500 hover:bg-champagne">
              Begin Your Journey <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden>
        <span className="eyebrow text-[0.55rem] text-ivory/60">Scroll</span>
        <span className="animate-scroll-cue h-12 w-px bg-ivory/70" />
      </div>
    </section>
  );
}

/* 02 — INTRO */
export function Intro() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-lux grid items-center gap-16 lg:grid-cols-12">
        <div className="relative lg:col-span-7">
          <Reveal>
            <Parallax src={exterior} alt="White brick and limestone transitional custom home framed by mature oaks" width={1600} height={1104} className="aspect-[4/5] w-[85%] md:aspect-[5/4]" />
          </Reveal>
          <Reveal delay={250} className="absolute -bottom-12 right-0 w-[42%] border-[10px] border-ivory md:-bottom-16">
            <div className="img-zoom aspect-[3/4]">
              <img src={stone} alt="Honed limestone meeting a bronze window frame in raking light" width={1008} height={1312} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
        <div className="pt-12 lg:col-span-5 lg:pl-8 lg:pt-0">
          <Reveal><Eyebrow n="01">Our Story</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="display mt-8 text-[clamp(2.75rem,5vw,4.75rem)]">Building Beyond <em className="italic">Expectations.</em></h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-lg text-[1.0625rem] leading-[1.85] text-muted-foreground">
              At Marvel Custom Homes, we believe a home should be more than a structure. It should be a reflection of your lifestyle, individuality, and vision. From architectural planning to the finest interior details, we bring every element together with precision, creativity, and craftsmanship.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link to="/about" className="eyebrow link-line mt-12 text-charcoal">Discover Our Story <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 03 — SERVICES */
export const SERVICES = [
  { n: "01", title: "Complete Home Construction", img: construction, alt: "Steel and timber framing of a custom home at golden hour", w: 1504, h: 1104,
    copy: "From foundation to final walkthrough, a single accountable team coordinating every trade, schedule, and finish with care." },
  { n: "02", title: "Architectural Design Consultation", img: consult, alt: "Architectural drawings, white model and stone, oak and bronze samples", w: 1200, h: 1504,
    copy: "Collaborative planning that translates how you live into proportion, light, and flow — before a single wall is raised." },
  { n: "03", title: "Interior Finish-Out", img: living, alt: "Double-height living room with travertine fireplace wall", w: 1600, h: 1104,
    copy: "Millwork, stone, flooring and lighting curated into a cohesive interior that feels considered in every room." },
  { n: "04", title: "Custom Interior Features & Double Vanities", img: bathroom, alt: "Walnut double vanity and stone tub in a travertine bathroom", w: 1104, h: 1504,
    copy: "Bespoke vanities, cabinetry and built-ins detailed to your routines, crafted in materials made to age beautifully." },
];

export function Services() {
  return (
    <section className="section-y bg-cream">
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow n="02">Signature Services</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.75rem,5.5vw,5.25rem)]">The Art of Creating <em className="italic">Extraordinary</em> Spaces.</h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted-foreground">Four disciplines, one standard. Every commission is guided from vision to completion by the same team.</p>
          </Reveal>
        </div>

        <div className="mt-24 space-y-28 md:space-y-40">
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            const tall = s.h > s.w;
            return (
              <article key={s.n} className="grid items-center gap-10 md:grid-cols-12">
                <Reveal className={flip ? "md:order-2 md:col-span-5 md:col-start-8 md:row-start-1" : tall ? "md:col-span-5" : "md:col-span-7"}>
                  <Link to="/services" className="img-zoom block" aria-label={s.title}>
                    <img src={s.img} alt={s.alt} width={s.w} height={s.h} loading="lazy" className={`w-full object-cover ${tall ? "aspect-[4/5]" : "aspect-[3/2]"}`} />
                  </Link>
                </Reveal>
                <Reveal delay={150} className={flip ? "md:order-1 md:col-span-5 md:col-start-2 md:row-start-1" : tall ? "md:col-span-5 md:col-start-8" : "md:col-span-4 md:col-start-9"}>
                  <span className="font-serif text-7xl font-light text-champagne md:text-8xl">{s.n}</span>
                  <h3 className="mt-4 text-3xl md:text-4xl">{s.title}</h3>
                  <p className="mt-5 max-w-md leading-[1.8] text-muted-foreground">{s.copy}</p>
                  <Link to="/services" className="eyebrow link-line mt-8">Explore Service <ArrowUpRight className="h-4 w-4" /></Link>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 04 — PROCESS */
const STEPS = [
  { n: "01", t: "Design", d: "Collaborate to develop a vision that reflects your lifestyle and architectural preferences.", img: consult, w: 1200, h: 1504 },
  { n: "02", t: "Customize", d: "Explore materials, finishes, layouts, and personalized details.", img: stone, w: 1008, h: 1312 },
  { n: "03", t: "Build", d: "Bring the vision to life through carefully coordinated construction and craftsmanship.", img: construction, w: 1504, h: 1104 },
  { n: "04", t: "Enjoy", d: "Experience a home created around the way you want to live.", img: bedroom, w: 1504, h: 1104 },
];

export function Process() {
  return (
    <section className="section-y bg-charcoal text-ivory">
      <div className="container-lux">
        <Reveal>
          <Eyebrow n="03" light>Our Process</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.75rem,6vw,6rem)]">From Vision <em className="italic text-champagne">to Reality.</em></h2>
        </Reveal>
      </div>
      <div className="mt-20 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[clamp(1.25rem,5vw,5rem)] pb-6 [scrollbar-width:none] md:gap-10">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 120} className="w-[82vw] shrink-0 snap-start sm:w-[46vw] lg:w-[calc((100vw-10rem-7.5rem)/4)] lg:min-w-[280px]">
            <div className="img-zoom aspect-[3/4]">
              <img src={s.img} alt={`${s.t} stage`} width={s.w} height={s.h} loading="lazy" className="h-full w-full object-cover opacity-85" />
            </div>
            <div className="mt-8 border-t border-ivory/15 pt-6">
              <span className="eyebrow text-champagne">{s.n}</span>
              <h3 className="mt-3 text-4xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/65">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* 05 — INSPIRATION GALLERY */
const GALLERY = [
  { img: kitchen, alt: "Calacatta marble kitchen with oak cabinetry and brass pendants", label: "Kitchens", cls: "md:col-span-7 md:row-span-2", w: 1600, h: 1104 },
  { img: bathroom, alt: "Travertine bathroom with walnut vanity", label: "Bathrooms", cls: "md:col-span-5 md:row-span-3", w: 1104, h: 1504 },
  { img: hero, alt: "Modern stone residence at dusk", label: "Exteriors", cls: "md:col-span-4 md:row-span-2", w: 1920, h: 1088 },
  { img: stone, alt: "Limestone and bronze detail", label: "Stone & Finishes", cls: "md:col-span-3 md:row-span-2", w: 1008, h: 1312 },
  { img: bedroom, alt: "Serene oak-paneled primary bedroom", label: "Bedrooms", cls: "md:col-span-5 md:row-span-2", w: 1504, h: 1104 },
  { img: living, alt: "Double-height living room", label: "Living Spaces", cls: "md:col-span-4 md:row-span-2", w: 1600, h: 1104 },
  { img: outdoor, alt: "Stone loggia with fireplace overlooking pool at twilight", label: "Outdoor Living", cls: "md:col-span-3 md:row-span-2", w: 1920, h: 1088 },
];

export function Gallery() {
  return (
    <section className="section-y">
      <div className="container-lux">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <Eyebrow n="04">Inspiration</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.75rem)]">Spaces That Inspire. <em className="italic">Details That Matter.</em></h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-3 md:col-start-10">
            <Link to="/inspiration" className="eyebrow link-line">View the Gallery <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[140px] md:grid-cols-12 md:gap-5">
          {GALLERY.map((g, i) => (
            <Reveal key={g.label} delay={(i % 3) * 120} className={`${i === 0 || i === 1 ? "col-span-2" : ""} ${g.cls} group relative img-zoom`}>
              <img src={g.img} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-graphite/60 via-transparent to-transparent p-5 opacity-100 transition-opacity duration-700 md:opacity-0 md:group-hover:opacity-100">
                <span className="eyebrow text-ivory">{g.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 06 — COLLECTIONS */
export function Collections() {
  return (
    <section className="bg-cream">
      <div className="container-lux section-y !pb-0">
        <Reveal>
          <Eyebrow n="05">Featured Collections</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.75rem)]">Discover the <em className="italic">Marvel Collection.</em></h2>
        </Reveal>
      </div>

      {/* Kitchen — full bleed with overlay */}
      <div className="relative mt-20 h-[85vh] min-h-[520px] text-ivory">
        <Parallax src={kitchen} alt="The Kitchen Collection — marble island and oak millwork" width={1600} height={1104} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/85 via-graphite/45 to-transparent" />
        <div className="container-lux relative flex h-full items-end pb-16 md:items-center md:pb-0">
          <Reveal className="max-w-md">
            <span className="eyebrow text-champagne">01 — The Kitchen Collection</span>
            <p className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">“Where thoughtful design meets exceptional functionality.”</p>
          </Reveal>
        </div>
      </div>

      {/* Bathroom — split */}
      <div className="container-lux section-y grid items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5 md:col-start-2">
          <span className="eyebrow text-bronze">02 — The Bathroom Collection</span>
          <p className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">“Refined materials. Beautiful proportions. Everyday luxury.”</p>
        </Reveal>
        <Reveal delay={150} className="img-zoom md:col-span-5 md:col-start-8">
          <img src={bathroom} alt="The Bathroom Collection — travertine and walnut" width={1104} height={1504} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </Reveal>
      </div>

      {/* Exteriors — dark band */}
      <div className="bg-graphite text-ivory">
        <div className="container-lux grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="img-zoom md:col-span-8">
            <img src={exterior} alt="Architectural Exteriors — limestone arched entry" width={1600} height={1104} loading="lazy" className="aspect-[16/10] w-full object-cover" />
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-end md:col-span-4">
            <span className="eyebrow text-champagne">03 — Architectural Exteriors</span>
            <p className="mt-6 font-serif text-4xl font-light leading-tight">“Distinctive architecture with timeless visual appeal.”</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 07 — PORTFOLIO (placeholders until real projects are supplied) */
const PROJECTS = [
  { cat: "Complete Home Construction", img: hero, w: 1920, h: 1088 },
  { cat: "Interior Finish-Out", img: living, w: 1600, h: 1104 },
  { cat: "Custom Kitchen", img: kitchen, w: 1600, h: 1104 },
];

export function Portfolio() {
  return (
    <section className="section-y">
      <div className="container-lux">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <Eyebrow n="06">Signature Projects</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.5rem,5.5vw,5.25rem)]">Crafted With Purpose. <em className="italic">Built to Inspire.</em></h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-3 md:col-start-10">
            <p className="text-xs leading-relaxed text-muted-foreground">Project names, locations and photography shown here are placeholders awaiting verified Marvel project content.</p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <ProjectCard p={PROJECTS[0]!} idx={1} className="aspect-[4/5] md:aspect-[21/9]" />
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7"><ProjectCard p={PROJECTS[1]!} idx={2} className="aspect-[4/3]" /></Reveal>
          <Reveal delay={150} className="md:col-span-5 md:mt-32"><ProjectCard p={PROJECTS[2]!} idx={3} className="aspect-[4/5]" /></Reveal>
        </div>
        <div className="mt-20 flex justify-center">
          <Link to="/projects" className="eyebrow border border-charcoal px-10 py-5 transition-colors duration-500 hover:bg-charcoal hover:text-ivory">View All Projects</Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, idx, className }: { p: (typeof PROJECTS)[number]; idx: number; className: string }) {
  return (
    <Link to="/projects" className="group block">
      <div className={`img-zoom relative ${className}`}>
        <img src={p.img} alt={`${p.cat} — placeholder project image`} width={p.w} height={p.h} loading="lazy" className="h-full w-full object-cover" />
        <span className="eyebrow absolute left-5 top-5 bg-ivory/90 px-3 py-2 text-[0.6rem] text-charcoal">Placeholder</span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6 border-t border-border pt-5">
        <div>
          <p className="eyebrow text-bronze">{String(idx).padStart(2, "0")} · {p.cat}</p>
          <h3 className="mt-3 text-3xl">Project Name Forthcoming</h3>
          <p className="mt-2 text-sm text-muted-foreground">Location to be confirmed · Description awaiting project details.</p>
        </div>
        <span className="eyebrow link-line shrink-0">View Project <ArrowUpRight className="h-4 w-4" /></span>
      </div>
    </Link>
  );
}

/* 08 — WHY */
const PILLARS = [
  ["Quality Craftsmanship", "Skilled trades and careful oversight at every stage of the build."],
  ["Personalized Design", "Homes shaped around your routines, preferences and the way you gather."],
  ["Premium Materials", "Natural stone, fine woods and fixtures selected to last and to age well."],
  ["Attention to Detail", "Reveals, transitions and alignments considered long before installation."],
  ["Project Coordination", "Clear schedules, transparent communication and one point of contact."],
  ["Long-Term Quality", "Built for decades of living — not just the day you receive the keys."],
];

export function Why() {
  return (
    <section className="section-y bg-graphite text-ivory">
      <div className="container-lux grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow n="07" light>Why Marvel</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.75rem)]">Excellence Is in <em className="italic text-champagne">Every Detail.</em></h2>
          </Reveal>
          <Reveal delay={200} className="mt-12 hidden lg:block">
            <Parallax src={stone} alt="Stone and bronze architectural detail" width={1008} height={1312} className="aspect-[4/5] w-4/5" />
          </Reveal>
        </div>
        <div className="grid content-start gap-x-12 gap-y-14 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:pt-40">
          {PILLARS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 120} className="border-t border-ivory/15 pt-6">
              <span className="eyebrow text-champagne">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/60">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 09 — TESTIMONIALS (published on marvelcustomhomes.com, Google Reviews) */
const REVIEWS = [
  { q: "Marvel Custom Homes built our dream home in North Dallas and we couldn’t be happier. The attention to detail, responsiveness, and craftsmanship exceeded our expectations. Every room was designed exactly how we envisioned it. The team made the entire process stress-free. Highly recommend!", a: "Jessica R." },
  { q: "From our initial design meeting to the final walkthrough, Marvel’s team was fantastic. They helped us create a truly custom home that feels both luxurious and personal. The smart home features they installed are amazing — everything works beautifully. Worth every penny!", a: "Priya N." },
  { q: "We chose Marvel to build on our lot in Frisco and the quality of the home speaks for itself. The finishes are top-notch and the layout fits our lifestyle perfectly. There were a few back-and-forths during design revisions, but in the end, the results were excellent. Would use them again.", a: "Marcus T." },
  { q: "Great overall experience with Marvel Custom Homes. They were professional and transparent throughout our build. A few minor delays during the permitting stage, but everything else was handled smoothly. We absolutely love our new kitchen and master suite.", a: "Brandon M." },
];

export function Testimonials() {
  const first = REVIEWS[0]!; const rest = REVIEWS.slice(1);
  return (
    <section className="section-y">
      <div className="container-lux">
        <Reveal>
          <Eyebrow n="08">Client Experiences</Eyebrow>
          <h2 className="display mt-8 max-w-4xl text-[clamp(2.5rem,5vw,4.75rem)]">Built on Trust. <em className="italic">Remembered for a Lifetime.</em></h2>
        </Reveal>
        <Reveal delay={100} as="figure" className="mt-20 grid gap-8 md:grid-cols-12">
          <span className="font-serif text-[9rem] leading-none text-champagne md:col-span-1" aria-hidden>“</span>
          <div className="md:col-span-10">
            <blockquote className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-snug">{first.q}</blockquote>
            <figcaption className="eyebrow mt-8 text-bronze">{first.a} · Google Reviews</figcaption>
          </div>
        </Reveal>
        <div className="mt-24 grid gap-px bg-border md:grid-cols-3">
          {rest.map((r, i) => (
            <Reveal key={r.a} delay={i * 120} as="figure" className="flex flex-col justify-between bg-background p-8 md:p-10">
              <blockquote className="leading-[1.8] text-muted-foreground">“{r.q}”</blockquote>
              <figcaption className="mt-8 flex items-center justify-between">
                <span className="font-serif text-xl">{r.a}</span>
                <span className="eyebrow text-[0.6rem] text-bronze">Google Reviews</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10 — CINEMATIC CTA */
export function CtaBand() {
  return (
    <section className="relative h-[90vh] min-h-[560px] overflow-hidden text-ivory">
      <Parallax src={outdoor} alt="Candlelit stone loggia overlooking a pool at twilight" width={1920} height={1088} className="absolute inset-0" speed={0.18} />
      <div className="absolute inset-0 bg-overlay" />
      <div className="container-lux relative flex h-full flex-col items-center justify-center text-center">
        <Reveal><p className="eyebrow text-champagne">Begin</p></Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-8 max-w-5xl text-[clamp(2.75rem,6.5vw,6.5rem)]">Your Vision Deserves Something <em className="italic text-champagne">Extraordinary.</em></h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-ivory/80">Let's create a home that reflects your lifestyle, your aspirations, and your definition of exceptional living.</p>
        </Reveal>
        <Reveal delay={360}>
          <Link to="/contact" className="eyebrow group mt-12 inline-flex items-center gap-4 border border-ivory/70 px-10 py-5 transition-colors duration-500 hover:bg-ivory hover:text-charcoal">
            Start Your Project <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Inner page header */
export function PageHeader({ eyebrow, title, intro, img, alt }: { eyebrow: string; title: React.ReactNode; intro: string; img: string; alt: string }) {
  return (
    <section className="pt-36 md:pt-48">
      <div className="container-lux grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow animate-rise text-bronze">{eyebrow}</p>
          <h1 className="display animate-rise mt-6 text-[clamp(3rem,7vw,7rem)]" style={{ animationDelay: "120ms" }}>{title}</h1>
        </div>
        <p className="animate-rise leading-relaxed text-muted-foreground md:col-span-4" style={{ animationDelay: "240ms" }}>{intro}</p>
      </div>
      <div className="mt-16 md:mt-24">
        <Parallax src={img} alt={alt} eager className="h-[60vh] min-h-[380px] w-full" />
      </div>
    </section>
  );
}

export const IMAGES = { hero, kitchen, bathroom, living, stone, construction, consult, bedroom, exterior, outdoor };
