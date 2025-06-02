import localFont from "next/font/local";

export const radioGrostek = localFont({
  variable: "--font-radio-grostek",
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
