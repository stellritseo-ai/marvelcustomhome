import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { OurHomesComparison } from "@/components/site/OurHomesComparison";
import { OurHomesHero } from "@/components/site/OurHomesHero";
import { OurHomesShowcase } from "@/components/site/OurHomesShowcase";
import { localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/our-homes")({
  head: () => ({
    ...pageHead(
      "Our Homes | Traditional, Farm House & Modern Design — Marvel Custom Homes",
      "Explore Traditional, Farm House, and Modern Design custom homes crafted by Marvel Custom Homes across Dallas-Fort Worth and North Texas.",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
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
