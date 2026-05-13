import type { OfferLeaf, ServiceLeaf, WithContext } from "schema-dts";

import { siteConfig } from "@/constants/site-config";

import { organizationSchemaId } from "./ids";

export type ServiceSchemaItem = {
	name: string;
	description: string;
};

export type ServiceSchemaBlock = {
	name: string;
	serviceType: string;
	description: string;
	items?: ServiceSchemaItem[];
};

export function buildServiceJsonLd({
	schema,
	servicePageUrl,
	areaServed,
	imageUrls,
}: {
	schema: ServiceSchemaBlock;
	servicePageUrl: string;
	areaServed?: string[];
	imageUrls?: string[];
}): WithContext<ServiceLeaf> {
	const offers: OfferLeaf[] =
		schema.items?.map((item) => ({
			"@type": "Offer",
			itemOffered: {
				"@type": "Service",
				name: item.name,
				description: item.description,
			},
		})) ?? [];

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
		provider: { "@id": organizationSchemaId() },
		...(offers.length > 0 ? { offers } : {}),
		...(areaServed?.length ? { areaServed } : {}),
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
	return { name, serviceType, description, items };
}
