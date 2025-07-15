import {
  IconClock,
  IconDoor,
  IconFileDescription,
  IconMap2,
  IconSnowflake,
  IconUserHexagon,
} from "@tabler/icons-react";

export const SERVICES = [
  {
    slug: "land-freight",
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
  },
  {
    slug: "air-freight",
    hero: {
      title: "Air Freight",
      description:
        "Swift air freight solutions for global reach—time-sensitive cargo delivered with precision, speed, and reliability.",
      image: {
        src: "/images/plane.webp",
        alt: "Maxline Global's air freight services with a cargo aircraft in action",
        width: 816,
        height: 626,
      },
      ctaLink: "#features",
      ctaText: "Learn More",
    },
    features: {
      overview: {
        title: "Fast & Secure Air Freight Across the Globe",
        description:
          "Maxline Global provides fast and reliable air freight services connecting major global hubs. Whether it’s urgent parcels, perishable goods, or high-value shipments, our air cargo solutions ensure your freight reaches its destination on time with full tracking and care.",
      },
      features: {
        title: "Why Choose Maxline for Air Freight?",
        description:
          "Our extensive global airline partnerships, advanced handling capabilities, and expert logistics planning allow us to offer top-tier air freight services. From door-to-door express deliveries to temperature-sensitive cargo, we make international shipping seamless and efficient.",
        items: [
          {
            title: "Global Network Access",
            description:
              "Direct access to major international airports and airline partners for swift worldwide delivery.",
          },
          {
            title: "Priority & Express Shipping",
            description:
              "Time-critical shipments handled with high priority to meet tight delivery windows.",
          },
          {
            title: "Perishable & Temperature-Controlled Cargo",
            description:
              "Safe transport for pharmaceuticals, food, and other temperature-sensitive goods.",
          },
          {
            title: "Advanced Cargo Tracking",
            description:
              "Real-time tracking and notifications ensure complete visibility from origin to destination.",
          },
          {
            title: "Customs & Compliance Management",
            description:
              "End-to-end support with documentation and international trade compliance.",
          },
          {
            title: "Special Handling & High-Value Cargo",
            description:
              "Secure and monitored handling for fragile, hazardous, or high-value freight.",
          },
        ],
      },
    },
    industries: [
      {
        title: "Healthcare & Pharma",
        image: "/images/industries/medical.webp",
      },
      {
        title: "Electronics & IT",
        image: "/images/industries/electronics.webp",
      },
      { title: "Fashion & Apparel", image: "/images/industries/fashion.webp" },
      {
        title: "Automotive Spares",
        image: "/images/industries/automotive.webp",
      },
      { title: "Perishables & Food", image: "/images/industries/fmcg.webp" },
      {
        title: "Government & Diplomatic Goods",
        image: "/images/industries/government.webp",
      },
    ],
    capabilities: [
      {
        icon: IconDoor,
        title: "Door-to-Airport & Door-to-Door",
        description:
          "Flexible pickup and delivery options to match your international shipping requirements.",
      },
      {
        icon: IconMap2,
        title: "Global Route Optimization",
        description:
          "Optimized flight schedules and cargo connections for the fastest possible transit times.",
      },
      {
        icon: IconSnowflake,
        title: "Cold Chain Air Freight",
        description:
          "Temperature integrity maintained through certified cold chain logistics and packaging.",
      },
      {
        icon: IconClock,
        title: "Time-Definite Deliveries",
        description:
          "Guaranteed delivery times for critical shipments across continents.",
      },
      {
        icon: IconUserHexagon,
        title: "Airside Cargo Supervision",
        description:
          "Trained personnel ensuring proper handling and loading at every airport touchpoint.",
      },
      {
        icon: IconFileDescription,
        title: "Air Freight Documentation Support",
        description:
          "Accurate and compliant airway bills, customs declarations, and import/export documents.",
      },
    ],
  },
  {
    slug: "sea-freight",
    hero: {
      title: "Sea Freight",
      description:
        "Cost-effective and reliable sea freight solutions—FCL, LCL, and project cargo shipping with global reach and expert handling.",
      image: {
        src: "/images/ship-cargo.png",
        alt: "Maxline Global's sea freight cargo ship representing international ocean shipping capabilities",
        width: 816,
        height: 626,
      },
      ctaLink: "#features",
      ctaText: "Learn More",
    },
    features: {
      overview: {
        title: "Global Sea Freight Services You Can Count On",
        description:
          "At Maxline Global, we provide dependable and economical sea freight services across key global trade routes. From full container loads (FCL) and less-than-container loads (LCL) to breakbulk and Ro-Ro cargo, our maritime logistics ensure smooth port-to-port or door-to-door delivery for businesses of all sizes.",
      },
      features: {
        title: "Why Choose Maxline for Sea Freight?",
        description:
          "Backed by a global network of shipping lines and port agents, Maxline delivers secure and efficient ocean freight solutions. Our team handles customs, compliance, and cargo consolidation to simplify your supply chain—whether it's regular container shipments or specialized cargo.",
        items: [
          {
            title: "FCL & LCL Shipping",
            description:
              "Flexible container options tailored to your cargo volume, cost, and schedule.",
          },
          {
            title: "Global Port Access",
            description:
              "Connections to major ports across Asia, Europe, the Americas, and Africa through trusted carrier partnerships.",
          },
          {
            title: "Breakbulk & Project Cargo",
            description:
              "Expertise in handling non-containerized, oversized, or heavy-lift cargo with care and precision.",
          },
          {
            title: "Ro-Ro & Vehicle Shipping",
            description:
              "Efficient roll-on/roll-off shipping for automobiles, machinery, and wheeled cargo.",
          },
          {
            title: "Cargo Consolidation Services",
            description:
              "Group multiple shipments into one container to optimize cost and efficiency.",
          },
          {
            title: "Port Handling & Documentation",
            description:
              "End-to-end management of port clearance, customs, and compliance paperwork.",
          },
        ],
      },
    },
    industries: [
      { title: "Oil & Energy", image: "/images/industries/oil-gas.webp" },
      {
        title: "Construction Equipment",
        image: "/images/industries/construction.webp",
      },
      {
        title: "Retail & Consumer Goods",
        image: "/images/industries/fmcg.webp",
      },
      { title: "Automotive", image: "/images/industries/automotive.webp" },
      {
        title: "Heavy Machinery",
        image: "/images/industries/heavy-machinery.webp",
      },
      {
        title: "Industrial & Engineering",
        image: "/images/industries/industrial.webp",
      },
    ],
    capabilities: [
      {
        icon: IconDoor,
        title: "Port-to-Port & Door-to-Door",
        description:
          "Flexible delivery options with first- and last-mile connectivity across global markets.",
      },
      {
        icon: IconMap2,
        title: "Route Optimization & Transit Planning",
        description:
          "Strategic route mapping and scheduling to reduce ocean transit time and costs.",
      },
      {
        icon: IconSnowflake,
        title: "Reefer Containers for Temperature Control",
        description:
          "Transport perishable goods in controlled environments with refrigerated containers.",
      },
      {
        icon: IconClock,
        title: "Scheduled Sailings & Reliable ETAs",
        description:
          "Timely shipments with predictable sailing schedules and milestone visibility.",
      },
      {
        icon: IconUserHexagon,
        title: "Cargo Supervision & Port Handling",
        description:
          "Experienced personnel oversee cargo loading, unloading, and port logistics.",
      },
      {
        icon: IconFileDescription,
        title: "Comprehensive Documentation & Customs",
        description:
          "Support with all shipping documents including bills of lading, manifests, and export/import compliance.",
      },
    ],
  },
];
