import { Separator } from "@/components/ui/separator";

import { FeaturesProps } from "./types/types";

export const Features = ({ overview, features }: FeaturesProps) => {
  return (
    <>
      <section
        className="container grid grid-cols-3 gap-3 py-12"
        aria-labelledby="overview-title"
        id="overview"
      >
        <h2
          id="overview-title"
          className="text-brand-dark font-grotesk text-6xl/16 tracking-tight"
        >
          {overview.title}
        </h2>
        <p className="col-span-2 pl-9 text-2xl leading-normal font-light">
          {overview.description}
        </p>
      </section>
      <div className="container">
        <Separator />
      </div>
      <section
        className="relative container grid grid-cols-2 gap-20 py-20"
        aria-labelledby="features-title"
        id="features"
      >
        <div className="sticky top-[20vh] h-fit">
          <h3 id="features-title" className="text-brand-dark mb-6 text-5xl/16">
            {features.title}
          </h3>
          <p className="text-brand-gray text-xl leading-snug font-light text-balance">
            {features.description}
          </p>
        </div>
        <ul className="divide-secondary flex flex-col divide-y" role="list">
          {features.items.map((item, index) => (
            <li className="py-16 first:pt-0" key={index}>
              <h4 className="text-secondary font-grotesk mb-4 text-3xl">
                {item.title}
              </h4>
              <p className="text-2xl leading-snug font-light text-balance">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
