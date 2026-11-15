import { createFileRoute } from "@tanstack/react-router";
import { BlogsHero } from "@/components/site/BlogsHero";
import { BlogsNewsletter } from "@/components/site/BlogsNewsletter";
import { BlogsSection } from "@/components/site/BlogsSection";
import { CtaSection } from "@/components/site/CtaSection";
import { localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    ...pageHead(
      "Our Blogs | Custom Home Construction, Design & Remodeling — Marvel Custom Homes",
      "Explore our blogs on custom home construction, architectural design consultation, professional interior finish-outs, seasonal maintenance, home remodeling, and double vanity designs.",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
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
