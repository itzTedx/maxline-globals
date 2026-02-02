"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { motion } from "motion/react";

import { TRANSITION, useEmblaControls } from "@/components/ui/carousel";

import { INDUSTRIES } from "@/constants/industries";

export const IndustriesCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({
			delay: 1500,
		}),

		WheelGesturesPlugin(),
	]);

	const { selectedIndex } = useEmblaControls(emblaApi);

	return (
		<div className="relative w-full space-y-4 [--slide-height:30rem] [--slide-size:80%] [--slide-spacing:0.5rem] md:[--slide-size:20%] md:[--slide-spacing:1.5rem]">
			<div className="overflow-hidden pt-8 pb-4" ref={emblaRef}>
				<div className="flex touch-pan-y touch-pinch-zoom">
					{INDUSTRIES.map((item, index) => {
						const isActive = index === selectedIndex;
						return (
							<motion.div
								className="group/industry mr-(--slide-spacing) flex aspect-3/4 h-(--slide-height) min-w-0 flex-none basis-(--slide-size)"
								key={`Slide ${index + 1}`}
							>
								<motion.div
									animate={{
										scale: isActive ? 1 : 0.95,
									}}
									className="relative size-full select-none overflow-hidden rounded-xl transition-transform duration-150 ease-out hover:-translate-y-4"
									initial={false}
									transition={TRANSITION}
								>
									<div className="absolute bottom-0 left-0 z-20 px-9 py-6">
										<h4 className="font-medium text-white text-xl tracking-wide">
											{item.name}
										</h4>

										<p>{item.description}</p>
									</div>

									<div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-primary" />
									<Image
										alt={item.name}
										className="object-cover transition-transform duration-300 ease-in-out group-hover/industry:scale-110"
										fill
										src={item.image}
									/>
									<div />
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
