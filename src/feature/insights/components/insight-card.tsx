import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { LogoOnly } from "@/assets/logo";

import { Link } from "@/i18n/navigation";
import { formatInsightDate } from "@/lib/utils";

import { InsightMetadata } from "../actions/types";

export function InsightCard({ data }: { data: InsightMetadata }) {
	const t = useTranslations("HomePage");
	const locale = useLocale();
	return (
		<Card className="group relative gap-0 overflow-hidden border-border/50 p-2 shadow-none transition-all duration-300 hover:-translate-y-4 hover:shadow-md">
			<Link
				className="absolute inset-0 z-10"
				href={`/insights/${data.slug}`}
				title={data.title}
			/>
			<CardContent className="relative px-0">
				<div className="rounded-md bg-background p-1.5 transition-shadow group-hover:shadow-sm">
					<div className="relative flex aspect-video items-start overflow-hidden rounded-md p-4">
						<div className="relative z-10 flex w-full items-center justify-between gap-2">
							<Badge>{data.category}</Badge>
						</div>
						<Image
							alt={`Illustration for article: ${data.title}`}
							className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
							fill
							loading="lazy"
							priority={false}
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
							src={data.thumbnail}
						/>
					</div>
				</div>
				<div className="space-y-3 p-2">
					<div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
						<span>{formatInsightDate(data.date, locale)}</span>{" "}
						<div
							aria-hidden
							className="size-1 rounded-full bg-muted-foreground"
						/>
						<span>{data.readingTime}</span>
					</div>

					<h3 className="line-clamp-2 font-medium text-primary text-xl transition-colors group-hover:text-accent-secondary sm:text-2xl">
						{data.title}
					</h3>

					<div className="dashed h-px w-full" />
					<div className="flex items-center gap-2">
						<span>{t("insights.by")}</span> <LogoOnly />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
