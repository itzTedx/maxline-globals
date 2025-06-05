import Image from "next/image";

import { HeroHeader } from "@/components/hero-header";

export default function ContactPage() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <section className="container grid grid-cols-2 gap-4">
        <HeroHeader
          className="sticky top-[10vh] h-fit px-0 text-start"
          subtitle="Contact us"
          title={[
            { text: "Let’s Move Your Business" },
            {
              text: "Forward,",
              className: "text-secondary",
            },
            { text: "Together" },
          ]}
          titleClassName="text-[4rem]/18 mb-6"
          description="Get in touch to start a logistics project, explore partnership opportunities, or learn how Maxline Global delivers supply chain solutions with precision, speed, and care. We're here to support your business - every step of the way."
          isLogo={false}
        />
        <div className="bg-red-300">
          <div className="min-h-screen"></div>
          <div className="min-h-screen"></div>
          <div className="min-h-screen"></div>
        </div>
      </section>
      <div className="relative my-20 h-72 w-full">
        <Image
          src="/images/contact-container.webp"
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </main>
  );
}
