import { Metadata } from "next";

import { HeroHeader } from "@/components/hero-header";
import { InsightsList } from "@/feature/insights/components/insights-list";

export const metadata: Metadata = {
  title: "Insights & News | Maxline Global Logistics",
  description:
    "Discover insights, trends, and expert perspectives shaping the future of global logistics. From supply chain innovations to freight solutions, stay informed with the ideas that move businesses forward.",
  openGraph: {
    title: "Insights & News | Maxline Global Logistics",
    description:
      "Discover insights, trends, and expert perspectives shaping the future of global logistics.",
    type: "website",
    locale: "en_US",
    siteName: "Maxline Global Logistics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & News | Maxline Global Logistics",
    description:
      "Discover insights, trends, and expert perspectives shaping the future of global logistics.",
  },
};

const mockBlogs = [
  {
    id: 1,
    title: "The Future of Supply Chain Technology",
    description:
      "Exploring how AI and blockchain are revolutionizing global logistics and supply chain management.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "future-supply-chain-technology",
    datePublished: "2024-03-20",
    author: "Maxline Team",
  },
  {
    id: 2,
    title: "Sustainable Logistics Practices",
    description:
      "How companies are implementing eco-friendly solutions in their logistics operations.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "sustainable-logistics-practices",
  },
  {
    id: 3,
    title: "Global Trade Trends 2024",
    description:
      "An in-depth analysis of emerging trends and challenges in international trade and logistics.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "global-trade-trends-2024",
  },
  {
    id: 4,
    title: "The Future of Supply Chain Technology",
    description:
      "Exploring how AI and blockchain are revolutionizing global logistics and supply chain management.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "future-supply-chain-technology",
  },
  {
    id: 5,
    title: "Sustainable Logistics Practices",
    description:
      "How companies are implementing eco-friendly solutions in their logistics operations.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "sustainable-logistics-practices",
  },
  {
    id: 6,
    title: "Global Trade Trends 2024",
    description:
      "An in-depth analysis of emerging trends and challenges in international trade and logistics.",
    image:
      "/images/blogs/scene-with-photorealistic-logistics-operations-proceedings.jpg",
    slug: "global-trade-trends-2024",
  },
];

export default function InsightsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Maxline Global Logistics Insights",
    description:
      "Discover insights, trends, and expert perspectives shaping the future of global logistics.",
    url: "https://maxline.global/insights",
    publisher: {
      "@type": "Organization",
      name: "Maxline Global Logistics",
      logo: {
        "@type": "ImageObject",
        url: "https://maxline.global/logo.png",
      },
    },
    blogPost: mockBlogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      image: blog.image,
      datePublished: blog.datePublished,
      author: {
        "@type": "Person",
        name: blog.author,
      },
      url: `https://maxline.global/insights/${blog.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="bg-background relative z-10 container rounded-b-3xl pb-20 shadow-xl">
        <HeroHeader
          subtitle="Insights & News"
          title="Explore the Ideas Driving Global Logistics Forward"
          description="Discover insights, trends, and expert perspectives shaping the future of global logistics. From supply chain innovations to freight solutions, stay informed with the ideas that move businesses forward."
        />
        <section aria-label="Insights and Articles">
          <InsightsList initialInsights={mockBlogs} />
        </section>
      </main>
    </>
  );
}
