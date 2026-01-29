import { useTranslations } from "next-intl";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

interface Props {
	className?: string;
}

export const QuoteButton = ({ className }: Props) => {
	const t = useTranslations("Navigation");
	return (
		<Button asChild className={cn(className)} size="lg">
			<Link className="group text-brand-dark" href="/quote">
				<span>
					{t("getQuote")}{" "}
					<span className="font-normal text-accent">- it's free</span>
				</span>
				<IconArrowRightTag />
			</Link>
		</Button>
	);
};
