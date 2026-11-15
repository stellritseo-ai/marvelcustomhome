import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { ServicesDedicatedShowcase } from "@/components/site/ServicesDedicatedShowcase";
import { ServicesExecutionMatrix } from "@/components/site/ServicesExecutionMatrix";
import { ServicesHero } from "@/components/site/ServicesHero";
import { localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageHead(
      "Services | Complete Home Construction, Design Consultation, Interior Finish Out & Double Vanity — Marvel Custom Homes",
      "Explore Marvel Custom Homes services in Dallas–Fort Worth: Complete Home Construction, Design Consultation – Architectural, Interior Finish Out, and custom Double Vanity installations.",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDedicatedShowcase />
      <ServicesExecutionMatrix />
      <CtaSection />
    </>
  );
}
