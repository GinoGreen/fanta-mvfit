import { cn } from "@/lib/utils";
import React from "react";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const HeroSection = ({ className }: HeroSectionProps) => {
	return (
		<div
			className={cn(
				"w-1/2 p-3 rounded-lg bg-secondary m-auto",
				className
			)}
		>
			<h1>Bove Edoardo</h1>
			<p className="text-sm">Roma</p>
			<p>C</p>
		</div>
	);
};
