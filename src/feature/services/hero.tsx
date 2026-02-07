import Image from "next/image";

import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { Link } from "@/i18n/navigation";

import { HeroProps } from "./types/types";

export const Hero = ({
	title,
	description,
	image,
	ctaLink,
	ctaText,
}: HeroProps) => {
	return (
		<>
			<section
				aria-labelledby="overview-title"
				className="relative overflow-hidden bg-white"
				id="overview"
				itemScope
				itemType="https://schema.org/Service"
			>
				<div className="container grid min-h-[50svh] grid-cols-1 gap-3 py-8 md:grid-cols-2 md:py-12">
					<div className="flex flex-col items-start justify-center">
						<h2
							className="font-display font-semibold text-4xl text-accent-tertiary uppercase md:text-6xl/16"
							id="overview-title"
							itemProp="name"
						>
							{title}
						</h2>
						<p
							className="mb-6 font-light text-xl leading-normal md:text-2xl"
							itemProp="description"
						>
							{description}
						</p>
						<Button asChild size="lg">
							<Link
								aria-label={`${ctaText} - ${title}`}
								className="gap-3 text-accent-tertiary"
								href={ctaLink}
							>
								{ctaText} <IconArrowRightTag className="ml-4 size-5" />
							</Link>
						</Button>
					</div>
					<div
						className="absolute top-0 right-0 h-[150px] md:h-auto"
						itemProp="image"
					>
						<Image
							alt={image.alt}
							className="h-full w-full object-contain"
							height={image.height}
							loading="eager"
							priority
							quality={90}
							sizes="(max-width: 768px) 100vw, 50vw"
							src={image.src}
							width={image.width}
						/>
					</div>
				</div>
			</section>
		</>
	);
};
