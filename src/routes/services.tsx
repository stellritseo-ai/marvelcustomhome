import { createFileRoute } from "@tanstack/react-router";
import { IMAGES, PageHeader, Services, Collections, CtaBand } from "@/components/site/Sections";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => pageHead("Services | Custom Home Construction & Interiors — Marvel", "Complete home construction, architectural design consultation, interior finish-out and custom interior features in Dallas–Fort Worth."),
  component: () => (
    <>
      <PageHeader eyebrow="Services" title={<>Four Disciplines. <em className="italic">One Standard.</em></>} intro="Every Marvel commission is guided by the same team from first sketch to final walkthrough." img={IMAGES.living} alt="Double-height living room with travertine fireplace" />
      <Services />
      <Collections />
      <CtaBand />
    </>
  ),
});
