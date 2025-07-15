import { IconArrowRight } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <div className="px-4 text-center">
        <h1 className="text-brand-dark font-grotesk text-9xl font-bold">404</h1>
        <h2 className="text-secondary font-grotesk mt-4 text-6xl">
          Page Not Found
        </h2>
        <p className="text-brand-gray mt-2 mb-9 text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Button asChild size="btnIcon">
          <Link href="/" className="text-brand-dark group gap-3">
            <LetterSwapPingPong
              label="Back to home"
              staggerFrom="first"
              reverse={false}
              className="w-full justify-start font-semibold"
            />
            <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
              <IconArrowRight />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
