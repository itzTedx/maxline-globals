export const siteConfig = {
  name: "Maxline Global",
  site: "https://www.maxlineglobal.com",
  description:
    "We delivers reliable freight forwarding, warehousing, and logistics services across the GCC and beyond, ensuring efficiency, compliance, and end-to-end visibility",
  keywords: [
    "freight forwarding",
    "logistics services",
    "GCC logistics",
    "land freight",
    "air freight",
    "sea freight",
    "customs clearance",
    "Maxline Global",
    "supply chain solutions",
    "warehousing Dubai",
    "project cargo",
  ],
  title: {
    default: "Maxline Global | Freight Forwarding, Logistics & Supply Chain Solutions",
    template: "%s | Maxline Global",
  },

  image: {
    url: "https://maxline.com/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Maxline - Global Logistics Solutions",
  },
} as const;

export const socialLinks = [
  { title: "linkedin", href: "https://www.linkedin.com/company/maxline-global-logistics-solutions/" },
  { title: "instagram", href: "https://www.instagram.com/maxlineglobal/" },
  { title: "facebook", href: "https://www.facebook.com/maxlineglobal/" },
] as const;

export type SiteConfig = typeof siteConfig;
export type SocialLink = (typeof socialLinks)[number];
