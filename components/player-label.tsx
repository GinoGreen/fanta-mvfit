import { Player } from "@/lib/types/squad";
import { cn } from "@/lib/utils";
import React from "react";
import { BadgeRole } from "./ui/badge-role";

interface PlayerLabelProps extends React.HTMLAttributes<HTMLDivElement> {
	player: Player;
}
export const PlayerLabel = ({ className, player }: PlayerLabelProps) => {
	return (
		<div
			className={cn(
				"bg-secondary/80 rounded-lg cursor-pointer select-none flex justify-between",
				className
			)}
		>
			<p className='text-xs px-1 py-2'>
				{player.firstname.substring(0, 1) + ". " + player.lastname}
			</p>
			<div className='flex flex-col justify-center items-center pr-2'>
				<BadgeRole
					icon
					role={player.role}
					className="p-[1px] aspect-square"
				/>
			</div>
		</div>
	);
};
