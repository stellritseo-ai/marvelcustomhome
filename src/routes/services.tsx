import { createFileRoute } from "@tanstack/react-router";
import { CollectionsSection } from "@/components/site/CollectionsSection";
import { CtaSection } from "@/components/site/CtaSection";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesSection } from "@/components/site/ServicesSection";
import { IMAGES } from "@/lib/images";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Services | Custom Home Construction & Interiors — Marvel",
      "Complete home construction, architectural design consultation, interior finish-out and custom interior features in Dallas–Fort Worth.",
    ),
  component: () => (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Four Disciplines. <em className="italic">One Standard.</em>
          </>
        }
        intro="Every Marvel commission is guided by the same team from first sketch to final walkthrough."
        img={IMAGES.living}
        alt="Double-height living room with travertine fireplace"
      />
      <ServicesSection />
      <CollectionsSection />
      <CtaSection />
    </>
  ),
});
