import { Player } from "@/lib/types/squad";
import { cn } from "@/lib/utils";
import React from "react";

interface PlayerLabelProps extends React.HTMLAttributes<HTMLDivElement> {
	player: Player;
}
export const PlayerLabel = ({ className, player }: PlayerLabelProps) => {
	return (
		<div className={cn("bg-secondary/80 rounded-lg", className)}>
			<p className='text-xs px-1 py-2'>{player.firstname.substring(0, 1) + ". " + player.lastname}</p>
		</div>
	);
};
