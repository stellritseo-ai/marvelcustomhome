import { createFileRoute } from "@tanstack/react-router";
import { AboutAreas } from "@/components/site/AboutAreas";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutProcess } from "@/components/site/AboutProcess";
import { AboutStory } from "@/components/site/AboutStory";
import { CtaSection } from "@/components/site/CtaSection";
import { createBreadcrumbJsonLd, localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead(
      "About Us | Crafting Excellence in Every Structure — Marvel Custom Homes",
      "Marvel Custom Homes is committed to building superior custom homes and commercial spaces across Dallas-Fort Worth that reflect the highest standards of craftsmanship, durability, and design.",
      {
        path: "/about",
        keywords: [
          "about marvel custom homes",
          "dallas custom home builders team",
          "superior homes custom inc",
          "luxury home craftsmanship dallas",
          "commercial reconstruction dallas",
        ],
      },
    ),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbJsonLd([{ name: "About Us", path: "/about" }])),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutProcess />
      <AboutAreas />
      <CtaSection />
    </>
  );
}
