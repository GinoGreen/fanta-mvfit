import { Squad } from "@/lib/types/squad";
import { cn } from "@/lib/utils";
import React from "react";
import { PlayerLabel } from "./player-label";
import { ScrollArea } from "./ui/scroll-area";
import { useSquadsContext } from "@/hooks/use-squads-context";
import { usePlayersContext } from "@/hooks/use-players-context";

interface SquadColumnProps extends React.HTMLAttributes<HTMLDivElement> {
	squad: Squad;
}
export const SquadColumn = ({ className, squad }: SquadColumnProps) => {
	const { awardsPlayer } = useSquadsContext();
	const { currentPrice, currentPlayer } = usePlayersContext();
	const handleClick = () => {
		awardsPlayer(squad.name, currentPrice, currentPlayer);
	};

	return (
		<div className={cn("h-full w-full", className)}>
			<div
				onClick={() => handleClick()}
				className='group rounded-t-lg bg-popover transition-all hover:bg-[#2CA6A4]/70 h-14 border-b-4 border-secondary flex flex-col items-center justify-center cursor-pointer'
			>
				<p className='text-center text-sm font-bold'>{squad.name}</p>
				<div className='w-full flex justify-evenly items-center'>
					<p className='text-primary/60 text-xs font-bold group-hover:text-primary transition-all'>
						{squad.points}
					</p>
					<span className='text-primary/60 text-xs font-bold group-hover:text-primary transition-all'>-</span>
					<p className='text-primary/60 text-xs font-bold group-hover:text-primary transition-all'>
						{squad.points - (25 - squad.players.length - 1)} max
					</p>
				</div>
			</div>
			<ScrollArea className='h-[calc(100%-56px)] rounded-b-lg bg-popover '>
				<div className='space-y-2 p-1 py-2'>
					{squad.players.map((player) => (
						<PlayerLabel
							key={player.firstname + player.lastname}
							player={player}
							squadName={squad.name}
						/>
					))}
				</div>
			</ScrollArea>
		</div>
	);
};
