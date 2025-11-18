import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react'
import { getLocale, getTranslations } from 'next-intl/server'

import LetterSwapPingPong from '@/components/animation/letter-swap-pingpong-anim'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { Link } from '@/i18n/navigation'

import { getInsights } from '../actions/query'
import { InsightCard } from './insight-card'

export const InsightsCarousel = async () => {
  const t = await getTranslations('HomePage')
  const locale = await getLocale()
  const isRTL = locale === 'ar'

  const insights = await getInsights({ locale })
  return (
    <section
      aria-label="Blog posts carousel"
      className="w-full overflow-hidden py-10 md:py-16 lg:py-20"
    >
      <Carousel
        className="w-full"
        dir={isRTL ? 'rtl' : 'ltr'}
        opts={{
          align: 'start',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-grotesk text-3xl text-secondary tracking-tight sm:text-4xl lg:text-5xl">
                {t.rich('insights.title')}
              </h2>
              <p className="max-w-xl text-balance pt-2 font-light text-brand-gray text-lg tracking-tight sm:text-xl lg:text-2xl">
                {t('insights.description')}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Button
                  aria-label="Previous slide"
                  asChild
                  className="aspect-square size-9 shrink-0 sm:size-11"
                  variant="outline"
                >
                  <CarouselPrevious className="static shrink-0 translate-y-0" />
                </Button>
                <Button
                  aria-label="Next slide"
                  asChild
                  className="aspect-square size-9 shrink-0 sm:size-11"
                  variant="outline"
                >
                  <CarouselNext className="static shrink-0 translate-y-0" />
                </Button>
              </div>
              <Button asChild size="btnIcon">
                <Link
                  aria-label="View all insights and news"
                  className="group z-10 text-brand-dark"
                  href="/services"
                >
                  <LetterSwapPingPong
                    className="w-full justify-start font-semibold"
                    label={t('insights.btnText')}
                    reverse={false}
                    staggerFrom="first"
                  />

                  <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark group-hover:bg-background">
                    <IconArrowRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mt-8 overflow-hidden sm:mt-12">
          <div
            aria-hidden="true"
            className="absolute left-0 z-10 hidden h-full w-12 bg-linear-to-r from-background to-transparent sm:w-24 md:block"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 z-10 hidden h-full w-12 bg-linear-to-l from-background to-transparent sm:w-24 md:block"
          />
          <CarouselContent className="container">
            {insights.map((blog) => (
              <CarouselItem
                className="pl-0.5 sm:basis-1/2 md:pl-2 lg:basis-1/3"
                key={blog.slug}
              >
                <div className="p-1">
                  <InsightCard data={blog} />
                </div>
              </CarouselItem>
            ))}
            <CarouselItem className="basis-1/2 pl-0.5 md:pl-2 lg:basis-1/3">
              <div className="h-full p-1">
                <Card className="h-full gap-4 overflow-hidden p-0">
                  <CardContent className="relative flex h-full flex-col items-center justify-center px-0 font-medium text-brand-gray text-xl sm:text-2xl">
                    <p className="mb-3">{t('insights.exploreBtn')}</p>
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
  )
}
