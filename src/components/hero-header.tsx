import { XIcon } from "@/assets/x-icon";
import { StaggeredText } from "@/components/animation/staggered-text";

interface HeroHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
}

export function HeroHeader({ title, description, subtitle }: HeroHeaderProps) {
  return (
    <section
      className="relative container py-20 text-center"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10">
        {subtitle && (
          <p className="text-secondary z-10 text-2xl" role="doc-subtitle">
            {subtitle}
          </p>
        )}
        <h1
          id="hero-title"
          className="font-grotesk text-brand-dark relative z-10 mb-3 text-8xl/26 tracking-tight"
        >
          <StaggeredText text={title} staggerChildren={0.03} duration={0.7} />
        </h1>
        {description && (
          <p
            className="text-brand-gray mb-16 text-xl font-light text-balance"
            role="doc-subtitle"
          >
            <StaggeredText
              text={description}
              staggerChildren={0.03}
              duration={0.7}
            />
          </p>
        )}
      </div>
      <XIcon
        className="absolute top-1/2 left-1/2 -translate-1/2 opacity-60"
        aria-hidden="true"
      />
    </section>
  );
}
