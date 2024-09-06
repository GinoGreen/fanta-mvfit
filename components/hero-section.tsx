import { cn } from "@/lib/utils";
import React from "react";
import { CurrentPlayerInfo } from "./current-player-info";
import { PriceHandler } from "./price-handler";
import { TrashButton } from "./trash-button";
import { RecycleButton } from "./recycle-button";

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
			<div className='flex h-full flex-col justify-between items-end'>
				<RecycleButton />
				<PriceHandler />
				<TrashButton />
			</div>
		</div>
	);
};
