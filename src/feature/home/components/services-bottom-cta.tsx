import { IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { XIcon } from "@/assets/x-icon";
import Letter3DSwap from "@/components/animation/letter-3d-swap";
import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export const ServicesBottomCTA = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden py-9 sm:py-12 md:py-20">
      <Letter3DSwap
        mainClassName="font-grotesk z-10 pt-10 text-center text-4xl md:pt-16 md:text-6xl lg:pt-20 lg:text-8xl"
        frontFaceClassName={`bg-background text-secondary`}
        secondFaceClassName={`bg-background text-secondary`}
        rotateDirection="top"
        staggerDuration={0.03}
        staggerFrom="first"
        as={"h3"}
        transition={{ type: "spring", damping: 25, stiffness: 160 }}
      >
        {t("services.cta.title")}
      </Letter3DSwap>

      <p className="text-brand-gray z-10 mx-auto max-w-3xl pb-8 text-center text-lg font-light tracking-tight text-pretty md:pb-10 md:text-xl lg:pb-12 lg:text-2xl">
        {t("services.cta.description")}
      </p>

      <Button asChild size="btnIcon">
        <Link href="/services" className="text-brand-dark group z-10">
          <LetterSwapPingPong
            label={t("services.cta.btnText")}
            staggerFrom="first"
            reverse={false}
            className="w-full justify-start font-semibold"
          />

          <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded">
            <IconArrowRight />
          </div>
        </Link>
      </Button>

      <XIcon
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
        aria-hidden="true"
      />
    </div>
  );
};
