import Image from "next/image";
import Link from "next/link";

import { IconArrowDown } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

import { HeroProps } from "./types/types";

export const Hero = ({
  title,
  description,
  image,
  ctaLink,
  ctaText,
}: HeroProps) => {
  return (
    <header
      className="relative -mt-20 grid min-h-[50svh] overflow-hidden bg-white md:min-h-[70svh] md:grid-cols-2"
      role="banner"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="container flex flex-col items-start justify-between pt-24 pb-12 md:pt-40 md:pb-20">
        <div className="space-y-4 md:space-y-6">
          <h1
            id="page-title"
            className="font-grotesk text-brand-dark text-4xl md:text-5xl lg:text-6xl"
            itemProp="name"
          >
            {title}
          </h1>
          <p
            className="text-brand-gray text-lg font-light md:text-xl lg:text-2xl"
            itemProp="description"
          >
            {description}
          </p>
        </div>
        <Button asChild size="btnIcon" className="mt-8 md:mt-0">
          <Link
            href={ctaLink}
            className="text-brand-dark gap-3"
            aria-label={`${ctaText} - ${title}`}
          >
            {ctaText}
            <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
              <IconArrowDown aria-hidden="true" />
            </div>
          </Link>
        </Button>
      </div>
      <div
        className="absolute -right-20 -bottom-1/4 h-[300px] md:-right-20 md:-bottom-1/4 md:h-auto"
        itemProp="image"
      >
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
          className="h-full w-full object-contain"
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </div>
    </header>
  );
};
