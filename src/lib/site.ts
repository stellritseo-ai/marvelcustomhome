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

export const SERVICES_SUBMENU = [
  {
    n: "01",
    to: "/services",
    hash: "complete-home-construction",
    label: "Complete Home Construction",
  },
  {
    n: "02",
    to: "/services",
    hash: "design-consultation",
    label: "Design Consultation – Architectural",
  },
  {
    n: "03",
    to: "/services",
    hash: "interior-finish-out",
    label: "Interior Finish Out",
  },
  {
    n: "04",
    to: "/services",
    hash: "double-vanity",
    label: "Double Vanity",
  },
] as const;

export type HeaderNavItem =
  | {
      type: "link";
      to: "/" | "/about" | "/projects" | "/our-homes" | "/blogs" | "/contact";
      label: string;
    }
  | {
      type: "dropdown";
      label: string;
      to: "/services";
      items: typeof SERVICES_SUBMENU;
    };

export const HEADER_NAV: readonly HeaderNavItem[] = [
  { type: "link", to: "/", label: "Home" },
  { type: "link", to: "/about", label: "About Us" },
  { type: "dropdown", label: "Services", to: "/services", items: SERVICES_SUBMENU },
  { type: "link", to: "/projects", label: "Our Works" },
  { type: "link", to: "/our-homes", label: "Our Homes" },
  { type: "link", to: "/blogs", label: "Blogs" },
  { type: "link", to: "/contact", label: "Contact Us" },
];

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
