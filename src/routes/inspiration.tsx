import { createFileRoute } from "@tanstack/react-router";
import { CollectionsSection } from "@/components/site/CollectionsSection";
import { CtaSection } from "@/components/site/CtaSection";
import { GallerySection } from "@/components/site/GallerySection";
import { PageHeader } from "@/components/site/PageHeader";
import { IMAGES } from "@/lib/images";
import { createBreadcrumbJsonLd, localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/inspiration")({
  head: () => ({
    ...pageHead(
      "Inspiration | Kitchens, Baths & Exteriors — Marvel Custom Homes",
      "Luxury kitchens, bathrooms, living spaces, stone finishes, and outdoor living architecture to inspire your custom home in Dallas, TX.",
      {
        path: "/inspiration",
        keywords: [
          "custom home inspiration",
          "luxury kitchen design dallas",
          "travertine bathroom inspiration",
          "architectural estate elevations",
          "calacatta marble inspiration",
        ],
      },
    ),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbJsonLd([{ name: "Inspiration", path: "/inspiration" }]),
        ),
      },
    ],
  }),
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
