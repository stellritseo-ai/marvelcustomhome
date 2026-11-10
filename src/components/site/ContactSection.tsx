import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { BUDGETS, PROJECT_TYPES, contactSchema } from "@/lib/contact-schema";
import { submitInquiry } from "@/lib/contact.functions";
import { BUSINESS } from "@/lib/site";
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
    <section id="contact" className={`section-y ${asPage ? "pt-36 md:pt-48" : ""}`}>
      <div className="container-lux grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-bronze">Consultation</p>
            <H className="display mt-8 text-[clamp(2.75rem,5.5vw,5.25rem)]">Let's Create Something <em className="italic">Extraordinary.</em></H>
          </Reveal>
          <Reveal delay={150} className="mt-14 space-y-8 text-sm">
            <Info label="Studio">{BUSINESS.street}<br />{BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}</Info>
            <Info label="Telephone"><a href={BUSINESS.phoneHref} className="link-line">{BUSINESS.phone}</a></Info>
            <Info label="Email"><a href={`mailto:${BUSINESS.email}`} className="link-line break-all">{BUSINESS.email}</a></Info>
            <Info label="Service Areas">Dallas, {BUSINESS.serviceAreas.join(", ")}</Info>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-6 lg:col-start-7">
          {status === "done" ? (
            <div role="status" className="flex h-full flex-col justify-center border border-border bg-cream p-10 md:p-16">
              <span className="flex h-12 w-12 items-center justify-center border border-bronze text-bronze"><Check className="h-5 w-5" /></span>
              <h3 className="mt-8 text-4xl">Thank you.</h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">Your inquiry has been received. A member of our team will be in touch shortly to arrange your consultation.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              <Field name="fullName" label="Full Name" error={errors["fullName"]} autoComplete="name" />
              <Field name="email" label="Email Address" type="email" error={errors["email"]} autoComplete="email" />
              <Field name="phone" label="Phone Number" type="tel" error={errors["phone"]} autoComplete="tel" />
              <Field name="address" label="Project Address" error={errors["address"]} autoComplete="street-address" optional />
              <Select name="projectType" label="Project Type" options={PROJECT_TYPES} error={errors["projectType"]} />
              <Select name="budget" label="Estimated Project Budget" options={BUDGETS} error={errors["budget"]} />
              <label className="sm:col-span-2">
                <span className="eyebrow text-muted-foreground">Tell Us About Your Vision</span>
                <textarea name="vision" rows={4} className="field resize-none" aria-invalid={!!errors["vision"]} />
                {errors["vision"] && <span className="mt-2 block text-xs text-destructive">{errors["vision"]}</span>}
              </label>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">We respond to every inquiry personally.</p>
                <button type="submit" disabled={status === "sending"} className="eyebrow group inline-flex items-center justify-center gap-4 bg-charcoal px-10 py-5 text-ivory transition-colors duration-500 hover:bg-bronze disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Request Consultation"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-destructive sm:col-span-2">Something went wrong sending your inquiry. Please try again or call {BUSINESS.phone}.</p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-4 border-t border-border pt-5">
      <span className="eyebrow text-bronze">{label}</span>
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}

function Field({ name, label, type = "text", error, autoComplete, optional }: { name: string; label: string; type?: string; error?: string | undefined; autoComplete?: string; optional?: boolean }) {
  return (
    <label>
      <span className="eyebrow text-muted-foreground">{label}{optional && <span className="opacity-60"> (optional)</span>}</span>
      <input name={name} type={type} autoComplete={autoComplete} className="field" aria-invalid={!!error} />
      {error && <span className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Select({ name, label, options, error }: { name: string; label: string; options: readonly string[]; error?: string | undefined }) {
  return (
    <label>
      <span className="eyebrow text-muted-foreground">{label}</span>
      <select name={name} defaultValue="" className="field cursor-pointer appearance-none" aria-invalid={!!error}>
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <span className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
