import { Button } from "@/components/ui/button";

import { IconCaretRight } from "@/assets/icons/caret";

import { CLIENTS } from "@/constants/clients";

export const Clients = () => {
	return (
		<section className="relative">
			<div className="container relative z-10 grid grid-cols-1 gap-9 py-12 sm:gap-12 sm:py-14 md:grid-cols-2 md:gap-30 md:py-16 lg:py-20">
				<div className="space-y-4">
					<h2 className="font-medium text-3xl text-primary md:text-5xl">
						Recognized by{" "}
						<span className="text-accent-secondary">
							industry leaders worldwide
						</span>
					</h2>
					<p className="text-balance text-xl leading-relaxed">
						FIATA certified, ISO compliant, trusted by Fortune 500 companies
						across continents
					</p>
					<Button className="bg-primary text-secondary" variant="secondary">
						Know more about Maxline <IconCaretRight className="ml-4" />
					</Button>
				</div>
				<ul className="grid grid-cols-2 gap-4">
					{CLIENTS.map(({ Icon }, i) => (
						<li
							className="flex aspect-16/7 w-full items-center justify-center bg-muted p-3 md:aspect-16/4"
							key={`client-${i + 1}`}
						>
							<Icon className="w-28 text-muted-foreground" />
						</li>
					))}
				</ul>
			</div>
			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-secondary" />
		</section>
	);
};
