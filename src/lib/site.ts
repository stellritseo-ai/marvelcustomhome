export const BUSINESS = {
  name: "Marvel Custom Homes",
  phone: "(214) 886-7527",
  phoneHref: "tel:+12148867527",
  email: "marvel.care@marvelcustomhomes.com",
  street: "2626 Cole Ave. Suite 308",
  city: "Dallas",
  region: "TX",
  postal: "75204",
  url: "https://marvelcustomhomes.com",
  serviceAreas: ["Allen", "Fate", "Heath", "Mansfield", "McKinney", "Midlothian", "Rockwall"],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Our Projects" },
  { to: "/inspiration", label: "Inspiration" },
  { to: "/contact", label: "Contact" },
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: "+1-214-886-7527",
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postal,
    addressCountry: "US",
  },
  areaServed: BUSINESS.serviceAreas.map((c) => ({ "@type": "City", name: `${c}, TX` })),
};

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
