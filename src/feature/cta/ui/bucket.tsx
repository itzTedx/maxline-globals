"use client";
import { useEffect, useState } from "react";

import {
	SecurityCheckIcon,
	SparklesIcon,
	UserStoryIcon,
	ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";

import { useIsMobile } from "@/hooks/use-mobile";

const INITIAL_CHIPS = [
	{
		id: 1,
		title: "Global Reach",
		description: "Connect to markets worldwide",
		icon: SecurityCheckIcon,
	},
	{
		id: 2,
		title: "Reliable Logistics",
		description: "Fast, safe, precise delivery",
		icon: ZapIcon,
	},
	{
		id: 3,
		title: "Seamless Experience",
		description: "Easy tracking and management",
		icon: UserStoryIcon,
	},
	{
		id: 4,
		title: "End-to-End Support",
		description: "Complete delivery coverage",
		icon: SparklesIcon,
	},
];

export const Bucket = () => {
	const [items, setItems] = useState(INITIAL_CHIPS);

	const isMobile = useIsMobile();
	useEffect(() => {
		const interval = setInterval(() => {
			setItems((prev) => {
				const [first, ...rest] = prev;
				return [...rest, first];
			});
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative flex h-fit w-full flex-col items-center justify-center gap-4">
			<div
				className="relative isolate w-full max-w-[655px]"
				style={{ aspectRatio: "655/352" }}
			>
				<svg
					className="absolute inset-0 z-0"
					fill="none"
					height="100%"
					viewBox="0 0 655 352"
					width="100%"
					xmlns="http://www.w3.org/2000/svg"
				>
					<foreignObject
						height="166.977"
						width="211.24"
						x="443.561"
						y="-10.5141"
					>
						<div
							style={{
								backdropFilter: "blur(11.03px)",
								clipPath: "url(#bgblur_0_51_65_clip_path)",
								height: "100%",
								width: "100%",
							}}
						/>
					</foreignObject>
					<g
						data-figma-bg-blur-radius="22.0545"
						filter="url(#filter1_dddi_51_65)"
					>
						<path
							d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z"
							fill="white"
							fillOpacity="0.42"
							shapeRendering="crispEdges"
						/>
					</g>
					<foreignObject
						height="167.786"
						width="215.96"
						x="-3.43323e-05"
						y="-10.9516"
					>
						<div
							style={{
								backdropFilter: "blur(11.03px)",
								clipPath: "url(#bgblur_1_51_65_clip_path)",
								height: "100%",
								width: "100%",
							}}
						/>
					</foreignObject>
					<g
						data-figma-bg-blur-radius="22.0545"
						filter="url(#filter2_dddi_51_65)"
					>
						<path
							d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z"
							fill="white"
							fillOpacity="0.42"
							shapeRendering="crispEdges"
						/>
					</g>
					<foreignObject
						height="136.012"
						width="501.297"
						x="78.7048"
						y="20.823"
					>
						<div
							style={{
								backdropFilter: "blur(11.03px)",
								clipPath: "url(#bgblur_2_51_65_clip_path)",
								height: "100%",
								width: "100%",
							}}
						/>
					</foreignObject>
					<g
						data-figma-bg-blur-radius="22.0545"
						filter="url(#filter3_dddi_51_65)"
					>
						<path
							d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z"
							fill="url(#paint0_linear_51_65)"
							fillOpacity="0.72"
							shapeRendering="crispEdges"
						/>
					</g>
					<foreignObject
						height="136.012"
						width="137.255"
						x="78.7048"
						y="20.823"
					>
						<div
							style={{
								backdropFilter: "blur(11.03px)",
								clipPath: "url(#bgblur_3_51_65_clip_path)",
								height: "100%",
								width: "100%",
							}}
						/>
					</foreignObject>
					<g
						data-figma-bg-blur-radius="22.0545"
						filter="url(#filter4_dddi_51_65)"
					>
						<path
							d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z"
							fill="white"
							fillOpacity="0.32"
							shapeRendering="crispEdges"
						/>
					</g>

					<g
						data-figma-bg-blur-radius="22.0545"
						filter="url(#filter5_dddi_51_65)"
					>
						<path
							d="M487.973 78.9088V42.8774L536.404 79.1144L487.973 78.9088Z"
							fill="white"
							fillOpacity="0.32"
							shapeRendering="crispEdges"
						/>
					</g>

					<defs>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="275.676"
							id="filter0_i_51_65"
							width="413"
							x="123.766"
							y="79.1595"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="5.51362" />
							<feGaussianBlur stdDeviation="1.83787" />
							<feComposite
								in2="hardAlpha"
								k2="-1"
								k3="1"
								operator="arithmetic"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
							/>
							<feBlend
								in2="shape"
								mode="normal"
								result="effect1_innerShadow_51_65"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="166.977"
							id="filter1_dddi_51_65"
							width="211.24"
							x="443.561"
							y="-10.5141"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="33.3087" />
							<feGaussianBlur stdDeviation="22.2058" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
							/>
							<feBlend
								in2="BackgroundImageFix"
								mode="normal"
								result="effect1_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="1.27808" />
							<feGaussianBlur stdDeviation="1.27808" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
							/>
							<feBlend
								in2="effect1_dropShadow_51_65"
								mode="normal"
								result="effect2_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="8.94656" />
							<feGaussianBlur stdDeviation="4.47328" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
							/>
							<feBlend
								in2="effect2_dropShadow_51_65"
								mode="normal"
								result="effect3_dropShadow_51_65"
							/>
							<feBlend
								in="SourceGraphic"
								in2="effect3_dropShadow_51_65"
								mode="normal"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="5.51362" />
							<feGaussianBlur stdDeviation="1.83787" />
							<feComposite
								in2="hardAlpha"
								k2="-1"
								k3="1"
								operator="arithmetic"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
							/>
							<feBlend
								in2="shape"
								mode="normal"
								result="effect4_innerShadow_51_65"
							/>
						</filter>
						<clipPath
							id="bgblur_0_51_65_clip_path"
							transform="translate(-443.561 10.5141)"
						>
							<path d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z" />
						</clipPath>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="167.786"
							id="filter2_dddi_51_65"
							width="215.96"
							x="-3.43323e-05"
							y="-10.9516"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="33.3087" />
							<feGaussianBlur stdDeviation="22.2058" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
							/>
							<feBlend
								in2="BackgroundImageFix"
								mode="normal"
								result="effect1_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="1.27808" />
							<feGaussianBlur stdDeviation="1.27808" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
							/>
							<feBlend
								in2="effect1_dropShadow_51_65"
								mode="normal"
								result="effect2_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="8.94656" />
							<feGaussianBlur stdDeviation="4.47328" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
							/>
							<feBlend
								in2="effect2_dropShadow_51_65"
								mode="normal"
								result="effect3_dropShadow_51_65"
							/>
							<feBlend
								in="SourceGraphic"
								in2="effect3_dropShadow_51_65"
								mode="normal"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="5.51362" />
							<feGaussianBlur stdDeviation="1.83787" />
							<feComposite
								in2="hardAlpha"
								k2="-1"
								k3="1"
								operator="arithmetic"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
							/>
							<feBlend
								in2="shape"
								mode="normal"
								result="effect4_innerShadow_51_65"
							/>
						</filter>
						<clipPath
							id="bgblur_1_51_65_clip_path"
							transform="translate(3.43323e-05 10.9516)"
						>
							<path d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z" />
						</clipPath>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="136.012"
							id="filter3_dddi_51_65"
							width="501.297"
							x="78.7048"
							y="20.823"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="33.3087" />
							<feGaussianBlur stdDeviation="22.2058" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
							/>
							<feBlend
								in2="BackgroundImageFix"
								mode="normal"
								result="effect1_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="1.27808" />
							<feGaussianBlur stdDeviation="1.27808" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
							/>
							<feBlend
								in2="effect1_dropShadow_51_65"
								mode="normal"
								result="effect2_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="8.94656" />
							<feGaussianBlur stdDeviation="4.47328" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
							/>
							<feBlend
								in2="effect2_dropShadow_51_65"
								mode="normal"
								result="effect3_dropShadow_51_65"
							/>
							<feBlend
								in="SourceGraphic"
								in2="effect3_dropShadow_51_65"
								mode="normal"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="5.51362" />
							<feGaussianBlur stdDeviation="1.83787" />
							<feComposite
								in2="hardAlpha"
								k2="-1"
								k3="1"
								operator="arithmetic"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
							/>
							<feBlend
								in2="shape"
								mode="normal"
								result="effect4_innerShadow_51_65"
							/>
						</filter>
						<clipPath
							id="bgblur_2_51_65_clip_path"
							transform="translate(-78.7048 -20.823)"
						>
							<path d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z" />
						</clipPath>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="136.012"
							id="filter4_dddi_51_65"
							width="137.255"
							x="78.7048"
							y="20.823"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="33.3087" />
							<feGaussianBlur stdDeviation="22.2058" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
							/>
							<feBlend
								in2="BackgroundImageFix"
								mode="normal"
								result="effect1_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="1.27808" />
							<feGaussianBlur stdDeviation="1.27808" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
							/>
							<feBlend
								in2="effect1_dropShadow_51_65"
								mode="normal"
								result="effect2_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="8.94656" />
							<feGaussianBlur stdDeviation="4.47328" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
							/>
							<feBlend
								in2="effect2_dropShadow_51_65"
								mode="normal"
								result="effect3_dropShadow_51_65"
							/>
							<feBlend
								in="SourceGraphic"
								in2="effect3_dropShadow_51_65"
								mode="normal"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="5.51362" />
							<feGaussianBlur stdDeviation="1.83787" />
							<feComposite
								in2="hardAlpha"
								k2="-1"
								k3="1"
								operator="arithmetic"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
							/>
							<feBlend
								in2="shape"
								mode="normal"
								result="effect4_innerShadow_51_65"
							/>
						</filter>
						<clipPath
							id="bgblur_3_51_65_clip_path"
							transform="translate(-78.7048 -20.823)"
						>
							<path d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z" />
						</clipPath>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="136.012"
							id="filter5_dddi_51_65"
							width="137.255"
							x="443.561"
							y="20.823"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="33.3087" />
							<feGaussianBlur stdDeviation="22.2058" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
							/>
							<feBlend
								in2="BackgroundImageFix"
								mode="normal"
								result="effect1_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="1.27808" />
							<feGaussianBlur stdDeviation="1.27808" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
							/>
							<feBlend
								in2="effect1_dropShadow_51_65"
								mode="normal"
								result="effect2_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="8.94656" />
							<feGaussianBlur stdDeviation="4.47328" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
							/>
							<feBlend
								in2="effect2_dropShadow_51_65"
								mode="normal"
								result="effect3_dropShadow_51_65"
							/>
							<feBlend
								in="SourceGraphic"
								in2="effect3_dropShadow_51_65"
								mode="normal"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="5.51362" />
							<feGaussianBlur stdDeviation="1.83787" />
							<feComposite
								in2="hardAlpha"
								k2="-1"
								k3="1"
								operator="arithmetic"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
							/>
							<feBlend
								in2="shape"
								mode="normal"
								result="effect4_innerShadow_51_65"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="212.562"
							id="filter6_dddi_51_65"
							width="612.444"
							x="21.477"
							y="56.6875"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="33.3087" />
							<feGaussianBlur stdDeviation="22.2058" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
							/>
							<feBlend
								in2="BackgroundImageFix"
								mode="normal"
								result="effect1_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="1.27808" />
							<feGaussianBlur stdDeviation="1.27808" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
							/>
							<feBlend
								in2="effect1_dropShadow_51_65"
								mode="normal"
								result="effect2_dropShadow_51_65"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="8.94656" />
							<feGaussianBlur stdDeviation="4.47328" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
							/>
							<feBlend
								in2="effect2_dropShadow_51_65"
								mode="normal"
								result="effect3_dropShadow_51_65"
							/>
							<feBlend
								in="SourceGraphic"
								in2="effect3_dropShadow_51_65"
								mode="normal"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="5.51362" />
							<feGaussianBlur stdDeviation="1.83787" />
							<feComposite
								in2="hardAlpha"
								k2="-1"
								k3="1"
								operator="arithmetic"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
							/>
							<feBlend
								in2="shape"
								mode="normal"
								result="effect4_innerShadow_51_65"
							/>
						</filter>
						<clipPath id="bgblur_5_51_65_clip_path">
							<path d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z" />
						</clipPath>
						<clipPath id="center_box_clip">
							<rect height="352" width="413" x="123.766" y="0" />
						</clipPath>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint0_linear_51_65"
							x1="329.353"
							x2="329.353"
							y1="42.8774"
							y2="79.1144"
						>
							<stop stopColor="white" stopOpacity="0.4" />
							<stop offset="1" stopColor="white" stopOpacity="0.2" />
						</linearGradient>
					</defs>
				</svg>

				<div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
					<div
						className="relative flex h-full w-full items-center justify-center"
						style={{ paddingBottom: "65%" }}
					>
						<AnimatePresence mode="popLayout">
							{items.map((chip, index) => {
								if (index !== 0) return null;

								return (
									<motion.div
										animate={{ y: 0, opacity: 1, scale: isMobile ? 1 : 1.25 }}
										className="pointer-events-auto absolute z-10 flex w-[240px] origin-bottom items-center gap-2 rounded-full border border-border bg-card p-2 shadow-sm"
										exit={{
											y: isMobile ? 100 : 130,
											scale: 0.8,
											transition: {
												duration: 0.8,
											},
										}}
										initial={{
											y: isMobile ? -70 : -100,
											opacity: 0,
											scale: 0.8,
											transition: {
												duration: 2,
												delay: 0.5,
												ease: [0.455, 0.03, 0.515, 0.955],
											},
										}}
										key={chip.id}
										transition={{
											duration: 0.5,
											ease: [0.455, 0.03, 0.515, 0.955],
										}}
									>
										<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground">
											<HugeiconsIcon className="size-5" icon={chip.icon} />
										</div>
										<div className="flex flex-col gap-0.5">
											<span className="font-medium text-foreground text-sm leading-none">
												{chip.title}
											</span>
											<span className="text-muted-foreground text-xs">
												{chip.description}
											</span>
										</div>
									</motion.div>
								);
							})}
						</AnimatePresence>
					</div>
				</div>

				<svg
					className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
					fill="none"
					height="100%"
					style={{
						transform: "translate3d(0, 0, 0)",
					}}
					viewBox="0 0 655 352"
					width="100%"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* Top Layer Part 1: filter0 */}
					<g filter="url(#filter0_i_51_65)">
						<path
							className="fill-card"
							d="M512.766 79.1595L147.766 79.1624C136.453 79.1625 130.796 79.1626 127.281 82.6773C123.766 86.192 123.766 91.8488 123.766 103.162V327.159C123.766 338.473 123.766 344.13 127.281 347.645C130.796 351.159 136.453 351.159 147.766 351.159H512.766C524.08 351.159 529.737 351.159 533.252 347.645C536.766 344.13 536.766 338.473 536.766 327.159V103.159C536.766 91.8457 536.766 86.1888 533.252 82.6741C529.737 79.1594 524.08 79.1594 512.766 79.1595Z"
						/>
					</g>

					{/* Top Layer Part 2: filter6 Blur (Clipped to Box Width) */}
					<g clipPath="url(#center_box_clip)">
						<foreignObject height="352" width="655" x="0" y="0">
							<div
								style={{
									backdropFilter: "blur(60.03px)",
									WebkitBackdropFilter: "blur(60.03px)",
									height: "100%",
									width: "100%",
									background: "rgba(255, 255, 255, 0.01)",
									clipPath:
										"path('M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z')",
								}}
							/>
						</foreignObject>
					</g>

					{/* Top Layer Part 2: filter6 */}
					<g
						data-figma-bg-blur-radius="22.0545"
						filter="url(#filter6_dddi_51_65)"
					>
						<path
							d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z"
							fill="white"
							fillOpacity="0.42"
							shapeRendering="crispEdges"
						/>
					</g>
				</svg>
			</div>
		</div>
	);
};
