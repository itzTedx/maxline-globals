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
    <Button asChild className={cn(className)} size="btnIcon">
      <Link className="group gap-3 text-brand-dark" href="/quote">
        <LetterSwapPingPong
          className="w-full justify-start font-semibold"
          label={t("getQuote")}
          reverse={false}
          staggerFrom="first"
        />
        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark transition duration-500 group-hover:bg-background">
          <IconArrowRight />
        </div>
      </Link>
    </Button>
  );
};
