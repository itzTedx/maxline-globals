"use client";

import { useEffect } from "react";

import { IconArrowRight } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We apologize for the inconvenience. Please try again or return to
            the home page.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={reset}
            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Try again
          </button>

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
    </div>
  );
}
