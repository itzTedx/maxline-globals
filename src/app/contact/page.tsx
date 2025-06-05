import Image from "next/image";

import { XIcon } from "@/assets/x-icon";
import { HeroHeader } from "@/components/hero-header";

export default function ContactPage() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <section className="container grid grid-cols-2 gap-4 py-20">
        <HeroHeader
          className="sticky top-[20vh] z-10 h-fit px-0 py-0 text-start"
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
        <div className="relative space-y-9">
          <div className="relative overflow-hidden rounded-2xl p-12">
            <div className="relative z-10">
              <h2 className="text-primary mb-2 text-2xl">
                Corporate Headquarters
              </h2>
              <p className="text-2xl font-medium text-white">
                P.O. Box: 232939, Jebel Ali Free Zone,
                <br />
                Dubai, United Arab Emirates.
              </p>
            </div>
            <Image
              src="/images/head-office.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl p-12">
            <div className="relative z-10">
              <h2 className="text-primary mb-2 text-2xl">Branch Office</h2>
              <p className="text-2xl font-medium text-white">
                33, 6A Street, Ras Al khor Industrial Area - 2, Dubai, United
                Arab Emirates.
              </p>
            </div>
            <Image
              src="/images/head-office.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <form className="min-h-screen"></form>

          <XIcon className="absolute right-0 bottom-0" />
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
