import { memo } from "react";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconHeadphone } from "@/assets/icons/headphone";

import { SERVICES } from "@/constants";

import { ServicesGrid } from "../../services/services-grid";
import { ServicesSchema } from "../schema/services-schema";

export const Services = memo(() => {
	// const t = useTranslations("HomePage");
	return (
		<>
			<ServicesSchema services={SERVICES} />
			<section
				aria-labelledby="services-heading"
				className="relative bg-secondary py-20"
				itemScope
				itemType="https://schema.org/Service"
			>
				<div className="container relative z-30">
					<span className="flex items-center gap-2 font-medium text-muted-foreground text-sm">
						<IconHeadphone className="size-4" />
						Services
					</span>
					<div className="grid grid-cols-2 gap-6">
						<h2
							className="text-balance pb-10 font-semibold text-4xl text-primary md:text-5xl lg:pb-20 rtl:leading-snug"
							id="services-heading"
							itemProp="name"
						>
							<StaggeredText
								className="[&>span:nth-last-child(-n+1)]:text-primary! [&>span:nth-last-child(-n+4)]:text-accent-secondary"
								duration={0.5}
								staggerChildren={0.02}
								text="Integrated Freight & Logistics Services"
							/>
						</h2>
						<div className="space-y-4">
							<p className="text-muted-foreground text-xl">
								Our end-to-end logistics services are designed to support modern
								supply chains flexible, scalable, and tailored to your exact
								requirements.
							</p>
							<Button variant="secondary">
								Explore services
								<IconArrowRightTag className="ml-4 size-4" />
							</Button>
						</div>
					</div>
					<div itemProp="offers" itemScope itemType="https://schema.org/Offer">
						<ServicesGrid services={SERVICES} />
					</div>
				</div>

				<meta content="Logistics and Freight Services" itemProp="serviceType" />
				<meta content="Worldwide" itemProp="areaServed" />
				<meta content="Maxline Global" itemProp="provider" />
			</section>
		</>
	);
});

Services.displayName = "Services";
