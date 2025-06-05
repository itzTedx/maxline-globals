import Image from "next/image";
import Link from "next/link";

import { IconArrowDown } from "@tabler/icons-react";

import { XIcon } from "@/assets/x-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlogsCarousel } from "@/feature/blogs/blogs-carousel";
import { Cta } from "@/feature/cta";

const listItems = [
  {
    title: "World-Wide Network",
    description:
      "We operate an extensive land transport network connecting the UAE with Saudi Arabia, Oman, Kuwait, Bahrain, and Qatar, United Kingdom.",
  },
  {
    title: "FTL & LTL Services",
    description:
      "Flexible shipping options tailored to the size and urgency of your cargo.",
  },
  {
    title: "Oversized & Project Cargo Expertise",
    description:
      "Equipped to handle out-of-gauge, heavy lift, and high-value cargo with precision and care.",
  },
  {
    title: "GPS-Enabled Vehicles",
    description: "Real-time tracking and visibility throughout the journey.",
  },
  {
    title: "Customs Bonded Transport",
    description:
      "Smooth cross-border movements with proper documentation and compliance.",
  },
  {
    title: "Hazardous Goods Handling",
    description:
      "Certified to transport chemical and reefer cargo safely and in accordance with international regulations.",
  },
];

export const metadata = {
  title: "Land Freight Services | Maxline Global",
  description:
    "Efficient land freight solutions across the GCC—FTL, LTL, and oversized cargo delivered with speed and reliability.",
};

export default function ServicePage() {
  return (
    <main
      className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl"
      aria-labelledby="page-title"
    >
      <header
        className="relative -mt-20 grid min-h-[70svh] grid-cols-2 overflow-hidden bg-white"
        role="banner"
      >
        <div className="container flex flex-col items-start justify-between pt-40 pb-20">
          <div className="space-y-6">
            <h1
              id="page-title"
              className="font-grotesk text-brand-dark text-6xl"
            >
              Land Freight Services
            </h1>
            <p className="text-brand-gray text-2xl font-light">
              Efficient land freight across the GCC—FTL, LTL, and oversized
              cargo delivered with speed and reliability.
            </p>
          </div>
          <Button asChild size="btnIcon">
            <Link href="/quote" className="text-brand-dark gap-3">
              Learn More
              <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
                <IconArrowDown />
              </div>
            </Link>
          </Button>
        </div>
        <div className="absolute -right-20 -bottom-32">
          <Image
            src="/images/truck-full.png"
            alt="Maxline Global's modern freight truck representing our land freight capabilities"
            height={626}
            width={816}
            className="object-contain"
            priority
          />
        </div>
      </header>
      <section
        className="container grid grid-cols-3 gap-3 py-12"
        aria-labelledby="overview-title"
      >
        <h2
          id="overview-title"
          className="text-brand-dark font-grotesk text-6xl/16 tracking-tight"
        >
          Reliable Land Freight Solutions Across the GCC
        </h2>
        <p className="col-span-2 pl-9 text-2xl leading-normal font-light">
          At Maxline Global, we specialize in providing seamless, cost-effective
          land freight services across the GCC and surrounding regions. Whether
          it’s full truckload (FTL), less-than-truckload (LTL), or oversized
          cargo, our road transport solutions are designed to deliver speed,
          safety, and reliability every mile of the way.
        </p>
      </section>
      <div className="container">
        <Separator />
      </div>{" "}
      <section
        className="relative container grid grid-cols-2 gap-20 py-20"
        aria-labelledby="features-title"
      >
        <div className="sticky top-[20vh] h-fit">
          <h3 id="features-title" className="text-brand-dark mb-6 text-5xl/16">
            Why Choose Maxline for Land Freight?
          </h3>
          <p className="text-2xl leading-snug font-light">
            Maxline Global offers flexible and secure land freight solutions
            across the GCC, including FTL, LTL, and project cargo. Our
            GPS-enabled fleet, bonded transport capabilities, and certified
            handling of hazardous goods ensure safe, compliant, and efficient
            deliveries across borders.
          </p>
        </div>
        <ul className="divide-secondary flex flex-col divide-y" role="list">
          {listItems.map((item, index) => (
            <li className="py-12 first:pt-0" key={index}>
              <h4 className="text-brand-dark mb-4 text-3xl">{item.title}</h4>
              <p className="text-2xl leading-snug font-light text-balance">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container">
        <div className="bg-brand-dark text-background relative rounded-3xl px-24 py-32 text-center">
          <h5 className="font-grotesk relative z-10 mb-6 text-5xl">
            Your Cargo. Our Commitment.
          </h5>
          <p className="relative z-10 text-4xl leading-snug font-light">
            With decades of experience and a deep understanding of the region’s
            logistics landscape,{" "}
            <span className="text-primary">Maxline Global</span> is your trusted
            partner for road freight services. From single shipments to ongoing
            distribution needs, we move your business forward—on time, every
            time.
          </p>
          <XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        </div>
      </section>
      <BlogsCarousel />
      <Cta />
    </main>
  );
}
