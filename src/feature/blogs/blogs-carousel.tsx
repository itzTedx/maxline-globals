import Image from "next/image";
import Link from "next/link";

import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";

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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const BlogsCarousel = () => {
  const blogs = [
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

  return (
    <section
      className="w-full overflow-hidden py-20"
      aria-label="Blog posts carousel"
    >
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-grotesk text-secondary text-5xl tracking-tight">
                <span className="text-brand-dark">Maxline</span> Insights &
                Updates
              </h2>
              <p className="text-brand-gray pt-2 text-2xl font-light tracking-tight">
                Stay ahead with the latest in logistics, trade, and
                <br />
                global supply chain trends.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                className="aspect-square size-11 shrink-0"
                variant="outline"
                asChild
                aria-label="Previous slide"
              >
                <CarouselPrevious className="static shrink-0 translate-y-0" />
              </Button>
              <Button
                className="aspect-square size-11 shrink-0"
                variant="outline"
                asChild
                aria-label="Next slide"
              >
                <CarouselNext className="static shrink-0 translate-y-0" />
              </Button>

              <Button asChild size="btnIcon">
                <Link
                  href="/blog"
                  className="text-brand-dark gap-3"
                  aria-label="View all blog posts"
                >
                  More
                  <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
                    <IconArrowRight aria-hidden="true" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mt-12 overflow-hidden">
          <div
            className="from-background absolute left-0 z-10 h-full w-24 bg-gradient-to-r to-transparent"
            aria-hidden="true"
          />
          <div
            className="from-background absolute right-0 z-10 h-full w-24 bg-gradient-to-l to-transparent"
            aria-hidden="true"
          />
          <CarouselContent className="container">
            {blogs.map((blog) => (
              <CarouselItem
                key={blog.id}
                className="pl-2 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="gap-4 overflow-hidden p-0">
                    <CardContent className="relative px-0">
                      <div className="relative aspect-4/3">
                        <Image
                          src={blog.image}
                          alt={`Illustration for article: ${blog.title}`}
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          priority={false}
                        />
                      </div>
                      <CardHeader className="p-6">
                        <CardTitle className="text-xl font-medium">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="text-brand-gray line-clamp-3 text-base font-light">
                          {blog.description}
                        </CardDescription>
                      </CardHeader>
                    </CardContent>
                    <CardFooter className="w-full pb-6">
                      <Button asChild size="btnIcon">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="text-brand-dark group w-full"
                          aria-label={`Read full article: ${blog.title}`}
                        >
                          <LetterSwapPingPong
                            label="Read Article"
                            staggerFrom={"first"}
                            reverse={false}
                            className="w-full justify-start font-semibold"
                          />

                          <div className="bg-primary text-brand-dark group-hover:bg-background pointer-events-none ml-auto flex size-8 shrink-0 touch-none items-center justify-center rounded transition-colors select-none">
                            <IconArrowRight aria-hidden="true" />
                          </div>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
            <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
              <div className="h-full p-1">
                <Card className="h-full gap-4 overflow-hidden p-0">
                  <CardContent className="text-brand-gray relative flex h-full flex-col items-center justify-center px-0 text-2xl font-medium">
                    <p className="mb-3">Explore More</p>
                    <div className="flex size-9 items-center justify-center rounded-full border">
                      <IconArrowUpRight />
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
