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

const CertificateLogo = ({ src, alt }: { src: string; alt: string }) => (
	<div className="relative h-12 w-20 sm:h-14 sm:w-24 md:h-16 md:w-30">
		<Image
			alt={alt}
			className="object-contain"
			fill
			loading="lazy"
			sizes="(max-width: 768px) 80px, (max-width: 1200px) 120px, 160px"
			src={src}
		/>
	</div>
);

export const Certifications = () => {
	const t = useTranslations("AboutPage");
	return (
		<section
			aria-label="Certifications"
			className="bg-secondary py-8 sm:py-10 md:py-12 lg:py-14"
		>
			<div className="container flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-left">
				<h2 className="font-medium text-lg sm:text-xl">
					<StaggeredText
						duration={0.7}
						staggerChildren={0.03}
						text={t("certification.title")}
					/>
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
					{logos.map((logo) => (
						<CertificateLogo
							alt={logo.alt}
							key={`${logo.src}-${logo.alt}`}
							src={logo.src}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
