import { cn } from "@/lib/utils";
import React from "react";
import { CurrentPlayerInfo } from "./current-player-info";
import { PriceHandler } from "./price-handler";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const HeroSection = ({ className }: HeroSectionProps) => {
	return (
		<div
			className={cn(
				"w-1/2 h-[180px] p-1 px-3 rounded-lg bg-secondary m-auto flex justify-between items-center",
				className
			)}
		>
			<CurrentPlayerInfo />
			<PriceHandler />
		</div>
	);
};
