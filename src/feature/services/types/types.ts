export interface FeatureItem {
	title: string;
	description: string;
}

export interface HeroProps {
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	ctaLink: string;
	ctaText: string;
}

export interface FeaturesProps {
	overview: {
		title: string;
		description: string;
	};
	features: {
		title: string;
		description: string;
		items: FeatureItem[];
	};
}
