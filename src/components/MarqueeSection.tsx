"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

import SimpleMarquee from "@/components/animation/simple-marquee";

export type ServiceMessages = {
  industriesTitle?: string;
  industries?: string[];
};

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-1 cursor-pointer duration-300 ease-in-out hover:scale-105 md:mx-2.5">
    {children}
  </div>
);

export default function MarqueeSection({
  industries,
  messages,
  serviceKey,
}: {
  industries: { title: string; image: string }[];
  messages: Record<string, ServiceMessages>;
  serviceKey: string;
}) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRTL = locale === "ar";
  return (
    <section className="relative overflow-hidden pb-10 md:pb-20">
      <h3 className="font-grotesk text-brand-dark container mb-8 text-4xl md:mb-12 md:text-6xl">
        {messages[serviceKey]?.industriesTitle ||
          "Industries we move the Maxline Global way"}
      </h3>
      <SimpleMarquee
        className="w-full"
        baseVelocity={4}
        repeat={4}
        draggable
        scrollSpringConfig={{ damping: 50, stiffness: 400 }}
        slowDownFactor={0.1}
        slowdownOnHover
        slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
        scrollAwareDirection={true}
        useScrollVelocity={true}
        direction={isRTL ? "right" : "left"}
      >
        {industries.map((item, i) => (
          <MarqueeItem key={i}>
            <div
              className="text-background font-grotesk relative aspect-4/3 h-60 overflow-hidden rounded-2xl p-6 text-2xl md:h-80 md:p-9 md:text-4xl"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              <h4 className="relative z-20 flex h-full items-end">
                {
                  (
                    (messages[serviceKey] as Record<string, unknown>)
                      ?.industries as string[]
                  )[i]
                }
              </h4>
              <div className="from-secondary/80 absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent" />
              <div className="bg-secondary absolute inset-0 z-10 mix-blend-hue" />
              <Image
                src={item.image}
                alt={
                  (
                    (messages[serviceKey] as Record<string, unknown>)
                      ?.industries as string[]
                  )[i]
                }
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={i < 2 ? "eager" : "lazy"}
                priority={i < 2}
              />
            </div>
          </MarqueeItem>
        ))}
      </SimpleMarquee>
    </section>
  );
}
