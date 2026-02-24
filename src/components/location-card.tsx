import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Button } from "@/components/ui/custom-button";

export interface LocationItem {
	title: string;
	address: string;
	phone: string;
	mobile: string;
	email: string;
	link: string;
	image: string;
	slug?: string;
}

export interface LocationCardLabels {
	phoneLabel: string;
	mobileLabel: string;
	emailLabel: string;
	viewInMap: string;
}

interface LocationCardProps {
	labels: LocationCardLabels;
	location: LocationItem;
}

export function LocationCard({ labels, location: loc }: LocationCardProps) {
	return (
		<li className={"group flex flex-col overflow-hidden rounded-2xl bg-white"}>
			<div className={"relative aspect-video shrink-0 overflow-hidden"}>
				<Image
					alt=""
					className="object-cover transition-transform duration-500 group-hover:scale-125"
					fill
					src={loc.image}
				/>
			</div>
			<div
				className={
					"flex h-full flex-col items-center justify-between p-4 text-center"
				}
			>
				<div className="flex h-full flex-1 flex-col">
					<p className="pb-2 font-light text-accent-tertiary" dir="ltr">
						<StaggeredText text={loc.title} />
					</p>
					{loc.slug ? (
						<Link
							href={`/company/location/${loc.slug}` as Route}
							target="_blank"
						>
							<h4
								className="px-4 pb-4 font-grotesk font-semibold text-2xl text-primary transition-colors hover:text-accent-secondary"
								dir="ltr"
							>
								<StaggeredText text={loc.address} />
							</h4>
						</Link>
					) : (
						<h4
							className="px-4 pb-4 font-grotesk font-semibold text-2xl text-primary"
							dir="ltr"
						>
							<StaggeredText text={loc.address} />
						</h4>
					)}
					<ul className="mb-4 divide-y divide-primary/10 text-muted-foreground">
						<li className="py-1" dir="ltr">
							<StaggeredText
								delay={0.1}
								text={`${labels.phoneLabel}: ${loc.phone}`}
							/>
						</li>
						<li className="py-1" dir="ltr">
							<StaggeredText
								delay={0.1}
								text={`${labels.mobileLabel}: ${loc.mobile}`}
							/>
						</li>
						<li className="py-1">
							<StaggeredText
								delay={0.1}
								text={`${labels.emailLabel}: ${loc.email}`}
							/>
						</li>
					</ul>
				</div>
				<Button className="w-full" href={loc.link} label={labels.viewInMap} />
			</div>
		</li>
	);
}
