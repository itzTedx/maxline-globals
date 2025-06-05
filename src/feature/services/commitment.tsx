import { XIcon } from "@/assets/x-icon";

export const Commitment = () => {
  return (
    <section className="container">
      <div className="bg-brand-dark text-background relative rounded-3xl px-24 py-32 text-center">
        <h5 className="font-grotesk relative z-10 mb-6 text-5xl">
          Your Cargo. Our Commitment.
        </h5>
        <p className="relative z-10 text-4xl leading-snug font-light">
          With decades of experience and a deep understanding of the region’s
          logistics landscape,{" "}
          <span className="text-primary">Maxline Global</span> is your trusted
          partner for road freight services. From single shipments to ongoing
          distribution needs, we move your business forward—on time, every time.
        </p>
        <XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
      </div>
    </section>
  );
};
