import { memo } from "react";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { HeroImage } from "../components/hero-image";

export const HeroSection = memo(() => {
	const t = useTranslations("HomePage");
	return (
		<header className="relative px-6 py-10 md:py-14" role="banner">
			<div className="relative overflow-hidden rounded-3xl">
				<div className="container relative z-10 max-w-6xl">
					<div className="mx-auto max-w-5xl">
						<h1 className="text-center font-semibold text-4xl text-primary tracking-tight sm:text-5xl md:text-6xl">
							<StaggeredText
								duration={0.3}
								staggerChildren={0.01}
								text={t("hero.title.firstLine")}
							/>
							<br />
							<span className="text-accent-secondary">
								<StaggeredText
									duration={0.3}
									staggerChildren={0.01}
									text={t("hero.title.secondLine")}
								/>
							</span>
						</h1>
						<p className="text-balance pt-4 text-center text-2xl text-muted-foreground">
							We connect businesses to markets across the world. Explore our
							logistics services built to move cargo faster, safer, and smarter
							worldwide.
						</p>
						<div className="mt-3 flex items-center justify-center gap-4">
							<Button variant="secondary">
								Get a Quote <IconArrowRightTag className="ml-4" />
							</Button>
							<Button variant="outline">Explore our services</Button>
						</div>
					</div>

					<div className="mt-12 rounded-t-3xl border border-card border-b-0">
						<div
							aria-label="Hero illustration"
							className="border-8 border-white/10 border-b-0 bg-card/10 p-1 pb-0"
						>
							<div className="flex aspect-video items-center justify-center overflow-hidden rounded-t-2xl bg-card">
								<HeroImage />
							</div>
						</div>
					</div>
				</div>
				<video
					autoPlay
					className="mask-t-from-50% absolute inset-0 h-full w-full object-cover object-center"
					loop
					muted
					playsInline
					preload="auto"
					src="/videos/home-hero.webm"
				/>
			</div>
			<section className="container relative z-10 grid grid-cols-1 gap-20 py-12 sm:py-14 md:grid-cols-2 md:py-16 lg:py-20">
				<div>
					<h2 className="font-medium text-5xl text-primary">
						Recognized by{" "}
						<span className="text-accent-secondary">
							industry leaders worldwide
						</span>
					</h2>
					<p className="text-xl leading-relaxed">
						FIATA certified, ISO compliant, trusted by Fortune 500 companies
						across continents
					</p>
				</div>
			</section>
			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-white" />
		</header>
	);
});

HeroSection.displayName = "HeroSection";
