import Image from "next/image";
import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { TransportTypes } from "@/assets/transport-types";
import { XIcon } from "@/assets/x-icon";
import Letter3DSwap from "@/components/animation/letter-3d-swap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FAQS, SERVICES } from "@/constants";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <header className="py-20" role="banner">
        <h1 className="text-brand-dark font-grotesk mx-auto max-w-5xl px-3 text-center text-8xl tracking-tight">
          Delivering Excellence Across{" "}
          <span className="text-secondary">Land, Air, and Sea</span>
        </h1>

        <div className="relative mx-auto my-8 max-w-md">
          <Input
            id="track"
            aria-label="Track your shipment"
            className="pe-9 shadow-none"
            placeholder="Track your shipment"
            type="text"
          />
          <button
            className="text-brand-dark bg-primary hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-1/2 end-1.5 flex size-9 -translate-y-1/2 items-center justify-center rounded transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Track Shipment"
          >
            <IconArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <Image
          src="/images/container.png"
          alt="Container ship docked at a port representing Maxline Global's sea freight services"
          height={580}
          width={1920}
          className="object-contain"
          priority
          loading="eager"
        />
      </header>

      <section
        className="relative container grid grid-cols-2 gap-9 pb-20"
        aria-labelledby="solutions-heading"
      >
        <h2
          id="solutions-heading"
          className="text-brand-dark font-grotesk text-6xl tracking-tight text-balance"
        >
          Reliable Logistics Solutions
          <span className="text-secondary"> Across the Globe</span>
        </h2>
        <p className="text-brand-gray text-2xl leading-relaxed font-light text-balance">
          At Maxline Global, we connect businesses to markets across the world.
          With our comprehensive logistics solutions and commitment to service
          excellence, we ensure your cargo moves with speed, safety, and
          precision.
        </p>
        <div className="absolute -bottom-12 -left-1/2 aspect-video h-[831px] translate-x-20">
          <Image
            src="/images/maxline-plane.png"
            fill
            alt="Cargo plane representing Maxline Global's air freight capabilities"
            quality={85}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className="col-start-2 flex items-center justify-center">
          <TransportTypes />
        </div>
      </section>

      <section
        className="container max-w-7xl py-20"
        aria-labelledby="services-heading"
      >
        <video
          width="1920"
          height="1080"
          controls={false}
          muted
          preload="true"
          autoPlay
          playsInline
          className="mb-20 overflow-hidden rounded-2xl"
        >
          <source src="/videos/maxline-web.webm" type="video/webm" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <h2
          id="services-heading"
          className="mx-auto max-w-2xl pb-20 text-center text-6xl font-medium tracking-tight text-balance text-[#5C5E70]"
        >
          Integrated freight solutions tailored to your{" "}
          <span className="text-secondary">exact specifications.</span>
        </h2>
        <ul className="grid grid-cols-2 gap-3">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className={cn(
                "bg-input first:bg-brand-dark first:text-background hover:bg-brand-dark/90 hover:text-background text-brand-dark",
                "group relative transition-colors",
                "overflow-hidden",
                "col-span-2 flex items-center justify-between gap-3 last:col-span-1 nth-last-[2]:col-span-1",
                "rounded-md px-16 py-20"
              )}
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-semibold">{service.title}</h3>
                <p className="text-primary">{service.description}</p>
              </div>
              <Button asChild size="icon" variant="icon" className="z-10">
                <Link href={service.href}>
                  <IconArrowRight className="siz-4" />
                </Link>
              </Button>
              <div
                aria-hidden
                className={cn(
                  "from-primary absolute z-0 size-52 rounded-full bg-radial to-transparent blur-2xl",
                  "top-1/2 left-3/4 translate-x-1/2 -translate-y-1/2 group-last:left-1/2 group-nth-last-[2]:left-1/2"
                )}
              />
            </li>
          ))}
        </ul>

        <div className="relative flex flex-col items-center gap-4">
          <Letter3DSwap
            mainClassName="font-grotesk z-10 pt-20 text-center text-8xl"
            frontFaceClassName={`bg-background text-secondary`}
            secondFaceClassName={`bg-background text-secondary`}
            rotateDirection="top"
            staggerDuration={0.03}
            staggerFrom="first"
            as={"h3"}
            transition={{ type: "spring", damping: 25, stiffness: 160 }}
          >
            Logistics Without Limits
          </Letter3DSwap>

          <p className="text-brand-gray z-10 mx-auto max-w-3xl pb-12 text-center text-2xl font-light tracking-tight text-pretty">
            Our tailored freight solutions are engineered to meet the demands of
            modern trade - ensuring every shipment arrives on time, on budget,
            and without compromise.
          </p>

          <Button asChild size="btnIcon">
            <Link href="/login" className="text-brand-dark z-10">
              Explore More
              <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
                <IconArrowRight />
              </div>
            </Link>
          </Button>

          <XIcon className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-60" />
        </div>
      </section>

      <section
        className="z-10 container grid grid-cols-2 gap-9 py-20"
        aria-labelledby="faq-heading"
      >
        <div className="sticky top-[20vh] h-fit space-y-8">
          <h2
            id="faq-heading"
            className="font-grotesk text-brand-dark text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <div className="bg-brand-gray/10 aspect-video"></div>
          <p className="text-brand-gray text-xl font-light">
            Discover quick answers to the questions our clients ask most. From
            shipment tracking to specialized cargo handling, our FAQ section
            covers everything you need to know about Maxline Global&apos;s
            services, capabilities, and commitment to smooth, secure, and
            on-time delivery.
          </p>
        </div>
        <div className="z-10">
          <Accordion
            type="multiple"
            className="divide-secondary/50 w-full divide-y"
          >
            {FAQS.map((item) => (
              <AccordionItem value={item.title} key={item.id} className="py-4">
                <AccordionTrigger className="cursor-pointer py-2 text-lg font-normal hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-2 text-lg font-light">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
