import { AuctionPlayer, SquadPlayer } from "@/lib/types/squad";
import React from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";
import { BadgeRole } from "./ui/badge-role";
import { cn } from "@/lib/utils";
import { useSquadsContext } from "@/hooks/use-squads-context";
import { usePlayersContext } from "@/hooks/use-players-context";

interface PlayerLabelProps extends React.HTMLAttributes<HTMLDivElement> {
	player: SquadPlayer;
	squadName: string;
}
export const PlayerLabel = ({
	className,
	player,
	squadName,
}: PlayerLabelProps) => {
	const { removePlayer } = useSquadsContext();
	const { addAuctionPlayer } = usePlayersContext();

	const getFontSize = (lastname: string) => {
		if (lastname.length > 11) {
			return "text-[10.5px]";
		}
		return "";
	};

	const deletePlayer = () => {
		//rimuovi giocatore dalla squadra
		//ripristinare punti squadra
		removePlayer(squadName, player);
		//riaggiungere giocatore all'asta
		const auctionPlayer = {
			firstname: player.firstname,
			lastname: player.lastname,
			role: player.role,
			team: player.team,
			id: player.id,
			image: player.image,
		} as AuctionPlayer;
		addAuctionPlayer(auctionPlayer);
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger className='w-full'>
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
						<p
							className={`w-[92px] overflow-x-hidden text-left text-xs ${getFontSize(
								player.lastname
							)} px-1 py-2`}
						>
							{player.lastname}
						</p>
					</div>
					<span className='text-xs font-bold'>{player.purchasePrice}</span>
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Sei sicuro?</AlertDialogTitle>
					<AlertDialogDescription>
						Stai eliminando il giocatore{" "}
						<span className='font-bold text-primary'>
							{player.lastname + " " + player.firstname}
						</span>{" "}
						dalla squadra{" "}
						<span className='font-bold text-primary'>{squadName}</span>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={deletePlayer}>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
