import { HeroHeader } from "@/components/hero-header";

export default function TeamPage() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <HeroHeader
        subtitle="Our Team"
        title="Here's the team that works hard to Deliver your vision, faster"
        description="Our expert logistics team delivers personalized freight solutions tailored to each client's needs. By combining industry experience with advanced supply chain technology, we help businesses overcome challenges and achieve their logistics goals efficiently."
      />
    </main>
  );
}
