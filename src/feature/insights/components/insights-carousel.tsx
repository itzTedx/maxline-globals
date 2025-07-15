import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/i18n/navigation";

import { InsightCard, InsightCardProps } from "./insight-card";

const blogs: InsightCardProps[] = [
  {
    id: 1,
    title: "What is cross-trade shipping and when is it the best option?",
    description:
      "A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "cross-trade-shipping-guide",
  },
  {
    id: 2,
    title: "What is cross-trade shipping and when is it the best option?",
    description:
      "A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless.",
    image: "/images/blogs/transport-logistics-products (2).jpg",
    slug: "cross-trade-shipping-guide",
  },
  {
    id: 3,
    title: "What is cross-trade shipping and when is it the best option?",
    description:
      "A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless.",
    image: "/images/blogs/transport-logistics-products.jpg",
    slug: "cross-trade-shipping-guide",
  },
  {
    id: 4,
    title: "What is cross-trade shipping and when is it the best option?",
    description:
      "A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless.",
    image: "/images/blogs/truck-logistics-operation-dusk.jpg",
    slug: "cross-trade-shipping-guide",
  },
  {
    id: 5,
    title: "What is cross-trade shipping and when is it the best option?",
    description:
      "A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "cross-trade-shipping-guide",
  },
  {
    id: 6,
    title: "What is cross-trade shipping and when is it the best option?",
    description:
      "A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "cross-trade-shipping-guide",
  },
];

export const InsightsCarousel = () => {
  return (
    <section
      className="w-full overflow-hidden py-10 md:py-16 lg:py-20"
      aria-label="Blog posts carousel"
    >
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-grotesk text-secondary text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-brand-dark">Maxline</span> Insights &
                Updates
              </h2>
              <p className="text-brand-gray pt-2 text-lg font-light tracking-tight sm:text-xl lg:text-2xl">
                Stay ahead with the latest in logistics, trade, and
                <br className="hidden sm:block" />
                global supply chain trends.
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Button
                  className="aspect-square size-9 shrink-0 sm:size-11"
                  variant="outline"
                  asChild
                  aria-label="Previous slide"
                >
                  <CarouselPrevious className="static shrink-0 translate-y-0" />
                </Button>
                <Button
                  className="aspect-square size-9 shrink-0 sm:size-11"
                  variant="outline"
                  asChild
                  aria-label="Next slide"
                >
                  <CarouselNext className="static shrink-0 translate-y-0" />
                </Button>
              </div>
              <Button asChild size="btnIcon">
                <Link
                  href="/services"
                  className="text-brand-dark group z-10"
                  aria-label="View all insights and news"
                >
                  <LetterSwapPingPong
                    label="More"
                    staggerFrom="first"
                    reverse={false}
                    className="w-full justify-start font-semibold"
                  />

                  <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded">
                    <IconArrowRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mt-8 overflow-hidden sm:mt-12">
          <div
            className="from-background absolute left-0 z-10 hidden h-full w-12 bg-gradient-to-r to-transparent sm:w-24 md:block"
            aria-hidden="true"
          />
          <div
            className="from-background absolute right-0 z-10 hidden h-full w-12 bg-gradient-to-l to-transparent sm:w-24 md:block"
            aria-hidden="true"
          />
          <CarouselContent className="container">
            {blogs.map((blog) => (
              <CarouselItem
                key={blog.id}
                className="basis-1/2 pl-0.5 md:pl-2 lg:basis-1/3"
              >
                <div className="p-1">
                  <InsightCard {...blog} />
                </div>
              </CarouselItem>
            ))}
            <CarouselItem className="basis-1/2 pl-0.5 md:pl-2 lg:basis-1/3">
              <div className="h-full p-1">
                <Card className="h-full gap-4 overflow-hidden p-0">
                  <CardContent className="text-brand-gray relative flex h-full flex-col items-center justify-center px-0 text-xl font-medium sm:text-2xl">
                    <p className="mb-3">Explore More</p>
                    <div className="flex size-8 items-center justify-center rounded-full border sm:size-9">
                      <IconArrowUpRight className="size-4 sm:size-5" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};
