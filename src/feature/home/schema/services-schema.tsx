import type { Service } from "@/types";

export const ServicesSchema = ({ services }: { services: Service[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `https://maxlineglobal.com${service.href}`,
      provider: {
        "@type": "Organization",
        name: "Maxline Global Logistics",
        url: "https://maxlineglobal.com",
      },
    })),
  };

  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" />;
};
