import { XIcon } from "@/assets/x-icon";

export const Commitment = () => {
  return (
    <section className="container">
      <div className="bg-brand-dark text-background relative rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-32">
        <h5 className="font-grotesk relative z-10 mb-4 text-3xl sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl">
          Your Cargo. Our Commitment.
        </h5>
        <p className="relative z-10 text-xl leading-snug font-light sm:text-2xl md:text-3xl lg:text-4xl">
          With decades of experience and a deep understanding of the
          region&apos;s logistics landscape,{" "}
          <span className="text-primary">Maxline Global</span> is your trusted
          partner for road freight services. From single shipments to ongoing
          distribution needs, we move your business forward—on time, every time.
        </p>
        <XIcon className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 opacity-60 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56" />
      </div>
    </section>
  );
};
