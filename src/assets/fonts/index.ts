import { Geist } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
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
