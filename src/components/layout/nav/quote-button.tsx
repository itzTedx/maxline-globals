"use client";

import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { Button } from "../../ui/button";

export const QuoteButton = () => {
  return (
    <Button asChild size="btnIcon">
      <Link href="/quote" className="text-brand-dark gap-3">
        Get A Quote
        <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
          <IconArrowRight />
        </div>
      </Link>
    </Button>
  );
};
