import { createFileRoute } from "@tanstack/react-router";
import { CollectionsSection } from "@/components/site/CollectionsSection";
import { CtaSection } from "@/components/site/CtaSection";
import { GallerySection } from "@/components/site/GallerySection";
import { HomesSection } from "@/components/site/HomesSection";
import { PageHeader } from "@/components/site/PageHeader";
import { IMAGES } from "@/lib/images";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/our-homes")({
  head: () =>
    pageHead(
      "Our Homes | Custom Residences & Collections — Marvel Custom Homes",
      "Explore custom home architectural studies, bespoke living spaces, kitchens, baths and exteriors crafted by Marvel Custom Homes.",
    ),
  component: () => (
    <>
      <PageHeader
        eyebrow="Our Homes"
        title={
          <>
            Bespoke <em className="italic">Residences.</em>
          </>
        }
        intro="Custom homes shaped around Dallas light, tranquil courtyards and natural materials built to endure generations."
        img={IMAGES.exterior}
        alt="Custom limestone custom residence crafted in North Texas"
      />
      <HomesSection />
      <CollectionsSection />
      <GallerySection />
      <CtaSection />
    </>
  ),
});
