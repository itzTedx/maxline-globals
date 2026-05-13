import { SERVICES } from "@/constants";
import { siteConfig } from "@/constants/site-config";

import { ORGANIZATION_LEGAL_NAME } from "./constants";
import { organizationSchemaId } from "./ids";
import type { ServiceMessages } from "./load-service-messages";
import { serviceDictKeyFromHref } from "./service-dict-keys";

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
) {
	const base = `${siteConfig.site}/${locale}`;
	const catalogName =
		locale === "ar"
			? `كتالوج خدمات ${ORGANIZATION_LEGAL_NAME}`
			: `${ORGANIZATION_LEGAL_NAME} — services`;

	const itemListElement = SERVICES.map((service, index) => {
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

		return {
			"@type": "ListItem" as const,
			position: index + 1,
			item: {
				"@type": "Offer" as const,
				itemOffered: {
					"@type": "Service" as const,
					name,
					description,
					url: serviceUrl,
				},
			},
		};
	});

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${base}#website`,
				name: ORGANIZATION_LEGAL_NAME,
				url: base,
				inLanguage: locale,
				publisher: { "@id": organizationSchemaId() },
			},
			{
				"@type": "OfferCatalog",
				"@id": `${base}#service-offer-catalog`,
				name: catalogName,
				url: `${base}#service-offer-catalog`,
				provider: { "@id": organizationSchemaId() },
				itemListElement,
			},
		],
	};
}
