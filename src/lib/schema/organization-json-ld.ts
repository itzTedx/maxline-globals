import { siteConfig } from "@/constants/site-config";

import {
	ORGANIZATION_ALTERNATE_NAME,
	ORGANIZATION_DESCRIPTION,
	ORGANIZATION_FOUNDING_DATE,
	ORGANIZATION_LEGAL_NAME,
	ORGANIZATION_LOGO_URL,
	ORGANIZATION_SAME_AS,
} from "./constants";
import { organizationSchemaId } from "./ids";

type Locale = "en" | "ar";

export function buildOrganizationJsonLd(locale: string) {
	const lang: Locale = locale === "ar" ? "ar" : "en";
	const homeUrl = `${siteConfig.site}/${locale}`;

	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": organizationSchemaId(),
		name: ORGANIZATION_LEGAL_NAME,
		alternateName: ORGANIZATION_ALTERNATE_NAME,
		url: homeUrl,
		logo: {
			"@type": "ImageObject",
			url: ORGANIZATION_LOGO_URL,
		},
		description: ORGANIZATION_DESCRIPTION[lang],
		foundingDate: ORGANIZATION_FOUNDING_DATE,
		sameAs: [...ORGANIZATION_SAME_AS],
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "customer service",
				telephone: "+97142822022",
				email: "reception@maxlineglobal.com",
				areaServed: "AE",
			},
		],
		address: {
			"@type": "PostalAddress",
			streetAddress: "MO 0753, Jafza North",
			addressLocality: "Dubai",
			addressRegion: "Dubai",
			postalCode: "",
			addressCountry: "AE",
		},
	};
}
