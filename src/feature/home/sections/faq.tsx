"use client";

import Image from "next/image";
import Script from "next/script";
import { memo, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

export const FaqSection = memo(() => {
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
  const t = useTranslations("HomePage");

  return (
    <section
      ref={containerRef}
      className="z-10 container grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:gap-20 md:py-20"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
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
          <StaggeredText
            text={t("faq.title")}
            staggerChildren={0.02}
            duration={0.5}
          />
        </h2>
        <motion.div
          style={{ clipPath }}
          className="relative aspect-video overflow-hidden rounded-2xl"
          itemProp="image"
        >
          <Image
            src="/images/faq.webp"
            alt="FAQ"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={75}
          />
        </motion.div>
        <p
          className="text-brand-gray text-lg font-light md:text-xl"
          itemProp="description"
        >
          <StaggeredText
            text={t("faq.description")}
            staggerChildren={0.02}
            duration={0.5}
          />
        </p>
      </div>
      <div
        itemProp="mainEntity"
        itemScope
        itemType="https://schema.org/Question"
      >
        <Accordion
          type="multiple"
          className="divide-secondary/50 w-full divide-y"
        >
          {FAQS.map((item) => (
            <AccordionItem
              value={item.title}
              key={item.id}
              className="py-3 md:py-4"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <AccordionTrigger
                className="cursor-pointer py-2 text-base font-normal hover:no-underline md:text-lg"
                itemProp="name"
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent
                className="text-muted-foreground pb-2 text-base font-light md:text-lg"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{item.content}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});

FaqSection.displayName = "FaqSection";
