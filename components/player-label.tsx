import { SquadPlayer } from "@/lib/types/squad";
import { cn } from "@/lib/utils";
import React from "react";
import { BadgeRole } from "./ui/badge-role";

interface PlayerLabelProps extends React.HTMLAttributes<HTMLDivElement> {
	player: SquadPlayer;
}
export const PlayerLabel = ({ className, player }: PlayerLabelProps) => {
	const getFontSize = (lastname: string) => {
		if (lastname.length > 11) {
			return "text-[0.62rem]";
		}
		return "";
	};

	return (
		<div
			className={cn(
				"bg-secondary/80 rounded-lg h-8 cursor-pointer select-none flex justify-between items-center overflow-hidden pr-1",
				className
			)}
		>
			<div className='h-full flex items-center'>
				<BadgeRole
					icon
					role={player.role}
					className='rounded-s-lg rounded-e-none h-full aspect-auto px-1'
				/>
				<p className={`text-xs ${getFontSize(player.lastname)} px-1 py-2`}>
					{player.lastname}
				</p>
			</div>
			<span className='text-xs font-bold'>{player.purchasePrice}</span>
		</div>
	);
};
