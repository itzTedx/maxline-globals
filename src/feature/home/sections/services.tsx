import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { XIcon } from "@/assets/x-icon";
import Letter3DSwap from "@/components/animation/letter-3d-swap";
import SpotlightCard from "@/components/animation/spotlight-card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/constants";
import { cn } from "@/lib/utils";

export const ServicesSection = () => {
  return (
    <section
      className="container max-w-7xl py-20"
      aria-labelledby="services-heading"
    >
      <div className="relative">
        <video
          width="1920"
          height="1080"
          controls={false}
          muted
          preload="true"
          autoPlay
          playsInline
          className="relative z-10 mb-20 overflow-hidden rounded-2xl border"
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
        <video
          width="1920"
          height="1080"
          controls={false}
          muted
          preload="true"
          autoPlay
          playsInline
          className="absolute inset-0 mb-20 rounded-2xl blur-3xl"
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
      </div>

      <h2
        id="services-heading"
        className="mx-auto max-w-2xl pb-20 text-center text-6xl font-medium tracking-tight text-balance text-[#5C5E70]"
      >
        Integrated freight solutions tailored to your{" "}
        <span className="text-secondary">exact specifications.</span>
      </h2>
      <ul className="grid grid-cols-2 gap-3">
        {SERVICES.map((service) => (
          <SpotlightCard
            spotlightColor="rgba(0, 200, 255, 0.5)"
            key={service.title}
            className={cn(
              "bg-input first:bg-brand-dark first:text-background text-brand-dark",
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
          </SpotlightCard>
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
          modern trade - ensuring every shipment arrives on time, on budget, and
          without compromise.
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
  );
};
