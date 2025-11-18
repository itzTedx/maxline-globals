import { Metadata } from 'next'
import Script from 'next/script'

import { useTranslations } from 'next-intl'

import { HeroHeader } from '@/components/hero-header'

import { InsightsList } from '@/feature/insights/components/insights-list'

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

const mockBlogs = [
  {
    id: 1,
    title: 'The Future of Supply Chain Technology',
    description:
      'Exploring how AI and blockchain are revolutionizing global logistics and supply chain management.',
    image:
      '/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg',
    slug: 'future-supply-chain-technology',
    datePublished: '2024-03-20',
    author: 'Maxline Team',
  },
  {
    id: 2,
    title: 'Sustainable Logistics Practices',
    description:
      'How companies are implementing eco-friendly solutions in their logistics operations.',
    image:
      '/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg',
    slug: 'sustainable-logistics-practices',
  },
  {
    id: 3,
    title: 'Global Trade Trends 2024',
    description:
      'An in-depth analysis of emerging trends and challenges in international trade and logistics.',
    image:
      '/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg',
    slug: 'global-trade-trends-2024',
  },
  {
    id: 4,
    title: 'The Future of Supply Chain Technology',
    description:
      'Exploring how AI and blockchain are revolutionizing global logistics and supply chain management.',
    image:
      '/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg',
    slug: 'future-supply-chain-technology',
  },
  {
    id: 5,
    title: 'Sustainable Logistics Practices',
    description:
      'How companies are implementing eco-friendly solutions in their logistics operations.',
    image:
      '/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg',
    slug: 'sustainable-logistics-practices',
  },
  {
    id: 6,
    title: 'Global Trade Trends 2024',
    description:
      'An in-depth analysis of emerging trends and challenges in international trade and logistics.',
    image:
      '/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg',
    slug: 'global-trade-trends-2024',
  },
]

// Define Blog type based on mockBlogs structure
interface Blog {
  id: number
  title: string
  description: string
  image: string
  slug: string
  datePublished?: string
  author?: string
}

export default function InsightsPage() {
  const t = useTranslations('HomePage')

  // Try to get translated blogs, fallback to mockBlogs if not present
  let blogs: Blog[] = []
  try {
    blogs = t.raw ? t.raw('insightsList') : mockBlogs
  } catch {
    blogs = mockBlogs
  }

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
    blogPost: blogs.map((blog: Blog) => ({
      '@type': 'BlogPosting',
      headline: blog.title,
      description: blog.description,
      image: blog.image,
      datePublished: blog.datePublished,
      author: {
        '@type': 'Person',
        name: blog.author,
      },
      url: `https://maxline.global/insights/${blog.slug}`,
    })),
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
        <section aria-label="Insights and Articles">
          <InsightsList initialInsights={blogs} />
        </section>
      </main>
    </>
  )
}
