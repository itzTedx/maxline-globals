import type { Metadata } from "next";
import Script from "next/script";

import { geistSans, radioGrostek } from "@/assets/fonts";
import BreakpointIndicator from "@/components/breakpoint-indicator";
import { Footer } from "@/components/layout/footer";
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
    google: "-",
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
