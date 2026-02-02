import * as React from "react";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedCard({ className, ...props }: CardProps) {
	return (
		<div
			aria-describedby="card-description"
			aria-labelledby="card-title"
			className={cn(
				"group/animated-card relative w-[356px] overflow-hidden rounded-xl border bg-card shadow-sm",
				className
			)}
			role="region"
			{...props}
		/>
	);
}

export function CardBody({ className, ...props }: CardProps) {
	return (
		<div
			className={cn("flex flex-col space-y-1.5 border-t p-4", className)}
			role="group"
			{...props}
		/>
	);
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
	return (
		<h3
			className={cn(
				"font-semibold text-lg text-primary leading-none",
				className
			)}
			{...props}
		/>
	);
}

interface CardDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
	return (
		<p className={cn("text-muted-foreground text-sm", className)} {...props} />
	);
}

export function CardVisual({ className, ...props }: CardProps) {
	return (
		<div
			className={cn("h-[180px] w-[356px] overflow-hidden", className)}
			{...props}
		/>
	);
}
