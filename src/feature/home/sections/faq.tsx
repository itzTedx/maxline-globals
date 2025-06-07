"use client";

import Image from "next/image";
import Script from "next/script";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { StaggeredText } from "@/components/animation/staggered-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

export const FaqSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Add clipPath animation for centered rectangle reveal
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["inset(50% 50% 50% 50%)", "inset(0% 0% 0% 0%)"]
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    })),
  };

  return (
    <section
      ref={containerRef}
      className="z-10 container grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:gap-20 md:py-20"
      aria-labelledby="faq-heading"
    >
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="h-fit space-y-6 md:sticky md:top-[15vh] md:space-y-8">
        <h2
          id="faq-heading"
          className="font-grotesk text-brand-dark text-3xl md:text-5xl"
        >
          <StaggeredText text="Frequently Asked Questions" />
        </h2>
        <motion.div
          style={{ clipPath }}
          className="relative aspect-video overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/faq.webp"
            alt="FAQ"
            className="object-cover"
            fill
          />
        </motion.div>
        <p className="text-brand-gray text-lg font-light md:text-xl">
          <StaggeredText
            text="Discover quick answers to the questions our clients ask most. From shipment tracking to specialized cargo handling, our FAQ section covers everything you need to know about Maxline Global's services, capabilities, and commitment to smooth, secure, and on-time delivery."
            staggerChildren={0.03}
            duration={0.7}
          />
        </p>
      </div>
      <div className="z-10">
        <Accordion
          type="multiple"
          className="divide-secondary/50 w-full divide-y"
        >
          {FAQS.map((item) => (
            <AccordionItem
              value={item.title}
              key={item.id}
              className="py-3 md:py-4"
            >
              <AccordionTrigger className="cursor-pointer py-2 text-base font-normal hover:no-underline md:text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-2 text-base font-light md:text-lg">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
