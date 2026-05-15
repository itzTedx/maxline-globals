import type {
	CountryLeaf,
	OfferCatalogLeaf,
	OfferLeaf,
	ServiceLeaf,
	WithContext,
} from "schema-dts";

import { siteConfig } from "@/constants/site-config";

import { buildServiceProviderOrganization } from "./organization-json-ld";

export type ServiceSchemaItem = {
	name: string;
	description: string;
};

export type ServiceSchemaBlock = {
	name: string;
	serviceType: string;
	description: string;
	catalogName?: string;
	items?: ServiceSchemaItem[];
};

function serviceAreaServed(locale: string): CountryLeaf {
	return {
		"@type": "Country",
		name:
			locale === "ar"
				? "الإمارات العربية المتحدة"
				: "United Arab Emirates",
	};
}

function offerCatalogName(schema: ServiceSchemaBlock): string {
	if (schema.catalogName) return schema.catalogName;
	const base = schema.name.replace(/\s+Logistics$/i, "");
	return `${base} Services`;
}

export function buildServiceJsonLd({
	schema,
	servicePageUrl,
	locale,
	imageUrls,
}: {
	schema: ServiceSchemaBlock;
	servicePageUrl: string;
	locale: string;
	imageUrls?: string[];
}): WithContext<ServiceLeaf> {
	const termsOfService = `${siteConfig.site}/${locale}/terms`;

	const catalogOffers: OfferLeaf[] =
		schema.items?.map((item) => ({
			"@type": "Offer",
			name: item.name,
			description: item.description,
		})) ?? [];

	const hasOfferCatalog: OfferCatalogLeaf | undefined =
		catalogOffers.length > 0
			? {
					"@type": "OfferCatalog",
					name: offerCatalogName(schema),
					itemListElement: catalogOffers,
				}
			: undefined;

	const node: ServiceLeaf = {
		"@type": "Service",
		name: schema.name,
		serviceType: schema.serviceType,
		description: schema.description,
		url: servicePageUrl,
		...(imageUrls?.length
			? {
					image: imageUrls.map((u) =>
						u.startsWith("http") ? u : `${siteConfig.site}${u}`
					),
				}
			: {}),
		provider: buildServiceProviderOrganization(locale),
		areaServed: serviceAreaServed(locale),
		termsOfService,
		...(hasOfferCatalog ? { hasOfferCatalog } : {}),
	};

	return {
		"@context": "https://schema.org",
		...node,
	};
}

export function parseServiceSchemaBlock(
	raw: unknown
): ServiceSchemaBlock | null {
	if (!raw || typeof raw !== "object") return null;
	const o = raw as Record<string, unknown>;
	const name = typeof o.name === "string" ? o.name : "";
	const description = typeof o.description === "string" ? o.description : "";
	const serviceType =
		typeof o.serviceType === "string" ? o.serviceType : "Logistics services";
	const catalogName =
		typeof o.catalogName === "string" ? o.catalogName : undefined;
	const itemsRaw = o.items;
	let items: ServiceSchemaItem[] | undefined;
	if (Array.isArray(itemsRaw)) {
		const parsed = itemsRaw
			.map((it) => {
				if (!it || typeof it !== "object") return null;
				const x = it as Record<string, unknown>;
				if (typeof x.name !== "string" || typeof x.description !== "string") {
					return null;
				}
				return { name: x.name, description: x.description };
			})
			.filter((x): x is ServiceSchemaItem => x !== null);
		if (parsed.length > 0) items = parsed;
	}
	if (!name || !description) return null;
	return { name, serviceType, description, catalogName, items };
}
