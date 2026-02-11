import Link from "next/link";
import Script from "next/script";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

type Faq = {
	question: string;
	answer: string;
};

export const Faqs = () => {
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
			className="relative py-10 md:py-20"
			itemScope
			itemType="https://schema.org/FAQPage"
		>
			<Script id="faq-schema" type="application/ld+json">
				{JSON.stringify(faqSchema)}
			</Script>

			<div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-card px-4 py-12 md:px-0">
				<div
					className="relative z-10 mx-auto max-w-2xl"
					itemProp="mainEntity"
					itemScope
					itemType="https://schema.org/Question"
				>
					<h2
						className="font-display font-semibold text-3xl text-primary uppercase md:text-4xl"
						id="faq-heading"
					>
						<StaggeredText
							duration={0.5}
							staggerChildren={0.02}
							text={t("faq.title")}
						/>
					</h2>
					<Accordion collapsible defaultValue={faqs[0].question} type="single">
						{faqs.map((item: Faq, idx: number) => (
							<AccordionItem
								className="border-border/50 md:py-2"
								itemProp="mainEntity"
								itemScope
								itemType="https://schema.org/Question"
								key={`${idx + 1}-faq`}
								value={item.question}
							>
								<AccordionTrigger
									className="cursor-pointer py-2 font-medium text-base hover:no-underline md:text-lg"
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
					<Button asChild className="mt-3" variant="secondary">
						<Link href="/contact">
							Get Started <IconArrowRightTag className="ml-4" />
						</Link>
					</Button>
				</div>
				<video
					autoPlay
					className="absolute inset-x-0 bottom-0 aspect-video w-full object-cover object-center opacity-20"
					loop
					muted
					playsInline
					preload="auto"
					src="/videos/faq-bg.webm"
				/>
			</div>
			<div className="absolute inset-0 bg-linear-to-b from-secondary" />
		</section>
	);
};
