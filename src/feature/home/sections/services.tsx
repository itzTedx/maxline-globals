import { memo } from "react";

import Link from "next/link";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconHeadphone } from "@/assets/icons/headphone";

import { SERVICES } from "@/constants";

import { ServicesGrid } from "../../services/services-grid";
import { ServicesSchema } from "../schema/services-schema";

export const Services = memo(() => {
	const t = useTranslations("HomePage");
	const navT = useTranslations("Navigation");
	return (
		<>
			<ServicesSchema services={SERVICES} />
			<section
				aria-labelledby="services-heading"
				className="relative bg-secondary py-12 sm:py-16 md:py-20"
				itemScope
				itemType="https://schema.org/Service"
			>
				<div className="container relative z-30">
					<span className="flex items-center gap-2 font-medium text-muted-foreground text-xs sm:text-sm">
						<IconHeadphone className="size-3 sm:size-4" />
						{navT("services")}
					</span>
					<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
						<h2
							className="text-balance font-semibold text-2xl text-primary sm:pb-6 sm:text-3xl md:pb-10 md:text-4xl lg:pb-20 lg:text-5xl rtl:leading-snug"
							id="services-heading"
							itemProp="name"
						>
							<StaggeredText
								className="[&>span:nth-last-child(-n+1)]:text-primary! [&>span:nth-last-child(-n+4)]:text-accent-secondary"
								duration={0.5}
								staggerChildren={0.02}
								text={t("services.title")}
							/>
						</h2>
						<div className="space-y-3 sm:space-y-4">
							<p className="text-base text-muted-foreground sm:text-lg md:text-xl">
								{t("services.description")}
							</p>
							<Button asChild className="w-full sm:w-auto" variant="secondary">
								<Link href="/services">
									{t("services.btnText")}{" "}
									<IconArrowRightTag className="ms-2 size-4 sm:ms-4 rtl:rotate-180" />
								</Link>
							</Button>
						</div>
					</div>
					<div
						className="mt-8 md:mt-0"
						itemProp="offers"
						itemScope
						itemType="https://schema.org/Offer"
					>
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
