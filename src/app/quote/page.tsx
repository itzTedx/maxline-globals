import { IconClock, IconPackage, IconUsers } from "@tabler/icons-react";

import SpotlightCard from "@/components/animation/spotlight-card";
import { HeroHeader } from "@/components/hero-header";
import { Cta } from "@/feature/cta";
import { QuoteForm } from "@/feature/forms/quote-form";
import { FaqSection } from "@/feature/home/sections/faq";

export default function QuotePage() {
  const features = [
    {
      title: "All-In-One Logistics",
      description:
        "Integrated land, air, and sea freight services with warehousing and customs support.",
      icon: IconPackage,
    },
    {
      title: "Fast Response Times",
      description:
        "Get detailed quotes within 24 hours, based on your exact shipment requirements.",
      icon: IconClock,
    },
    {
      title: "Expert Guidance",
      description:
        "Our team will guide you through customs, documentation, and cargo-specific needs.",
      icon: IconUsers,
    },
  ];

  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <header className="container grid grid-cols-3 gap-3 pt-20 pb-3">
        <HeroHeader
          className="col-span-2 mx-0 h-fit px-0 py-0 text-start"
          subtitle="Get a Quote"
          title={[
            { text: "Let's Move Your Cargo –" },
            {
              text: "Fast, Safe, and Smart",
              className: "text-secondary",
            },
          ]}
          titleClassName="text-[4rem]/18 mb-6 max-w-lg"
          description="Get a personalized logistics quote from Maxline Global. Whether it's land, air, or sea freight, our team will provide you with a tailored, cost-effective solution that fits your schedule, cargo type, and destination. Start your journey with a trusted logistics partner today."
          isLogo={false}
        />
      </header>

      <QuoteForm />
      <section className="container">
        <h2 className="font-grotesk text-brand-dark pt-20 pb-9 text-center text-6xl">
          What sets us apart
        </h2>
        <ul className="grid grid-cols-3 gap-3">
          {features.map((item) => (
            <SpotlightCard
              key={item.title}
              spotlightColor="rgba(0, 200, 255, 0.3)"
              className="overflow-hidden rounded-xl bg-white p-10"
            >
              <div className="bg-muted flex size-20 items-center justify-center rounded-full">
                <item.icon className="text-brand-gray size-12 stroke-[1.5]" />
              </div>
              <h5 className="font-grotesk text-brand-dark mt-12 mb-3 text-4xl">
                {item.title}
              </h5>
              <p>{item.description}</p>
            </SpotlightCard>
          ))}
        </ul>
      </section>
      <FaqSection />

      <Cta />
    </main>
  );
}
