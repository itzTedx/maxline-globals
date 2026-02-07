"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Input } from "@/components/ui/input";

export const TrackingInput = () => {
	const t = useTranslations("HomePage");
	const router = useRouter();
	const [trackingId, setTrackingId] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (trackingId.trim()) {
			router.push(
				`/track-shipment?id=${encodeURIComponent(trackingId.trim())}`
			);
		}
	};

	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className="relative mx-auto my-6 max-w-[280px] sm:max-w-[320px] md:my-8 md:max-w-md"
			initial={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5, delay: 0.1 }}
		>
			<form onSubmit={handleSubmit}>
				<Input
					aria-label={t("hero.inputPlaceholder")}
					className="bg-white pe-9 font-semibold text-sm shadow-none placeholder:text-accent-tertiary/50 md:text-base"
					id="track"
					onChange={(e) => setTrackingId(e.target.value)}
					placeholder={t("hero.inputPlaceholder")}
					type="text"
					value={trackingId}
				/>
				<motion.button
					aria-label="Track Shipment"
					className="absolute inset-y-1/2 end-1.5 flex size-8 -translate-y-1/2 items-center justify-center rounded bg-primary text-accent-tertiary outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:size-9"
					type="submit"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<IconArrowRight
						aria-hidden="true"
						className="rtl:rotate-180"
						size={16}
					/>
				</motion.button>
			</form>
		</motion.div>
	);
};
