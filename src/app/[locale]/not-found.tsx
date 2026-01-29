import { IconArrowRight } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/navigation";

export default function NotFound() {
	return (
		<div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
			<div className="px-4 text-center">
				<h1 className="font-bold font-grotesk text-9xl text-brand-dark">404</h1>
				<h2 className="mt-4 font-grotesk text-6xl text-secondary">
					Page Not Found
				</h2>
				<p className="mt-2 mb-9 text-brand-gray text-lg">
					Sorry, we couldn&apos;t find the page you&apos;re looking for.
				</p>
				<Button asChild size="btnIcon">
					<Link className="group gap-3 text-brand-dark" href="/">
						<LetterSwapPingPong
							className="w-full justify-start font-semibold"
							label="Back to home"
							reverse={false}
							staggerFrom="first"
						/>
						<div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark transition duration-500 group-hover:bg-background">
							<IconArrowRight />
						</div>
					</Link>
				</Button>
			</div>
		</div>
	);
}
