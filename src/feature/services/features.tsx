import { StaggeredText } from "@/components/animation/staggered-text";
import { Separator } from "@/components/ui/separator";

import { FeaturesProps } from "./types/types";

export const Features = ({ overview, features }: FeaturesProps) => {
  return (
    <>
      <section
        aria-labelledby="overview-title"
        className="container grid grid-cols-1 gap-3 py-8 md:grid-cols-5 md:py-12"
        id="overview"
        itemScope
        itemType="https://schema.org/Service"
      >
        <h2
          className="font-grotesk text-4xl text-brand-dark tracking-tight md:col-span-2 md:text-6xl/16"
          id="overview-title"
          itemProp="name"
        >
          <StaggeredText text={overview.title} />
        </h2>
        <p
          className="col-span-1 font-light text-xl leading-normal md:col-span-3 md:pl-9 md:text-2xl"
          itemProp="description"
        >
          <StaggeredText text={overview.description} />
        </p>
      </section>
      <div className="container">
        <Separator />
      </div>
      <section
        aria-labelledby="features-title"
        className="container relative grid grid-cols-1 gap-8 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20"
        id="features"
      >
        <div className="h-fit lg:sticky lg:top-[20vh]">
          <h3 className="mb-4 text-3xl text-brand-dark md:text-5xl/16 lg:mb-6" id="features-title">
            <StaggeredText text={features.title} />
          </h3>
          <p className="text-balance font-light text-brand-gray text-lg leading-snug md:text-xl">
            <StaggeredText text={features.description} />
          </p>
        </div>
        <ul
          className="flex flex-col divide-y divide-secondary"
          itemScope
          itemType="https://schema.org/ItemList"
          role="list"
        >
          {features.items.map((item, index) => (
            <li
              className="py-8 first:pt-0 md:py-16"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
              key={index}
            >
              <meta content={String(index + 1)} itemProp="position" />
              <h4 className="mb-3 font-grotesk text-2xl text-secondary md:mb-4 md:text-3xl" itemProp="name">
                <StaggeredText text={item.title} />
              </h4>
              <p className="text-balance font-light text-xl leading-snug md:text-2xl" itemProp="description">
                <StaggeredText text={item.description} />
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
