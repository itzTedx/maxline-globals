/** Slug segment from `/services/{slug}` → key in services.{locale}.json */
export const SLUG_TO_SERVICE_DICT_KEY: Record<string, string> = {
	"land-freight": "landFreight",
	"air-freight": "airFreight",
	"sea-freight": "seaFreight",
	"project-cargo": "projectCargo",
	packing: "packing",
	warehousing: "warehousing",
	"exhibition-cargo": "exhibitionCargo",
	"movers-lashing": "moversLashing",
};

export function serviceDictKeyFromHref(href: string): string | undefined {
	const slug = href.split("/").filter(Boolean).pop();
	if (!slug) return undefined;
	return SLUG_TO_SERVICE_DICT_KEY[slug];
}
