export type Insight = {
  metadata: InsightMetadata;
  content: string;
};

export type InsightMetadata = {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  thumbnail: string;
  keywords: string[];
  readingTime: string;
  tags: string[];
};
