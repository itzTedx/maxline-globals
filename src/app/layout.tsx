import type { Metadata } from "next";
import Script from "next/script";

import { geistSans, radioGrostek } from "@/assets/fonts";
import BreakpointIndicator from "@/components/breakpoint-indicator";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title.default,
    template: siteConfig.title.template,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title.default,
    description: siteConfig.title.template,
    type: "website",
    videos: [
      {
        url: "https://maxlineglobal.com/videos/maxline-web.webm",
        type: "video/mp4",
        width: 1920,
        height: 1080,
      },
    ],
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
  verification: {
    google: "-",
  },
  alternates: {
    canonical: siteConfig.site,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maxline Global",
              description: "Global logistics and freight solutions provider",
              url: "https://maxlineglobal.com",
              sameAs: [
                "https://twitter.com/maxlineglobal",
                "https://linkedin.com/company/maxlineglobal",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "UAE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-XXXXXXXXX",
                contactType: "customer service",
              },
            }),
          }}
        />
        <Script
          id="video-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Maxline Global Logistics Services",
              description:
                "Overview of Maxline Global's comprehensive logistics and freight solutions",
              thumbnailUrl:
                "https://maxlineglobal.com/images/video-thumbnail.jpg", // Replace with your actual thumbnail URL
              uploadDate: "2024-03-20", // Replace with your actual upload date
              duration: "PT2M30S", // Replace with your actual video duration in ISO 8601 format
              contentUrl: "https://maxlineglobal.com/video/your-video.mp4", // Replace with your actual video URL
              embedUrl: "https://maxlineglobal.com/embed/video", // Replace with your actual embed URL if available
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "antialiased",
          geistSans.className,
          radioGrostek.variable
        )}
      >
        <Navbar />
        {children}
        <BreakpointIndicator />

        <Footer />
      </body>
    </html>
  );
}
