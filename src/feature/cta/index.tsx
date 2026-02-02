"use client";

import { useTranslations } from "next-intl";

import VerticalCutReveal from "@/components/animation/vertical-cut-reveal";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { Bucket } from "./ui/bucket";

export const Cta = () => {
	const t = useTranslations("Cta");
	return (
		<section
			aria-label="Call to Action"
			className="relative pb-20"
			id="cta"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<div className="container relative z-10 text-background">
				<div className="rounded-3xl bg-accent-tertiary">
					<div className="relative z-10 grid grid-cols-1 items-center gap-4 p-8 sm:p-12 md:grid-cols-2 md:gap-2 md:px-12 md:py-20 lg:px-24 lg:py-20">
						<div className="mb-20 space-y-3 md:mb-0 md:space-y-4">
							<h4
								className="font-semibold text-4xl md:text-5xl lg:text-6xl"
								itemProp="name"
							>
								<VerticalCutReveal
									splitBy="characters"
									staggerDuration={0.015}
									staggerFrom="first"
									transition={{
										type: "spring",
										stiffness: 200,
										damping: 21,
									}}
								>
									{t("title")}
								</VerticalCutReveal>
							</h4>
							<p
								className="font-light text-lg md:text-xl"
								itemProp="description"
							>
								<VerticalCutReveal
									splitBy="characters"
									staggerDuration={0.015}
									staggerFrom="first"
									transition={{
										delay: 0.5,
										type: "spring",
										stiffness: 200,
										damping: 21,
									}}
								>
									{t("description")}
								</VerticalCutReveal>
							</p>
							<div className="flex flex-col items-center gap-4 md:flex-row">
								<Button className="w-full md:w-auto">
									Get started <span>- it’s free</span>{" "}
									<IconArrowRightTag className="ml-4" />
								</Button>

								<Button className="w-full md:w-auto" variant="secondary">
									Contact sales team
								</Button>
							</div>
						</div>
						<div className="flex h-full w-full flex-1 items-end justify-end max-sm:items-end max-sm:justify-end max-md:pb-2 max-lg:items-center max-lg:justify-center md:items-center md:justify-center lg:items-end lg:justify-end max-md:landscape:hidden">
							<div className="w-full max-w-[600px] lg:max-w-none">
								<Bucket />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 h-1/2 bg-foreground" />
		</section>
	);
};
