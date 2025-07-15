import { StaggeredText } from "@/components/animation/staggered-text";
import { Separator } from "@/components/ui/separator";

import { FeaturesProps } from "./types/types";

export const Features = ({ overview, features }: FeaturesProps) => {
  return (
    <>
      <section
        className="container grid grid-cols-1 gap-3 py-8 md:grid-cols-5 md:py-12"
        aria-labelledby="overview-title"
        id="overview"
        itemScope
        itemType="https://schema.org/Service"
      >
        <h2
          id="overview-title"
          className="text-brand-dark font-grotesk text-4xl tracking-tight md:col-span-2 md:text-6xl/16"
          itemProp="name"
        >
          <StaggeredText text={overview.title} />
        </h2>
        <p
          className="col-span-1 text-xl leading-normal font-light md:col-span-3 md:pl-9 md:text-2xl"
          itemProp="description"
        >
          <StaggeredText text={overview.description} />
        </p>
      </section>
      <div className="container">
        <Separator />
      </div>
      <section
        className="relative container grid grid-cols-1 gap-8 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20"
        aria-labelledby="features-title"
        id="features"
      >
        <div className="h-fit lg:sticky lg:top-[20vh]">
          <h3
            id="features-title"
            className="text-brand-dark mb-4 text-3xl md:text-5xl/16 lg:mb-6"
          >
            <StaggeredText text={features.title} />
          </h3>
          <p className="text-brand-gray text-lg leading-snug font-light text-balance md:text-xl">
            <StaggeredText text={features.description} />
          </p>
        </div>
        <ul
          className="divide-secondary flex flex-col divide-y"
          role="list"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {features.items.map((item, index) => (
            <li
              className="py-8 first:pt-0 md:py-16"
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <h4
                className="text-secondary font-grotesk mb-3 text-2xl md:mb-4 md:text-3xl"
                itemProp="name"
              >
                <StaggeredText text={item.title} />
              </h4>
              <p
                className="text-xl leading-snug font-light text-balance md:text-2xl"
                itemProp="description"
              >
                <StaggeredText text={item.description} />
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
