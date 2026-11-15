import { useEffect } from "react";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { DesignConsultationPage } from "@/components/site/DesignConsultationPage";
import { DoubleVanityPage } from "@/components/site/DoubleVanityPage";
import { InteriorFinishOutPage } from "@/components/site/InteriorFinishOutPage";
import { ServicesDedicatedShowcase } from "@/components/site/ServicesDedicatedShowcase";
import { ServicesExecutionMatrix } from "@/components/site/ServicesExecutionMatrix";
import { ServicesHero } from "@/components/site/ServicesHero";
import { localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageHead(
      "Services | Complete Home Construction, Architectural Design, Interior Finish Out & Double Vanity — Marvel Custom Homes",
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
  const isInteriorFinishOutPage = hash === "interior-finish-out";
  const isDoubleVanityPage = hash === "double-vanity" || hash === "custom-interior-features";

  useEffect(() => {
    if (
      isDesignConsultationPage ||
      isInteriorFinishOutPage ||
      isDoubleVanityPage ||
      hash === "complete-home-construction"
    ) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [isDesignConsultationPage, isInteriorFinishOutPage, isDoubleVanityPage, hash]);

  if (isDesignConsultationPage) {
    return <DesignConsultationPage />;
  }

  if (isInteriorFinishOutPage) {
    return <InteriorFinishOutPage />;
  }

  if (isDoubleVanityPage) {
    return <DoubleVanityPage />;
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
