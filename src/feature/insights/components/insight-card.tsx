import Image from "next/image";
import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface InsightCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function InsightCard({
  title,
  description,
  image,
  slug,
}: InsightCardProps) {
  return (
    <Card className="group relative gap-0 overflow-hidden p-0 md:gap-4">
      <Link
        href={`/insights/${slug}`}
        className="absolute inset-0 z-10"
        title={title}
      ></Link>
      <CardContent className="relative px-0">
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={image}
            alt={`Illustration for article: ${title}`}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            priority={false}
          />
        </div>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="font-grotesk text-brand-dark text-base font-normal max-sm:leading-tight sm:text-2xl">
            {title}
          </CardTitle>
          <CardDescription className="text-brand-gray line-clamp-3 text-xs font-light sm:text-base">
            {description}
          </CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter className="w-full pb-4 max-sm:px-4 sm:pb-6">
        <Button
          size="btnIcon"
          className="text-background hover:text-brand-dark group z-10 w-full"
          aria-label={`Read full article: ${title}`}
        >
          <LetterSwapPingPong
            label="Read Article"
            staggerFrom={"first"}
            reverse={false}
            className="w-full justify-start text-sm font-semibold sm:text-base"
          />
          <div className="bg-primary text-brand-dark group-hover:bg-background pointer-events-none ml-auto flex size-7 shrink-0 touch-none items-center justify-center rounded transition-colors select-none sm:size-8">
            <IconArrowRight className="size-4 sm:size-5" aria-hidden="true" />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}
