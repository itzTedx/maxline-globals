import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'

import { Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { StaggeredText } from '@/components/animation/staggered-text'
import { HeroHeader } from '@/components/hero-header'
import MDXContent from '@/components/markdown/mdx-component'
import { Button } from '@/components/ui/button'

import { siteConfig, socialLinks } from '@/constants/site-config'
import { getInsightBySlug, getInsights } from '@/feature/insights/actions/query'
import type { Insight } from '@/feature/insights/actions/types'
import { routing } from '@/i18n/routing'
import { formatInsightDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string; locale: Locale }>
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const insight = await getInsightBySlug(slug, { locale })

  if (!insight)
    return {
      title: 'Insight not found',
    }

  const pageUrl = `${siteConfig.site}/${locale}/insights/${slug}`
  const openGraphLocale = getOpenGraphLocale(locale)
  const languages = buildLanguageAlternates(slug)
  const publishedTime = new Date(insight.metadata.date).toISOString()
  const alternateLocale = routing.locales
    .filter((value) => value !== locale)
    .map((value) => getOpenGraphLocale(value as Locale))

  return {
    title: insight.metadata.title,
    description: insight.metadata.description,
    keywords: insight.metadata.keywords,
    alternates: {
      canonical: pageUrl,
      languages,
    },
    openGraph: {
      title: insight.metadata.title,
      description: insight.metadata.description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: openGraphLocale,
      alternateLocale,
      type: 'article',
      publishedTime,
      modifiedTime: publishedTime,
      images: [
        {
          url: insight.metadata.thumbnail,
          alt: insight.metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.metadata.title,
      description: insight.metadata.description,
      images: [insight.metadata.thumbnail],
    },
    other: {
      'article:section': insight.metadata.category,
    },
  }
}

export async function generateStaticParams({ params }: Props) {
  const { locale } = await params
  const insights = await getInsights({ locale })

  return insights.map((insight) => ({
    slug: insight.slug,
    locale,
  }))
}

export default async function InsightsSlugPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const navigationT = await getTranslations('Navigation')
  const insight = await getInsightBySlug(slug, { locale })

  if (!insight) return notFound()

  const articleStructuredData = buildArticleStructuredData(insight, locale)
  const breadcrumbStructuredData = buildBreadcrumbStructuredData({
    locale,
    slug,
    title: insight.metadata.title,
    homeLabel: navigationT('home'),
    insightsLabel: navigationT('insights'),
  })
  const gridDescriptionId = 'article-content-description'

  return (
    <>
      <Script id={`insight-article-schema-${slug}`} type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </Script>
      <Script
        id={`insight-breadcrumb-schema-${slug}`}
        type="application/ld+json"
      >
        {JSON.stringify(breadcrumbStructuredData)}
      </Script>

      <main className="container relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl">
        <HeroHeader
          breadcrumb={
            <nav
              aria-label="Breadcrumb"
              className="container mx-auto mb-3 flex items-center justify-center gap-2 text-muted-foreground text-sm md:text-base lg:text-lg"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    className="transition hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href={`/${locale}`}
                  >
                    {navigationT('home')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    className="transition hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href={`/${locale}/insights`}
                  >
                    {navigationT('insights')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>Event</li>
                <li
                  aria-current="page"
                  className="hidden"
                  title={insight.metadata.title}
                >
                  {insight.metadata.title}
                </li>
              </ol>
            </nav>
          }
          className="mx-auto max-w-6xl"
          description={insight.metadata.description}
          descriptionClassName="text-sm sm:text-lg md:text-xl"
          // subtitle={insight.metadata.category ?? 'Insights & News'}
          // subtitleClassName="text-xs text-muted-foreground uppercase tracking-wide sm:text-sm"
          title={insight.metadata.title}
          titleClassName="lg:text-6xl text-balance"
        >
          <p className="mt-4 text-muted-foreground">
            <StaggeredText
              duration={0.7}
              staggerChildren={0.03}
              text={formatInsightDate(insight.metadata.date, locale)}
            />
          </p>
        </HeroHeader>
        <figure
          aria-describedby={gridDescriptionId}
          className="-mt-12 container relative mb-20 aspect-video max-w-7xl overflow-hidden rounded-3xl"
        >
          <Image
            alt={`${insight.metadata.title} cover image`}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            src={insight.metadata.thumbnail}
          />
          <figcaption className="sr-only" id={gridDescriptionId}>
            {insight.metadata.description}
          </figcaption>
        </figure>
        <article
          className="prose sm:prose-lg prose-base lg:prose-xl mx-auto max-w-prose prose-headings:text-brand-dark prose-li:marker:text-brand-gray/50"
          itemScope
          itemType="https://schema.org/Article"
        >
          <meta content={insight.metadata.title} itemProp="headline" />
          <meta content={insight.metadata.description} itemProp="description" />
          <meta content={insight.metadata.thumbnail} itemProp="image" />
          <meta
            content={new Date(insight.metadata.date).toISOString()}
            itemProp="datePublished"
          />
          <meta
            content={new Date(insight.metadata.date).toISOString()}
            itemProp="dateModified"
          />
          <MDXContent
            components={{
              Image: (props) => (
                <Image {...props} className="rounded-lg shadow-lg" />
              ),
              Button: (props) => (
                <Button asChild {...props}>
                  <Link
                    className="not-prose"
                    href={props.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {props.children}
                  </Link>
                </Button>
              ),
            }}
            source={insight.content}
          />
        </article>
      </main>
    </>
  )
}

function buildLanguageAlternates(slug: string) {
  return routing.locales.reduce<Record<string, string>>((acc, locale) => {
    acc[locale] = `${siteConfig.site}/${locale}/insights/${slug}`
    return acc
  }, {})
}

function getOpenGraphLocale(locale: Locale) {
  return locale === 'ar' ? 'ar_SA' : 'en_US'
}

function buildArticleStructuredData(insight: Insight, locale: Locale) {
  const url = `${siteConfig.site}/${locale}/insights/${insight.metadata.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: url,
    headline: insight.metadata.title,
    description: insight.metadata.description,
    image: [insight.metadata.thumbnail],
    keywords: insight.metadata.keywords,
    articleSection: insight.metadata.category,
    inLanguage: locale,
    datePublished: new Date(insight.metadata.date).toISOString(),
    dateModified: new Date(insight.metadata.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    sameAs: [socialLinks.map((link) => link.href)],
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.site}/logo.png`,
      },
    },
  }
}

function buildBreadcrumbStructuredData({
  locale,
  slug,
  title,
  homeLabel,
  insightsLabel,
}: {
  locale: Locale
  slug: string
  title: string
  homeLabel: string
  insightsLabel: string
}) {
  const baseLocaleUrl = `${siteConfig.site}/${locale}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: baseLocaleUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: insightsLabel,
        item: `${baseLocaleUrl}/insights`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${baseLocaleUrl}/insights/${slug}`,
      },
    ],
  }
}
