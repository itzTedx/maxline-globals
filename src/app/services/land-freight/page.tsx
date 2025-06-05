import { BlogsCarousel } from "@/feature/blogs/blogs-carousel";
import { Cta } from "@/feature/cta";
import { Commitment } from "@/feature/services/commitment";
import { Features } from "@/feature/services/features";
import { Hero } from "@/feature/services/hero";

// Mock data - replace with actual API call later
const mockData = {
  hero: {
    title: "Land Freight Services",
    description:
      "Efficient land freight across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
    image: {
      src: "/images/truck-full.png",
      alt: "Maxline Global's modern freight truck representing our land freight capabilities",
      width: 816,
      height: 626,
    },
    ctaLink: "/quote",
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
};

export const metadata = {
  title: "Land Freight Services | Maxline Global",
  description:
    "Efficient land freight solutions across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
};

export default function ServicePage() {
  return (
    <main
      className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl"
      aria-labelledby="page-title"
    >
      <Hero {...mockData.hero} />
      <Features {...mockData.features} />
      <Commitment />
      <BlogsCarousel />
      <Cta />
    </main>
  );
}
