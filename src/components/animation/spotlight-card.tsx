"use client";

import React, { useCallback, useRef, useState } from "react";

interface Position {
	x: number;
	y: number;
}

interface SpotlightState {
	position: Position;
	opacity: number;
	isFocused: boolean;
}

interface SpotlightCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
	className?: string;
	spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
	children,
	className = "",
	spotlightColor = "rgba(255, 255, 255, 0.25)",
	...props
}) => {
	const divRef = useRef<HTMLLIElement>(null);
	const [state, setState] = useState<SpotlightState>({
		position: { x: 0, y: 0 },
		opacity: 0,
		isFocused: false,
	});

	const handleMouseMove = useCallback<React.MouseEventHandler<HTMLLIElement>>(
		(e) => {
			if (!divRef.current || state.isFocused) return;
			const rect = divRef.current.getBoundingClientRect();
			setState((prev) => ({
				...prev,
				position: { x: e.clientX - rect.left, y: e.clientY - rect.top },
			}));
		},
		[state.isFocused]
	);

	const handleFocus = useCallback(() => {
		setState((prev) => ({ ...prev, isFocused: true, opacity: 0.6 }));
	}, []);

	const handleBlur = useCallback(() => {
		setState((prev) => ({ ...prev, isFocused: false, opacity: 0 }));
	}, []);

	const handleMouseEnter = useCallback(() => {
		setState((prev) => ({ ...prev, opacity: 0.6 }));
	}, []);

	const handleMouseLeave = useCallback(() => {
		setState((prev) => ({ ...prev, opacity: 0 }));
	}, []);

	return (
		<li
			className={`relative overflow-hidden ${className}`}
			onBlur={handleBlur}
			onFocus={handleFocus}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
			ref={divRef}
			{...props}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
				style={{
					opacity: state.opacity,
					background: `radial-gradient(circle at ${state.position.x}px ${state.position.y}px, ${spotlightColor}, transparent 60%)`,
				}}
			/>
			{children}
		</li>
	);
};

export default SpotlightCard;
