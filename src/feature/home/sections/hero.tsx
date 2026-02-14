import type { ReactNode } from "react";

import Link from "next/link";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconCaretRight } from "@/assets/icons/caret";

export const HeroSection = () => {
	const t = useTranslations("HomePage");
	const richT = t as unknown as {
		rich: (
			key: string,
			values: { [name: string]: (chunks: ReactNode) => ReactNode }
		) => ReactNode;
	};
	return (
		<section className="relative z-10 flex min-h-[75svh] items-end overflow-hidden md:min-h-[calc(100svh-calc(var(--spacing)*16))]">
			<div className="relative z-10 px-6 py-12 sm:py-14 md:px-12 md:py-16 lg:px-24 lg:py-32">
				<div className="grid gap-4 sm:gap-8 md:grid-cols-[1fr_0.5fr] md:gap-16">
					<h1 className="font-bold font-display text-5xl text-secondary uppercase sm:text-6xl md:text-7xl lg:text-8xl">
						En Shalu ma, En Nilla, En Maanu
						{/* <StaggeredText
							duration={0.3}
							staggerChildren={0.01}
							text={t("hero.title.firstLine")}
						/> 
						<span className="text-accent">
							<StaggeredText
								duration={0.3}
								staggerChildren={0.01}
								text={t("hero.title.secondLine")}
							/>
						</span> */}
					</h1>
					<div>
						<p className="text-balance font-light text-lg text-secondary md:text-xl lg:text-2xl">
							{richT.rich("hero.body", {
								highlight: (chunks: ReactNode) => (
									<span className="font-medium text-accent">{chunks}</span>
								),
							})}
						</p>
						<div className="mt-4 flex items-center gap-4">
							<Button asChild size="lg">
								<Link href="/quote">
									{t("hero.primaryCta")}{" "}
									<IconArrowRightTag className="ms-4 size-5 rtl:rotate-180" />
								</Link>
							</Button>
							<Button
								asChild
								className="bg-transparent text-secondary"
								size="lg"
								variant="outline"
							>
								<Link href="/services">{t("hero.secondaryCta")}</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<video
				autoPlay
				className="absolute inset-0 h-full w-full object-cover object-center"
				loop
				muted
				playsInline
				preload="auto"
				src="/videos/hero-reel.webm"
			/>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-full bg-linear-0 from-foreground md:h-[75%]" />
		</section>
	);
};

export const PlayVideoButton = () => {
	const t = useTranslations("HomePage");
	return (
		<div className="absolute right-9 bottom-9 hidden items-center gap-3 rounded-xl bg-accent-tertiary/20 p-3 backdrop-blur-md md:flex">
			<div className="flex h-8 w-12 items-center justify-center rounded-md bg-accent text-accent-tertiary">
				<IconCaretRight className="size-4" />
			</div>
			<p className="w-40 text-sm leading-4">{t("hero.playVideoLabel")}</p>
		</div>
	);
};
