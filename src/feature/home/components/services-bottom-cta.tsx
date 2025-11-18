import { IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import Letter3DSwap from "@/components/animation/letter-3d-swap";
import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";

import { XIcon } from "@/assets/x-icon";

import { Link } from "@/i18n/navigation";

export const ServicesBottomCTA = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden py-9 sm:py-12 md:py-20">
      <Letter3DSwap
        as={"h3"}
        frontFaceClassName={"bg-background text-secondary"}
        mainClassName="font-grotesk z-10 pt-10 text-center text-4xl md:pt-16 md:text-6xl lg:pt-20 lg:text-8xl"
        rotateDirection="top"
        secondFaceClassName={"bg-background text-secondary"}
        staggerDuration={0.03}
        staggerFrom="first"
        transition={{ type: "spring", damping: 25, stiffness: 160 }}
      >
        {t("services.cta.title")}
      </Letter3DSwap>

      <p className="z-10 mx-auto max-w-3xl text-pretty pb-8 text-center font-light text-brand-gray text-lg tracking-tight md:pb-10 md:text-xl lg:pb-12 lg:text-2xl">
        {t("services.cta.description")}
      </p>

      <Button asChild size="btnIcon">
        <Link className="group z-10 text-brand-dark" href="/services">
          <LetterSwapPingPong
            className="w-full justify-start font-semibold"
            label={t("services.cta.btnText")}
            reverse={false}
            staggerFrom="first"
          />

          <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark group-hover:bg-background">
            <IconArrowRight />
          </div>
        </Link>
      </Button>

      <XIcon aria-hidden="true" className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 opacity-60" />
    </div>
  );
};
