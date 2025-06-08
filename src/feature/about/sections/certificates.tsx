import Image from "next/image";
import React from "react";

import { StaggeredText } from "@/components/animation/staggered-text";

// Add your logo filenames here
const logos = [
  { src: "/images/logos/scn.png", alt: "SCN Certification" },
  { src: "/images/logos/dssa.png", alt: "DSSA Certification" },
  { src: "/images/logos/wca.png", alt: "WCA Certification" },
  { src: "/images/logos/fiata.png", alt: "FIATA Certification" },
  { src: "/images/logos/nafl.png", alt: "NAFL Certification" },
  { src: "/images/logos/iso.png", alt: "ISO Certification" },
];

const CertificateLogo = React.memo(
  ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative h-16 w-32 brightness-75 grayscale transition-all duration-300 hover:brightness-100 hover:grayscale-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
        loading="lazy"
      />
    </div>
  )
);

CertificateLogo.displayName = "CertificateLogo";

export const CertificatesSection = () => {
  return (
    <section
      className="container py-12 md:py-16 lg:py-20"
      aria-label="Certifications"
    >
      <div className="container mb-9 text-center">
        <h2 className="font-grotesk text-brand-dark relative z-10 container mx-auto mb-4 max-w-4xl text-3xl tracking-tight md:text-4xl lg:text-6xl/16">
          <StaggeredText
            text="Certified for Excellence in Global Logistics"
            className="[&>span:nth-last-child(n+4)]:text-secondary"
            staggerChildren={0.03}
            duration={0.7}
          />
        </h2>
        <p className="text-brand-gray font-light md:text-lg">
          <StaggeredText
            text="Maxline Global's certifications demonstrate our commitment to safe, efficient, and compliant logistics across air, sea, and land. We meet international standards in freight forwarding, warehousing, customs, and hazardous cargo—ensuring trust and reliability throughout the supply chain."
            className=""
            staggerChildren={0.03}
            duration={0.7}
          />
        </p>
      </div>
      <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo, index) => (
          <CertificateLogo key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
};
