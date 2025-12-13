import Script from "next/script";

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

  return (
    <Script id="services-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
};
