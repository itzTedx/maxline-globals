import Image from "next/image";

import { XIcon } from "@/assets/x-icon";
import { HeroHeader } from "@/components/hero-header";
import { ContactForm } from "@/feature/forms/contact-form";

export default function ContactPage() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <section className="container grid grid-cols-1 gap-4 py-10 md:py-20 lg:grid-cols-2">
        <HeroHeader
          className="z-10 h-fit px-0 py-0 text-start md:sticky md:top-[20vh]"
          subtitle="Contact us"
          title={[
            { text: "Let's Move Your Business" },
            {
              text: "Forward,",
              className: "text-secondary",
            },
            { text: "Together" },
          ]}
          titleClassName="text-3xl md:text-4xl lg:text-[4rem]/18 mb-6"
          description="Get in touch to start a logistics project, explore partnership opportunities, or learn how Maxline Global delivers supply chain solutions with precision, speed, and care. We're here to support your business - every step of the way."
          isLogo={false}
        />
        <div className="relative space-y-6 md:space-y-9">
          <div className="relative overflow-hidden rounded-2xl p-6 md:p-12">
            <div className="relative z-10">
              <h2 className="text-primary mb-1 text-xl md:text-2xl">
                Corporate Headquarters
              </h2>
              <p className="text-lg font-medium text-white md:text-2xl">
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
          <div className="relative overflow-hidden rounded-2xl p-6 md:p-12">
            <div className="relative z-10">
              <h2 className="text-primary mb-1 text-xl md:text-2xl">
                Branch Office
              </h2>
              <p className="text-lg font-medium text-white md:text-2xl">
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
          <ContactForm />

          <XIcon className="absolute right-0 -bottom-1/4 hidden -translate-y-1/4 md:block" />
        </div>
      </section>
      <div className="relative my-10 h-48 w-full md:my-20 md:h-72">
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
