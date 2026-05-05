import { lazy, ReactNode } from "react";

const LazyMotion = lazy(() =>
	import("motion/react").then((m) => ({ default: m.LazyMotion }))
);
const MotionDiv = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.div }))
);
const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

interface AnimatedSectionProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export function AnimatedSection({
	children,
	delay = 0,
	className = "",
}: AnimatedSectionProps) {
	return (
		<LazyMotion features={loadFeatures} strict>
			<MotionDiv
				className={className}
				initial={{ opacity: 0, y: 30 }}
				transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
				viewport={{ once: true, margin: "-100px" }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				{children}
			</MotionDiv>
		</LazyMotion>
	);
}
