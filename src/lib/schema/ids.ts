import { siteConfig } from "@/constants/site-config";

/** Stable JSON-LD @id for Organization; referenced from WebSite, OfferCatalog, Service, Article. */
export function organizationSchemaId(): string {
	return `${siteConfig.site}/#organization`;
}
