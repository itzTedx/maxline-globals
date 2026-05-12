import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site-config";
import { getInsights } from "@/feature/insights/actions/query";
import { routing } from "@/i18n/routing";

const serviceSlugs = [
	"air-freight",
	"sea-freight",
	"land-freight",
	"project-cargo",
	"packing",
	"warehousing",
	"exhibition-cargo",
	"movers-lashing",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const base = siteConfig.site.replace(/\/$/, "");
	const entries: MetadataRoute.Sitemap = [];

	for (const locale of routing.locales) {
		entries.push({ url: `${base}/${locale}`, priority: 1.0 });
		entries.push({ url: `${base}/${locale}/quote`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/track-shipment`, priority: 0.6 });
		entries.push({ url: `${base}/${locale}/contact`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/company/team`, priority: 0.6 });
		entries.push({ url: `${base}/${locale}/company/about`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/company/careers`, priority: 0.6 });
		entries.push({ url: `${base}/${locale}/calculator`, priority: 0.7 });

		const insights = getInsights({ locale });

		entries.push({ url: `${base}/${locale}/services`, priority: 0.8 });
		for (const slug of serviceSlugs) {
			entries.push({
				url: `${base}/${locale}/services/${slug}`,
				priority: 0.9,
			});
		}
		entries.push({ url: `${base}/${locale}/insights`, priority: 0.8 });
		for (const insight of insights) {
			entries.push({
				url: `${base}/${locale}/insights/${insight.slug}`,
				priority: 0.6,
			});
		}
	}

	return entries;
}
