"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BadgeRole } from "./ui/badge-role";
import Image from "next/image";
import { usePlayersContext } from "@/hooks/use-players-context";

interface CurrentPlayerInfoProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CurrentPlayerInfo = ({ className }: CurrentPlayerInfoProps) => {
	const { currentPlayer } = usePlayersContext();

	return (
		<div className='flex items-center gap-x-2 w-full h-full'>
			<div className='h-full w-1/3 relative'>
				<Image
					className='h-full object-contain object-center'
					src={
						"https://content.fantacalcio.it/web/campioncini/card/BOVE.png?v=130"
					}
					alt='Artwork'
					fill
				/>
			</div>
			{currentPlayer && (
				<div className={cn("space-y-1", className)}>
					<h1 className='text-xl font-bold leading-5'>
						{`${currentPlayer.firstname} ${currentPlayer.lastname}`}
					</h1>
					<p className='font-semibold text-primary/50'>
						{currentPlayer.team}
					</p>
					<BadgeRole role={currentPlayer.role} />
				</div>
			)}
		</div>
	);
};
