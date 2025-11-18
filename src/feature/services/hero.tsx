import Image from "next/image";

import { IconArrowDown } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/navigation";

import { HeroProps } from "./types/types";

export const Hero = ({ title, description, image, ctaLink, ctaText }: HeroProps) => {
  return (
    <header
      className="-mt-20 relative grid min-h-[50svh] overflow-hidden bg-white md:min-h-[70svh] md:grid-cols-2"
      itemScope
      itemType="https://schema.org/Service"
      role="banner"
    >
      <div className="container flex flex-col items-start justify-between pt-24 pb-12 md:pt-40 md:pb-20">
        <div className="space-y-4 md:space-y-6">
          <h1 className="font-grotesk text-4xl text-brand-dark md:text-5xl lg:text-6xl" id="page-title" itemProp="name">
            {title}
          </h1>
          <p className="font-light text-brand-gray text-lg md:text-xl lg:text-2xl" itemProp="description">
            {description}
          </p>
        </div>
        <Button asChild className="mt-8 md:mt-0" size="btnIcon">
          <Link aria-label={`${ctaText} - ${title}`} className="gap-3 text-brand-dark" href={ctaLink}>
            {ctaText}
            <div className="flex size-8 items-center justify-center rounded bg-primary text-brand-dark">
              <IconArrowDown aria-hidden="true" />
            </div>
          </Link>
        </Button>
      </div>
      <div className="-right-20 md:-right-20 md:-bottom-[15%] absolute bottom-0 h-[150px] md:h-auto" itemProp="image">
        <Image
          alt={image.alt}
          className="h-full w-full object-contain"
          height={image.height}
          loading="eager"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, 50vw"
          src={image.src}
          width={image.width}
        />
      </div>
    </header>
  );
};
