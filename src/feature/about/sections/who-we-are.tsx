import { StaggeredText } from "@/components/animation/staggered-text";

export const WhoWeAre = () => {
  return (
    <section className="container grid gap-4 py-12 md:grid-cols-3 md:gap-6 md:py-14 lg:py-20">
      <h2 className="font-grotesk text-brand-dark text-3xl md:max-w-xs md:text-5xl lg:text-6xl/18">
        <StaggeredText text="What we do?" />
      </h2>
      <p className="text-brand-gray text-xl leading-normal font-light tracking-tight text-balance md:col-span-2 md:text-2xl lg:text-3xl">
        <StaggeredText text="At" delay={0.2} />
        <StaggeredText
          text="Maxline global"
          delay={0.25}
          className="text-secondary"
        />
        <StaggeredText
          text="logistics solutions, our mission is to provide exceptional logistics services to our clients, enabling them to streamline their supply chain and focus on their core business operations. We have been serving our clients with top-notch freight forwarding end-to-end service from its inception."
          delay={0.3}
        />
      </p>
    </section>
  );
};
