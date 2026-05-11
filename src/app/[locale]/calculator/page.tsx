import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { CalculatorPageView } from "@/feature/calculator/calculator-page-view";

export default async function CalculatorPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <CalculatorPageView />;
}
