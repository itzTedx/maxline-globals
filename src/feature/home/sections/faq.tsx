import Script from "next/script";

import { StaggeredText } from "@/components/animation/staggered-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

export const FaqSection = () => {
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
      className="z-10 container grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:gap-9 md:py-20"
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
          Frequently Asked Questions
        </h2>
        <div className="bg-brand-gray/10 aspect-video"></div>
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
