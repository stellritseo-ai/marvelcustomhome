import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";
import { BUSINESS, localBusinessJsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead(
      "Contact | Begin Your Custom Home — Marvel Custom Homes",
      `Request a consultation with Marvel Custom Homes. Studio at ${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postal}. Call ${BUSINESS.phone}.`,
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: () => <ContactSection asPage />,
});
