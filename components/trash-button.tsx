"use client";

import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { Button } from "./ui/button";
import { usePlayersContext } from "@/hooks/use-players-context";

interface TrashButtonProps extends React.HTMLAttributes<HTMLDivElement> {}
export const TrashButton = ({ className }: TrashButtonProps) => {
	const { trashPlayer, currentPlayer } = usePlayersContext();
	return (
		<Button
			onClick={() => trashPlayer(currentPlayer)}
			className='font-bold rounded-full text-2xl h-14 aspect-square'
		>
			<FaTrashCan />
		</Button>
	);
};
