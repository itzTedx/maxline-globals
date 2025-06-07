import { StaggeredText } from "@/components/animation/staggered-text";

export const WhoWeAre = () => {
  return (
    <section className="container grid grid-cols-3 gap-6 py-20">
      <h2 className="font-grotesk text-brand-dark max-w-xs text-6xl/18">
        <StaggeredText text="What we do?" />
      </h2>
      <p className="text-brand-gray col-span-2 text-3xl leading-normal font-light tracking-tight text-balance">
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
