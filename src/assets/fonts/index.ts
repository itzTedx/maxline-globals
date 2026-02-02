import { IBM_Plex_Sans_Arabic, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter_Tight({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "arial"],
	adjustFontFallback: true,
});

export const radioGrostek = localFont({
	variable: "--font-radio-grostek",
	display: "swap",
	preload: true,
	fallback: ["system-ui", "arial"],
	src: [
		{
			weight: "200",
			path: "./PPRadioGrotesk-Ultralight.otf",
		},
		{
			weight: "400",
			path: "./PPRadioGrotesk-Regular.otf",
		},
		{
			weight: "800",
			path: "./PPRadioGrotesk-Black.otf",
		},
	],
});

export const metrify = localFont({
	variable: "--font-metrify",
	display: "swap",
	preload: true,
	fallback: ["system-ui", "arial"],
	src: [
		{
			weight: "400",
			path: "./metrify/metrify-regular.ttf",
		},
		{
			weight: "500",
			path: "./metrify/metrify-medium.ttf",
		},
		{
			weight: "800",
			path: "./metrify/metrify-extrabold.ttf",
		},
		{
			weight: "900",
			path: "./metrify/metrify-black.ttf",
		},
	],
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
	variable: "--font-ibm-plex",
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["arabic"],
	display: "swap",
});
