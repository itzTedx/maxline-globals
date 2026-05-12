import Image from "next/image";

import { Ship } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { Link } from "@/i18n/navigation";

import { CalculatorSection } from "./calculator-section";

export function HeroSection() {
	const t = useTranslations("CalculatorPage.hero");

	return (
		<section className="group relative overflow-hidden bg-linear-to-br from-[#078CD9] to-[#034577] text-white">
			<div className="container relative z-20 grid gap-4 py-12 text-center sm:py-16 md:grid-cols-[.60fr_.40fr] md:py-32 md:text-left">
				<div className="max-w-xl">
					<div className="mb-3 inline-flex items-center gap-2 md:mb-4">
						<Ship className="size-4" />
						<span className="text-sm">{t("subtitle")}</span>
					</div>

					<h1 className="text-balance font-display font-semibold text-5xl text-card md:text-6xl lg:text-7xl rtl:leading-snug">
						{t("title")}
					</h1>

					<p className="mt-4 max-w-2xl text-balance text-blue-50 text-lg leading-relaxed md:mt-6 md:text-xl">
						{t("description")}
					</p>

					<div className="mt-6 flex items-center justify-center gap-3 sm:justify-start md:mt-9">
						<Button asChild size="lg">
							<Link href="/quote">
								Get a Quote{" "}
								<IconArrowRightTag className="ms-4 size-5 rtl:rotate-180" />
							</Link>
						</Button>

						<Button
							asChild
							className="bg-transparent text-secondary"
							size="lg"
							variant="outline"
						>
							<Link href="/quote">View Services</Link>
						</Button>
					</div>

					<Separator className="my-9 bg-secondary/20 md:my-12" />

					<ul className="grid grid-cols-3 gap-6">
						<li className="tracking-wider">
							<p className="text-muted/80">
								<span className="font-semibold text-3xl text-card">14</span>{" "}
								Days
							</p>
							<span className="text-muted/80 text-xs uppercase">
								Transit Time
							</span>
						</li>
						<li className="tracking-wider">
							<p className="text-muted/80">
								<span className="font-semibold text-3xl text-card">2</span> /Wk
							</p>
							<span className="text-muted/80 text-xs uppercase">
								Departures
							</span>
						</li>
						<li className="tracking-wider">
							<p className="text-muted/80">
								<span className="font-semibold text-3xl text-card">99</span> %
							</p>
							<span className="text-muted/80 text-xs uppercase">On-time</span>
						</li>
					</ul>
				</div>

				<CalculatorSection />
			</div>
			<div className="absolute inset-0 z-10 bg-linear-to-b from-brand-dark md:bg-linear-to-r" />
			<Image
				alt=""
				className="object-cover"
				fill
				loading="eager"
				priority
				src="/images/calculator-hero.webp"
			/>
		</section>
	);
}
