import { BadgeCheck, MapPin, Quote, Star } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/* 09 — TESTIMONIALS (Google Verified Reviews) */
interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  location: string;
  project: string;
  date: string;
  quote: string;
}

const ROW_ONE_REVIEWS: readonly ReviewItem[] = [
  {
    id: "r1",
    name: "Jessica R.",
    initials: "JR",
    location: "North Dallas, TX",
    project: "Complete Custom Home",
    date: "Verified Google Review",
    quote:
      "Marvel Custom Homes built our dream home in North Dallas and we couldn’t be happier. The attention to detail, responsiveness, and craftsmanship exceeded our expectations. Every room was designed exactly how we envisioned it. The team made the entire process stress-free. Highly recommend!",
  },
  {
    id: "r2",
    name: "Priya N.",
    initials: "PN",
    location: "Plano, TX",
    project: "Custom Smart Residence",
    date: "Verified Google Review",
    quote:
      "From our initial design meeting to the final walkthrough, Marvel’s team was fantastic. They helped us create a truly custom home that feels both luxurious and personal. The smart home features they installed are amazing — everything works beautifully. Worth every penny!",
  },
  {
    id: "r3",
    name: "Marcus T.",
    initials: "MT",
    location: "Frisco, TX",
    project: "Custom Lot Construction",
    date: "Verified Google Review",
    quote:
      "We chose Marvel to build on our lot in Frisco and the quality of the home speaks for itself. The finishes are top-notch and the layout fits our lifestyle perfectly. There were a few back-and-forths during design revisions, but in the end, the results were excellent. Would use them again.",
  },
  {
    id: "r4",
    name: "Brandon M.",
    initials: "BM",
    location: "Prosper, TX",
    project: "Kitchen & Primary Suite",
    date: "Verified Google Review",
    quote:
      "Great overall experience with Marvel Custom Homes. They were professional and transparent throughout our build. A few minor delays during the permitting stage, but everything else was handled smoothly. We absolutely love our new kitchen and master suite.",
  },
] as const;

const ROW_TWO_REVIEWS: readonly ReviewItem[] = [
  {
    id: "r5",
    name: "Elena & David K.",
    initials: "EK",
    location: "Southlake, TX",
    project: "Architectural Design & Build",
    date: "Verified Google Review",
    quote:
      "Working with Marvel’s architects and interior finish team felt effortless. Their bookmatched stone work in our kitchen and great room is breathtaking, and their project manager kept us updated every single week from foundation to move-in.",
  },
  {
    id: "r6",
    name: "Siddharth V.",
    initials: "SV",
    location: "Frisco, TX",
    project: "Turnkey Luxury Estate",
    date: "Verified Google Review",
    quote:
      "The level of finish-out and millwork precision Marvel delivered is unmatched in DFW. Every cabinet, coffered ceiling, and double-vanity suite looks like an architectural magazine spread. Truly a five-star custom builder.",
  },
  {
    id: "r7",
    name: "Lauren & Chris H.",
    initials: "LH",
    location: "Celina, TX",
    project: "Complete Home Construction",
    date: "Verified Google Review",
    quote:
      "Building a custom home can feel overwhelming, but Marvel guided us through Design, Customize, and Build with complete clarity. Their selections studio helped us curate every slab, fixture, and lighting detail to perfection.",
  },
  {
    id: "r8",
    name: "Jonathan W.",
    initials: "JW",
    location: "Highland Park, TX",
    project: "Interior Finish-Out & Bath",
    date: "Verified Google Review",
    quote:
      "Impeccable craftsmanship and genuine integrity. Our travertine primary bath and custom white-oak kitchen island are the centerpiece of our home. We recommend Marvel Custom Homes to everyone looking for true bespoke quality.",
  },
] as const;

function GoogleGIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"
      />
    </svg>
  );
}

function TestimonialCard({ review }: { review: ReviewItem }) {
  return (
    <figure className="group/card relative flex w-[300px] min-[400px]:w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-[6px] border border-charcoal/12 bg-ivory p-5 shadow-[0_20px_48px_-20px_rgba(28,28,28,0.18)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-[#9B8766] hover:shadow-[0_28px_64px_-16px_rgba(28,28,28,0.32)] sm:w-[430px] sm:p-7">
      {/* Top Animated Champagne Bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#9B8766] via-champagne to-[#9B8766] transition-transform duration-700 ease-[var(--ease-lux)] group-hover/card:scale-x-100"
      />

      {/* Subtle Watermark Quote Icon */}
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-5 h-16 w-16 rotate-180 text-[#9B8766]/[0.06] transition-colors duration-500 group-hover/card:text-[#9B8766]/[0.12]"
      />

      <div>
        {/* Card Header: 5 Stars + Official Google Verified Pill */}
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-[#FABB05] text-[#FABB05]" />
              ))}
            </div>
            <span className="ml-1 font-sans text-xs font-bold text-charcoal">5.0</span>
          </div>

          {/* Google Verified Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-[50px] border border-charcoal/10 bg-bone px-3 py-1 shadow-2xs">
            <GoogleGIcon className="h-3.5 w-3.5 shrink-0" />
            <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-charcoal">
              Google Verified
            </span>
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 fill-[#1A73E8] text-ivory" />
          </div>
        </div>

        {/* Review Quote */}
        <blockquote className="relative z-10 mt-5 font-sans text-[0.925rem] leading-[1.75] text-pretty text-charcoal/85">
          “{review.quote}”
        </blockquote>
      </div>

      {/* Reviewer Footer */}
      <figcaption className="relative z-10 mt-6 flex items-center justify-between gap-3 border-t border-charcoal/10 pt-4">
        <div className="flex items-center gap-3">
          {/* Reviewer Avatar Medallion with Verified Tick */}
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B8766]/40 bg-gradient-to-br from-charcoal to-graphite font-serif text-sm font-bold text-champagne shadow-sm">
            {review.initials}
            <span
              aria-hidden="true"
              className="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-ivory"
            >
              <BadgeCheck className="h-3.5 w-3.5 fill-[#34A853] text-ivory" />
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="truncate font-serif text-lg font-bold text-charcoal">{review.name}</p>
            </div>
            <p className="flex items-center gap-1 truncate font-sans text-[0.72rem] text-warm-gray">
              <MapPin className="h-3 w-3 shrink-0 text-[#9B8766]" />
              <span>{review.location}</span>
            </p>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <span className="inline-block rounded-[4px] border border-[#9B8766]/30 bg-bone/80 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#9B8766]">
            {review.project}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  const rowOneLoop = [...ROW_ONE_REVIEWS, ...ROW_ONE_REVIEWS];
  const rowTwoLoop = [...ROW_TWO_REVIEWS, ...ROW_TWO_REVIEWS];

  return (
    <section className="relative overflow-x-clip bg-bone py-[70px] text-charcoal">
      {/* Subtle Ambient Champagne Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/4 h-96 w-96 rounded-full bg-champagne/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 -bottom-36 h-96 w-96 rounded-full bg-[#9B8766]/15 blur-3xl"
      />

      <div className="container-lux relative z-10">
        {/* Section Header */}
        <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-12">
          <Reveal className="lg:col-span-7">
            <div className="[&_p]:font-semibold">
              <Eyebrow n="08">Client Experiences</Eyebrow>
            </div>
            <h2 className="mt-5 font-serif tracking-[-0.02em] text-balance text-charcoal">
              <span className="block text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] font-normal leading-[1.2] text-charcoal/80">
                Built on Trust.
              </span>
              <em className="mt-0.5 block text-[clamp(2.5rem,1.35rem+3.1vw,4.25rem)] font-bold italic leading-[1.04] text-[#9B8766]">
                Remembered for a Lifetime.
              </em>
            </h2>
          </Reveal>

          {/* Official Google Reviews Summary Card */}
          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative rounded-[6px] border border-charcoal/12 bg-ivory p-5 shadow-[0_18px_42px_-20px_rgba(28,28,28,0.2)] sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#9B8766] via-champagne to-transparent"
              />
              <div className="flex flex-col justify-between gap-4 pl-3 sm:flex-row sm:items-center sm:pl-4">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <GoogleGIcon className="h-5 w-5" />
                    <span className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] text-charcoal">
                      Google Reviews
                    </span>
                    <BadgeCheck className="h-4 w-4 fill-[#1A73E8] text-ivory" />
                  </div>
                  <p className="mt-2 font-sans text-[0.88rem] leading-[1.6] text-charcoal/75">
                    100% verified homeowner reviews across North Dallas, Frisco, Prosper &
                    Southlake.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-start rounded-[6px] border border-charcoal/10 bg-bone/80 px-4 py-3 sm:items-center">
                  <span className="font-serif text-3xl font-bold leading-none text-charcoal">
                    5.0
                  </span>
                  <div className="mt-1.5 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#FABB05] text-[#FABB05]" />
                    ))}
                  </div>
                  <span className="mt-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#9B8766]">
                    Verified Rating
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* =========================================================
          2-ROW BIDIRECTIONAL GOOGLE-VERIFIED TESTIMONIAL MARQUEE
         ========================================================= */}
      <div className="relative mt-12 space-y-6 lg:mt-14">
        {/* Left & Right Soft Edge Fade Gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-bone via-bone/75 to-transparent sm:w-24 lg:w-36"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-bone via-bone/75 to-transparent sm:w-24 lg:w-36"
        />

        {/* ROW 1: Slides Right to Left */}
        <div className=" flex overflow-hidden py-1">
          <div className="animate-marquee-rtl flex w-max gap-6 pr-6">
            {rowOneLoop.map((review, i) => (
              <TestimonialCard key={`${review.id}-rtl-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* ROW 2: Slides Left to Right */}
        <div className="flex overflow-hidden py-1">
          <div className="animate-marquee-ltr flex w-max gap-6 pr-6">
            {rowTwoLoop.map((review, i) => (
              <TestimonialCard key={`${review.id}-ltr-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
