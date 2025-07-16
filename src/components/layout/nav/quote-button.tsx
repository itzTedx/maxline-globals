import { IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

interface Props {
  className?: string;
}

export const QuoteButton = ({ className }: Props) => {
  const t = useTranslations("Navigation");
  return (
    <Button asChild size="btnIcon" className={cn(className)}>
      <Link href="/quote" className="text-brand-dark group gap-3">
        <LetterSwapPingPong
          label={t("getQuote")}
          staggerFrom="first"
          reverse={false}
          className="w-full justify-start font-semibold"
        />
        <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
          <IconArrowRight />
        </div>
      </Link>
    </Button>
  );
};
