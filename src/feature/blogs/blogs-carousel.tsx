import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const BlogsCarousel = () => {
  return (
    <section className="w-full overflow-hidden py-20">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h4 className="font-grotesk text-secondary text-5xl tracking-tight">
                <span className="text-brand-dark">Maxline</span> Insights &
                Updates
              </h4>
              <p className="text-brand-gray pt-2 text-2xl font-light tracking-tight">
                Stay ahead with the latest in logistics, trade, and
                <br />
                global supply chain trends.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="aspect-square" variant="outline" asChild>
                <CarouselPrevious className="static translate-y-0" />
              </Button>
              <Button className="aspect-square" variant="outline" asChild>
                <CarouselNext className="static translate-y-0" />
              </Button>

              <Button asChild size="btnIcon">
                <Link href="/quote" className="text-brand-dark gap-3">
                  More
                  <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
                    <IconArrowRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};
