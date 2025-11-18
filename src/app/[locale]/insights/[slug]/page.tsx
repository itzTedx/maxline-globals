import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Script from 'next/script'

import { Locale } from 'next-intl'

import { StaggeredText } from '@/components/animation/staggered-text'
import { HeroHeader } from '@/components/hero-header'
import MDXContent from '@/components/markdown/mdx-component'

import { getInsightBySlug } from '@/feature/insights/actions/query'
import { formatInsightDate } from '@/lib/utils'

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      'What is cross-trade shipping and when is it the best option? | Maxline Global',
    description:
      "Learn about cross-trade shipping, its benefits, and when it's the best option for your business. Expert insights from Maxline Global on international logistics.",
    openGraph: {
      title:
        'What is cross-trade shipping and when is it the best option? | Maxline Global',
      description:
        "Learn about cross-trade shipping, its benefits, and when it's the best option for your business. Expert insights from Maxline Global on international logistics.",
      images: [
        {
          url: '/images/blogs/transport-logistics-products.jpg',
          width: 1200,
          height: 630,
          alt: 'Transport and logistics products',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'What is cross-trade shipping and when is it the best option? | Maxline Global',
      description:
        "Learn about cross-trade shipping, its benefits, and when it's the best option for your business. Expert insights from Maxline Global on international logistics.",
      images: ['/images/blogs/transport-logistics-products.jpg'],
    },
  }
}

// Structured data for the article
const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is cross-trade shipping and when is it the best option?',
  description:
    'A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless.',
  image: '/images/blogs/transport-logistics-products.jpg',
  author: {
    '@type': 'Organization',
    name: 'Maxline Global',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Maxline Global',
    logo: {
      '@type': 'ImageObject',
      url: '/images/logo.png',
    },
  },
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
}

interface Props {
  params: Promise<{ slug: string; locale: Locale }>
}

export default async function InsightsSlugPage({ params }: Props) {
  const { slug, locale } = await params
  const insight = await getInsightBySlug(slug, { locale })

  if (!insight) return notFound()

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </Script>
      <main className="container relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl">
        <HeroHeader
          className="mx-auto max-w-6xl"
          description={insight.metadata.description}
          descriptionClassName="text-sm sm:text-lg md:text-xl"
          subtitle={insight.metadata.category ?? 'Insights & News'}
          title={insight.metadata.title}
          titleClassName="lg:text-6xl text-balance"
        >
          <p className="mt-4">
            <StaggeredText
              duration={0.7}
              staggerChildren={0.03}
              text={formatInsightDate(insight.metadata.date, locale)}
            />
          </p>
        </HeroHeader>
        <figure className="-mt-12 container relative mb-20 aspect-video max-w-7xl overflow-hidden rounded-3xl">
          <Image
            alt="Transport and logistics products being handled in a warehouse"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            src={insight.metadata.thumbnail}
          />
        </figure>
        <article className="prose sm:prose-lg prose-base lg:prose-xl mx-auto max-w-prose prose-headings:text-brand-dark prose-li:marker:text-brand-gray/50">
          <MDXContent
            components={{
              Image: (props) => (
                <Image {...props} className="rounded-lg shadow-lg" />
              ),
            }}
            source={insight.content}
          />
        </article>
      </main>
    </>
  )
}
