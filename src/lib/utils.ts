import { type ClassValue, clsx } from "clsx";
import { Locale } from "next-intl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatInsightDate(date: string, locale: Locale) {
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }
  const localizedFormat = locale === "ar" ? "ar-SA" : "en-US";
  return new Intl.DateTimeFormat(localizedFormat, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
}
