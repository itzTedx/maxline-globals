import type {
	Graph,
	ListItemLeaf,
	OfferCatalogLeaf,
	OfferLeaf,
	ServiceLeaf,
	WebSiteLeaf,
} from "schema-dts";

import { SERVICES } from "@/constants";
import { siteConfig } from "@/constants/site-config";

import { ORGANIZATION_LEGAL_NAME } from "./constants";
import { organizationSchemaId } from "./ids";
import type { ServiceMessages } from "./load-service-messages";
import { serviceDictKeyFromHref } from "./service-dict-keys";

/** schema-dts `OfferCatalogLeaf` omits `provider`; schema.org documents it on OfferCatalog. */
type OfferCatalogWithProvider = OfferCatalogLeaf & {
	provider?: { "@id": string };
};

function getNestedString(
	obj: Record<string, unknown> | undefined,
	path: string[]
): string | undefined {
	let cur: unknown = obj;
	for (const key of path) {
		if (cur === null || cur === undefined || typeof cur !== "object") {
			return undefined;
		}
		cur = (cur as Record<string, unknown>)[key];
	}
	return typeof cur === "string" ? cur : undefined;
}

function getSchemaBlock(
	messages: ServiceMessages,
	dictKey: string
): { name?: string; description?: string } | undefined {
	const block = messages[dictKey];
	if (!block || typeof block !== "object") return undefined;
	const schema = (block as Record<string, unknown>).schema;
	if (!schema || typeof schema !== "object") return undefined;
	const s = schema as Record<string, unknown>;
	const name = typeof s.name === "string" ? s.name : undefined;
	const description =
		typeof s.description === "string" ? s.description : undefined;
	if (!name && !description) return undefined;
	return { name, description };
}

/**
 * WebSite + OfferCatalog for the locale homepage, referencing Organization via @id.
 */
export function buildHomeStructuredDataGraph(
	locale: string,
	messages: ServiceMessages
): Graph {
	const base = `${siteConfig.site}/${locale}`;
	const catalogName =
		locale === "ar"
			? `كتالوج خدمات ${ORGANIZATION_LEGAL_NAME}`
			: `${ORGANIZATION_LEGAL_NAME} — services`;

	const itemListElement: ListItemLeaf[] = SERVICES.map((service, index) => {
		const dictKey = serviceDictKeyFromHref(service.href);
		const schema =
			dictKey !== undefined ? getSchemaBlock(messages, dictKey) : undefined;
		const slug = service.href.split("/").filter(Boolean).pop() ?? "";
		const serviceUrl = `${base}/services/${slug}`;
		const name =
			schema?.name ??
			getNestedString(messages as Record<string, unknown>, [
				dictKey ?? "",
				"hero",
				"title",
			]) ??
			service.title;
		const description =
			schema?.description ??
			getNestedString(messages as Record<string, unknown>, [
				dictKey ?? "",
				"hero",
				"description",
			]) ??
			service.description;

		const itemOffered: ServiceLeaf = {
			"@type": "Service",
			name,
			description,
			url: serviceUrl,
		};

		const offer: OfferLeaf = {
			"@type": "Offer",
			itemOffered,
		};

		return {
			"@type": "ListItem",
			position: index + 1,
			item: offer,
		};
	});

	const webSite: WebSiteLeaf = {
		"@type": "WebSite",
		"@id": `${base}#website`,
		name: ORGANIZATION_LEGAL_NAME,
		url: base,
		inLanguage: locale,
		publisher: { "@id": organizationSchemaId() },
	};

	const catalog: OfferCatalogWithProvider = {
		"@type": "OfferCatalog",
		"@id": `${base}#service-offer-catalog`,
		name: catalogName,
		url: `${base}#service-offer-catalog`,
		provider: { "@id": organizationSchemaId() },
		itemListElement,
	};

	return {
		"@context": "https://schema.org",
		"@graph": [webSite, catalog],
	};
}
