import fs from "fs";
import matter from "gray-matter";
import { Locale } from "next-intl";
import path from "path";

import { Insight, InsightMetadata } from "./types";

const root = (locale: Locale) =>
	path.join(process.cwd(), "src", "contents", "insights", locale);

export async function getInsightBySlug(
	slug: string,
	{ locale }: { locale: Locale }
): Promise<Insight | null> {
	try {
		const filePath = path.join(root(locale), `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
		const { data, content } = matter(fileContent);

		const metadata = data as InsightMetadata;

		return {
			metadata: {
				...metadata,
				slug,
			},
			content,
		};
	} catch {
		return null;
	}
}

export async function getInsights({
	limit,
	locale,
}: {
	limit?: number;
	locale: Locale;
}): Promise<InsightMetadata[]> {
	const files = fs.readdirSync(root(locale));

	let insights = files.map((file) => getInsightMetadata(file, locale));

	insights.sort((a, b) => {
		const aDate = new Date(a.date).getTime();
		const bDate = new Date(b.date).getTime();

		return bDate - aDate;
	});

	if (limit) {
		return insights.slice(0, limit);
	}

	return insights;
}

export function getInsightMetadata(
	filepath: string,
	locale: Locale
): InsightMetadata & { slug: string } {
	const slug = filepath.replace(/\.mdx$/, "");

	const filePath = path.join(root(locale), filepath);

	const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
	const { data } = matter(fileContent);

	const metadata = data as InsightMetadata;

	return { ...metadata, slug };
}

export async function getRelatedInsights({
	tags,
	limit,
	locale,
}: {
	tags: string[];
	limit?: number;
	locale: Locale;
}): Promise<InsightMetadata[]> {
	const result = await getInsights({ locale });

	const insights = result.filter((insight) =>
		insight.tags.some((tag) => tags.includes(tag))
	);

	if (limit) {
		return insights.slice(0, limit);
	}

	return insights;
}
