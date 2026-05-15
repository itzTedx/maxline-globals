import type {
	ContactPointLeaf,
	ImageObjectLeaf,
	OrganizationLeaf,
	PostalAddressLeaf,
	WithContext,
} from "schema-dts";

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

/** Inline Organization on service pages (matches Service rich-result shape). */
export function buildServiceProviderOrganization(
	locale: string
): OrganizationLeaf {
	const homeUrl = `${siteConfig.site}/${locale}`;

	const contactPoint: ContactPointLeaf = {
		"@type": "ContactPoint",
		telephone: "+97142822022",
		contactType: "customer support",
		email: "enquires@maxlineglobal.com",
		areaServed: "Global",
	};

	return {
		"@type": "Organization",
		name: ORGANIZATION_LEGAL_NAME,
		url: homeUrl,
		logo: ORGANIZATION_LOGO_URL,
		sameAs: [...ORGANIZATION_SAME_AS],
		contactPoint,
	};
}

export function buildOrganizationJsonLd(
	locale: string
): WithContext<OrganizationLeaf> {
	const lang: Locale = locale === "ar" ? "ar" : "en";
	const homeUrl = `${siteConfig.site}/${locale}`;

	const logo: ImageObjectLeaf = {
		"@type": "ImageObject",
		url: ORGANIZATION_LOGO_URL,
	};

	const address: PostalAddressLeaf = {
		"@type": "PostalAddress",
		streetAddress: "MO 0753, Jafza North",
		addressLocality: "Dubai",
		addressRegion: "Dubai",
		postalCode: "",
		addressCountry: "AE",
	};

	const primaryContact: ContactPointLeaf = {
		"@type": "ContactPoint",
		contactType: "customer service",
		telephone: "+97142822022",
		email: "reception@maxlineglobal.com",
		areaServed: "AE",
	};

	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": organizationSchemaId(),
		name: ORGANIZATION_LEGAL_NAME,
		alternateName: ORGANIZATION_ALTERNATE_NAME,
		url: homeUrl,
		logo,
		description: ORGANIZATION_DESCRIPTION[lang],
		foundingDate: ORGANIZATION_FOUNDING_DATE,
		sameAs: [...ORGANIZATION_SAME_AS],
		contactPoint: [primaryContact],
		address,
	};
}
