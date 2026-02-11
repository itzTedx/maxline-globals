import Link from "next/link";

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
				<span className="text-muted-foreground text-sm tracking-wider">
					{t("insights.label")}
				</span>
				<div className="grid gap-4 md:grid-cols-2 md:gap-24">
					<h2 className="font-display font-semibold text-4xl text-primary uppercase sm:text-5xl lg:text-6xl">
						{t.rich("insights.title")}
					</h2>

					<div className="space-y-3">
						<p className="text-balance font-light text-lg text-muted-foreground sm:text-xl">
							{t("insights.description")}
						</p>
						<Button asChild variant="secondary">
							<Link href="/insights">{t("insights.exploreBtn")}</Link>
						</Button>
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
