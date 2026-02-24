import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { LOCATIONS } from "@/constants";
import { siteConfig } from "@/constants/site-config";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const title = "India Operations Office | Max Line Global Vaahika Limited";
	const description =
		"Max Line Global Vaahika Limited's India operations office in Mumbai provides multimodal logistics, end-to-end freight forwarding, and compliance-driven supply chain solutions for domestic and international cargo.";
	const keywords = [
		"Max Line Global",
		"India operations office",
		"Mumbai logistics",
		"India freight forwarding",
		"India supply chain solutions",
	];

	const pageUrl = `${siteConfig.site}/${locale}/company/location/india`;
	const imageUrl = "/images/mumbai.jpg";

	return {
		title,
		description,
		keywords: [...siteConfig.keywords, ...keywords],
		openGraph: {
			title,
			description,
			type: "website",
			url: pageUrl,
			locale: locale === "ar" ? "ar_SA" : "en_US",
			alternateLocale: ["ar_SA", "en_US"],
			siteName: siteConfig.name,
			images: [
				{
					url: imageUrl,
					width: siteConfig.image.width,
					height: siteConfig.image.height,
					alt: "India Operations Office - Max Line Global Vaahika Limited",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [imageUrl],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		alternates: {
			canonical: pageUrl,
			languages: {
				en: `${siteConfig.site}/en/company/location/india`,
				ar: `${siteConfig.site}/ar/company/location/india`,
			},
		},
	};
}

export default function LocationPage() {
	const indiaLocation = LOCATIONS.find((location) => location.slug === "india");

	if (!indiaLocation) {
		return null;
	}

	const locationSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: indiaLocation.title,
		description:
			"India operations office of Max Line Global Vaahika Limited providing multimodal logistics, freight forwarding, and supply chain solutions from Mumbai.",
		url: `${siteConfig.site}/company/location/india`,
		telephone: indiaLocation.phone,
		address: {
			"@type": "PostalAddress",
			streetAddress: indiaLocation.address,
			addressCountry: "IN",
		},
	};

	return (
		<>
			<Script id="india-location-schema" type="application/ld+json">
				{JSON.stringify(locationSchema)}
			</Script>
			<main className="bg-background">
			<div className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6 md:py-16 lg:max-w-6xl lg:px-8 lg:py-20">
				<article className="space-y-10 md:space-y-12">
					<header className="space-y-4 border-border/60 border-b pb-8">
						<p className="font-medium text-muted-foreground text-xs uppercase tracking-[0.2em]">
							Location spotlight
						</p>
						<h1 className="text-balance font-display font-semibold text-3xl text-accent-secondary uppercase md:text-4xl lg:text-5xl">
							India Operations Office
						</h1>
						<p className="max-w-3xl text-muted-foreground text-sm leading-relaxed md:text-base">
							Max Line Global Vaahika Limited operates a dedicated India
							operations office to support customers across one of the
							world&apos;s fastest-growing trade and manufacturing hubs. From
							Mumbai, our team coordinates multimodal logistics, end‑to‑end
							freight forwarding, and compliance-driven supply chain solutions
							for domestic and international cargo.
						</p>
						<div className="flex flex-wrap gap-3 text-muted-foreground text-xs">
							<span className="rounded-full border border-border/60 px-3 py-1">
								Strategic presence in India
							</span>
							<span className="rounded-full border border-border/60 px-3 py-1">
								MSME registered
							</span>
							<span className="rounded-full border border-border/60 px-3 py-1">
								Mumbai | Maharashtra
							</span>
						</div>
					</header>

					<section className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-start">
						<div className="space-y-6 text-muted-foreground text-sm leading-relaxed md:text-base">
							<p>
								Max Line Global Vaahika Limited is a professionally managed
								logistics and freight solutions organization with a strong
								operational presence in India. Since its inception in 2013 (then
								known as Max Line Inc.), the company has built a reputation for
								reliability, service excellence, and customer-focused logistics
								solutions tailored to the Indian market.
							</p>
							<p>
								In 2021, the organization was restructured and formally
								incorporated as a Public Limited Company under the name{" "}
								<span className="font-semibold text-foreground">
									Max Line Global Vaahika Limited
								</span>
								. This milestone strengthened the company&apos;s governance,
								expanded its capital base, and enabled it to scale operations
								across key industrial and trade corridors in India.
							</p>
							<p>
								Max Line India is registered under the Ministry of Micro, Small
								&amp; Medium Enterprises (MSME), Government of India, with Udyam
								Registration No.{" "}
								<span className="font-semibold text-foreground">
									Udyam-MH-17-0031335
								</span>
								. This recognition reflects its contribution to India&apos;s
								evolving logistics ecosystem, supporting manufacturers, traders,
								and project owners with compliant and efficient freight
								solutions.
							</p>
							<p>
								From cargo consolidation and customs coordination to last‑mile
								delivery, the India operations office plays a central role in
								connecting domestic trade routes with global shipping networks.
								The team focuses on precise documentation, proactive
								communication, and time-bound execution to meet the expectations
								of customers operating in fast-moving and highly regulated
								sectors.
							</p>
							<p>
								With a commitment to operational excellence, regulatory
								compliance, and customer satisfaction, Max Line continues to
								deliver dependable, scalable logistics solutions for clients
								across India and beyond.
							</p>
						</div>

						<aside className="space-y-6 rounded-2xl border border-border/60 bg-secondary/60 p-6 shadow-sm">
							<div>
								<h2 className="font-semibold text-muted-foreground text-sm uppercase tracking-[0.18em]">
									Office details
								</h2>
								<p className="mt-3 font-medium text-base text-foreground">
									{indiaLocation.title}
								</p>
								<p className="mt-2 text-muted-foreground text-sm leading-relaxed">
									{indiaLocation.address}
								</p>
							</div>

							<div className="space-y-2 text-muted-foreground text-sm">
								<p>
									<span className="font-medium text-foreground">Phone:</span>{" "}
									{indiaLocation.phone}
								</p>
								<p>
									<span className="font-medium text-foreground">Mobile:</span>{" "}
									{indiaLocation.mobile}
								</p>
								<p>
									<span className="font-medium text-foreground">Email:</span>{" "}
									<a
										className="text-primary underline-offset-2 hover:underline"
										href={`mailto:${indiaLocation.email}`}
									>
										{indiaLocation.email}
									</a>
								</p>
							</div>

							{indiaLocation.link && (
								<div className="pt-2">
									<a
										className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 font-medium text-foreground text-xs uppercase tracking-[0.18em] transition hover:bg-accent hover:text-accent-foreground"
										href={indiaLocation.link}
										rel="noreferrer"
										target="_blank"
									>
										View on Google Maps
									</a>
								</div>
							)}

							{indiaLocation.image && (
								<div className="pt-2">
									<div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/60 bg-muted">
										<Image
											alt={indiaLocation.title}
											className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
											fill
											src={indiaLocation.image}
										/>
									</div>
								</div>
							)}
						</aside>
					</section>
				</article>
			</div>
			</main>
		</>
	);
}
