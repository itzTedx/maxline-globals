import React from "react";

import { StaggeredText } from "@/components/animation/staggered-text";

import { XIcon } from "@/assets/x-icon";

import { cn } from "@/lib/utils";

interface TitleSegment {
	text: string;
	className?: string;
}

interface HeroHeaderProps {
	title: string | TitleSegment[] | React.ReactNode;
	description?: string;
	subtitle?: string | React.ReactNode;
	titleClassName?: string;
	descriptionClassName?: string;
	subtitleClassName?: string;
	className?: string;
	isLogo?: boolean;
	breadcrumb?: React.ReactNode;
	children?: React.ReactNode;
}

export function HeroHeader({
	title,
	description,
	subtitle,
	titleClassName,
	descriptionClassName,
	subtitleClassName,
	className,
	isLogo = true,
	breadcrumb,
	children,
}: HeroHeaderProps) {
	const renderTitle = () => {
		if (typeof title === "string") {
			return (
				<StaggeredText duration={0.7} staggerChildren={0.03} text={title} />
			);
		}
		if (
			Array.isArray(title) &&
			title.length > 0 &&
			typeof title[0] === "object" &&
			title[0] !== null &&
			"text" in title[0]
		) {
			return title.map((segment, index) => (
				<span
					className={cn(segment.className)}
					key={`${segment.text}-${index}`}
				>
					<StaggeredText
						duration={0.7}
						staggerChildren={0.03}
						text={segment.text}
					/>
				</span>
			));
		}
		// If it's an array but not TitleSegment[], join as string
		if (Array.isArray(title)) {
			return title.join("");
		}
		// If it's a ReactNode (from t.rich) or anything else
		return title;
	};

	return (
		<section
			aria-labelledby="hero-title"
			className={cn(
				"relative overflow-hidden py-6 text-center sm:py-12 md:py-14 lg:py-16",
				className
			)}
		>
			{breadcrumb && breadcrumb}
			<div className="relative z-10">
				{subtitle && (
					<p
						className={cn(
							"z-10 mb-2 text-base text-secondary md:text-xl lg:text-2xl",
							subtitleClassName
						)}
						role="doc-subtitle"
					>
						{typeof subtitle === "string" ? (
							<StaggeredText text={subtitle} />
						) : (
							subtitle
						)}
					</p>
				)}
				<h1
					className={cn(
						"relative z-10 mb-3 text-balance font-grotesk text-3xl text-brand-dark tracking-tight sm:text-5xl md:text-7xl/18",
						titleClassName
					)}
					id="hero-title"
				>
					{renderTitle()}
				</h1>
				{description && (
					<p
						className={cn(
							"text-balance font-light text-brand-gray text-sm sm:text-lg md:text-xl",
							descriptionClassName
						)}
						role="doc-subtitle"
					>
						<StaggeredText
							duration={0.7}
							staggerChildren={0.03}
							text={description}
						/>
					</p>
				)}
				{children}
			</div>
			{isLogo && (
				<XIcon
					aria-hidden="true"
					className="-translate-1/2 pointer-events-none absolute top-1/2 left-1/2 scale-75 opacity-40"
				/>
			)}
		</section>
	);
}
