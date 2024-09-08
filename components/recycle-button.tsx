"use client";

import React from "react";
import { Button } from "./ui/button";
import { usePlayersContext } from "@/hooks/use-players-context";
import { FaRecycle } from "react-icons/fa";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { AuctionPlayer } from "@/lib/types/squad";
import { TrashPlayerLabel } from "./trash-player-label";

interface RecycleButtonProps extends React.HTMLAttributes<HTMLDivElement> {}
export const RecycleButton = ({ className }: RecycleButtonProps) => {
	const { trashedPlayers, restorePlayer } = usePlayersContext();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='font-bold rounded-full text-2xl h-14 aspect-square'>
					<FaRecycle />
				</Button>
			</DialogTrigger>
			<DialogContent className='h-[80vh]'>
				<DialogHeader>
					<DialogTitle>Cestino</DialogTitle>
					<DialogDescription>Lista giocatori cestinati</DialogDescription>
				</DialogHeader>
				<ScrollArea className='h-[68vh] rounded-b-lg bg-popover '>
					<div className='space-y-2 p-1 py-2'>
						{trashedPlayers.map((player) => (
							<TrashPlayerLabel
								key={player.firstname + player.lastname}
								player={player}
								onClick={() => restorePlayer(player)}
							/>
						))}
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};
