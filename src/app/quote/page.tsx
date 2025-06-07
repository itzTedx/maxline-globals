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
      <header className="container grid grid-cols-1 gap-3 pb-3 md:grid-cols-3">
        <HeroHeader
          className="col-span-1 mx-0 px-0 py-0 text-start md:col-span-2"
          subtitle="Get a Quote"
          title={[
            { text: "Let's Move Your Cargo –" },
            {
              text: "Fast, Safe, and Smart",
              className: "text-secondary",
            },
          ]}
          titleClassName="text-3xl lg:text-[4.5rem] mb-6 max-w-xl"
          description="Get a personalized logistics quote from Maxline Global. Whether it's land, air, or sea freight, our team will provide you with a tailored, cost-effective solution that fits your schedule, cargo type, and destination. Start your journey with a trusted logistics partner today."
          isLogo={false}
        />
      </header>

      <QuoteForm />
      <section className="container">
        <h2 className="font-grotesk text-brand-dark pt-10 pb-6 text-center text-4xl md:pt-20 md:pb-9 md:text-6xl">
          What sets us apart
        </h2>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <SpotlightCard
              key={item.title}
              spotlightColor="rgba(0, 200, 255, 0.3)"
              className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
            >
              <div className="bg-muted flex size-16 items-center justify-center rounded-full md:size-20">
                <item.icon className="text-brand-gray size-10 stroke-[1.5] md:size-12" />
              </div>
              <h5 className="font-grotesk text-brand-dark mt-8 mb-3 text-2xl md:mt-12 md:text-4xl">
                {item.title}
              </h5>
              <p className="text-sm md:text-base">{item.description}</p>
            </SpotlightCard>
          ))}
        </ul>
      </section>
      <FaqSection />

      <Cta />
    </main>
  );
}
