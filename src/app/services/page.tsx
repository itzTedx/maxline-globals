import { HeroHeader } from "@/components/hero-header";
import { SERVICES } from "@/constants";
import { Cta } from "@/feature/cta";
import { ServicesGrid } from "@/feature/services/services-grid";

export default function ServicesPage() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <HeroHeader
        subtitle="Services"
        title="Logistics Solutions That Move Business Forward"
        description="Explore our full suite of global logistics services—from air, sea, and road freight to warehousing, customs clearance, and project cargo management. Maxline Global delivers reliable, scalable, and end-to-end solutions for every supply chain challenge."
      />
      <section className="container max-w-7xl">
        <ServicesGrid services={SERVICES} isExpanded />
      </section>
      <Cta />
    </main>
  );
}
