import type { Service } from "@/types";

import { ServiceCard } from "./service-card";

interface ServicesGridProps {
	services: Service[];
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
	return (
		<ul
			className="relative z-10 grid grid-cols-1 gap-3 pb-12 sm:pb-16 md:gap-4 md:pb-20 lg:grid-cols-2"
			itemScope
			itemType="https://schema.org/ItemList"
			role="list"
		>
			{services.map((service, index) => (
				<ServiceCard
					index={index}
					key={`${service.title} - ${index}`}
					service={service}
				/>
			))}
		</ul>
	);
};
