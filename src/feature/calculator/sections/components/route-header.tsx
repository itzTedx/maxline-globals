import { IconAnchor } from "@tabler/icons-react";
import { ShipIcon } from "lucide-react";

export const RouteHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="flex flex-col items-center gap-1">
				<div className="flex size-9 items-center justify-center rounded-md bg-accent/10">
					<IconAnchor className="size-5 text-accent" />
				</div>
				<div className="text-center">
					<h3 className="font-medium">Guangzhou</h3>
					<p className="text-muted-foreground text-sm">China</p>
				</div>
			</div>

			<svg
				className="text-muted-foreground/20"
				height="1"
				preserveAspectRatio="none"
				viewBox="0 0 100 1"
				width="100%"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0.5 H100" stroke="currentColor" strokeDasharray="4 3">
					<animate
						attributeName="stroke-dashoffset"
						dur="2s"
						from="21"
						repeatCount="indefinite"
						to="0"
					/>
				</path>
			</svg>

			<div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent-secondary/10">
				<ShipIcon className="text-accent-secondary" />
			</div>

			<svg
				className="text-muted-foreground/20"
				height="1"
				preserveAspectRatio="none"
				viewBox="0 0 100 1"
				width="100%"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0.5 H100" stroke="currentColor" strokeDasharray="4 3">
					<animate
						attributeName="stroke-dashoffset"
						dur="2s"
						from="21"
						repeatCount="indefinite"
						to="0"
					/>
				</path>
			</svg>

			<div className="flex shrink-0 flex-col items-center gap-1">
				<div className="flex size-9 items-center justify-center rounded-md bg-accent/10">
					<IconAnchor className="size-5 text-accent" />
				</div>
				<div className="text-center">
					<h3 className="font-medium">Jebel Ali</h3>
					<p className="text-muted-foreground text-sm">UAE</p>
				</div>
			</div>
		</div>
	);
};
