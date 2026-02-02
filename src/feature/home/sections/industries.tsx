import { IndustriesCarousel } from "../components/industries-carousel";

export const Industries = () => {
	return (
		<section className="bg-foreground py-20 text-background">
			<div className="container">
				<span>Industries we serve</span>
				<h2 className="mb-3 max-w-2xl font-semibold text-4xl">
					Serving Diverse{" "}
					<span className="text-accent">Industries Worldwide</span>
				</h2>
				<p className="max-w-2xl font-light text-2xl text-muted">
					From automotive plants to energy projects, our solutions fit the
					demands of your industry.
				</p>
			</div>
			<IndustriesCarousel />
		</section>
	);
};
