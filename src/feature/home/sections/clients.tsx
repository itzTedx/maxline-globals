import Link from "next/link";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { IconCaretRight } from "@/assets/icons/caret";

import { CLIENTS } from "@/constants/clients";

export const Clients = () => {
	const t = useTranslations("HomePage");

	return (
		<section className="relative">
			<div className="container relative z-10 grid grid-cols-1 gap-9 py-12 sm:gap-12 sm:py-14 md:grid-cols-2 md:gap-30 md:py-16 lg:py-20">
				<div className="space-y-4">
					<h2 className="font-medium text-3xl text-primary md:text-5xl">
						{t("clients.title.first")}{" "}
						<span className="text-accent-secondary">
							{t("clients.title.second")}
						</span>
					</h2>
					<p className="text-balance text-xl leading-relaxed">
						{t("clients.description")}
					</p>
					<Button
						asChild
						className="bg-primary text-secondary"
						variant="secondary"
					>
						<Link href="/about">
							{t("clients.cta")}{" "}
							<IconCaretRight className="ms-4 rtl:rotate-180" />
						</Link>
					</Button>
				</div>
				<ul className="grid grid-cols-2 gap-4">
					{CLIENTS.map(({ Icon }, i) => (
						<li
							className="flex aspect-16/7 w-full items-center justify-center bg-muted p-3 md:aspect-16/4"
							key={`client-${i + 1}`}
						>
							<Icon className="w-28 text-muted-foreground" />
						</li>
					))}
				</ul>
			</div>
			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-secondary" />
		</section>
	);
};
