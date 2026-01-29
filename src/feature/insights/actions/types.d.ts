export type Insight = {
	metadata: InsightMetadata;
	content: string;
};

export type InsightMetadata = {
	title: string;
	slug: string;
	description: string;
	date: string;
	category: string;
	thumbnail: string;
	keywords: string[];
	readingTime: string;
	tags: string[];
};
