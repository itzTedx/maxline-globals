import { XIcon } from "@/assets/x-icon";

export const LeaderWords = () => {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="bg-brand-dark text-background relative space-y-6 overflow-hidden rounded-3xl px-12 py-16 text-center md:px-16 md:py-20 lg:px-24 lg:py-32">
        <p className="font-grotesk relative z-10 text-2xl text-balance md:text-3xl lg:text-4xl/12">
          In a world where delays and cost overruns are common, Maxline Global
          Logistics delivers with precision.{" "}
          <span className="text-primary">
            We commit to timelines and budgets—and we deliver.
          </span>{" "}
          This promise drives how we train our teams, apply smart logistics
          technology, and serve clients worldwide.
        </p>
        <div className="text-primary relative z-10 flex items-center justify-center gap-4">
          <div className="bg-accent size-10 rounded-full md:size-12"></div>
          <p className="text-primary text-lg font-semibold uppercase md:text-xl">
            Saji Thomas, CFO
          </p>
        </div>
        <XIcon className="absolute top-1/2 left-1/2 -translate-1/2 -translate-x-1/2 opacity-60" />
      </div>
    </section>
  );
};
