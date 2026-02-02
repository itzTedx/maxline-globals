import { memo } from "react";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconCaretRight } from "@/assets/icons/caret";

import { CLIENTS } from "@/constants/clients";

import { HeroImage } from "../components/hero-image";

export const HeroSection = memo(() => {
	const t = useTranslations("HomePage");
	return (
		<div className="relative px-6" role="banner">
			<section className="relative overflow-hidden rounded-3xl">
				<div className="container relative z-10 max-w-7xl">
					<div className="mx-auto py-12 sm:py-14 md:py-16 lg:py-20">
						<h1 className="text-center font-semibold text-4xl text-primary tracking-tight sm:text-5xl md:text-6xl">
							<StaggeredText
								duration={0.3}
								staggerChildren={0.01}
								text={t("hero.title.firstLine")}
							/>
							<br className="hidden md:block" />
							<span className="text-accent-secondary">
								<StaggeredText
									duration={0.3}
									staggerChildren={0.01}
									text={t("hero.title.secondLine")}
								/>
							</span>
						</h1>
						<p className="text-balance pt-4 text-center text-muted-foreground text-xl md:text-2xl">
							We connect businesses to markets across the world. Explore our
							logistics services built to move cargo faster, safer, and smarter
							worldwide.
						</p>
						<div className="mt-3 flex items-center justify-center gap-4">
							<Button size="lg" variant="secondary">
								Get a Quote <IconArrowRightTag className="ml-4" />
							</Button>
							<Button size="lg" variant="outline">
								Explore our services
							</Button>
						</div>
					</div>

					<div className="rounded-t-3xl border border-card border-b-0">
						<div
							aria-label="Hero illustration"
							className="border-8 border-white/10 border-b-0 bg-card/10 p-1 pb-0"
						>
							<div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-t-2xl bg-card">
								<HeroImage />
								<div className="absolute right-9 bottom-9 hidden items-center gap-3 rounded-xl bg-accent-tertiary/20 p-3 backdrop-blur-md md:flex">
									<div className="flex h-8 w-12 items-center justify-center rounded-md bg-accent text-accent-tertiary">
										<IconCaretRight className="size-4" />
									</div>
									<p className="w-40 text-sm leading-4">
										See How Maxline Global Moves the World
									</p>
								</div>
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
			</section>
			<section className="container relative z-10 grid max-w-7xl grid-cols-1 gap-24 py-12 sm:py-14 md:grid-cols-2 md:py-16 lg:py-20">
				<div className="space-y-4">
					<h2 className="font-medium text-3xl text-primary md:text-5xl">
						Recognized by{" "}
						<span className="text-accent-secondary">
							industry leaders worldwide
						</span>
					</h2>
					<p className="text-balance text-xl leading-relaxed">
						FIATA certified, ISO compliant, trusted by Fortune 500 companies
						across continents
					</p>
					<Button className="bg-primary text-secondary" variant="secondary">
						Know more about Maxline <IconCaretRight className="ml-4" />
					</Button>
				</div>
				<ul className="grid grid-cols-2 gap-4">
					{CLIENTS.map(({ Icon }, i) => (
						<li
							className="flex aspect-16/7 w-full items-center justify-center bg-background p-3 md:aspect-16/5"
							key={`client-${i + 1}`}
						>
							<Icon className="w-28 text-muted-foreground" />
						</li>
					))}
				</ul>
			</section>
			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-white" />
		</div>
	);
});

HeroSection.displayName = "HeroSection";
