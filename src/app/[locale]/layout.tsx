import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'

import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import BreakpointIndicator from '@/components/breakpoint-indicator'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import Providers from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'

import { geistSans, ibmPlexSansArabic, radioGrostek } from '@/assets/fonts'

import { siteConfig } from '@/constants/site-config'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

import './globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Import the appropriate dictionary based on locale
  const messages = (await import(`@/dictionaries/${locale}.json`)).default

  const title = messages.meta.home.title
  const description = messages.meta.home.description
  const keywords = messages.meta.home.keywords

  return {
    title,
    description,
    keywords: keywords.split(', '),
    authors: [{ name: siteConfig.name }],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: ['ar_SA', 'en_US'],
      videos: [
        {
          url: 'https://maxlineglobal.com/videos/maxline-web.webm',
          type: 'video/mp4',
          width: 1920,
          height: 1080,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.image.url],
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
    verification: {
      google: 'Drogeolds3k4v2f4gsSZZKN4BYOqG_ioxZHWLqpmv04',
    },
    alternates: {
      canonical: `${siteConfig.site}/${locale}`,
      languages: {
        en: `${siteConfig.site}/en`,
        ar: `${siteConfig.site}/ar`,
      },
    },
    metadataBase: new URL(siteConfig.site),
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  const messages = (await import(`@/dictionaries/${locale}.json`)).default

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maxline Global',
    description:
      locale === 'ar'
        ? 'مزود حلول لوجستية وشحن عالمية'
        : 'Global logistics and freight solutions provider',
    url: 'https://maxlineglobal.com',
    sameAs: [
      'https://twitter.com/maxlineglobal',
      'https://linkedin.com/company/maxlineglobal',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UAE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-XXXXXXXXX',
      contactType: 'customer service',
    },
  }

  const videoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name:
      locale === 'ar'
        ? 'خدمات ماكسلاين جلوبال اللوجستية'
        : 'Maxline Global Logistics Services',
    description:
      locale === 'ar'
        ? 'نظرة عامة على حلول ماكسلاين جلوبال الشاملة للوجستية والشحن'
        : "Overview of Maxline Global's comprehensive logistics and freight solutions",
    thumbnailUrl: 'https://maxlineglobal.com/images/video-thumbnail.jpg',
    uploadDate: '2024-03-20',
    duration: 'PT2M30S',
    contentUrl: 'https://maxlineglobal.com/video/your-video.mp4',
    embedUrl: 'https://maxlineglobal.com/embed/video',
  }

  return (
    <html
      className="scroll-smooth"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <head>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="video-schema" type="application/ld+json">
          {JSON.stringify(videoJsonLd)}
        </Script>
      </head>
      <body
        className={cn(
          'antialiased rtl:font-ibm-plex',
          geistSans.className,
          radioGrostek.variable,
          ibmPlexSansArabic.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Navbar />
            {children}
            <Toaster />
            <BreakpointIndicator />

            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
