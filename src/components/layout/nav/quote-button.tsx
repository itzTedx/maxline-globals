import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";

import { Button } from "../../ui/button";

export const QuoteButton = () => {
  return (
    <Button asChild size="btnIcon">
      <Link href="/quote" className="text-brand-dark group gap-3">
        <LetterSwapPingPong
          label="Get A Quote"
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
