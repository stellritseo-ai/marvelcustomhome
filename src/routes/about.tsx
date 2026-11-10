import { createFileRoute } from "@tanstack/react-router";
import { IMAGES, Intro, PageHeader, Process, Why, CtaBand } from "@/components/site/Sections";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About | Marvel Custom Homes, Dallas", "The philosophy and process behind Marvel Custom Homes — custom residences built with precision, creativity and craftsmanship."),
  component: () => (
    <>
      <PageHeader eyebrow="About Marvel" title={<>A Home Should Be a <em className="italic">Reflection.</em></>} intro="Of your lifestyle, individuality and vision — brought together from architectural planning to the finest interior detail." img={IMAGES.exterior} alt="Limestone and white brick custom residence" />
      <Intro />
      <Process />
      <Why />
      <CtaBand />
    </>
  ),
});
