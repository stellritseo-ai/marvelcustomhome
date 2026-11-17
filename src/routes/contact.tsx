import { createFileRoute } from "@tanstack/react-router";
import { ContactHero } from "@/components/site/ContactHero";
import { ContactSection } from "@/components/site/ContactSection";
import { ContactStudioSection } from "@/components/site/ContactStudioSection";
import { CtaSection } from "@/components/site/CtaSection";
import { BUSINESS, createBreadcrumbJsonLd, localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead(
      "Contact Us | Private Consultation & Dallas Studio — Marvel Custom Homes",
      `Request a private consultation with Marvel Custom Homes. Visit our Dallas architectural studio at ${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postal}, email ${BUSINESS.email}, or call ${BUSINESS.phone}.`,
      {
        path: "/contact",
        keywords: [
          "contact marvel custom homes",
          "dallas custom home consultation",
          "hire custom builder dallas tx",
          "dallas architectural studio appointment",
          "custom builder phone number dallas",
        ],
      },
    ),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbJsonLd([{ name: "Contact Us", path: "/contact" }]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection asPage />
      <ContactStudioSection />
      <CtaSection />
    </>
  );
}
