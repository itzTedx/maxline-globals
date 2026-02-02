import Link from "next/link";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconCaretRight } from "@/assets/icons/caret";

export const HeroSection = () => {
	const t = useTranslations("HomePage");
	return (
		<section className="relative z-10 flex min-h-[calc(100svh-calc(var(--spacing)*16))] items-end overflow-hidden">
			<div className="relative z-10 px-6 py-12 sm:py-14 md:px-12 md:py-16 lg:px-24 lg:py-32">
				<div className="grid grid-cols-[1fr_0.5fr] gap-16">
					<h1 className="font-bold font-display text-3xl text-secondary uppercase sm:text-4xl md:text-5xl lg:text-8xl">
						<StaggeredText
							duration={0.3}
							staggerChildren={0.01}
							text={t("hero.title.firstLine")}
						/>
						{/* <br className="hidden md:block" /> */}
						<span className="text-accent">
							<StaggeredText
								duration={0.3}
								staggerChildren={0.01}
								text={t("hero.title.secondLine")}
							/>
						</span>
					</h1>
					<div>
						<p className="text-balance font-light text-lg text-secondary md:text-xl lg:text-2xl">
							We connect{" "}
							<span className="font-medium text-accent">
								businesses to markets across the world.
							</span>{" "}
							Explore our logistics services built to move cargo faster, safer,
							and smarter worldwide.
						</p>
						<div className="mt-4 flex items-center gap-4">
							<Button asChild size="lg">
								<Link href="/quote">
									Get a Quote <IconArrowRightTag className="ml-4 size-5" />
								</Link>
							</Button>
							<Button
								asChild
								className="bg-transparent text-secondary"
								size="lg"
								variant="outline"
							>
								<Link href="/services">Explore our services</Link>
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
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[75%] bg-linear-0 from-foreground" />
		</section>
	);
};

export const PlayVideoButton = () => {
	return (
		<div className="absolute right-9 bottom-9 hidden items-center gap-3 rounded-xl bg-accent-tertiary/20 p-3 backdrop-blur-md md:flex">
			<div className="flex h-8 w-12 items-center justify-center rounded-md bg-accent text-accent-tertiary">
				<IconCaretRight className="size-4" />
			</div>
			<p className="w-40 text-sm leading-4">
				See How Maxline Global Moves the World
			</p>
		</div>
	);
};

{
	/* <video
	autoPlay
	className="mask-t-from-50% absolute inset-0 h-full w-full object-cover object-center"
	loop
	muted
	playsInline
	preload="auto"
	src="/videos/home-hero.webm"
/>; */
}

{
	/* <p className="text-balance pt-4 text-center text-muted-foreground text-xl md:text-2xl">
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
					</div> */
}
