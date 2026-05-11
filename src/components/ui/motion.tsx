"use client";

import { domAnimation, LazyMotion } from "motion/react";

export function LazyMotionClient({ children }: { children: React.ReactNode }) {
	return (
		<LazyMotion features={domAnimation} strict>
			{children}
		</LazyMotion>
	);
}
