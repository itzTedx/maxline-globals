import { memo } from "react";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";

import { SERVICES } from "@/constants";

import { ServicesGrid } from "../../services/services-grid";
import { ServicesBottomCTA } from "../components/services-bottom-cta";
import { ServicesCenteredContent } from "../components/services-centered-content";
import { ServicesHeroVideo } from "../components/services-hero-video";
import { ServicesSchema } from "../schema/services-schema";

export const ServicesSection = memo(() => {
	const t = useTranslations("HomePage");
	return (
		<>
			<ServicesSchema services={SERVICES} />
			<section
				aria-labelledby="services-heading"
				className="relative"
				itemScope
				itemType="https://schema.org/Service"
			>
				<div className="relative overflow-hidden">
					<ServicesHeroVideo />
					<ServicesCenteredContent />
				</div>

				<div className="relative z-30">
					<h2
						className="mx-auto max-w-3xl text-balance pb-10 text-center font-medium text-4xl text-[#5C5E70] tracking-tight max-md:pt-10 md:text-5xl lg:pb-20 lg:text-6xl rtl:leading-snug"
						id="services-heading"
						itemProp="name"
					>
						<StaggeredText
							className="[&>span:nth-last-child(-n+2)]:text-secondary"
							duration={0.5}
							staggerChildren={0.02}
							text={t("services.title")}
						/>
					</h2>

					<div itemProp="offers" itemScope itemType="https://schema.org/Offer">
						<ServicesGrid services={SERVICES} />
					</div>

					<div
						itemProp="provider"
						itemScope
						itemType="https://schema.org/Organization"
					>
						<ServicesBottomCTA />
					</div>
				</div>

				<meta content="Logistics and Freight Services" itemProp="serviceType" />
				<meta content="Worldwide" itemProp="areaServed" />
				<meta content="Maxline Global" itemProp="provider" />
			</section>
		</>
	);
});

ServicesSection.displayName = "ServicesSection";
