import type { ReactNode } from "react";

import { useTranslations } from "next-intl";

import { IndustriesCarousel } from "../components/industries-carousel";

export const Industries = () => {
	const t = useTranslations("HomePage");
	const richT = t as unknown as {
		rich: (
			key: string,
			values: { [name: string]: (chunks: ReactNode) => ReactNode }
		) => ReactNode;
	};

	return (
		<section className="bg-foreground py-20 text-background">
			<div className="container">
				<span>{t("industries.label")}</span>
				<h2 className="mb-3 max-w-2xl font-semibold text-4xl">
					{richT.rich("industries.title", {
						accent: (chunks: ReactNode) => (
							<span className="text-accent">{chunks}</span>
						),
					})}
				</h2>
				<p className="max-w-2xl font-light text-2xl text-muted">
					{t("industries.description")}
				</p>
			</div>
			<IndustriesCarousel />
		</section>
	);
};
