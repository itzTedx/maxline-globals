import React from "react";

import Image from "next/image";

import { useTranslations } from "next-intl";

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
				alt={alt}
				className="object-contain"
				fill
				loading="lazy"
				sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
				src={src}
			/>
		</div>
	)
);

CertificateLogo.displayName = "CertificateLogo";

export const CertificatesSection = () => {
	const t = useTranslations("AboutPage");
	return (
		<section
			aria-label="Certifications"
			className="container max-w-7xl py-12 md:py-16 lg:py-20"
		>
			<div className="container mb-9 text-center">
				<h2 className="container relative z-10 mx-auto mb-4 max-w-4xl font-grotesk text-3xl text-brand-dark tracking-tight md:text-4xl lg:text-6xl/16">
					<StaggeredText
						className="[&>span:nth-last-child(n+4)]:text-secondary"
						duration={0.7}
						staggerChildren={0.03}
						text={t("certification.title")}
					/>
				</h2>
				<p className="font-light text-brand-gray md:text-lg">
					<StaggeredText
						className=""
						duration={0.7}
						staggerChildren={0.03}
						text={t("certification.description")}
					/>
				</p>
			</div>
			<div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
				{logos.map((logo) => (
					<CertificateLogo
						alt={logo.alt}
						key={`${logo.src}-${logo.alt}`}
						src={logo.src}
					/>
				))}
			</div>
		</section>
	);
};
