import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export const Features = () => {
	return (
		<section className="container py-12 sm:py-16 md:py-20">
			<div className="max-w-4xl space-y-3">
				<h2 className="font-semibold text-3xl text-primary sm:text-4xl md:text-5xl">
					<span className="text-accent-secondary">Built for Global</span> Trade
					at Any Scale
				</h2>
				<p className="font-light text-lg text-muted-foreground sm:text-xl md:text-2xl">
					We combines infrastructure, expertise, and technology to support
					businesses of every size from single shipments to complex global
					supply chains.
				</p>
			</div>
			<div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:mt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				<div className="space-y-4">
					<Card>
						<CardContent className="p-4 sm:p-6">
							<BentoCardTitle>Global Network Coverage</BentoCardTitle>
							<BentoCardDescription>
								Strategically connected trade lanes across the Middle East,
								Asia, Europe, and beyond through trusted international partners.
							</BentoCardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-4 sm:p-6">
							<BentoCardTitle>Global Network Coverage</BentoCardTitle>
							<BentoCardDescription>
								Strategically connected trade lanes across the Middle East,
								Asia, Europe, and beyond through trusted international partners.
							</BentoCardDescription>
						</CardContent>
					</Card>
				</div>
				<Card>
					<CardContent className="p-4 sm:p-6">
						<BentoCardTitle>Global Network Coverage</BentoCardTitle>
						<BentoCardDescription>
							Strategically connected trade lanes across the Middle East, Asia,
							Europe, and beyond through trusted international partners.
						</BentoCardDescription>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4 sm:p-6">
						<BentoCardTitle>Global Network Coverage</BentoCardTitle>
						<BentoCardDescription>
							Strategically connected trade lanes across the Middle East, Asia,
							Europe, and beyond through trusted international partners.
						</BentoCardDescription>
					</CardContent>
				</Card>
				<Card className="md:col-span-2">
					<CardContent className="p-4 sm:p-6">
						<BentoCardTitle>Scalable for Any Business</BentoCardTitle>
						<BentoCardDescription>
							Flexible logistics solutions designed to grow with your business
							from SMEs to enterprise-level operations.
						</BentoCardDescription>
					</CardContent>
				</Card>

				<Card className="items-center bg-primary p-0">
					<CardContent className="p-4 pb-0 sm:p-6">
						<BentoCardTitle className="text-secondary">
							Dedicated Human Support
						</BentoCardTitle>
						<BentoCardDescription className="mb-4 text-secondary">
							Experienced logistics professionals managing your cargo with
							accountability, communication, and care.
						</BentoCardDescription>
						<Button variant="secondary">Contact sales</Button>
					</CardContent>
					<Image
						alt=""
						className="ml-auto h-auto w-full max-w-[300px] sm:max-w-none"
						height={242}
						src="/images/faq-truck.png"
						width={376}
					/>
				</Card>
			</div>
		</section>
	);
};

interface BentoCardProps {
	children: React.ReactNode;
	className?: string;
}

const BentoCardTitle = ({ children, className }: BentoCardProps) => {
	return (
		<h3
			className={cn(
				"mb-3 font-semibold text-lg text-primary sm:text-xl md:text-2xl",
				className
			)}
		>
			{children}
		</h3>
	);
};

const BentoCardDescription = ({ children, className }: BentoCardProps) => {
	return (
		<p
			className={cn(
				"text-muted-foreground text-sm sm:text-base md:text-lg",
				className
			)}
		>
			{children}
		</p>
	);
};
