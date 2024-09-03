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
				className='rounded-t-lg bg-popover transition-all hover:bg-[#2CA6A4]/70 h-14 border-b-4 border-secondary flex flex-col items-center justify-center cursor-pointer'
			>
				<p className='text-center text-sm font-bold'>{squad.name}</p>
				<p className='text-center text-primary/60 text-xs font-bold'>{squad.points}</p>
			</div>
			<ScrollArea className='h-[calc(100%-56px)] rounded-b-lg bg-popover '>
				<div className='space-y-2 p-1 py-2'>
					{squad.players.map((player) => (
						<PlayerLabel
							key={player.firstname + player.lastname}
							player={player}
						/>
					))}
				</div>
			</ScrollArea>
		</div>
	);
};
