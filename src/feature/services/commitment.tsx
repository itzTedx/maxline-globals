import { XIcon } from "@/assets/x-icon";

export const Commitment = () => {
  return (
    <section className="container" itemScope itemType="https://schema.org/Organization">
      <div className="relative overflow-hidden rounded-3xl bg-brand-dark px-6 py-16 text-center text-background sm:px-12 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-32">
        <h5
          className="relative z-10 mb-4 font-grotesk text-3xl sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl"
          itemProp="name"
        >
          Your Cargo. Our Commitment.
        </h5>
        <p
          className="relative z-10 font-light text-xl leading-snug sm:text-2xl md:text-3xl lg:text-4xl"
          itemProp="description"
        >
          With decades of experience and a deep understanding of the region&apos;s logistics landscape,{" "}
          <span className="text-primary" itemProp="name">
            Maxline Global
          </span>{" "}
          is your trusted partner for road freight services. From single shipments to ongoing distribution needs, we
          move your business forward—on time, every time.
        </p>
        <XIcon aria-hidden="true" className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 opacity-60" />
      </div>
    </section>
  );
};
