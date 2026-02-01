import { Route } from "next";

export interface Service {
	title: string;
	description: string;
	href: Route;
	image: string;
}
