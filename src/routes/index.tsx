import { createFileRoute } from "@tanstack/react-router";
import { CollectionsSection } from "@/components/site/CollectionsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { CtaSection } from "@/components/site/CtaSection";
import { GallerySection } from "@/components/site/GallerySection";
import { HeroSection } from "@/components/site/HeroSection";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { WelcomeSection } from "@/components/site/WelcomeSection";
import { WhySection } from "@/components/site/WhySection";
import { localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead(
      "Marvel Custom Homes | Luxury Custom Home Builder in Dallas, TX",
      "Luxury custom home construction, architectural design consultation and interior finish-out in Dallas and North Texas.",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <CollectionsSection />
      <PortfolioSection />
      {/* <WhySection /> */}
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
