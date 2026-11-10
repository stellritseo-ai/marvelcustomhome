import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";
import { localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead("Contact | Begin Your Custom Home — Marvel Custom Homes", "Request a consultation with Marvel Custom Homes. Studio at 2626 Cole Ave, Dallas, TX. Call (214) 886-7527."),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: () => <ContactSection asPage />,
});
