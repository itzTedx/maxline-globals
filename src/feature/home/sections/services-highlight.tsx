import { useTranslations } from "next-intl";

import { XIcon } from "@/assets/x-icon";

export const ServicesHighlight = () => {
	const t = useTranslations("HomePage");

	return (
		<section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
			<div className="container max-w-4xl space-y-4 text-center">
				<h2 className="font-display font-semibold text-4xl text-accent-tertiary uppercase sm:text-5xl md:text-6xl lg:text-7xl">
					{t("services.heading.first")} {t("services.heading.second")}
				</h2>
				<p className="text-balance text-base text-muted-foreground sm:text-lg md:text-xl">
					{t("services.description")}
				</p>
			</div>
			<XIcon className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 scale-80 text-muted-foreground/40" />
		</section>
	);
};

