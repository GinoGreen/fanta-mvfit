"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BadgeRole } from "./ui/badge-role";
import Image from "next/image";
import { usePlayersContext } from "@/hooks/use-players-context";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface CurrentPlayerInfoProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CurrentPlayerInfo = ({ className }: CurrentPlayerInfoProps) => {
	const { currentPlayer, nextPlayer } = usePlayersContext();

	return (
		<div className='flex items-center gap-x-16 w-full h-full'>
			{currentPlayer && (
				<>
					<div className='h-full w-1/3 relative mx-3 max-w-[150px]'>
						<div
							className='aspect-square cursor-pointer absolute -left-6 top-1/2 translate-y-[-50%]'
							onClick={() => nextPlayer(-1)}
						>
							<FaChevronLeft size={30} />
						</div>
						<Image
							className='h-full object-contain object-center'
							src={currentPlayer?.image}
							alt='Artwork'
							fill
						/>
						<div
							className='aspect-square cursor-pointer absolute -right-6 top-1/2 translate-y-[-50%]'
							onClick={() => nextPlayer(+1)}
						>
							<FaChevronRight size={30} />
						</div>
					</div>
					<div className={cn("space-y-4", className)}>
						<h1 className='text-xl font-bold leading-5'>
							{`${currentPlayer.firstname} ${currentPlayer.lastname}`}
						</h1>
						<p className='font-semibold text-primary/50'>
							{currentPlayer.team}
						</p>
						<BadgeRole role={currentPlayer.role} />
					</div>
				</>
			)}
		</div>
	);
};
