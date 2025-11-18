import { Metadata } from 'next'
import Script from 'next/script'

import { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { HeroHeader } from '@/components/hero-header'

import { getInsights } from '@/feature/insights/actions/query'
import { InsightCard } from '@/feature/insights/components/insight-card'

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === 'ar'
      ? 'الرؤى والأخبار | ماكسلاين جلوبال لوجستكس'
      : 'Insights & News | Maxline Global Logistics'

  const description =
    locale === 'ar'
      ? 'اكتشف الرؤى والاتجاهات والمنظورات الخبيرة التي تشكل مستقبل اللوجستية العالمية. من ابتكارات سلسلة التوريد إلى حلول الشحن، ابق على اطلاع بالأفكار التي تدفع الأعمال إلى الأمام.'
      : 'Discover insights, trends, and expert perspectives shaping the future of global logistics. From supply chain innovations to freight solutions, stay informed with the ideas that move businesses forward.'

  return {
    title,
    description,
    openGraph: {
      title,
      description:
        locale === 'ar'
          ? 'اكتشف الرؤى والاتجاهات والمنظورات الخبيرة التي تشكل مستقبل اللوجستية العالمية.'
          : 'Discover insights, trends, and expert perspectives shaping the future of global logistics.',
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_SA',
      siteName: 'Maxline Global Logistics',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description:
        locale === 'ar'
          ? 'اكتشف الرؤى والاتجاهات والمنظورات الخبيرة التي تشكل مستقبل اللوجستية العالمية.'
          : 'Discover insights, trends, and expert perspectives shaping the future of global logistics.',
    },
    alternates: {
      canonical: `https://www.maxlineglobal.com/${locale}/insights`,
      languages: {
        en: 'https://www.maxlineglobal.com/en/insights',
        ar: 'https://www.maxlineglobal.com/ar/insights',
      },
    },
  }
}

interface Props {
  params: Promise<{ locale: Locale }>
}

export default async function InsightsPage({ params }: Props) {
  const t = await getTranslations('HomePage')
  const { locale } = await params
  const insights = await getInsights({ locale })

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Maxline Global Logistics Insights',
    description: t('insights.description'),
    url: 'https://maxline.global/insights',
    publisher: {
      '@type': 'Organization',
      name: 'Maxline Global Logistics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://maxline.global/logo.png',
      },
    },
    // blogPost: blogs.map((blog: Blog) => ({
    //   '@type': 'BlogPosting',
    //   headline: blog.title,
    //   description: blog.description,
    //   image: blog.image,
    //   datePublished: blog.datePublished,
    //   author: {
    //     '@type': 'Person',
    //     name: blog.author,
    //   },
    //   url: `https://maxline.global/insights/${blog.slug}`,
    // })),
  }

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="container relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl">
        <HeroHeader
          description={t('insights.description')}
          subtitle={t('insights.label')}
          title={t.rich('insights.title')}
        />
        <section
          aria-label="Insights and Articles"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {insights.map((insight) => (
            <InsightCard data={insight} key={insight.slug} />
          ))}
        </section>
      </main>
    </>
  )
}
