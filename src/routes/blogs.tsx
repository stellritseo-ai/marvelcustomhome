import { createFileRoute } from "@tanstack/react-router";
import { BlogsHero } from "@/components/site/BlogsHero";
import { BlogsNewsletter } from "@/components/site/BlogsNewsletter";
import { BlogsSection } from "@/components/site/BlogsSection";
import { CtaSection } from "@/components/site/CtaSection";
import { blogsJsonLd, createBreadcrumbJsonLd, localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    ...pageHead(
      "Our Blogs | Custom Home Construction, Design & Remodeling — Marvel Custom Homes",
      "Explore expert insights on custom home construction essentials, architectural consultations, interior finish-outs, seasonal maintenance, home remodeling, and double vanity designs in Dallas.",
      {
        path: "/blogs",
        keywords: [
          "custom home construction blog",
          "architectural design consultation tips",
          "interior finish out guide",
          "seasonal home maintenance texas",
          "remodeling home value dallas",
          "double vanity bathroom design ideas",
        ],
      },
    ),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(blogsJsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbJsonLd([{ name: "Blogs", path: "/blogs" }])),
      },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <BlogsSection />
      <BlogsNewsletter />
      <CtaSection />
    </>
  );
}
