"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { CurrentPlayerInfo } from "./current-player-info";
import { PriceHandler } from "./price-handler";
import { RoleSelector } from "./role-selector";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { usePlayersContext } from "@/hooks/use-players-context";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const HeroSection = ({ className }: HeroSectionProps) => {
	const { nextPlayer } = usePlayersContext();

	return (
		<div className='flex justify-center items-center'>
			<RoleSelector />
			<div
				className={cn(
					"w-1/2 h-[180px] p-1 px-3 rounded-lg bg-secondary flex justify-between items-center",
					className
				)}
			>
				<CurrentPlayerInfo />
				<div className='flex h-full items-center'>
					<PriceHandler />
				</div>
				<FaChevronLeft
					size={40}
					onClick={() => nextPlayer(-1)}
				/>
				<FaChevronRight
					size={40}
					onClick={() => nextPlayer(+1)}
				/>
			</div>
		</div>
	);
};
