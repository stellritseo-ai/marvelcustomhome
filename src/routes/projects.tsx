import { createFileRoute } from "@tanstack/react-router";
import { IMAGES, PageHeader, Portfolio, Testimonials, CtaBand } from "@/components/site/Sections";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => pageHead("Our Projects | Marvel Custom Homes Portfolio", "A portfolio of custom residences, interiors and kitchens by Marvel Custom Homes in Dallas and North Texas."),
  component: () => (
    <>
      <PageHeader eyebrow="Our Projects" title={<>Signature <em className="italic">Residences.</em></>} intro="A selection of homes and interiors. Full project stories will appear here as verified project content is published." img={IMAGES.hero} alt="Modern limestone residence at dusk" />
      <Portfolio />
      <Testimonials />
      <CtaBand />
    </>
  ),
});
