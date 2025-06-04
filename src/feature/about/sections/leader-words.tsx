import { XIcon } from "@/assets/x-icon";

export const LeaderWords = () => {
  return (
    <section className="container py-20">
      <div className="bg-brand-dark text-background relative space-y-6 overflow-hidden rounded-3xl px-24 py-32 text-center">
        <p className="font-grotesk relative z-10 text-4xl/12 text-balance">
          In a world where delays and cost overruns are common, Maxline Global
          Logistics delivers with precision.{" "}
          <span className="text-primary">
            We commit to timelines and budgets—and we deliver.
          </span>{" "}
          This promise drives how we train our teams, apply smart logistics
          technology, and serve clients worldwide.
        </p>
        <div className="text-primary relative z-10 flex items-center justify-center gap-4">
          <div className="bg-accent size-12 rounded-full"></div>
          <p className="text-primary text-xl font-semibold uppercase">
            Saji Thomas, CFO
          </p>
        </div>
        <XIcon className="absolute top-1/2 left-1/2 -translate-1/2 -translate-x-1/2 opacity-60" />
      </div>
    </section>
  );
};
