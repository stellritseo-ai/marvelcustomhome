import { createFileRoute } from "@tanstack/react-router";
import { IMAGES, PageHeader, Gallery, Collections, CtaBand } from "@/components/site/Sections";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/inspiration")({
  head: () => pageHead("Inspiration | Kitchens, Baths & Exteriors — Marvel Custom Homes", "Luxury kitchens, bathrooms, living spaces, stone finishes and outdoor living to inspire your custom home."),
  component: () => (
    <>
      <PageHeader eyebrow="Inspiration" title={<>The Language of <em className="italic">Materials.</em></>} intro="Marble, limestone, oak and bronze — the palette from which every Marvel interior is composed." img={IMAGES.kitchen} alt="Marble kitchen with oak cabinetry" />
      <Gallery />
      <Collections />
      <CtaBand />
    </>
  ),
});
