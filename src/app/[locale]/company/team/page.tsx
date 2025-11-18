import { Suspense } from 'react'

import { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'

import { getTranslations } from 'next-intl/server'

import { StaggeredText } from '@/components/animation/staggered-text'
import { HeroHeader } from '@/components/hero-header'
import { Button } from '@/components/ui/custom-button'

import { TEAMS } from '@/constants'
import { siteConfig } from '@/constants/site-config'
import { CompanySection } from '@/feature/about/sections/company'
import { Cta } from '@/feature/cta'

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations('meta.team')

  const title = t('title')
  const description = t('description')
  const keywords = t('keywords')

  return {
    title: title,
    description: description,
    keywords,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: `${siteConfig.site}/${locale}/company/team`,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: ['ar_SA', 'en_US'],
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/team/team-hero.jpg',
          width: 1200,
          height: 630,
          alt:
            locale === 'ar'
              ? 'فريق ماكسلاين جلوبال - محترفو اللوجستية الخبراء'
              : 'Maxline Global Team - Expert Logistics Professionals',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/images/team/team-hero.jpg'],
    },
    alternates: {
      canonical: `${siteConfig.site}/${locale}/company/team`,
      languages: {
        en: `${siteConfig.site}/en/company/team`,
        ar: `${siteConfig.site}/ar/company/team`,
      },
    },
  }
}

export default async function TeamPage() {
  const t = await getTranslations('TeamPage')
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maxline Global Team',
    description: t('heroDescription'),
    url: `${siteConfig.site}/company/team`,
    logo: `${siteConfig.site}/logo.png`,
    sameAs: [
      'https://linkedin.com/company/maxlineglobal',
      'https://twitter.com/maxlineglobal',
    ],
    department: {
      '@type': 'Organization',
      name: t('departmentName'),
      description: t('departmentDescription'),
    },
  }
  return (
    <>
      <Script id="team-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main
        aria-label="Team Information"
        className="relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl"
        itemScope
        itemType="https://schema.org/Organization"
        role="main"
      >
        <HeroHeader
          className="container"
          description={t('heroDescription')}
          subtitle={t('heroSubtitle')}
          title={t('heroTitle')}
        />
        <meta content="Maxline Global Team" itemProp="name" />
        <meta content={t('heroDescription')} itemProp="description" />
        <meta content={`${siteConfig.site}/company/team`} itemProp="url" />
        <meta content={`${siteConfig.site}/logo.png`} itemProp="logo" />
        <section className="container">
          <h2 className="text-center font-grotesk text-5xl text-secondary">
            <StaggeredText text={t('leadershipTitle')} />
          </h2>
          <ul className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {TEAMS.map((team, i) => (
              <li
                className="overflow-hidden rounded-xl bg-brand-dark"
                key={`${team.nameKey}-${i}`}
              >
                <div className="relative aspect-5/6">
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    src={team.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-brand-dark to-transparent" />
                </div>
                <div className="p-2 text-center text-background">
                  <h3 className="font-grotesk text-4xl">
                    {t(team.nameKey as unknown as Parameters<typeof t>[0])}
                  </h3>

                  <p className="font-grotesk text-primary text-xl sm:text-lg">
                    {t(
                      team.designationKey as unknown as Parameters<typeof t>[0]
                    )}
                  </p>
                  {team.link && (
                    <Button
                      className="mt-2 w-full text-brand-dark"
                      href={team.link}
                      label={t('linkedinProfile')}
                      openExternal
                      textClassName="text-brand-dark"
                      variant="secondary"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* <section className="container py-20">
          <h2 className="font-grotesk text-secondary text-center text-5xl">
            <StaggeredText text={t("specialistsTitle")} />
          </h2>
          <ul className="grid grid-cols-4 gap-6 pt-12">
            {Array.from({ length: 14 }).map((item, i) => (
              <li key={i} className="bg-brand-dark overflow-hidden rounded-xl">
                <div className="relative aspect-5/6">
                  <Image
                    src="/images/placeholder.jpg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                  <div className="from-brand-dark absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent" />
                </div>
                <div className="text-background p-2 text-center">
                  <h3 className="font-grotesk text-4xl">{t("personName")}</h3>
                  <p className="font-grotesk text-primary pb-6 text-xl">
                    {t("designation")}
                  </p>
                  <Button
                    label={t("linkedinProfile")}
                    href="/"
                    variant="secondary"
                    className="text-brand-dark w-full"
                    textClassName="text-brand-dark"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section> */}
        <Suspense fallback={<div>Loading...</div>}>
          <CompanySection />
        </Suspense>
        <div className="pt-20">
          <Cta />
        </div>
      </main>
    </>
  )
}
