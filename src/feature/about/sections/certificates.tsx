import Image from "next/image";

import { StaggeredText } from "@/components/animation/staggered-text";

// Add your logo filenames here
const logos = [
  "/images/logos/scn.png",
  "/images/logos/dssa.png",
  "/images/logos/wca.png",
  "/images/logos/fiata.png",
  "/images/logos/nafl.png",
  "/images/logos/iso.png",
];

export const CertificatesSection = () => {
  return (
    <section className="container py-20">
      <div className="container mb-9 text-center">
        <h2 className="font-grotesk text-brand-dark relative z-10 container mx-auto mb-4 max-w-4xl text-6xl/16 tracking-tight">
          <StaggeredText
            text="Certified for Excellence in Global Logistics"
            className="[&>span:nth-last-child(n+4)]:text-secondary"
            staggerChildren={0.03}
            duration={0.7}
          />
        </h2>
        <p className="text-brand-gray text-lg font-light">
          <StaggeredText
            text="Maxline Global’s certifications demonstrate our commitment to safe, efficient, and compliant logistics across air, sea, and land. We meet international standards in freight forwarding, warehousing, customs, and hazardous cargo—ensuring trust and reliability throughout the supply chain."
            className=""
            staggerChildren={0.03}
            duration={0.7}
          />
        </p>
      </div>
      <div className="container grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative h-16 w-32 brightness-75 grayscale transition-all duration-300 hover:brightness-100 hover:grayscale-0"
          >
            <Image
              src={logo}
              alt={`Company logo ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
