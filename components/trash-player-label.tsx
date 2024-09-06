import { AuctionPlayer, SquadPlayer } from "@/lib/types/squad";
import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
import { BadgeRole } from "./ui/badge-role";

interface TrashPlayerLabelProps extends React.HTMLAttributes<HTMLDivElement> {
	player: AuctionPlayer;
	onClick: MouseEventHandler<HTMLDivElement>;
}
export const TrashPlayerLabel = ({
	className,
	player,
	onClick,
}: TrashPlayerLabelProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"bg-secondary/80 rounded-lg h-10 cursor-pointer select-none flex justify-between items-center overflow-hidden pr-1",
				className
			)}
		>
			<div className='h-full flex items-center'>
				<BadgeRole
					icon
					role={player.role}
					className='rounded-s-lg rounded-e-none h-full aspect-auto px-2'
				/>
				<p className='px-1 py-2'>
					{player.lastname + " " + player.firstname}
				</p>
			</div>
		</div>
	);
};
