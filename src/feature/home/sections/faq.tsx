"use client";

import { memo, useRef } from "react";

import Image from "next/image";
import Script from "next/script";

import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Faq = {
  question: string;
  answer: string;
};

export const FaqSection = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Add clipPath animation for centered rectangle reveal
  const clipPath = useTransform(scrollYProgress, [0, 0.25], ["inset(50% 50% 50% 50%)", "inset(0% 0% 0% 0%)"]);

  const t = useTranslations("HomePage");
  const faqs: Faq[] = t.raw ? t.raw("faqList") : [];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: Faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="container z-10 grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:gap-20 md:py-20"
      itemScope
      itemType="https://schema.org/FAQPage"
      ref={containerRef}
    >
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <div className="h-fit space-y-6 md:sticky md:top-[15vh] md:space-y-8">
        <h2 className="font-grotesk text-3xl text-brand-dark md:text-5xl" id="faq-heading">
          <StaggeredText duration={0.5} staggerChildren={0.02} text={t("faq.title")} />
        </h2>
        <motion.div
          className="relative aspect-video overflow-hidden rounded-2xl rtl:hidden"
          itemProp="image"
          style={{ clipPath }}
        >
          <Image
            alt="FAQ"
            className="object-cover"
            fill
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/images/faq.webp"
          />
        </motion.div>
        <motion.div
          className="relative aspect-video overflow-hidden rounded-2xl ltr:hidden"
          itemProp="image"
          style={{ clipPath }}
        >
          <Image
            alt="FAQ"
            className="object-cover"
            fill
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/images/faq-rtl.webp"
          />
        </motion.div>
        <p className="font-light text-brand-gray text-lg md:text-xl" itemProp="description">
          <StaggeredText duration={0.5} staggerChildren={0.02} text={t("faq.description")} />
        </p>
      </div>
      <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
        <Accordion className="w-full divide-y divide-secondary/50" type="multiple">
          {faqs.map((item: Faq, idx: number) => (
            <AccordionItem
              className="py-3 md:py-4"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
              key={`${idx + 1}-faq`}
              value={item.question}
            >
              <AccordionTrigger
                className="cursor-pointer py-2 font-normal text-base hover:no-underline md:text-lg"
                itemProp="name"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className="pb-2 font-light text-base text-muted-foreground md:text-lg"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{item.answer}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});

FaqSection.displayName = "FaqSection";
