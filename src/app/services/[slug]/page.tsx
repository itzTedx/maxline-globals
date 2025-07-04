import { Metadata } from "next";
import Image from "next/image";

import {
  IconClock,
  IconDoor,
  IconFileDescription,
  IconMap2,
  IconSnowflake,
  IconUserHexagon,
} from "@tabler/icons-react";

import SimpleMarquee from "@/components/animation/simple-marquee";
import SpotlightCard from "@/components/animation/spotlight-card";
import { StaggeredText } from "@/components/animation/staggered-text";
import { Cta } from "@/feature/cta";
import { InsightsCarousel } from "@/feature/insights/components/insights-carousel";
import { Commitment } from "@/feature/services/commitment";
import { Features } from "@/feature/services/features";
import { Hero } from "@/feature/services/hero";

// Mock data - replace with actual API call later
const mockData = {
  hero: {
    title: "Land Freight",
    description:
      "Efficient land freight across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
    image: {
      src: "/images/truck-full.png",
      alt: "Maxline Global's modern freight truck representing our land freight capabilities",
      width: 816,
      height: 626,
    },
    ctaLink: "#features",
    ctaText: "Learn More",
  },
  features: {
    overview: {
      title: "Reliable Land Freight Solutions Across the GCC",
      description:
        "At Maxline Global, we specialize in providing seamless, cost-effective land freight services across the GCC and surrounding regions. Whether it's full truckload (FTL), less-than-truckload (LTL), or oversized cargo, our road transport solutions are designed to deliver speed, safety, and reliability every mile of the way.",
    },
    features: {
      title: "Why Choose Maxline for Land Freight?",
      description:
        "Maxline Global offers flexible and secure land freight solutions across the GCC, including FTL, LTL, and project cargo. Our GPS-enabled fleet, bonded transport capabilities, and certified handling of hazardous goods ensure safe, compliant, and efficient deliveries across borders.",
      items: [
        {
          title: "World-Wide Network",
          description:
            "We operate an extensive land transport network connecting the UAE with Saudi Arabia, Oman, Kuwait, Bahrain, and Qatar, United Kingdom.",
        },
        {
          title: "FTL & LTL Services",
          description:
            "Flexible shipping options tailored to the size and urgency of your cargo.",
        },
        {
          title: "Oversized & Project Cargo Expertise",
          description:
            "Equipped to handle out-of-gauge, heavy lift, and high-value cargo with precision and care.",
        },
        {
          title: "GPS-Enabled Vehicles",
          description:
            "Real-time tracking and visibility throughout the journey.",
        },
        {
          title: "Customs Bonded Transport",
          description:
            "Smooth cross-border movements with proper documentation and compliance.",
        },
        {
          title: "Hazardous Goods Handling",
          description:
            "Certified to transport chemical and reefer cargo safely and in accordance with international regulations.",
        },
      ],
    },
  },
  industries: [
    { title: "Oil & Gas", image: "/images/industries/oil-gas.webp" },
    {
      title: "Construction & Infrastructure",
      image: "/images/industries/construction.webp",
    },
    { title: "FMCG & Retail", image: "/images/industries/fmcg.webp" },
    { title: "Automotive", image: "/images/industries/automotive.webp" },
    {
      title: "Chemical & Pharmaceutical",
      image: "/images/industries/chemical-container.webp",
    },
    {
      title: "Government & Military Projects",
      image: "/images/industries/government.webp",
    },
  ],
  capabilities: [
    {
      icon: IconDoor,
      title: "Door-to-Door Distribution",
      description:
        "Seamless pickup and delivery directly from origin to destination, ensuring convenience and full-service logistics.",
    },
    {
      icon: IconMap2,
      title: "Route & Delivery Optimization",
      description:
        "Smart route planning to reduce transit times, lower costs, and improve on-time delivery performance.",
    },
    {
      icon: IconSnowflake,
      title: "Temperature Controlled Vehicles",
      description:
        "Specialized vehicles to maintain stable temperatures for sensitive cargo such as perishables or pharmaceuticals.",
    },
    {
      icon: IconClock,
      title: "Express Delivery Options",
      description:
        "Priority transport services for time-critical shipments with guaranteed fast delivery windows.",
    },
    {
      icon: IconUserHexagon,
      title: "Onsite Cargo Supervision",
      description:
        "Professional oversight during loading, unloading, and transit to ensure cargo safety and compliance.",
    },
    {
      icon: IconFileDescription,
      title: "Customs Clearance Support",
      description:
        "Expert assistance to navigate complex regulations, ensuring smooth and efficient customs processing.",
    },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Land Freight Services | Maxline Global",
    description:
      "Efficient land freight solutions across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
    openGraph: {
      title: "Land Freight Services | Maxline Global",
      description:
        "Efficient land freight solutions across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
      images: [
        {
          url: "/images/truck-full.png",
          width: 816,
          height: 626,
          alt: "Maxline Global's modern freight truck representing our land freight capabilities",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Land Freight Services | Maxline Global",
      description:
        "Efficient land freight solutions across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
      images: ["/images/truck-full.png"],
    },
  };
}

// Structured data for the service page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Land Freight Services",
  description:
    "Efficient land freight solutions across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
  provider: {
    "@type": "Organization",
    name: "Maxline Global",
    url: "https://maxlineglobal.com",
  },
  areaServed: [
    "UAE",
    "Saudi Arabia",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Qatar",
    "United Kingdom",
  ],
  serviceType: ["FTL", "LTL", "Oversized Cargo", "Project Cargo"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Land Freight Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Truck Load (FTL)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Less Than Truck Load (LTL)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oversized & Project Cargo",
        },
      },
    ],
  },
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl"
        aria-labelledby="page-title"
      >
        <Hero {...mockData.hero} />
        <Features {...mockData.features} />
        <section className="relative overflow-hidden pb-10 md:pb-20">
          <h3 className="font-grotesk text-brand-dark container mb-8 text-4xl md:mb-12 md:text-6xl">
            Industries we move the <br />
            <span className="text-secondary">Maxline Global</span> way
          </h3>
          <SimpleMarquee
            className="w-full"
            baseVelocity={4}
            repeat={4}
            draggable
            scrollSpringConfig={{ damping: 50, stiffness: 400 }}
            slowDownFactor={0.1}
            slowdownOnHover
            slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
            scrollAwareDirection={true}
            useScrollVelocity={true}
            direction="left"
          >
            {mockData.industries.map((item, i) => (
              <MarqueeItem key={i}>
                <div className="text-background font-grotesk relative aspect-4/3 h-60 overflow-hidden rounded-2xl p-6 text-2xl md:h-80 md:p-9 md:text-4xl">
                  <h4 className="relative z-20 flex h-full items-end">
                    {item.title}
                  </h4>
                  <div className="from-secondary/80 absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent" />
                  <div className="bg-secondary absolute inset-0 z-10 mix-blend-hue" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={i < 2 ? "eager" : "lazy"}
                    priority={i < 2}
                  />
                </div>
              </MarqueeItem>
            ))}
          </SimpleMarquee>
        </section>
        <section className="container py-10 md:py-20">
          <h4
            id="hero-title"
            className="font-grotesk text-brand-gray relative z-10 container mb-3 max-w-6xl text-center text-3xl tracking-tight text-balance md:text-6xl/16"
          >
            <StaggeredText
              text={`Expanded Land Freight Capabilities for Faster, Smarter Delivery`}
              staggerChildren={0.03}
              duration={0.7}
              className="[&>span:nth-child(2)]:text-secondary [&>span:nth-child(3)]:text-secondary [&>span:nth-child(4)]:text-secondary"
            />
          </h4>
          <ul className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 md:gap-2 md:pt-9 lg:grid-cols-3">
            {mockData.capabilities.map((item) => (
              <SpotlightCard
                key={item.title}
                spotlightColor="rgba(0, 200, 255, 0.3)"
                className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
              >
                <div className="bg-muted flex size-16 items-center justify-center rounded-full md:size-20">
                  <item.icon className="text-brand-gray size-8 stroke-[1.5] md:size-12" />
                </div>
                <h5 className="font-grotesk text-brand-dark mt-8 mb-2 text-2xl md:mt-12 md:mb-3 md:text-4xl">
                  {item.title}
                </h5>
                <p className="text-sm md:text-base">{item.description}</p>
              </SpotlightCard>
            ))}
          </ul>
        </section>
        <Commitment />
        <InsightsCarousel />
        <Cta />
      </main>
    </>
  );
}

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-1 cursor-pointer duration-300 ease-in-out hover:scale-105 md:mx-2.5">
    {children}
  </div>
);
