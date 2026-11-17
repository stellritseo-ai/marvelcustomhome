import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { WorksCraft } from "@/components/site/WorksCraft";
import { WorksGallery } from "@/components/site/WorksGallery";
import { WorksHero } from "@/components/site/WorksHero";
import { WorksSpotlight } from "@/components/site/WorksSpotlight";
import { createBreadcrumbJsonLd, localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    ...pageHead(
      "Our Works | Signature Custom Homes & Architectural Portfolio — Marvel Custom Homes",
      "Explore 14 signature architectural captures, custom estates, culinary ateliers, primary bath suites, and interior finish-outs crafted by Marvel Custom Homes across Dallas-Fort Worth.",
      {
        path: "/projects",
        keywords: [
          "custom home portfolio dallas",
          "luxury home projects dfw",
          "architectural photography dallas homes",
          "calacatta culinary atelier",
          "sovereign limestone estate",
          "custom build gallery texas",
        ],
      },
    ),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbJsonLd([{ name: "Our Works", path: "/projects" }]),
        ),
      },
    ],
  }),
  component: OurWorksPage,
});

function OurWorksPage() {
  return (
    <>
      <WorksHero />
      <WorksGallery />
      <WorksSpotlight />
      <WorksCraft />
      <CtaSection />
    </>
  );
}
