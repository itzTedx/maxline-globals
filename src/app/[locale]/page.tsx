import { Suspense, use } from 'react'

import Script from 'next/script'

import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { socialLinks } from '@/constants/site-config'
import { CertificatesSection } from '@/feature/about/sections/certificates'
import { Cta } from '@/feature/cta'
import { AboutSection } from '@/feature/home/sections/about'
import { FaqSection } from '@/feature/home/sections/faq'
import { HeroSection } from '@/feature/home/sections/hero'
import { ServicesSection } from '@/feature/home/sections/services'
import { InsightsCarousel } from '@/feature/insights/components/insights-carousel'

type Props = {
  params: Promise<{ locale: Locale }>
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Maxline Global',
  url: 'https://maxlineglobal.com',
  logo: 'https://maxlineglobal.com/logo.png',
  description:
    'Maxline Global provides comprehensive logistics solutions across land, air, and sea. Our integrated freight services ensure your cargo moves with speed, safety, and precision worldwide.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: [socialLinks.map((link) => link.href)],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
  },
}

export default function Home({ params }: Props) {
  const { locale } = use(params)

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <>
      <main
        className="relative z-10 rounded-b-3xl bg-background pb-20"
        role="main"
      >
        <HeroSection />

        <AboutSection />

        <Suspense
          fallback={
            <div
              aria-label="Loading content"
              className="h-96 w-full animate-pulse bg-gray-200"
            />
          }
        >
          <ServicesSection />
        </Suspense>

        <FaqSection />
        <CertificatesSection />

        <Suspense
          fallback={
            <div
              aria-label="Loading content"
              className="h-96 w-full animate-pulse bg-gray-200"
            />
          }
        >
          <InsightsCarousel />
        </Suspense>

        <Cta />
      </main>

      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
    </>
  )
}
