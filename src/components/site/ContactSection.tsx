import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Compass,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BUDGETS, PROJECT_TYPES, contactSchema } from "@/lib/contact-schema";
import { submitInquiry } from "@/lib/contact.functions";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<string, string>>;

export function ContactSection({ asPage = false }: { asPage?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const H = asPage ? "h1" : "h2";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submitInquiry({ data: parsed.data });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className={`relative overflow-x-clip bg-ivory text-charcoal ${
        asPage ? "pt-36 pb-[70px] md:pt-44" : "py-[70px]"
      }`}
    >
      {/* Subtle Ambient Champagne Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 right-1/4 h-96 w-96 rounded-full bg-champagne/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-1/4 h-96 w-96 rounded-full bg-[#9B8766]/12 blur-3xl"
      />

      <div className="container-lux relative z-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN: Editorial Heading & Dark-Obsidian Studio Concierge Card */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="[&_p]:font-semibold">
              <Eyebrow n="10">Private Consultation</Eyebrow>
            </div>
            <H className="mt-5 font-serif tracking-[-0.02em] text-charcoal">
              <span className="block text-[clamp(1.35rem,1.05rem+0.9vw,1.9rem)] font-normal leading-[1.2] text-charcoal/80">
                Let’s Create
              </span>
              <em className="mt-0.5 block text-[clamp(1.55rem,4.8vw,2.65rem)] font-bold italic leading-[1.08] whitespace-nowrap text-[#9B8766] lg:text-[clamp(1.85rem,1.2rem+1.7vw,2.65rem)]">
                Something Extraordinary.
              </em>
            </H>
            <p className="mt-4 font-sans text-[0.95rem] leading-[1.75] text-charcoal/75">
              Connect directly with our principal architects and builders to discuss your lot,
              custom residence vision, or interior finish-out commission.
            </p>
          </Reveal>

          {/* Dark-Obsidian Studio Dossier Card */}
          <Reveal delay={140} className="mt-8">
            <div className="relative overflow-hidden rounded-[6px] border border-charcoal/15 bg-charcoal p-6 text-ivory shadow-[0_28px_64px_-20px_rgba(28,28,28,0.5)] sm:p-7">
              {/* Top Champagne Accent Bar */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-ivory"
              />

              {/* Subtle Watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 -bottom-5 font-serif text-[6.5rem] font-bold italic leading-none text-champagne/[0.06] select-none"
              >
                10
              </span>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between border-b border-ivory/12 pb-4">
                  <div className="inline-flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-champagne" />
                    <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                      Dallas Architectural Studio
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-sans text-[0.62rem] font-medium text-ivory/70">
                    <span className="h-2 w-2 rounded-full bg-champagne" />
                    By Appointment
                  </span>
                </div>

                <InfoRow icon={MapPin} label="Studio">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                </InfoRow>

                <InfoRow icon={Phone} label="Telephone">
                  <a
                    href={BUSINESS.phoneHref}
                    className="font-serif text-lg font-bold text-ivory transition-colors hover:text-champagne"
                  >
                    {BUSINESS.phone}
                  </a>
                </InfoRow>

                <InfoRow icon={Mail} label="Direct Email">
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="break-all font-sans text-sm text-ivory/90 underline decoration-champagne/40 underline-offset-4 transition-colors hover:text-champagne"
                  >
                    {BUSINESS.email}
                  </a>
                </InfoRow>

                {/* Service Areas Pills */}
                <div className="border-t border-ivory/12 pt-4">
                  <div className="flex items-center gap-2">
                    <Compass className="h-3.5 w-3.5 text-champagne" />
                    <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                      Service Areas
                    </span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {["Dallas", ...BUSINESS.serviceAreas].map((area) => (
                      <span
                        key={area}
                        className="rounded-[4px] border border-ivory/15 bg-ivory/[0.06] px-2.5 py-1 font-sans text-[0.68rem] font-medium text-ivory/85"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Studio Promise */}
                <div className="flex items-center gap-2.5 rounded-[6px] border border-champagne/25 bg-ivory/[0.04] px-3.5 py-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-champagne" />
                  <span className="font-sans text-xs text-ivory/80">
                    Direct principal response within{" "}
                    <strong className="text-champagne">24 hours</strong>.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN: Framed Private Commission Form Card */}
        <Reveal delay={180} className="lg:col-span-7">
          <div className="relative">
            {/* Floating Offset Champagne Frame */}
            <div
              aria-hidden="true"
              className="animate-welcome-frame pointer-events-none absolute -inset-2 rounded-[6px] border border-[#9B8766]/30 bg-bone/50"
            />

            <div className="relative z-10 overflow-hidden rounded-[6px] border border-charcoal/15 bg-bone/80 p-6 shadow-[0_28px_64px_-20px_rgba(28,28,28,0.22)] backdrop-blur-sm sm:p-9 lg:p-10">
              {/* Top Champagne Hairline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#9B8766] via-champagne to-[#9B8766]"
              />

              {status === "done" ? (
                <div
                  role="status"
                  className="flex min-h-[460px] flex-col items-start justify-center p-4 sm:p-6"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#9B8766] bg-charcoal text-champagne shadow-lg">
                    <Check className="h-6 w-6" />
                  </span>
                  <span className="mt-6 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#9B8766]">
                    Inquiry Received
                  </span>
                  <h3 className="mt-2 font-serif text-4xl font-bold text-charcoal">
                    Thank you for reaching out.
                  </h3>
                  <p className="mt-3 max-w-md font-sans text-[0.95rem] leading-[1.75] text-charcoal/75">
                    Your inquiry has been received. A principal member of our team will be in touch
                    shortly to arrange your private consultation.
                  </p>
                </div>
              ) : (
                <>
                  {/* Form Top Header Bar */}
                  <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-charcoal/12 pb-5">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal sm:text-[1.65rem]">
                        Request a Private Consultation
                      </h3>
                      <p className="mt-1 font-sans text-xs text-warm-gray">
                        Share a few details about your residence, lot, or renovation goals.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-[50px] border border-[#9B8766]/35 bg-ivory px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#9B8766]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Strictly Confidential
                    </span>
                  </div>

                  <form
                    onSubmit={onSubmit}
                    noValidate
                    className="grid gap-x-6 gap-y-5 sm:grid-cols-2"
                  >
                    <Field
                      name="fullName"
                      label="Full Name"
                      placeholder="Your full name"
                      error={errors["fullName"]}
                      autoComplete="name"
                    />
                    <Field
                      name="email"
                      label="Email Address"
                      type="email"
                      placeholder="name@example.com"
                      error={errors["email"]}
                      autoComplete="email"
                    />
                    <Field
                      name="phone"
                      label="Phone Number"
                      type="tel"
                      placeholder="(214) 000-0000"
                      error={errors["phone"]}
                      autoComplete="tel"
                    />
                    <Field
                      name="address"
                      label="Project Address / City"
                      placeholder="Dallas, Frisco, Prosper…"
                      error={errors["address"]}
                      autoComplete="street-address"
                      optional
                    />
                    <Select
                      name="projectType"
                      label="Project Type"
                      options={PROJECT_TYPES}
                      error={errors["projectType"]}
                    />
                    <Select
                      name="budget"
                      label="Estimated Project Budget"
                      options={BUDGETS}
                      error={errors["budget"]}
                    />

                    <label className="block sm:col-span-2">
                      <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal/85">
                        Tell Us About Your Vision
                      </span>
                      <textarea
                        name="vision"
                        rows={4}
                        placeholder="Describe your desired architectural style, timeline, lot details, or custom spaces…"
                        className="mt-2 w-full resize-none rounded-[6px] border border-charcoal/15 bg-ivory px-4 py-3 font-sans text-[0.92rem] text-charcoal placeholder:text-warm-gray/65 focus:border-[#9B8766] focus:ring-2 focus:ring-[#9B8766]/20 focus:outline-none"
                        aria-invalid={!!errors["vision"]}
                      />
                      {errors["vision"] && (
                        <span className="mt-1.5 block font-sans text-xs font-medium text-destructive">
                          {errors["vision"]}
                        </span>
                      )}
                    </label>

                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden
                    />

                    <div className="mt-2 flex flex-col gap-4 border-t border-charcoal/12 pt-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="inline-flex items-center gap-2 font-sans text-xs text-charcoal/70">
                        <span className="h-2 w-2 rounded-full bg-[#9B8766]" />
                        We respond to every inquiry personally.
                      </p>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group/btn relative inline-flex cursor-pointer items-center justify-center gap-3.5 overflow-hidden rounded-[50px] border border-[#9B8766]/60 bg-charcoal px-8 py-4 font-sans text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_16px_36px_-10px_rgba(28,28,28,0.45)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-gradient-to-r hover:from-[#9B8766] hover:via-[#b89f74] hover:to-[#9B8766] hover:shadow-[0_22px_44px_-8px_rgba(155,135,102,0.55)] disabled:pointer-events-none disabled:opacity-60"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[var(--ease-lux)] group-hover/btn:translate-x-full"
                        />
                        <span className="relative z-10">
                          {status === "sending" ? "Sending…" : "Request Consultation"}
                        </span>
                        <span
                          aria-hidden="true"
                          className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-ivory/15 text-champagne transition-all duration-500 ease-[var(--ease-lux)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-ivory group-hover/btn:text-charcoal"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </button>
                    </div>

                    {status === "error" && (
                      <p
                        role="alert"
                        className="rounded-[6px] border border-destructive/30 bg-destructive/10 px-4 py-3 font-sans text-xs font-medium text-destructive sm:col-span-2"
                      >
                        Something went wrong sending your inquiry. Please try again or call{" "}
                        {BUSINESS.phone}.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] border border-champagne/30 bg-ivory/[0.06] text-champagne">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne/85">
          {label}
        </p>
        <div className="mt-1 font-sans text-sm leading-relaxed text-ivory/90">{children}</div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
  autoComplete,
  optional,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string | undefined;
  autoComplete?: string;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal/85">
        {label}
        {optional && <span className="font-normal text-warm-gray"> (optional)</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-[6px] border border-charcoal/15 bg-ivory px-4 py-3 font-sans text-[0.92rem] text-charcoal placeholder:text-warm-gray/65 transition-all focus:border-[#9B8766] focus:ring-2 focus:ring-[#9B8766]/20 focus:outline-none"
        aria-invalid={!!error}
      />
      {error && (
        <span className="mt-1.5 block font-sans text-xs font-medium text-destructive">{error}</span>
      )}
    </label>
  );
}

function Select({
  name,
  label,
  options,
  error,
}: {
  name: string;
  label: string;
  options: readonly string[];
  error?: string | undefined;
}) {
  return (
    <label className="block">
      <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal/85">
        {label}
      </span>
      <div className="relative mt-2">
        <select
          name={name}
          defaultValue=""
          className="w-full cursor-pointer appearance-none rounded-[6px] border border-charcoal/15 bg-ivory py-3 pr-10 pl-4 font-sans text-[0.92rem] text-charcoal transition-all focus:border-[#9B8766] focus:ring-2 focus:ring-[#9B8766]/20 focus:outline-none"
          aria-invalid={!!error}
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#9B8766]"
        />
      </div>
      {error && (
        <span className="mt-1.5 block font-sans text-xs font-medium text-destructive">{error}</span>
      )}
    </label>
  );
}
