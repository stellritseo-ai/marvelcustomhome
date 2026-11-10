import { createFileRoute } from "@tanstack/react-router";
import { Hero, Intro, Services, Process, Gallery, Collections, Portfolio, Why, Testimonials, CtaBand } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/ContactSection";
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
      <Hero />
      <Intro />
      <Services />
      <Process />
      <Gallery />
      <Collections />
      <Portfolio />
      <Why />
      <Testimonials />
      <CtaBand />
      <ContactSection />
    </>
  );
}
