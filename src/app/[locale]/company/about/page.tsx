import { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

import { siteConfig } from "@/constants/site-config";
import { CertificatesSection } from "@/feature/about/sections/certificates";
import { CompanySection } from "@/feature/about/sections/company";
import { AboutHeroSection } from "@/feature/about/sections/hero";
import { LeaderWords } from "@/feature/about/sections/leader-words";
import { Principles } from "@/feature/about/sections/principles";
import { WhoWeAre } from "@/feature/about/sections/who-we-are";
import { Cta } from "@/feature/cta";

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === "ar"
    ? "من نحن | ماكسلاين جلوبال - شركة الشحن واللوجستية الرائدة"
    : "About Maxline Global | Leading Freight Forwarding & Logistics Company";
  
  const description = locale === "ar"
    ? "اكتشف رحلة ماكسلاين جلوبال كمزود رائد للشحن واللوجستية. تعرف على قيادتنا وقيمنا وشهاداتنا والتزامنا بالتميز في حلول سلسلة التوريد العالمية."
    : "Discover Maxline Global's journey as a premier freight forwarding and logistics provider. Learn about our leadership, values, certifications, and commitment to excellence in global supply chain solutions.";
  
  const ogTitle = locale === "ar"
    ? "من نحن | ماكسلاين جلوبال - قصتنا وقيمنا وقيادتنا"
    : "About Maxline Global | Our Story, Values & Leadership";
  
  const ogDescription = locale === "ar"
    ? "اكتشف رحلة ماكسلاين وقيادتها والمبادئ التي تشكل نجاحنا. تعرف على التزامنا بالتميز والابتكار في اللوجستية العالمية."
    : "Discover Maxline's journey, leadership, and the principles that shape our success. Learn about our commitment to excellence and innovation in global logistics.";
  
  const keywords = locale === "ar"
    ? [
        "ماكسلاين جلوبال",
        "من نحن",
        "تاريخ الشركة",
        "القيادة",
        "قيم الشركة",
        "المبادئ المؤسسية",
        "الشحن",
        "شركة لوجستية",
        "حلول سلسلة التوريد",
        "لوجستية دبي",
        "اللوجستية العالمية",
        "مزود لوجستي معتمد",
      ]
    : [
        "Maxline Global",
        "about us",
        "company history",
        "leadership",
        "company values",
        "corporate principles",
        "freight forwarding",
        "logistics company",
        "supply chain solutions",
        "Dubai logistics",
        "global logistics",
        "certified logistics provider",
      ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url: `${siteConfig.site}/${locale}/company/about`,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
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
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [siteConfig.image.url],
    },
    alternates: {
      canonical: `${siteConfig.site}/${locale}/company/about`,
      languages: {
        "en": `${siteConfig.site}/en/company/about`,
        "ar": `${siteConfig.site}/ar/company/about`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Maxline Global",
            description:
              "Learn about Maxline Global's history, leadership, values, and commitment to excellence in logistics and freight forwarding.",
            url: `${siteConfig.site}/company/about`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.site,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.site}/logo.png`,
              },
            },
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.site,
              foundingDate: "2010", // Replace with actual founding date
              address: {
                "@type": "PostalAddress",
                addressCountry: "UAE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
              },
            },
          }),
        }}
      />
      <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
        <article>
          <AboutHeroSection />

          <Suspense fallback={<div>Loading...</div>}>
            <WhoWeAre />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Principles />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <CompanySection />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <LeaderWords />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <CertificatesSection />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Cta />
          </Suspense>
        </article>
      </main>
    </>
  );
}
