import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

import SpotlightCard from "@/components/animation/spotlight-card";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { Service } from "@/types";

export const ServiceCard = ({
	service,
	index,
}: {
	service: Service;
	index: number;
}) => {
	const t = useTranslations("HomePage");
	return (
		<SpotlightCard
			className="group/service relative overflow-hidden rounded-xl"
			itemProp="itemListElement"
			itemScope
			itemType="https://schema.org/Service"
			spotlightColor="rgba(0, 200, 255, 0.5)"
		>
			{index ? <meta content={String(index + 1)} itemProp="position" /> : null}
			<Link
				aria-label={`Learn more about ${service.title}`}
				className="absolute inset-0 z-20 select-none"
				href={service.href}
			/>
			<div className="relative z-11 p-6 text-secondary sm:p-8 md:p-10 lg:p-14">
				<h3
					className="mb-2 font-grotesk text-xl sm:text-2xl md:text-3xl lg:text-4xl"
					itemProp="name"
				>
					{t(
						`services.service.${service.title as Parameters<typeof t>[0]}.title` as unknown as Parameters<
							typeof t
						>[0]
					)}
				</h3>
				<p
					className="max-w-xs text-balance font-light text-sm sm:text-base md:text-lg lg:text-xl"
					itemProp="description"
				>
					{service.description}
					{/* {t(
						`services.service.${service.title as Parameters<typeof t>[0]}.description` as unknown as Parameters<
							typeof t
						>[0]
					)} */}
				</p>

				<Button className="mt-6 w-full sm:mt-7 sm:w-auto md:mt-9">
					Explore more{" "}
					<IconArrowRightTag className="ml-2 size-4 sm:ml-4 sm:size-5" />
				</Button>
			</div>

			<div className="absolute top-0 right-0 z-10 aspect-square h-full">
				<Image
					alt={`${service.title} service illustration`}
					className="object-contain transition-transform duration-500 ease-out ltr:scale-110 ltr:group-hover:scale-100 rtl:-scale-x-100"
					fill
					itemProp="image"
					sizes="(max-width: 768px) 100vw, 50vw"
					src={service.image}
				/>
			</div>
			<ServiceCardBG className="absolute inset-0 -z-10 h-full -translate-x-6 opacity-50 transition-transform duration-300 ease-out group-hover/service:translate-x-0" />
			<div className="absolute inset-0 -z-11 bg-accent-secondary" />
		</SpotlightCard>
	);
};

export const ServiceCardBG = (props: SVGProps) => {
	return (
		<svg
			{...props}
			fill="none"
			height="288"
			viewBox="0 0 519 288"
			width="519"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M389.194 302.5L518.5 -14H155V302.5H389.194Z"
				fill="url(#paint0_linear_0_1)"
			/>
			<path
				d="M233.694 302.5L363 -14H-0.5V302.5H233.694Z"
				fill="url(#paint1_linear_0_1)"
			/>
			<defs>
				<linearGradient
					gradientUnits="userSpaceOnUse"
					id="paint0_linear_0_1"
					x1="336.75"
					x2="336.75"
					y1="-14"
					y2="302.5"
				>
					<stop stopColor="#00A6F4" />
					<stop offset="1" stopColor="#0084D1" />
				</linearGradient>
				<linearGradient
					gradientUnits="userSpaceOnUse"
					id="paint1_linear_0_1"
					x1="181.25"
					x2="181.25"
					y1="-14"
					y2="302.5"
				>
					<stop stopColor="#0084D1" />
					<stop offset="1" stopColor="#00A6F4" />
				</linearGradient>
			</defs>
		</svg>
	);
};
