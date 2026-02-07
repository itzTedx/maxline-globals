import { StaggeredText } from "@/components/animation/staggered-text";
import { Separator } from "@/components/ui/separator";

import { FeaturesProps } from "./types/types";

export const Features = ({ overview, features }: FeaturesProps) => {
	return (
		<>
			<section
				aria-labelledby="overview-title"
				className="py-8 md:py-12"
				id="overview"
				itemScope
				itemType="https://schema.org/Service"
			>
				<div className="container grid grid-cols-1 gap-3 md:grid-cols-5">
					<h2
						className="font-display font-semibold text-4xl text-accent-secondary uppercase md:col-span-2 md:text-6xl/16"
						id="overview-title"
						itemProp="name"
					>
						<StaggeredText text={overview.title} />
					</h2>
					<p
						className="col-span-1 font-light text-primary text-xl leading-normal md:col-span-3 md:pl-9 md:text-2xl"
						itemProp="description"
					>
						<StaggeredText text={overview.description} />
					</p>
				</div>
			</section>
			<Separator className="bg-primary/20" />
			<section aria-labelledby="features-title" id="features">
				<div className="container relative grid grid-cols-1 gap-8 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
					<div className="h-fit lg:sticky lg:top-[20vh]">
						<h3
							className="font-semibold text-3xl text-accent-tertiary uppercase md:text-5xl lg:mb-6"
							id="features-title"
						>
							<StaggeredText text={features.title} />
						</h3>
						<p className="text-balance font-light text-brand-gray text-lg leading-relaxed md:text-xl">
							<StaggeredText text={features.description} />
						</p>
					</div>
					<ul
						className="flex flex-col divide-y divide-muted-foreground/20"
						itemScope
						itemType="https://schema.org/ItemList"
						role="list"
					>
						{features.items.map((item, index) => (
							<li
								className="py-8 first:pt-0 md:py-16"
								itemProp="itemListElement"
								itemScope
								itemType="https://schema.org/Service"
								key={`${index + 1}-feature`}
							>
								<meta content={String(index + 1)} itemProp="position" />
								<h4
									className="mb-3 font-medium text-2xl text-accent-tertiary md:mb-4 md:text-3xl"
									itemProp="name"
								>
									<StaggeredText text={item.title} />
								</h4>
								<p
									className="text-balance font-light text-xl leading-snug md:text-2xl"
									itemProp="description"
								>
									<StaggeredText text={item.description} />
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};
