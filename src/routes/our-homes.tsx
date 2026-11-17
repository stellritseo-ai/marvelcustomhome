import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { OurHomesComparison } from "@/components/site/OurHomesComparison";
import { OurHomesHero } from "@/components/site/OurHomesHero";
import { OurHomesShowcase } from "@/components/site/OurHomesShowcase";
import { createBreadcrumbJsonLd, localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/our-homes")({
  head: () => ({
    ...pageHead(
      "Our Homes | Traditional, Farm House & Modern Design — Marvel Custom Homes",
      "Explore Traditional, Farm House, and Modern Design custom homes crafted by Marvel Custom Homes across Dallas-Fort Worth and North Texas.",
      {
        path: "/our-homes",
        keywords: [
          "traditional custom homes dallas",
          "modern farmhouse builder north texas",
          "modern custom home design dfw",
          "architectural home styles texas",
          "custom home floor plans dallas",
        ],
      },
    ),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbJsonLd([{ name: "Our Homes", path: "/our-homes" }]),
        ),
      },
    ],
  }),
  component: OurHomesPage,
});

function OurHomesPage() {
  return (
    <>
      <OurHomesHero />
      <OurHomesShowcase />
      <OurHomesComparison />
      <CtaSection />
    </>
  );
}
