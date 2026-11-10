import { createFileRoute } from "@tanstack/react-router";
import { CollectionsSection } from "@/components/site/CollectionsSection";
import { CtaSection } from "@/components/site/CtaSection";
import { GallerySection } from "@/components/site/GallerySection";
import { PageHeader } from "@/components/site/PageHeader";
import { IMAGES } from "@/lib/images";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/inspiration")({
  head: () =>
    pageHead(
      "Inspiration | Kitchens, Baths & Exteriors — Marvel Custom Homes",
      "Luxury kitchens, bathrooms, living spaces, stone finishes and outdoor living to inspire your custom home.",
    ),
  component: () => (
    <>
      <PageHeader
        eyebrow="Inspiration"
        title={
          <>
            The Language of <em className="italic">Materials.</em>
          </>
        }
        intro="Marble, limestone, oak and bronze — the palette from which every Marvel interior is composed."
        img={IMAGES.kitchen}
        alt="Marble kitchen with oak cabinetry"
      />
      <GallerySection />
      <CollectionsSection />
      <CtaSection />
    </>
  ),
});
