import { Metadata } from 'next'
import Script from 'next/script'

import { getTranslations } from 'next-intl/server'

import { HeroHeader } from '@/components/hero-header'

import { SERVICES } from '@/constants'
import { siteConfig } from '@/constants/site-config'
import { Cta } from '@/feature/cta'
import { ServicesGrid } from '@/feature/services/services-grid'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ServicesPage')
  return {
    title: t('title'),
    description: t('description'),
    keywords: [...siteConfig.keywords, ...t('keywords').split(', ')],
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: 'en_US',
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/services-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Maxline Global Logistics Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/services-og.jpg'],
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
    alternates: {
      canonical: `${siteConfig.site}/services`,
    },
  } satisfies Metadata
}

export default async function ServicesPage() {
  const t = await getTranslations('ServicesPage')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    url: `${siteConfig.site}/services`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.site,
      logo: `${siteConfig.site}/logo.png`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: service.title,
        description: service.description,
        url: `${siteConfig.site}${service.href}`,
        image: `${siteConfig.site}${service.image}`,
      })),
    },
  }
  return (
    <>
      <Script id="services-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main
        className="relative z-10 overflow-hidden rounded-b-3xl bg-background pb-20 shadow-xl"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <article>
          <HeroHeader
            className="container"
            description={t('description')}
            subtitle={t('subtitle')}
            title={t('mainTitle')}
          />
          <section
            aria-label={t('ourServices')}
            className="container max-w-7xl"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <ServicesGrid isExpanded services={SERVICES} />
          </section>
          <Cta />
        </article>
      </main>
    </>
  )
}
