import Image from "next/image";

import { Ship } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Link } from "@/i18n/navigation";

export function HeroSection() {
	const t = useTranslations("CalculatorPage.hero");

	return (
		<section className="group relative overflow-hidden bg-linear-to-br from-[#078CD9] to-[#034577] text-white">
			<div className="container relative z-20 py-16 text-center md:py-24 md:text-left">
				<div className="mb-3 inline-flex items-center gap-2">
					<Ship className="size-4" />
					<span className="text-sm">{t("subtitle")}</span>
				</div>

				<h1 className="max-w-xl text-balance font-semibold text-2xl text-card sm:text-3xl md:text-4xl lg:text-5xl rtl:leading-snug">
					{t("title")}
				</h1>

				<p className="mt-4 max-w-2xl text-balance text-blue-50 text-lg leading-relaxed md:text-xl">
					Calculate freight costs instantly for air, sea, and land shipping. Get
					fast, accurate cargo estimates to make smarter logistics decisions.
				</p>

				<div className="mt-4 flex items-center gap-3">
					<Button asChild size="lg" variant="secondary">
						<Link href="/quote">Get a Quote</Link>
					</Button>
					<Button
						asChild
						className="bg-transparent backdrop-blur-xs"
						size="lg"
						variant="outline"
					>
						<Link href="/quote">View Services</Link>
					</Button>
				</div>

				<Separator className="my-6 max-w-xl bg-secondary/20" />

				<ul className="grid max-w-xl grid-cols-3 gap-6">
					<li className="tracking-wider">
						<p className="text-muted/80">
							<span className="font-semibold text-3xl text-card">14</span> Days
						</p>
						<span className="text-muted/80 text-xs uppercase">
							Transit Time
						</span>
					</li>
					<li className="tracking-wider">
						<p className="text-muted/80">
							<span className="font-semibold text-3xl text-card">2</span> /Wk
						</p>
						<span className="text-muted/80 text-xs uppercase">Departures</span>
					</li>
					<li className="tracking-wider">
						<p className="text-muted/80">
							<span className="font-semibold text-3xl text-card">99</span> %
						</p>
						<span className="text-muted/80 text-xs uppercase">On-time</span>
					</li>
				</ul>
			</div>
			<div className="absolute inset-0 z-10 bg-linear-to-r from-brand-dark" />
			<Image
				alt=""
				className="object-cover"
				fill
				src="/images/calculator-hero.webp"
			/>
		</section>
	);
}
