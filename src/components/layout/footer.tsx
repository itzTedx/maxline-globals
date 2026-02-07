import { IconMapPin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import CenterUnderline from "@/components/animation/underline-center";

import { Logo } from "@/assets/logo";

import type { FooterKey } from "@/constants";
import { FOOTER_LINKS } from "@/constants";
import { Link } from "@/i18n/navigation";

import VerticalCutReveal from "../animation/vertical-cut-reveal";
import { Separator } from "../ui/separator";

export const Footer = () => {
	const t = useTranslations("Footer");
	return (
		<footer className="relative z-0 w-full overflow-hidden bg-foreground text-background">
			<div className="container relative z-10 grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-12 md:py-20">
				<div className="col-span-1 space-y-6 md:col-span-5">
					<Logo className="text-background" />
					<h5 className="font-display font-semibold text-4xl uppercase md:text-6xl rtl:md:text-6xl">
						<VerticalCutReveal
							splitBy="characters"
							staggerDuration={0.025}
							staggerFrom="first"
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 21,
							}}
						>
							{t("slogan1")}
						</VerticalCutReveal>
						<VerticalCutReveal
							containerClassName="text-accent"
							splitBy="characters"
							staggerDuration={0.025}
							staggerFrom="first"
							transition={{
								delay: 1,
								type: "spring",
								stiffness: 200,
								damping: 21,
							}}
						>
							{t("slogan2")}
						</VerticalCutReveal>
					</h5>
					<Link
						className="col-span-1 flex w-fit items-center justify-start gap-1.5 rounded-full border border-background bg-background/20 px-2.5 py-1.5 backdrop-blur-xl transition-transform sm:col-span-2"
						href="https://maps.app.goo.gl/72pq7QV898ZUF1zw5 "
						itemScope
						itemType="https://schema.org/Place"
					>
						<IconMapPin className="size-5 stroke-1" />
						<p className="font-light text-sm sm:text-base">
							{t("locationLabel")}{" "}
							<span
								itemProp="address"
								itemScope
								itemType="https://schema.org/PostalAddress"
							>
								<span itemProp="streetAddress">
									<CenterUnderline
										className="font-medium"
										label={t("locationAddress")}
									/>
								</span>
								<meta content="Dubai" itemProp="addressLocality" />
								<meta content="UAE" itemProp="addressCountry" />
								<meta content="232939" itemProp="postalCode" />
							</span>
						</p>
					</Link>
				</div>
				<div className="col-span-1 space-y-6 md:col-span-7">
					<nav className="grid grid-cols-2 gap-6 sm:grid-cols-4">
						{FOOTER_LINKS.map((section) => (
							<div className="mb-6" key={section.header}>
								<h6 className="mb-3 font-display font-semibold text-accent text-sm uppercase tracking-wider sm:text-base">
									{t(section.header as FooterKey)}
								</h6>
								<ul className="space-y-2 sm:space-y-4">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												className="font-grotesk font-medium text-sm sm:text-base"
												href={link.href}
												rel={
													section.header === "social"
														? "noopener noreferrer"
														: undefined
												}
												target={
													section.header === "social" ? "_blank" : undefined
												}
											>
												<CenterUnderline label={t(link.title as FooterKey)} />
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
			</div>
			<div className="container">
				<Separator className="bg-muted-foreground/40" />
			</div>
			<div className="container z-10 flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:py-9">
				<p className="text-center text-sm sm:text-left sm:text-base">
					{t("copyright", { year: String(new Date().getFullYear()) })}
				</p>
				<Link
					className="font-light text-muted-foreground text-xs"
					href="https://www.zironmedia.com"
				>
					{t("designedBy", { agency: t("agencyName") })}
				</Link>
			</div>
		</footer>
	);
};
