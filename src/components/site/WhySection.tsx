import stone from "@/assets/detail-stone.jpg";
import { Eyebrow } from "./Eyebrow";
import { Parallax, Reveal } from "./Reveal";

/* 08 — WHY */
const PILLARS = [
  ["Quality Craftsmanship", "Skilled trades and careful oversight at every stage of the build."],
  ["Personalized Design", "Homes shaped around your routines, preferences and the way you gather."],
  ["Premium Materials", "Natural stone, fine woods and fixtures selected to last and to age well."],
  [
    "Attention to Detail",
    "Reveals, transitions and alignments considered long before installation.",
  ],
  ["Project Coordination", "Clear schedules, transparent communication and one point of contact."],
  ["Long-Term Quality", "Built for decades of living — not just the day you receive the keys."],
];

export function WhySection() {
  return (
    <section className="section-y bg-graphite text-ivory">
      <div className="container-lux grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow n="07" light>
              Why Marvel
            </Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.75rem)]">
              Excellence Is in <em className="italic text-champagne">Every Detail.</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-12 hidden lg:block">
            <Parallax
              src={stone}
              alt="Stone and bronze architectural detail"
              width={1008}
              height={1312}
              className="aspect-[4/5] w-4/5"
            />
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
