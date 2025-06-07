import { Cta } from "@/feature/cta";
import { AboutSection } from "@/feature/home/sections/about";
import { FaqSection } from "@/feature/home/sections/faq";
import { HeroSection } from "@/feature/home/sections/hero";
import { ServicesSection } from "@/feature/home/sections/services";
import { InsightsCarousel } from "@/feature/insights/components/insights-carousel";

export default function Home() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <HeroSection />

      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <InsightsCarousel />
      <Cta />
    </main>
  );
}
