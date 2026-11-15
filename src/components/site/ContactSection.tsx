import { useId, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Clock,
  Compass,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BUDGETS, PROJECT_TYPES, contactSchema, type ContactInput } from "@/lib/contact-schema";
import { submitInquiry } from "@/lib/contact.functions";
import { BUSINESS } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type FieldName = keyof ContactInput;
type Errors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: readonly FieldName[] = [
  "fullName",
  "email",
  "phone",
  "address",
  "projectType",
  "budget",
  "vision",
];

function validateSingleField(field: FieldName, value: unknown): string | undefined {
  const fieldSchema = contactSchema.shape[field];
  const result = fieldSchema.safeParse(value);
  if (!result.success) {
    return result.error.issues[0]?.message;
  }
  return undefined;
}

export function ContactSection({ asPage = false }: { asPage?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [edited, setEdited] = useState<Partial<Record<FieldName, boolean>>>({});
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleFieldChange(field: FieldName, value: string) {
    setEdited((prev) => (prev[field] ? prev : { ...prev, [field]: true }));
    if (errors[field]) {
      const nextErr = validateSingleField(field, value);
      setErrors((prev) => {
        if (!nextErr) {
          const copy = { ...prev };
          delete copy[field];
          return copy;
        }
        return { ...prev, [field]: nextErr };
      });
    }
  }

  function handleFieldBlur(field: FieldName, value: string) {
    if (!edited[field] && !value.trim()) return;
    const err = validateSingleField(field, value);
    setErrors((prev) => {
      if (!err) {
        if (!prev[field]) return prev;
        const copy = { ...prev };
        delete copy[field];
        return copy;
      }
      return { ...prev, [field]: err };
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl));
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName | undefined;
        if (key && !errs[key]) {
          errs[key] = issue.message;
        }
      }
      setErrors(errs);

      const firstInvalid = FIELD_ORDER.find((name) => Boolean(errs[name]));
      if (firstInvalid) {
        const control = formEl.elements.namedItem(firstInvalid);
        if (control instanceof HTMLElement) {
          control.focus();
        }
      }
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

  function resetForm() {
    setErrors({});
    setEdited({});
    setSelectedProjectType("");
    setStatus("idle");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className={`relative overflow-x-clip bg-ivory text-charcoal ${
        asPage ? "py-[70px] sm:py-[90px]" : "py-[70px]"
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
              <Eyebrow n={asPage ? "01" : "10"}>Private Consultation</Eyebrow>
            </div>
            <h2
              id="contact-section-heading"
              className="mt-5 font-serif tracking-[-0.02em] text-charcoal"
            >
              <span className="block text-[clamp(1.35rem,1.05rem+0.9vw,1.9rem)] font-normal leading-[1.2] text-charcoal/80">
                Let’s Create
              </span>
              <em className="mt-0.5 block text-[clamp(1.55rem,4.8vw,2.65rem)] font-bold italic leading-[1.08] whitespace-nowrap text-[#9B8766] lg:text-[clamp(1.85rem,1.2rem+1.7vw,2.65rem)]">
                Something Extraordinary.
              </em>
            </h2>
            <p className="mt-4 font-sans text-[0.95rem] leading-[1.75] text-charcoal/78">
              Connect directly with our principal architects and master builders to discuss your
              North Texas lot, custom residence vision, commercial build, or interior finish-out
              commission.
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
                {asPage ? "01" : "10"}
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

                <InfoRow icon={MapPin} label="Studio Address">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                </InfoRow>

                <InfoRow icon={Phone} label="Direct Telephone">
                  <a
                    href={BUSINESS.phoneHref}
                    className="font-serif text-lg font-bold text-ivory transition-colors hover:text-champagne"
                  >
                    {BUSINESS.phone}
                  </a>
                </InfoRow>

                <InfoRow icon={Mail} label="Electronic Mail">
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="break-all font-sans text-sm text-ivory/90 underline decoration-champagne/40 underline-offset-4 transition-colors hover:text-champagne"
                  >
                    {BUSINESS.email}
                  </a>
                </InfoRow>

                <InfoRow icon={Building2} label="Commission Scope">
                  Custom Family Residences · Commercial Offices &amp; Hospitality · Architectural
                  Design · Interior Finish-Outs
                </InfoRow>

                {/* Service Areas Pills */}
                <div className="border-t border-ivory/12 pt-4">
                  <div className="flex items-center gap-2">
                    <Compass className="h-3.5 w-3.5 text-champagne" />
                    <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                      North Texas Service Corridors
                    </span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {["Dallas", ...BUSINESS.serviceAreas].map((area) => (
                      <span
                        key={area}
                        className="rounded-[4px] border border-ivory/15 bg-ivory/[0.06] px-2.5 py-1 font-sans text-[0.68rem] font-medium text-ivory/85"
                      >
                        {area}, TX
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
                  className="flex min-h-[480px] flex-col items-start justify-center p-4 sm:p-6"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#9B8766] bg-charcoal text-champagne shadow-lg">
                    <Check className="h-6 w-6" />
                  </span>
                  <span className="mt-6 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6B593B]">
                    Inquiry Received · Dallas Studio
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
                    Thank you for reaching out.
                  </h3>
                  <p className="mt-3 max-w-md font-sans text-[0.95rem] leading-[1.75] text-charcoal/78">
                    Your inquiry has been logged with our Dallas architectural desk. A principal
                    member of our team will contact you within 24 hours to arrange your private
                    consultation.
                  </p>

                  <div className="mt-6 w-full max-w-md rounded-[6px] border border-[#9B8766]/30 bg-ivory p-4">
                    <p className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#6B593B]">
                      Immediate Assistance
                    </p>
                    <p className="mt-1 font-sans text-xs text-charcoal/75">
                      Prefer to speak right away? Call our studio directly at{" "}
                      <a
                        href={BUSINESS.phoneHref}
                        className="font-semibold text-charcoal underline decoration-[#9B8766] underline-offset-4 hover:text-[#6B593B]"
                      >
                        {BUSINESS.phone}
                      </a>
                      .
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[50px] border border-charcoal/20 bg-ivory px-5 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:border-[#9B8766] hover:text-[#6B593B]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <>
                  {/* Form Top Header Bar */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-charcoal/12 pb-5">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal sm:text-[1.65rem]">
                        Request a Private Consultation
                      </h3>
                      <p className="mt-1 font-sans text-xs text-warm-gray">
                        Share a few details about your residence, lot, or renovation goals. Fields
                        marked with <span className="font-semibold text-[#6B593B]">*</span> are
                        required.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-[50px] border border-[#9B8766]/35 bg-ivory px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B593B]">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#9B8766]" />
                      Strictly Confidential
                    </span>
                  </div>

                  {/* Quick-Select Commission Discipline Pills */}
                  <div className="mb-6">
                    <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal/80">
                      Quick-Select Commission Discipline
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = selectedProjectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setSelectedProjectType(type);
                              handleFieldChange("projectType", type);
                            }}
                            aria-pressed={isSelected}
                            className={`cursor-pointer rounded-[50px] border px-3.5 py-1.5 font-sans text-[0.68rem] font-medium transition-all duration-300 ${
                              isSelected
                                ? "border-charcoal bg-charcoal text-champagne shadow-sm"
                                : "border-charcoal/15 bg-ivory text-charcoal/80 hover:border-[#9B8766]/60 hover:text-charcoal"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    noValidate
                    className="grid gap-x-6 gap-y-5 sm:grid-cols-2"
                  >
                    <Field
                      name="fullName"
                      label="Full Name"
                      placeholder="Your full name"
                      error={errors.fullName}
                      autoComplete="name"
                      required
                      onValueChange={(val) => handleFieldChange("fullName", val)}
                      onValueBlur={(val) => handleFieldBlur("fullName", val)}
                    />
                    <Field
                      name="email"
                      label="Email Address"
                      type="email"
                      inputMode="email"
                      placeholder="name@example.com"
                      error={errors.email}
                      autoComplete="email"
                      disableTextCorrection
                      required
                      onValueChange={(val) => handleFieldChange("email", val)}
                      onValueBlur={(val) => handleFieldBlur("email", val)}
                    />
                    <Field
                      name="phone"
                      label="Phone Number"
                      type="tel"
                      inputMode="tel"
                      placeholder="(469) 000-0000"
                      error={errors.phone}
                      autoComplete="tel"
                      required
                      onValueChange={(val) => handleFieldChange("phone", val)}
                      onValueBlur={(val) => handleFieldBlur("phone", val)}
                    />
                    <Field
                      name="address"
                      label="Project Address / City"
                      placeholder="Dallas, Rockwall, Heath, McKinney…"
                      error={errors.address}
                      autoComplete="street-address"
                      optional
                      onValueChange={(val) => handleFieldChange("address", val)}
                      onValueBlur={(val) => handleFieldBlur("address", val)}
                    />
                    <Select
                      name="projectType"
                      label="Project Type"
                      options={PROJECT_TYPES}
                      value={selectedProjectType}
                      error={errors.projectType}
                      required
                      onValueChange={(val) => {
                        setSelectedProjectType(val);
                        handleFieldChange("projectType", val);
                      }}
                      onValueBlur={(val) => handleFieldBlur("projectType", val)}
                    />
                    <Select
                      name="budget"
                      label="Estimated Project Budget"
                      options={BUDGETS}
                      error={errors.budget}
                      required
                      onValueChange={(val) => handleFieldChange("budget", val)}
                      onValueBlur={(val) => handleFieldBlur("budget", val)}
                    />

                    <VisionField
                      error={errors.vision}
                      onValueChange={(val) => handleFieldChange("vision", val)}
                      onValueBlur={(val) => handleFieldBlur("vision", val)}
                    />

                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="mt-2 flex flex-col gap-4 border-t border-charcoal/12 pt-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="inline-flex items-center gap-2 font-sans text-xs text-charcoal/75">
                        <span className="h-2 w-2 rounded-full bg-[#9B8766]" />
                        We respond to every inquiry personally within 24 hours.
                      </p>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group/btn relative inline-flex min-h-12 cursor-pointer items-center justify-center gap-3.5 overflow-hidden rounded-[50px] border border-[#9B8766]/60 bg-charcoal px-8 py-4 font-sans text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_16px_36px_-10px_rgba(28,28,28,0.45)] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 hover:border-[#9B8766] hover:bg-gradient-to-r hover:from-[#9B8766] hover:via-[#b89f74] hover:to-[#9B8766] hover:shadow-[0_22px_44px_-8px_rgba(155,135,102,0.55)] disabled:pointer-events-none disabled:opacity-60"
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
  inputMode,
  placeholder,
  error,
  autoComplete,
  disableTextCorrection,
  optional,
  required,
  onValueChange,
  onValueBlur,
}: {
  name: string;
  label: string;
  type?: string;
  inputMode?: "text" | "email" | "tel";
  placeholder?: string;
  error?: string | undefined;
  autoComplete?: string;
  disableTextCorrection?: boolean;
  optional?: boolean;
  required?: boolean;
  onValueChange: (val: string) => void;
  onValueBlur: (val: string) => void;
}) {
  const inputId = useId();
  const errorId = `${inputId}-error`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal/85"
      >
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-[#6B593B]">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
        {optional && <span className="font-normal text-warm-gray"> (optional)</span>}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoCorrect={disableTextCorrection ? "off" : undefined}
        autoCapitalize={disableTextCorrection ? "none" : undefined}
        spellCheck={disableTextCorrection ? false : undefined}
        required={required}
        onChange={(e) => onValueChange(e.target.value)}
        onBlur={(e) => onValueBlur(e.target.value)}
        className={`mt-2 min-h-12 w-full rounded-[6px] border bg-ivory px-4 py-3 font-sans text-base text-charcoal placeholder:text-warm-gray/65 transition-all focus:ring-2 focus:outline-none ${
          error
            ? "border-destructive focus:border-destructive focus:ring-destructive/20"
            : "border-charcoal/15 focus:border-[#9B8766] focus:ring-[#9B8766]/20"
        }`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span id={errorId} className="mt-1.5 block font-sans text-xs font-medium text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

function Select({
  name,
  label,
  options,
  value,
  error,
  required,
  onValueChange,
  onValueBlur,
}: {
  name: string;
  label: string;
  options: readonly string[];
  value?: string;
  error?: string | undefined;
  required?: boolean;
  onValueChange: (val: string) => void;
  onValueBlur: (val: string) => void;
}) {
  const selectId = useId();
  const errorId = `${selectId}-error`;
  const isControlled = value !== undefined;

  return (
    <div>
      <label
        htmlFor={selectId}
        className="block font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal/85"
      >
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-[#6B593B]">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      <div className="relative mt-2">
        <select
          id={selectId}
          name={name}
          {...(isControlled ? { value } : { defaultValue: "" })}
          required={required}
          onChange={(e) => onValueChange(e.target.value)}
          onBlur={(e) => onValueBlur(e.target.value)}
          className={`min-h-12 w-full cursor-pointer appearance-none rounded-[6px] border bg-ivory py-3 pr-10 pl-4 font-sans text-base text-charcoal transition-all focus:ring-2 focus:outline-none ${
            error
              ? "border-destructive focus:border-destructive focus:ring-destructive/20"
              : "border-charcoal/15 focus:border-[#9B8766] focus:ring-[#9B8766]/20"
          }`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
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
        <span id={errorId} className="mt-1.5 block font-sans text-xs font-medium text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

function VisionField({
  error,
  onValueChange,
  onValueBlur,
}: {
  error?: string | undefined;
  onValueChange: (val: string) => void;
  onValueBlur: (val: string) => void;
}) {
  const textareaId = useId();
  const errorId = `${textareaId}-error`;

  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={textareaId}
        className="block font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-charcoal/85"
      >
        Tell Us About Your Vision
        <span aria-hidden="true" className="ml-1 text-[#6B593B]">
          *
        </span>
        <span className="sr-only"> (required)</span>
      </label>
      <textarea
        id={textareaId}
        name="vision"
        rows={4}
        required
        placeholder="Describe your desired architectural style, timeline, lot details, or custom spaces…"
        onChange={(e) => onValueChange(e.target.value)}
        onBlur={(e) => onValueBlur(e.target.value)}
        className={`mt-2 w-full resize-none rounded-[6px] border bg-ivory px-4 py-3 font-sans text-base text-charcoal placeholder:text-warm-gray/65 transition-all focus:ring-2 focus:outline-none ${
          error
            ? "border-destructive focus:border-destructive focus:ring-destructive/20"
            : "border-charcoal/15 focus:border-[#9B8766] focus:ring-[#9B8766]/20"
        }`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span id={errorId} className="mt-1.5 block font-sans text-xs font-medium text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}
