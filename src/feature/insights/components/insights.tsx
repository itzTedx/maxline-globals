import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";

import { getInsights } from "../actions/query";
import { InsightCard } from "./insight-card";

export const InsightsCarousel = async () => {
	const t = await getTranslations("HomePage");
	const locale = await getLocale();

	const insights = await getInsights({ locale });
	return (
		<section
			aria-label="Blog posts carousel"
			className="w-full overflow-hidden py-10 md:py-16 lg:py-20"
		>
			<div className="container">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-2">
						<span className="text-muted-foreground text-sm tracking-wider">
							{t("insights.label")}
						</span>
						<h2 className="font-semibold text-3xl text-primary sm:text-4xl lg:text-5xl">
							{t.rich("insights.title")}
						</h2>
					</div>
					<div className="space-y-3">
						<p className="text-balance font-light text-lg text-muted-foreground sm:text-xl">
							{t("insights.description")}
						</p>
						<Button variant="secondary">{t("insights.exploreBtn")}</Button>
					</div>
				</div>
			</div>
			<div className="container relative mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 md:grid-cols-3">
				{insights.map((blog) => (
					<InsightCard data={blog} key={blog.slug} />
				))}
			</div>
		</section>
	);
};
