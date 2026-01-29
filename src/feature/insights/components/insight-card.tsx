import Image from "next/image";

import { IconArrowRight } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Link } from "@/i18n/navigation";
import { formatInsightDate } from "@/lib/utils";

import { InsightMetadata } from "../actions/types";

export function InsightCard({ data }: { data: InsightMetadata }) {
	const t = useTranslations("HomePage");
	const locale = useLocale();
	return (
		<Card className="group relative gap-0 overflow-hidden p-0">
			<Link
				className="absolute inset-0 z-10"
				href={`/insights/${data.slug}`}
				title={data.title}
			/>
			<CardContent className="relative px-0">
				<div className="relative flex aspect-video items-end overflow-hidden p-4 sm:aspect-4/3">
					<div className="relative z-10 flex w-full items-center justify-between gap-2">
						<Badge variant="ghost">{data.category}</Badge>
						<Badge variant="secondary">
							{formatInsightDate(data.date, locale)}
						</Badge>
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
				<CardHeader className="p-4 sm:p-6">
					<CardTitle className="font-grotesk font-normal text-brand-dark text-xl max-sm:leading-tight sm:text-2xl">
						{data.title}
					</CardTitle>
					<CardDescription className="line-clamp-3 font-light text-base text-brand-gray">
						{data.description}
					</CardDescription>
				</CardHeader>
			</CardContent>
			<CardFooter className="w-full pb-4 max-sm:px-4 sm:pb-6">
				<Button
					aria-label={`Read full article: ${data.title}`}
					className="group z-10 w-full text-background hover:text-brand-dark"
					size="btnIcon"
				>
					<LetterSwapPingPong
						className="w-full justify-start font-semibold text-sm sm:text-base"
						label={t("insights.readBtn")}
						reverse={false}
						staggerFrom={"first"}
					/>
					<div className="pointer-events-none ml-auto flex size-7 shrink-0 touch-none select-none items-center justify-center rounded bg-primary text-brand-dark transition-colors group-hover:bg-background sm:size-8">
						<IconArrowRight aria-hidden="true" className="size-4 sm:size-5" />
					</div>
				</Button>
			</CardFooter>
		</Card>
	);
}
