import { HeroHeader } from "@/components/hero-header";
import { InsightsList } from "@/feature/insights/components/insights-list";

const mockBlogs = [
  {
    id: 1,
    title: "The Future of Supply Chain Technology",
    description:
      "Exploring how AI and blockchain are revolutionizing global logistics and supply chain management.",
    image: "/images/blog/supply-chain-tech.jpg",
    slug: "future-supply-chain-technology",
  },
  {
    id: 2,
    title: "Sustainable Logistics Practices",
    description:
      "How companies are implementing eco-friendly solutions in their logistics operations.",
    image: "/images/blog/sustainable-logistics.jpg",
    slug: "sustainable-logistics-practices",
  },
  {
    id: 3,
    title: "Global Trade Trends 2024",
    description:
      "An in-depth analysis of emerging trends and challenges in international trade and logistics.",
    image: "/images/blog/global-trade.jpg",
    slug: "global-trade-trends-2024",
  },
  {
    id: 4,
    title: "The Future of Supply Chain Technology",
    description:
      "Exploring how AI and blockchain are revolutionizing global logistics and supply chain management.",
    image: "/images/blog/supply-chain-tech.jpg",
    slug: "future-supply-chain-technology",
  },
  {
    id: 5,
    title: "Sustainable Logistics Practices",
    description:
      "How companies are implementing eco-friendly solutions in their logistics operations.",
    image: "/images/blog/sustainable-logistics.jpg",
    slug: "sustainable-logistics-practices",
  },
  {
    id: 6,
    title: "Global Trade Trends 2024",
    description:
      "An in-depth analysis of emerging trends and challenges in international trade and logistics.",
    image: "/images/blog/global-trade.jpg",
    slug: "global-trade-trends-2024",
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-background relative z-10 container rounded-b-3xl pb-20 shadow-xl">
      <HeroHeader
        subtitle="Insights & News"
        title="Explore the Ideas Driving Global Logistics Forward"
        description="Discover insights, trends, and expert perspectives shaping the future of global logistics. From supply chain innovations to freight solutions, stay informed with the ideas that move businesses forward."
      />
      <InsightsList initialInsights={mockBlogs} />
    </main>
  );
}
