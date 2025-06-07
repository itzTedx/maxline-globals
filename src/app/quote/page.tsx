import { HeroHeader } from "@/components/hero-header";

export default function QuotePage() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <header className="container grid grid-cols-3 gap-3 py-20">
        <HeroHeader
          className="sticky top-[20vh] z-10 col-span-2 mx-0 h-fit px-0 py-0 text-start"
          subtitle="Get a Quote"
          title={[
            { text: "Let’s Move Your Cargo –" },
            {
              text: "Fast, Safe, and Smart",
              className: "text-secondary",
            },
          ]}
          titleClassName="text-[4rem]/18 mb-6 max-w-lg"
          description="Get a personalized logistics quote from Maxline Global. Whether it’s land, air, or sea freight, our team will provide you with a tailored, cost-effective solution that fits your schedule, cargo type, and destination. Start your journey with a trusted logistics partner today."
          isLogo={false}
        />
      </header>
    </main>
  );
}
