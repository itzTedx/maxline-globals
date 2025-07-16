import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site-config";
import { routing } from "@/i18n/routing";

const serviceSlugs = ["air-freight", "sea-freight", "land-freight"];
const insightSlugs = ["logistics-trends-2024", "supply-chain-innovation"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.site.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({ url: `${base}/${locale}`, priority: 1.0 });
    entries.push({ url: `${base}/${locale}/privacy-policy`, priority: 0.8 });
    entries.push({ url: `${base}/${locale}/quote`, priority: 0.8 });
    entries.push({ url: `${base}/${locale}/track-shipment`, priority: 0.8 });
    entries.push({ url: `${base}/${locale}/contact`, priority: 0.8 });
    entries.push({ url: `${base}/${locale}/company`, priority: 0.8 });
    entries.push({ url: `${base}/${locale}/company/team`, priority: 0.8 });
    entries.push({ url: `${base}/${locale}/company/about`, priority: 0.8 });
    for (const slug of serviceSlugs) {
      entries.push({
        url: `${base}/${locale}/services/${slug}`,
        priority: 0.6,
      });
    }
    for (const slug of insightSlugs) {
      entries.push({
        url: `${base}/${locale}/insights/${slug}`,
        priority: 0.6,
      });
    }
  }

  return entries;
}
