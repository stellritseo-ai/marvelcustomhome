import { useEffect } from "react";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { DesignConsultationPage } from "@/components/site/DesignConsultationPage";
import { ServicesDedicatedShowcase } from "@/components/site/ServicesDedicatedShowcase";
import { ServicesExecutionMatrix } from "@/components/site/ServicesExecutionMatrix";
import { ServicesHero } from "@/components/site/ServicesHero";
import { localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageHead(
      "Services | Complete Home Construction & Architectural Design Consultation — Marvel Custom Homes",
      "Explore Marvel Custom Homes dedicated services in Dallas–Fort Worth: Complete Home Construction, Architectural Design Consultation, Interior Finish Out, and Double Vanity installations.",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const hash = useRouterState({
    select: (s) => s.location.hash.replace(/^#/, ""),
  });

  const isDesignConsultationPage =
    hash === "design-consultation" || hash === "architectural-design-consultation";

  useEffect(() => {
    if (isDesignConsultationPage || hash === "complete-home-construction") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [isDesignConsultationPage, hash]);

  if (isDesignConsultationPage) {
    return <DesignConsultationPage />;
  }

  return (
    <>
      <ServicesHero />
      <ServicesDedicatedShowcase />
      <ServicesExecutionMatrix />
      <CtaSection />
    </>
  );
}
