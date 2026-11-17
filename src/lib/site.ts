export const BUSINESS = {
  name: "Marvel Custom Homes",
  legalName: "Superior Homes Custom, Inc. dba Marvel Custom Homes",
  phone: "(469) 360-5805",
  phoneHref: "tel:+14693605805",
  email: "support@marvelcustomhomes.com",
  street: "10830 N. Central Expressway Ste. 130",
  city: "Dallas",
  region: "TX",
  postal: "75231",
  url: "https://marvelcustomhomes.com",
  serviceAreas: [
    "Dallas",
    "Allen",
    "Fate",
    "Heath",
    "Mansfield",
    "McKinney",
    "Midlothian",
    "Rockwall",
    "North Texas",
  ],
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

export const DEFAULT_OG_IMAGE = `${BUSINESS.url}/og-image.jpg`;
export const DEFAULT_OG_IMAGE_ALT =
  "Marvel Custom Homes — Premier Luxury Custom Home Builder in Dallas, TX";

export const DEFAULT_KEYWORDS: readonly string[] = [
  "custom home builder dallas",
  "luxury home builder dallas tx",
  "dallas custom homes",
  "architectural design consultation dallas",
  "complete home construction north texas",
  "interior finish out dallas",
  "custom double vanity dallas",
  "build on your lot dallas",
  "luxury estate builder dfw",
  "marvel custom homes",
];

export interface PageHeadOptions {
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: readonly string[];
  type?: "website" | "article";
}

export function pageHead(
  title: string,
  description: string,
  optionsOrPath?: PageHeadOptions | string,
) {
  const options: PageHeadOptions =
    typeof optionsOrPath === "string" ? { path: optionsOrPath } : (optionsOrPath ?? {});

  const path = options.path ?? "";
  const canonicalUrl = `${BUSINESS.url}${path === "/" ? "" : path}`;
  const image = options.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = options.imageAlt ?? DEFAULT_OG_IMAGE_ALT;
  const type = options.type ?? "website";
  const keywords = options.keywords
    ? Array.from(new Set([...options.keywords, ...DEFAULT_KEYWORDS])).join(", ")
    : DEFAULT_KEYWORDS.join(", ");

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: BUSINESS.name },
      { name: "publisher", content: BUSINESS.name },
      { name: "theme-color", content: "#121110" },

      // Local Dallas SEO Geo Tags
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "Dallas" },
      { name: "geo.position", content: "32.8988;-96.7698" },
      { name: "ICBM", content: "32.8988, -96.7698" },

      // Open Graph / Facebook / LinkedIn
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: BUSINESS.name },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: image },
      { property: "og:image:secure_url", content: image },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "853" },
      { property: "og:image:alt", content: imageAlt },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
  "@id": `${BUSINESS.url}/#contractor`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: BUSINESS.url,
  logo: `${BUSINESS.url}/apple-touch-icon.png`,
  image: `${BUSINESS.url}/og-image.jpg`,
  description:
    "Premier luxury custom home builder in Dallas, TX specializing in complete custom home construction, architectural design consultation, bespoke interior finish-out, and luxury double vanity additions.",
  telephone: "+1-469-360-5805",
  email: BUSINESS.email,
  priceRange: "$$$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postal,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.8988,
    longitude: -96.7698,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  areaServed: BUSINESS.serviceAreas.map((c) => ({
    "@type": "City",
    name: `${c}, TX`,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom Home Building & Architectural Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Home Construction",
          description:
            "Turnkey ground-up custom home construction from site prep and architectural foundation to final interior handover.",
          url: `${BUSINESS.url}/services#complete-home-construction`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Design Consultation",
          description:
            "Expert architectural planning, floor plan engineering, 2D/3D visualizations, and municipal zoning approvals.",
          url: `${BUSINESS.url}/services#design-consultation`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Finish-Out",
          description:
            "High-end residential and commercial interior build-outs, millwork, custom cabinetry, drywall, insulation, and stone flooring.",
          url: `${BUSINESS.url}/services#interior-finish-out`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Double Vanity & Luxury Bathrooms",
          description:
            "Bespoke bathroom transformations featuring custom dual vanities, freestanding soaking tubs, and bookmatched stone slabs.",
          url: `${BUSINESS.url}/services#double-vanity`,
        },
      },
    ],
  },
  sameAs: ["https://www.facebook.com/", "https://www.instagram.com/", "https://twitter.com/"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BUSINESS.url}/#website`,
  name: BUSINESS.name,
  url: BUSINESS.url,
  publisher: {
    "@id": `${BUSINESS.url}/#contractor`,
  },
  inLanguage: "en-US",
};

export function createBreadcrumbJsonLd(crumbs: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BUSINESS.url,
      },
      ...crumbs.map((c, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: c.name,
        item: `${BUSINESS.url}${c.path}`,
      })),
    ],
  };
}

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Home Building & Architectural Design",
  provider: {
    "@id": `${BUSINESS.url}/#contractor`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Dallas-Fort Worth Metroplex, TX",
  },
  hasOfferCatalog: localBusinessJsonLd.hasOfferCatalog,
};

export const blogsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BUSINESS.url}/blogs#blog`,
  name: "Marvel Custom Homes Architectural Journal",
  description:
    "Expert insights on luxury custom home construction, architectural consultation, interior finish-outs, double vanity design, and property value in Dallas, TX.",
  url: `${BUSINESS.url}/blogs`,
  publisher: {
    "@id": `${BUSINESS.url}/#contractor`,
  },
};
