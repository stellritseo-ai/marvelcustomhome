import type { ReactNode } from "react";
import { Parallax } from "./Reveal";

/* Inner page header */
export function PageHeader({
  eyebrow,
  title,
  intro,
  img,
  alt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  img: string;
  alt: string;
}) {
  return (
    <section className="pt-36 md:pt-48">
      <div className="container-lux grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow animate-rise text-bronze">{eyebrow}</p>
          <h1
            className="display animate-rise mt-6 text-[clamp(3rem,7vw,7rem)]"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
        </div>
        <p
          className="animate-rise leading-relaxed text-muted-foreground md:col-span-4"
          style={{ animationDelay: "240ms" }}
        >
          {intro}
        </p>
      </div>
      <div className="mt-16 md:mt-24">
        <Parallax src={img} alt={alt} eager className="h-[60vh] min-h-[380px] w-full" />
      </div>
    </section>
  );
}
