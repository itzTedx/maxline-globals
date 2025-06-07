import { XIcon } from "@/assets/x-icon";
import { StaggeredText } from "@/components/animation/staggered-text";
import { cn } from "@/lib/utils";

interface TitleSegment {
  text: string;
  className?: string;
}

interface HeroHeaderProps {
  title: string | TitleSegment[];
  description?: string;
  subtitle?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subtitleClassName?: string;
  className?: string;
  isLogo?: boolean;
}

export function HeroHeader({
  title,
  description,
  subtitle,
  titleClassName,
  descriptionClassName,
  subtitleClassName,
  className,
  isLogo = true,
}: HeroHeaderProps) {
  const renderTitle = () => {
    if (typeof title === "string") {
      return (
        <StaggeredText text={title} staggerChildren={0.03} duration={0.7} />
      );
    }

    return title.map((segment, index) => (
      <span key={index} className={cn(segment.className)}>
        <StaggeredText
          text={segment.text}
          staggerChildren={0.03}
          duration={0.7}
        />
      </span>
    ));
  };

  return (
    <section
      className={cn("relative container py-20 text-center", className)}
      aria-labelledby="hero-title"
    >
      <div className="relative z-10">
        {subtitle && (
          <p
            className={cn(
              "text-secondary z-10 mb-2 text-2xl",
              subtitleClassName
            )}
            role="doc-subtitle"
          >
            <StaggeredText text={subtitle} />
          </p>
        )}
        <h1
          id="hero-title"
          className={cn(
            "font-grotesk text-brand-dark relative z-10 mb-3 text-8xl/26 tracking-tight",
            titleClassName
          )}
        >
          {renderTitle()}
        </h1>
        {description && (
          <p
            className={cn(
              "text-brand-gray mb-16 text-xl font-light text-balance",
              descriptionClassName
            )}
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
      {isLogo && (
        <XIcon
          className="absolute top-1/2 left-1/2 -translate-1/2 opacity-60"
          aria-hidden="true"
        />
      )}
    </section>
  );
}
