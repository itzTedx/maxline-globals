import { IconArrowRight } from "@tabler/icons-react";
import { type VariantProps } from "class-variance-authority";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { Button as ShadBtn } from "./button";

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof ShadBtn> {
  href?: string;
  label?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showIcon?: boolean;
}

export const Button = ({
  href = "/",
  label,
  className,
  iconClassName,
  textClassName,
  showIcon = true,
  ...props
}: ButtonProps) => {
  return (
    <ShadBtn
      asChild
      size="btnIcon"
      className={cn("group/btn gap-3", className)}
      {...props}
    >
      <Link href={href}>
        {label && (
          <LetterSwapPingPong
            label={label}
            staggerFrom="first"
            reverse={false}
            className={cn(
              textClassName,
              "text-background w-full justify-start font-semibold"
            )}
          />
        )}
        {showIcon && (
          <div
            className={cn(
              "bg-primary text-brand-dark group-hover/btn:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500",
              iconClassName
            )}
          >
            <IconArrowRight />
          </div>
        )}
      </Link>
    </ShadBtn>
  );
};
