import type { Metadata } from "next";
import Script from "next/script";

import { geistSans, radioGrostek } from "@/assets/fonts";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maxline Global | Global Logistics & Freight Solutions",
  description:
    "Maxline Global delivers excellence across land, air, and sea with comprehensive logistics solutions. Track shipments, explore freight services, and connect with our global network.",
  keywords: [
    "logistics",
    "freight",
    "shipping",
    "cargo",
    "transportation",
    "warehousing",
    "supply chain",
  ],
  authors: [{ name: "Maxline Global" }],
  openGraph: {
    title: "Maxline Global | Global Logistics & Freight Solutions",
    description:
      "Delivering excellence across land, air, and sea with comprehensive logistics solutions.",
    type: "website",
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
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://maxlineglobal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/images/container.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
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
      </body>
    </html>
  );
}
