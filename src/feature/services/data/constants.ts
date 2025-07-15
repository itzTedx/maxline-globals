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
  {
    slug: "project-cargo",
    hero: {
      title: "Project Cargo",
      description:
        "Specialized project cargo logistics—oversized, heavy-lift, and time-critical shipments delivered with precision and end-to-end coordination.",
      image: {
        src: "/images/project-cargo.png",
        alt: "Maxline Global handling large project cargo with cranes and specialized equipment",
        width: 816,
        height: 626,
      },
      ctaLink: "#features",
      ctaText: "Learn More",
    },
    features: {
      overview: {
        title: "Tailored Solutions for Complex Project Cargo",
        description:
          "Maxline Global offers specialized logistics for complex and large-scale project cargo. From construction equipment and energy infrastructure to industrial machinery, we provide customized multimodal transport plans, route surveys, and on-site handling that meet the most demanding requirements.",
      },
      features: {
        title: "Why Maxline for Project Cargo Logistics?",
        description:
          "Our experienced project logistics team ensures safe and efficient transportation of over-dimensional and heavy-lift cargo. With detailed planning, specialized equipment, and compliance with local and international regulations, we support engineering, procurement, and construction (EPC) projects across industries.",
        items: [
          {
            title: "Heavy-Lift & Oversized Cargo",
            description:
              "Expert handling and transport for transformers, turbines, reactors, generators, and large industrial units.",
          },
          {
            title: "Multimodal Transport Planning",
            description:
              "Integrated use of road, sea, and air transport tailored to project timelines and cargo specifications.",
          },
          {
            title: "Route Surveys & Risk Assessments",
            description:
              "Detailed route feasibility studies, permits, and escort arrangements to ensure safe passage.",
          },
          {
            title: "Custom Crating & Lashing",
            description:
              "Engineered packaging, lifting, and securing solutions to protect sensitive or high-value cargo.",
          },
          {
            title: "End-to-End Project Coordination",
            description:
              "Dedicated project managers overseeing every stage of the transport—planning to final delivery.",
          },
          {
            title: "Onsite Supervision & Crane Handling",
            description:
              "Professional teams at loading/unloading sites with lifting equipment and safety compliance.",
          },
        ],
      },
    },
    industries: [
      { title: "Oil & Gas", image: "/images/industries/oil-gas.webp" },
      {
        title: "Energy & Power",
        image: "/images/industries/energy.webp",
      },
      { title: "Mining", image: "/images/industries/mining.webp" },
      {
        title: "Construction & Infrastructure",
        image: "/images/industries/construction.webp",
      },
      {
        title: "Engineering & Manufacturing",
        image: "/images/industries/industrial.webp",
      },
      {
        title: "Government & Defense",
        image: "/images/industries/government.webp",
      },
    ],
    capabilities: [
      {
        icon: IconDoor,
        title: "Site-to-Site Transport",
        description:
          "Direct delivery from manufacturing site to installation location, including remote or difficult terrains.",
      },
      {
        icon: IconMap2,
        title: "Route Engineering & Escort Planning",
        description:
          "Identify best-fit routes, secure permits, and arrange escort vehicles for oversized moves.",
      },
      {
        icon: IconSnowflake,
        title: "Climate-Sensitive Packaging",
        description:
          "Special crating and wrapping for weather-sensitive or corrosion-prone project materials.",
      },
      {
        icon: IconClock,
        title: "Milestone-Based Execution",
        description:
          "Time-specific planning to ensure timely arrival aligned with your overall project timeline.",
      },
      {
        icon: IconUserHexagon,
        title: "On-Ground Technical Teams",
        description:
          "Certified engineers and supervisors at origin and destination to oversee lifting and handling.",
      },
      {
        icon: IconFileDescription,
        title: "Regulatory & Customs Compliance",
        description:
          "Full assistance with import/export licenses, special handling approvals, and local regulations.",
      },
    ],
  },
  {
    slug: "packing",
    hero: {
      title: "Packing Services",
      description:
        "Professional packing and crating solutions—ensuring the safety, compliance, and integrity of your cargo for any mode of transport.",
      image: {
        src: "/images/packing-service.png",
        alt: "Maxline Global's expert packing team securing cargo in wooden crates",
        width: 816,
        height: 626,
      },
      ctaLink: "#features",
      ctaText: "Learn More",
    },
    features: {
      overview: {
        title: "Safe, Secure & Custom Packing Solutions",
        description:
          "At Maxline Global, we offer expert packing services tailored to your cargo type and mode of transport—whether by air, sea, or land. From wooden crating to vacuum sealing and shock-resistant packaging, we ensure your goods arrive safely, securely, and in full compliance with international standards.",
      },
      features: {
        title: "Why Choose Maxline for Packing?",
        description:
          "Our packing solutions are designed to prevent damage, meet regulatory standards, and optimize space for transport. With trained professionals and high-quality materials, we handle everything from fragile items and machinery to hazardous and temperature-sensitive cargo.",
        items: [
          {
            title: "Custom Crating & Palletizing",
            description:
              "Tailor-made wooden crates, pallets, and boxes designed to fit your cargo securely and efficiently.",
          },
          {
            title: "Export-Compliant Packaging",
            description:
              "ISPM-15 certified wood packing and documentation for hassle-free global shipping.",
          },
          {
            title: "Shock & Vibration Protection",
            description:
              "Use of cushioning materials, foam inserts, and anti-vibration solutions for fragile or delicate equipment.",
          },
          {
            title: "Moisture & Corrosion Control",
            description:
              "Vacuum sealing, desiccants, and anti-rust packaging for metal and moisture-sensitive goods.",
          },
          {
            title: "Hazardous Cargo Packaging",
            description:
              "Certified packaging for chemicals, batteries, and dangerous goods following IATA and IMDG standards.",
          },
          {
            title: "Labeling & Documentation",
            description:
              "Proper labeling for handling, destination, and compliance with shipping regulations.",
          },
        ],
      },
    },
    industries: [
      {
        title: "Industrial Equipment",
        image: "/images/industries/industrial.webp",
      },
      {
        title: "Electronics & IT",
        image: "/images/industries/electronics.webp",
      },
      {
        title: "Aerospace & Defense",
        image: "/images/industries/government.webp",
      },
      {
        title: "Automotive Spares",
        image: "/images/industries/automotive.webp",
      },
      { title: "Medical Equipment", image: "/images/industries/medical.webp" },
      {
        title: "Heavy Machinery",
        image: "/images/industries/heavy-machinery.webp",
      },
    ],
    capabilities: [
      {
        icon: IconDoor,
        title: "Onsite Packing Services",
        description:
          "Our team can pack and crate cargo directly at your site for maximum convenience and reduced handling.",
      },
      {
        icon: IconMap2,
        title: "Packing for Any Mode",
        description:
          "Packing solutions optimized for air, sea, and land transport—ensuring safety and compliance throughout.",
      },
      {
        icon: IconSnowflake,
        title: "Temperature-Sensitive Packaging",
        description:
          "Special packing for pharmaceuticals, perishables, and climate-sensitive products.",
      },
      {
        icon: IconClock,
        title: "Time-Critical Packing",
        description:
          "Rapid packing turnaround for urgent shipments without compromising quality or compliance.",
      },
      {
        icon: IconUserHexagon,
        title: "Technical Packing Teams",
        description:
          "Professionally trained staff with experience in packing high-value, sensitive, and irregular cargo.",
      },
      {
        icon: IconFileDescription,
        title: "Compliance & Export Documentation",
        description:
          "Full support for packing lists, certifications, and customs-ready documentation.",
      },
    ],
  },
  {
    slug: "warehousing",
    hero: {
      title: "Warehousing & Distribution",
      description:
        "Strategic warehousing solutions—secure storage, inventory management, and last-mile distribution tailored to your business.",
      image: {
        src: "/images/warehouse-service.png",
        alt: "Maxline Global’s secure warehouse facility with racked storage and forklift operations",
        width: 816,
        height: 626,
      },
      ctaLink: "#features",
      ctaText: "Learn More",
    },
    features: {
      overview: {
        title: "Smart & Scalable Warehousing Across the Region",
        description:
          "Maxline Global offers secure, scalable warehousing and distribution services across the UAE and GCC. Whether you're looking for short-term storage, inventory management, or integrated last-mile delivery, our facilities and systems are designed to streamline your supply chain and reduce operating costs.",
      },
      features: {
        title: "Why Choose Maxline for Warehousing?",
        description:
          "From bonded warehousing and temperature-controlled storage to value-added services like pick-and-pack and labeling, Maxline provides full-spectrum warehousing solutions. Our facilities are equipped with 24/7 surveillance, fire protection, and real-time inventory tracking to ensure your goods are safe and accessible.",
        items: [
          {
            title: "Multi-Temperature Storage",
            description:
              "Ambient, chilled, and frozen storage options for a variety of product types including perishables and pharmaceuticals.",
          },
          {
            title: "Bonded & Freezone Warehousing",
            description:
              "Customs-bonded and duty-free warehousing for international goods with deferred tax advantages.",
          },
          {
            title: "Inventory Management Systems",
            description:
              "Real-time stock monitoring, reporting, and integration with your ERP or sales platforms.",
          },
          {
            title: "Value-Added Services",
            description:
              "Pick-and-pack, kitting, labeling, shrink-wrapping, barcoding, and more—customized for your operational needs.",
          },
          {
            title: "Last-Mile Distribution",
            description:
              "End-to-end fulfillment including delivery across the UAE and GCC through our transport network.",
          },
          {
            title: "High-Security Facilities",
            description:
              "24/7 CCTV surveillance, fire suppression systems, and access control to protect your goods.",
          },
        ],
      },
    },
    industries: [
      { title: "FMCG & Retail", image: "/images/industries/fmcg.webp" },
      { title: "Pharmaceuticals", image: "/images/industries/medical.webp" },
      {
        title: "E-Commerce & Distribution",
        image: "/images/industries/ecommerce.webp",
      },
      { title: "Automotive", image: "/images/industries/automotive.webp" },
      {
        title: "Electronics & IT",
        image: "/images/industries/electronics.webp",
      },
      { title: "Fashion & Apparel", image: "/images/industries/fashion.webp" },
    ],
    capabilities: [
      {
        icon: IconDoor,
        title: "Door-to-Shelf Fulfillment",
        description:
          "From storage to delivery—seamlessly move inventory into retail or customer hands with our distribution network.",
      },
      {
        icon: IconMap2,
        title: "Strategic Warehouse Locations",
        description:
          "Warehouses positioned near key trade hubs, ports, and cities for faster delivery and reduced logistics cost.",
      },
      {
        icon: IconSnowflake,
        title: "Cold Chain Storage",
        description:
          "Temperature-controlled zones within warehouses for food, medicine, and sensitive goods.",
      },
      {
        icon: IconClock,
        title: "24/7 Operations & Access",
        description:
          "Around-the-clock warehouse operations to keep your supply chain moving—day or night.",
      },
      {
        icon: IconUserHexagon,
        title: "Dedicated Warehouse Staff",
        description:
          "Trained warehouse personnel for handling, sorting, and managing specialized goods with care.",
      },
      {
        icon: IconFileDescription,
        title: "Integrated Inventory Reporting",
        description:
          "Detailed tracking, analytics, and inventory reporting via our warehouse management system (WMS).",
      },
    ],
  },
  {
    slug: "exhibition-cargo",
    hero: {
      title: "Exhibition & Event Cargo",
      description:
        "Reliable and time-critical logistics for exhibitions and events—door-to-stand delivery with full customs and venue coordination.",
      image: {
        src: "/images/exhibition-cargo.png",
        alt: "Maxline Global team handling exhibition cargo with booths and crates at an event venue",
        width: 816,
        height: 626,
      },
      ctaLink: "#features",
      ctaText: "Learn More",
    },
    features: {
      overview: {
        title: "Specialized Exhibition Cargo Solutions",
        description:
          "Maxline Global provides comprehensive logistics for exhibitions, trade shows, and live events across the UAE and internationally. From pre-show storage and customs clearance to delivery, setup, and return, our team ensures your materials arrive safely and on time—ready for showtime.",
      },
      features: {
        title: "Why Choose Maxline for Exhibition Logistics?",
        description:
          "We understand the time-sensitive, high-visibility nature of exhibition cargo. That’s why we offer dedicated planning, priority handling, and venue coordination to ensure your stands, samples, AV gear, and promotional materials reach the venue on schedule and in perfect condition.",
        items: [
          {
            title: "Door-to-Stand Delivery",
            description:
              "We handle the entire journey from your warehouse to your exhibition booth, including unpacking and positioning.",
          },
          {
            title: "Pre & Post Event Storage",
            description:
              "Temporary warehousing before and after events to manage returns or multiple show schedules.",
          },
          {
            title: "Venue Access & Scheduling",
            description:
              "Coordination with exhibition organizers for on-site handling, timed deliveries, and approvals.",
          },
          {
            title: "Customs Clearance for Temporary Imports",
            description:
              "ATA Carnet and temporary import/export documentation support for international exhibitions.",
          },
          {
            title: "Fragile & High-Value Cargo Handling",
            description:
              "Special packaging and handling for electronics, display units, samples, and promotional gear.",
          },
          {
            title: "Return Logistics & Reverse Shipping",
            description:
              "Post-event pickup and shipment back to origin or to the next exhibition destination.",
          },
        ],
      },
    },
    industries: [
      { title: "Trade Shows", image: "/images/industries/tradeshow.webp" },
      { title: "Fashion & Retail", image: "/images/industries/fashion.webp" },
      { title: "Automotive", image: "/images/industries/automotive.webp" },
      {
        title: "Technology & Electronics",
        image: "/images/industries/electronics.webp",
      },
      {
        title: "Media & Entertainment",
        image: "/images/industries/media.webp",
      },
      {
        title: "Government & Diplomacy",
        image: "/images/industries/government.webp",
      },
    ],
    capabilities: [
      {
        icon: IconDoor,
        title: "Booth-to-Booth Handling",
        description:
          "We manage logistics between consecutive exhibitions or events, including repacking and routing.",
      },
      {
        icon: IconMap2,
        title: "International Event Logistics",
        description:
          "Cross-border planning for global exhibitions, ensuring timely delivery and regulatory compliance.",
      },
      {
        icon: IconSnowflake,
        title: "Climate-Controlled Transport",
        description:
          "Protect temperature-sensitive displays or equipment during transit and storage.",
      },
      {
        icon: IconClock,
        title: "Time-Sensitive Delivery Windows",
        description:
          "Timed unloading and entry to match venue access slots and strict exhibitor schedules.",
      },
      {
        icon: IconUserHexagon,
        title: "Onsite Support Staff",
        description:
          "Experienced personnel at venue for supervision, unloading, and booth coordination.",
      },
      {
        icon: IconFileDescription,
        title: "ATA Carnet & Temporary Clearance",
        description:
          "Expert handling of temporary admission paperwork, re-export formalities, and customs compliance.",
      },
    ],
  },
  {
    slug: "movers-lashing",
    hero: {
      title: "Movers & Lashing Services",
      description:
        "Secure and professional cargo lashing, securing, and relocation services—ensuring safe transport for local and international moves.",
      image: {
        src: "/images/movers-lashing.png",
        alt: "Maxline Global team performing container lashing and industrial moving services",
        width: 816,
        height: 626,
      },
      ctaLink: "#features",
      ctaText: "Learn More",
    },
    features: {
      overview: {
        title: "Professional Lashing & Relocation Services",
        description:
          "Maxline Global offers specialized movers and lashing services to ensure your cargo—whether industrial machinery, containers, or household items—is properly secured for safe transportation. We follow international standards to provide robust and compliant securing, minimizing risk during road, sea, or air transport.",
      },
      features: {
        title: "Why Maxline for Movers & Lashing?",
        description:
          "We provide end-to-end cargo securing and relocation solutions using certified materials and trained experts. Whether you’re moving factory equipment, containers, or personal belongings, we ensure everything is packed, lashed, and transported with the highest safety and operational efficiency.",
        items: [
          {
            title: "Industrial Machinery Moving",
            description:
              "Heavy and delicate machinery relocation with full disassembly, packing, transport, and reassembly.",
          },
          {
            title: "Container Lashing & Securing",
            description:
              "Use of chains, straps, and wooden blocks to secure cargo inside containers, flat racks, and trailers.",
          },
          {
            title: "ISPM-15 Certified Wood Blocking",
            description:
              "Treated wood chocking, bracing, and dunnage that meets international shipping standards.",
          },
          {
            title: "Personal & Office Relocation",
            description:
              "Local and international moving services for homes and corporate offices with safe packing and handling.",
          },
          {
            title: "Vessel & Port Lashing",
            description:
              "On-board cargo securing at ports for sea export and import shipments, following marine standards.",
          },
          {
            title: "Rigging & Crating Services",
            description:
              "Lifting, hoisting, and securing of large or awkward loads using proper tools and equipment.",
          },
        ],
      },
    },
    industries: [
      { title: "Manufacturing", image: "/images/industries/industrial.webp" },
      { title: "Oil & Gas", image: "/images/industries/oil-gas.webp" },
      { title: "Energy & Utilities", image: "/images/industries/energy.webp" },
      { title: "Construction", image: "/images/industries/construction.webp" },
      { title: "Residential & Office", image: "/images/industries/fmcg.webp" },
      { title: "Shipping & Ports", image: "/images/industries/port.webp" },
    ],
    capabilities: [
      {
        icon: IconDoor,
        title: "End-to-End Relocation",
        description:
          "Comprehensive local and international moving solutions with packing, transport, and unpacking services.",
      },
      {
        icon: IconMap2,
        title: "Onsite Lashing & Supervision",
        description:
          "Lashing performed at warehouses, ports, factories, or client sites with certified staff and inspection.",
      },
      {
        icon: IconSnowflake,
        title: "Delicate Equipment Handling",
        description:
          "Soft lashing and shock absorption for sensitive instruments and precision machinery.",
      },
      {
        icon: IconClock,
        title: "Quick Turnaround & Emergency Moves",
        description:
          "Rapid deployment for urgent relocation, export, or site transfer needs with full support.",
      },
      {
        icon: IconUserHexagon,
        title: "Experienced Moving Crews",
        description:
          "Professional handlers, riggers, and lashers with deep expertise in industrial and commercial cargo movement.",
      },
      {
        icon: IconFileDescription,
        title: "Lashing Certificates & Inspection Reports",
        description:
          "Documentation provided for customs, shipping lines, or compliance requirements.",
      },
    ],
  },
];
