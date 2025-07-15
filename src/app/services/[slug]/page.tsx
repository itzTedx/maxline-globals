import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import SimpleMarquee from "@/components/animation/simple-marquee";
import SpotlightCard from "@/components/animation/spotlight-card";
import { StaggeredText } from "@/components/animation/staggered-text";
import { Cta } from "@/feature/cta";
import { InsightsCarousel } from "@/feature/insights/components/insights-carousel";
import { Commitment } from "@/feature/services/commitment";
import { SERVICES } from "@/feature/services/data/constants";
import { Features } from "@/feature/services/features";
import { Hero } from "@/feature/services/hero";

type Params = Promise<{ slug: string }>;

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

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();
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
        <Hero {...service.hero} />
        <Features {...service.features} />
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
            {service.industries.map((item, i) => (
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
            {service.capabilities.map((item) => (
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
