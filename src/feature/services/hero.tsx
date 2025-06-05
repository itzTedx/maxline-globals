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
      className="relative -mt-20 grid min-h-[70svh] grid-cols-2 overflow-hidden bg-white"
      role="banner"
    >
      <div className="container flex flex-col items-start justify-between pt-40 pb-20">
        <div className="space-y-6">
          <h1 id="page-title" className="font-grotesk text-brand-dark text-6xl">
            {title}
          </h1>
          <p className="text-brand-gray text-2xl font-light">{description}</p>
        </div>
        <Button asChild size="btnIcon">
          <Link href={ctaLink} className="text-brand-dark gap-3">
            {ctaText}
            <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
              <IconArrowDown />
            </div>
          </Link>
        </Button>
      </div>
      <div className="absolute -right-20 -bottom-1/4">
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
          className="object-contain"
          priority
        />
      </div>
    </header>
  );
};
