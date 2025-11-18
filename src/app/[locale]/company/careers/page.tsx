import { Metadata } from 'next'
import Link from 'next/link'

import {
  IconArrowRight,
  IconClock,
  IconGlobe,
  IconHeart,
  IconStar,
  IconUsers,
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import LetterSwapPingPong from '@/components/animation/letter-swap-pingpong-anim'
import SpotlightCard from '@/components/animation/spotlight-card'
import { StaggeredText } from '@/components/animation/staggered-text'
import { HeroHeader } from '@/components/hero-header'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { siteConfig } from '@/constants/site-config'

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations('meta.careers')

  const title = t('title')
  const description = t('description')
  const keywords = t('keywords')

  const ogTitle = t('title')
  const ogDescription = t('description')

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      url: `${siteConfig.site}/${locale}/company/careers`,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: ['ar_SA', 'en_US'],
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [siteConfig.image.url],
    },
    alternates: {
      canonical: `${siteConfig.site}/${locale}/company/about`,
      languages: {
        en: `${siteConfig.site}/en/company/about`,
        ar: `${siteConfig.site}/ar/company/about`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function CareersPage() {
  const t = useTranslations('CareersPage')

  const benefits = t.raw('benefits.list')

  return (
    <main className="relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl">
      <HeroHeader
        className="container"
        description={t('hero.description')}
        subtitle={t('hero.subtitle')}
        title={[
          { text: t('hero.title.first') },
          { text: t('hero.title.second'), className: 'text-secondary' },
          { text: t('hero.title.third') },
        ]}
      />

      {/* Mission Statement */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="col-span-2 space-y-6">
            <h2 className="font-grotesk text-3xl text-brand-dark md:text-4xl lg:text-5xl">
              <StaggeredText text={t('mission.title')} />
            </h2>
            <p className="font-light text-brand-gray text-lg leading-relaxed md:text-xl">
              {t('mission.description1')}
            </p>
            <p className="font-light text-brand-gray text-lg leading-relaxed md:text-xl">
              {t('mission.description2')}
            </p>
          </div>
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="space-y-4">
              <h3 className="font-grotesk text-2xl text-brand-dark md:text-3xl">
                {t('mission.whyChoose.title')}
              </h3>
              <ul className="grid gap-4">
                {t
                  .raw('mission.whyChoose.benefits')
                  .map((benefit: string, index: number) => (
                    <li className="flex items-start gap-3" key={benefit}>
                      <div className="rounded-full bg-secondary p-2 text-white">
                        {index === 0 && <IconStar className="size-4" />}
                        {index === 1 && <IconUsers className="size-4" />}
                        {index === 2 && <IconGlobe className="size-4" />}
                        {index === 3 && <IconHeart className="size-4" />}
                      </div>
                      <span className="text-brand-gray">{benefit}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Separator />
      </div>

      {/* Benefits Section */}
      <section className="container py-12 md:py-20">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 font-grotesk text-3xl text-brand-dark md:text-4xl lg:text-5xl">
            <StaggeredText text={t('benefits.title')} />
          </h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(
            (
              benefit: { title: string; description: string },
              index: number
            ) => (
              <SpotlightCard
                className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
                key={benefit.title}
                spotlightColor="rgba(0, 200, 255, 0.3)"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-muted md:size-20">
                  {index === 0 && (
                    <IconStar className="size-8 stroke-[1.5] text-brand-gray md:size-12" />
                  )}
                  {index === 1 && (
                    <IconUsers className="size-8 stroke-[1.5] text-brand-gray md:size-12" />
                  )}
                  {index === 2 && (
                    <IconHeart className="size-8 stroke-[1.5] text-brand-gray md:size-12" />
                  )}
                  {index === 3 && (
                    <IconGlobe className="size-8 stroke-[1.5] text-brand-gray md:size-12" />
                  )}
                  {index === 4 && (
                    <IconClock className="size-8 stroke-[1.5] text-brand-gray md:size-12" />
                  )}
                </div>
                <h5 className="mt-8 mb-2 font-grotesk text-2xl text-brand-dark md:mt-12 md:mb-3 md:text-4xl">
                  {benefit.title}
                </h5>
                <p className="text-sm md:text-base">{benefit.description}</p>
              </SpotlightCard>
            )
          )}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-grotesk text-3xl text-brand-dark md:text-4xl lg:text-5xl">
            <StaggeredText text={t('cta.title')} />
          </h2>
          <p className="mb-8 font-light text-brand-gray text-lg leading-relaxed md:text-xl">
            {t('cta.description')}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="btnIcon">
              <Link
                className="group gap-3 text-brand-dark"
                href={`mailto:${t('cta.email')}`}
              >
                <LetterSwapPingPong
                  className="w-full justify-start font-semibold"
                  label={t('cta.applyNow')}
                  reverse={false}
                  staggerFrom="first"
                />
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark transition duration-500 group-hover:bg-background">
                  <IconArrowRight />
                </div>
              </Link>
            </Button>
            <Button
              asChild
              className="bg-white"
              size="btnIcon"
              variant="secondary"
            >
              <Link
                className="group gap-3 text-brand-dark"
                href={`mailto:${t('cta.email')}`}
              >
                <LetterSwapPingPong
                  className="w-full justify-start font-semibold"
                  label={t('cta.emailUs')}
                  reverse={false}
                  staggerFrom="first"
                />
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark transition duration-500 group-hover:bg-background">
                  <IconArrowRight />
                </div>
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-brand-gray text-sm">
            {t('cta.resumeText')}{' '}
            <a
              className="text-secondary hover:underline"
              href={`mailto:${t('cta.email')}`}
            >
              {t('cta.email')}
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
