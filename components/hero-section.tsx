import { cn } from "@/lib/utils";
import React from "react";
import { CurrentPlayerInfo } from "./current-player-info";
import { PriceHandler } from "./price-handler";
import { RoleSelector } from "./role-selector";
import { CharGenerator } from "@/components/char-generator";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const HeroSection = ({ className }: HeroSectionProps) => {
	return (
		<div
			className={cn("flex justify-center items-center relative", className)}
		>
			<CharGenerator />

			<RoleSelector className='mx-4' />
			<div
				className={cn(
					"w-1/2 h-[180px] p-1 px-3 rounded-lg bg-secondary flex justify-between items-center",
					className
				)}
			>
				<CurrentPlayerInfo />
				<div className='flex flex-col h-full justify-center'>
					<PriceHandler />
				</div>
			</div>
		</div>
	);
};
