import { createFileRoute } from "@tanstack/react-router";
import { BlogsSection } from "@/components/site/BlogsSection";
import { CtaSection } from "@/components/site/CtaSection";
import { PageHeader } from "@/components/site/PageHeader";
import { IMAGES } from "@/lib/images";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/blogs")({
  head: () =>
    pageHead(
      "Blogs & Architectural Journal | Marvel Custom Homes",
      "Insights on luxury custom home construction, architectural design planning, interior finish-out and bespoke millwork in Dallas.",
    ),
  component: () => (
    <>
      <PageHeader
        eyebrow="Blogs"
        title={
          <>
            The Marvel <em className="italic">Journal.</em>
          </>
        }
        intro="Notes on architectural proportion, natural materials, and thoughtful custom home building across North Texas."
        img={IMAGES.living}
        alt="Sunlit double-height travertine living room"
      />
      <BlogsSection />
      <CtaSection />
    </>
  ),
});
