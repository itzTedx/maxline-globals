type SubMenuItem = {
  title: string;
  href: string;
  img: string;
};

export type NavLink = {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
};

const SERVICES_LINKS = [
  {
    title: "Air Freight",
    href: "/services/air-freight",
    img: "/images/air-freight.webp",
  },
  {
    title: "Sea Freight",
    href: "/services/sea-freight",
    img: "/images/sea-freight.webp",
  },
  {
    title: "Land Freight",
    href: "/services/land-freight",
    img: "/images/blogs/transport-logistics-products.jpg",
  },
  {
    title: "Project Cargo",
    href: "/services/project-cargo",
    img: "/images/transportation-types.jpg",
  },
  {
    title: "Packing",
    href: "/services/packing",
    img: "/images/packing.webp",
  },
  {
    title: "Warehousing",
    href: "/services/warehousing",
    img: "/images/warehousing.webp",
  },
  {
    title: "Exhibition Cargo",
    href: "/services/exhibition-cargo",
    img: "/images/exhibition-cargo.webp",
  },
  {
    title: "Moving & Lashing",
    href: "/services/movers-lashing",
    img: "/images/movers.webp",
  },
];

export const NAVLINKS: NavLink[] = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "company",
    href: "/company",
    submenu: [
      {
        title: "aboutUs",
        href: "/company/about",
        img: "/images/about-us.webp",
      },
      {
        title: "leadershipTeam",
        href: "/company/team",
        img: "/images/meeting-1.webp",
      },
      { title: "insights", href: "/insights", img: "/images/insights.webp" },
    ],
  },
  {
    title: "services",
    href: "/services",
    submenu: SERVICES_LINKS,
  },
  {
    title: "trackShipment",
    href: "/track-shipment",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

export const SERVICES = [
  {
    title: "landFreight",
    description: "Efficient and Secure Road Transportation Across the GCC.",
    href: "/services/land-freight",
    image: "/images/truck.webp",
  },
  {
    title: "airFreight",
    description: "Swift Air Freight Solutions for Global Reach.",
    href: "/services/air-freight",
    image: "/images/plane.webp",
  },
  {
    title: "seaFreight",
    description: "Reliable Sea Freight Services Across Continents.",
    href: "/services/sea-freight",
    image: "/images/ship.webp",
  },
  {
    title: "projectCargo",
    description: "Specialized Handling for Heavy and Oversized Cargo.",
    href: "/services/project-cargo",
    image: "/images/container.webp",
  },
  {
    title: "warehousing",
    description: "Strategic Warehousing and Distribution Solutions.",
    href: "/services/warehousing-and-distribution",
    image: "/images/lifter.webp",
  },
  {
    title: "movingLashing",
    description: "Professional Relocation and Cargo Securing for Safe Transit.",
    href: "/services/project-cargo",
    image: "/images/movers.webp",
  },
];

export const FAQS = [
  {
    id: "1",
    title: "What logistics services does Maxline Global offer?",
    content:
      "Maxline Global provides a full range of logistics solutions including sea, air, and land freight, customs clearance, warehousing, project cargo handling, chartering, and more — tailored to your business needs across the GCC and beyond.",
  },
  {
    id: "2",
    title: "Which regions or countries does Maxline Global serve?",
    content:
      "We operate globally with a strong presence across the GCC countries, Asia, Europe, Africa, and the Americas. Our network enables seamless international trade and efficient cargo movement across all major trade lanes.",
  },
  {
    id: "3",
    title: "Do you handle dangerous or hazardous cargo?",
    content:
      "Yes. Maxline Global is certified and experienced in handling hazardous and non-hazardous materials, including chemicals and reefer (temperature-controlled) cargo. Our team follows strict safety standards and international regulations.",
  },
  {
    id: "4",
    title: "Can you manage oversized or project cargo?",
    content:
      "Absolutely. We offer project logistics solutions including heavy lift transport, Ro/Ro services, aircraft/ship chartering, and military or government shipment handling. We also provide port supervision and route planning for complex cargo.",
  },
  {
    id: "5",
    title: "Do you provide warehousing and distribution services?",
    content:
      "Yes. We operate modern warehousing facilities in and around Jebel Ali Free Zone (JAFZA) with services like palletizing, shrink wrapping, labeling, and web-based inventory management. We also offer local and international distribution services.",
  },
  {
    id: "6",
    title: "How can I track my shipment?",
    content:
      "We provide an easy-to-use Track & Trace system for real-time shipment updates. Clients can log in to our portal to view current location, estimated delivery time, and shipment history.",
  },
  {
    id: "7",
    title: "Do you provide door-to-door logistics services?",
    content:
      "Yes. We offer door-to-door, door-to-port, and port-to-door services for both LCL (Less than Container Load) and FCL (Full Container Load) shipments. This includes document handling, customs clearance, and final delivery.",
  },
  {
    id: "8",
    title: "How do I get a quote for freight services?",
    content:
      "Our team is available Monday to Friday, from 9:00 AM to 6:00 PM (UAE time). We are closed on weekends and public holidays. For urgent shipments, we can make special arrangements.",
  },
  {
    id: "9",
    title: "What are your business hours?",
    content:
      "Our team is available Monday to Friday, from 9:00 AM to 6:00 PM (UAE time). We are closed on weekends and public holidays. For urgent shipments, we can make special arrangements.",
  },
  {
    id: "10",
    title: "Why should I choose Maxline Global as my logistics partner?",
    content:
      "Maxline Global combines deep industry experience, a global network, and advanced logistics technology to offer flexible, scalable, and cost-effective supply chain solutions. We prioritize customer satisfaction, accuracy, and on-time delivery for every shipment.",
  },
  {
    id: "11",
    title: "What types of cargo does Maxline Global handle?",
    content:
      "Maxline Global handles a wide range of cargo, including general freight, hazardous and non-hazardous goods, temperature-sensitive shipments, oversized project cargo, and time-critical deliveries by land, sea, and air.",
  },
  {
    id: "12",
    title: "Do you provide customs clearance services?",
    content:
      "Yes, we offer comprehensive customs brokerage services for import, export, and transshipment across sea and air freight. Our team ensures compliance and smooth clearance through all major ports.",
  },
];

export const FOOTER_LINKS = [
  {
    header: "general",
    links: [
      { title: "home", href: "/" },
      { title: "about", href: "/company/about" },
      { title: "team", href: "/company/team" },
      { title: "insights", href: "/insights" },
      { title: "contact", href: "/contact" },
    ],
  },
  {
    header: "services",
    links: SERVICES_LINKS,
  },
  {
    header: "support",
    links: [
      { title: "trackShipment", href: "/track-shipment" },
      { title: "getQuoteShort", href: "/quote" },
      { title: "technicalSupport", href: "/contact" },
    ],
  },
  {
    header: "social",
    links: [
      { title: "linkedin", href: "/" },
      { title: "instagram", href: "/" },
      { title: "facebook", href: "/" },
      { title: "x", href: "/" },
    ],
  },
];

export const CAROUSEL_IMAGES = [
  "/images/carousel/logistics-means-transport-together-with-technological-futuristic-holograms copy.jpg",
  "/images/carousel/scene-with-photorealistic-logistics-operations-proceedings.jpg",
  "/images/carousel/technological-futuristic-holograms-logistics-means-transport.jpg",
  "/images/carousel/transport-logistics-products.jpg",
];

export const PRINCIPLES = [
  {
    head: "Vision",
    title: "Leading with Vision, Moving with Purpose.",
    description:
      "Our vision is to be the foremost leader in the freight forwarding industry, renowned for our innovative, sustainable, and customer-centric logistics solutions that redefine industry standards.",
  },
  {
    head: "Mission",
    title: "Driven by Purpose. Defined by Progress.",
    description:
      "Our mission is to deliver unparalleled excellence in freight forwarding by providing innovative, sustainable, and customer-focused solutions. We strive to exceed expectations, create lasting value for our clients, and drive progress in the logistics sector.",
  },
  {
    head: "Fast Service",
    title: "Logistics at the Speed of Business.",
    description:
      "We are committed to providing fast and reliable logistics services, ensuring the timely and efficient delivery of your goods. Our focus is on meeting and exceeding your expectations, helping your business thrive in today's fast-paced market. Experience the speed and efficiency of our logistics solutions.",
  },
  {
    head: "100% Accuracy",
    title: "Delivering Accuracy, Every Time.",
    description:
      "We guarantee 100% accuracy in every shipment through meticulous planning, streamlined processes, and efficient communication. Leveraging advanced technologies like real-time tracking and automation, we ensure precision and reliability, giving you peace of mind with every delivery. Trust us for accurate and dependable logistics solutions.",
  },
];

export const LOCATIONS = [
  {
    title: "Head Office (UAE)",
    address:
      "Maxline LLC, Mina Jebel Ali, Dubai Aid City, Dubai - United Arab Emirates",
    phone: "+971 4 282 2022",
    mobile: "+971 4 282 2022",
    email: "reception@maxlineglobal.com",
    link: "",
  },
  {
    title: "Maxline LLC - Ras Al Khor",
    address: "6a Street, Ras Al Khor Industrial 2, Dubai, UAE",
    phone: "+971 4 282 2022 EXT 201",
    mobile: "+971 4 282 2022",
    email: "reception@maxlineglobal.com",
    link: "",
  },
  {
    title: "Maxline Oman",
    address:
      "Unit No 24, 2nd floor Building 537, Way No 5016,  Ghala Heights Azaibaa South, Muscat, Sultanate Of Oman",
    phone: "+971 4 282 2022 EXT 401",
    mobile: "+971 4 282 2022",
    email: "reception@maxlineglobal.com",
    link: "",
  },
  {
    title: "Maxline Bahrain",
    address:
      "Office No 58, Building 2568, Road/Street 4450, Block 744, Al Ramli, Kingdom of Bahrain",
    phone: "+971 4 282 2022 EXT 702",
    mobile: "+971 4 282 2022",
    email: "reception@maxlineglobal.com",
    link: "",
  },
  {
    title: "Maxline Qatar",
    address: "Door 33 1st floor Mamoura plaza  Abuhamour, Doha, Qatar",
    phone: "+971 4 282 2022 EXT 601",
    mobile: "+971 4 282 2022",
    email: "reception@maxlineglobal.com",
    link: "",
  },
  {
    title: "Maxline KSA",
    address:
      "Shiny Gulf, Abu ishaq Al Rifay street, Khalidiya Al Janubiyyah, Port Road, Saudi Arabia",
    phone: "+971 4 282 2022 EXT 801",
    mobile: "+971 4 282 2022",
    email: "reception@maxlineglobal.com",
    link: "",
  },
];
