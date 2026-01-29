import { memo } from "react";

import Image from "next/image";

import { IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import SpotlightCard from "@/components/animation/spotlight-card";
import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

interface ServicesGridProps {
	services: Service[];
	isExpanded?: boolean;
}

const ServiceCard = memo(
	({
		service,
		isFirst,
		isExpanded,
		index,
		t,
	}: {
		service: Service;
		isFirst: boolean;
		isExpanded?: boolean;
		index?: number;
		t: ReturnType<typeof useTranslations>;
	}) => {
		return (
			<SpotlightCard
				className={cn(
					"bg-input text-brand-dark first:bg-brand-dark first:text-background",
					"group relative transition-colors",
					"cursor-pointer overflow-hidden",
					"col-span-2 flex items-center justify-between gap-3",
					"rounded-md px-4 py-5 md:px-8 md:py-12 lg:px-16 lg:py-20",
					!isExpanded && "md:nth-last-[2]:col-span-1 md:last:col-span-1"
				)}
				itemProp="itemListElement"
				itemScope
				itemType="https://schema.org/Service"
				spotlightColor="rgba(0, 200, 255, 0.5)"
			>
				{index ? (
					<meta content={String(index + 1)} itemProp="position" />
				) : null}
				<Link
					aria-label={`Learn more about ${service.title}`}
					className="absolute inset-0 z-40 select-none"
					href={service.href}
				/>
				<div className="relative z-30">
					<h3
						className="mb-2 font-grotesk text-3xl lg:text-4xl"
						itemProp="name"
					>
						{t(
							`services.service.${service.title as Parameters<typeof t>[0]}.title` as unknown as Parameters<
								typeof t
							>[0]
						)}
					</h3>
					<p
						className="max-w-xs text-balance font-light text-base text-secondary group-first:text-background md:text-lg lg:text-xl"
						itemProp="description"
					>
						{t(
							`services.service.${service.title as Parameters<typeof t>[0]}.description` as unknown as Parameters<
								typeof t
							>[0]
						)}
					</p>
				</div>

				<div className="absolute inset-0 z-20 from-input to-transparent md:group-nth-last-[1]:bg-linear-to-r" />
				<Button
					aria-label={`Learn more about ${service.title}`}
					asChild
					className="z-20"
					size="icon"
					variant="icon"
				>
					<Link href={service.href}>
						<IconArrowRight className="siz-4" />
					</Link>
				</Button>
				<div className="absolute z-10 aspect-4/3 h-[128%] ltr:-right-20 ltr:sm:-right-9 rtl:-left-9">
					<Image
						alt={`${service.title} service illustration`}
						className="object-contain transition-transform duration-500 ease-out ltr:scale-110 ltr:group-hover:scale-100 rtl:-scale-x-100"
						fill
						itemProp="image"
						loading={isFirst ? "eager" : "lazy"}
						priority={isFirst}
						quality={85}
						sizes="(max-width: 768px) 100vw, 50vw"
						src={service.image}
					/>
				</div>

				<div
					aria-hidden
					className={cn(
						"absolute z-0 size-32 rounded-full bg-radial from-primary to-transparent blur-2xl md:size-40 lg:size-52",
						"top-1/2 -translate-y-1/2 ltr:left-3/4 ltr:translate-x-1/2 rtl:right-3/4 rtl:-translate-x-1/2",
						!isExpanded &&
							"md:group-nth-last-[2]:left-3/4 md:group-last:left-3/4"
					)}
				/>
			</SpotlightCard>
		);
	}
);

ServiceCard.displayName = "ServiceCard";

export const ServicesGrid = memo(
	({ services, isExpanded }: ServicesGridProps) => {
		const t = useTranslations("HomePage");
		return (
			<ul
				className="container relative z-10 grid max-w-7xl grid-cols-1 gap-3 pb-20 md:grid-cols-2 md:pt-12"
				itemScope
				itemType="https://schema.org/ItemList"
				role="list"
			>
				{services.map((service, index) => (
					<ServiceCard
						index={index}
						isExpanded={isExpanded}
						isFirst={index === 0}
						key={`${service.title} - ${index}`}
						service={service}
						t={t}
					/>
				))}
			</ul>
		);
	}
);

ServicesGrid.displayName = "ServicesGrid";
