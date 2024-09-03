"use client";

import { useState, createContext } from "react";
import { Player } from "@/lib/types/squad";
import players from "@/api/players.json"

interface PlayersProviderProps {
	children: React.ReactNode;
}

const defaultContextValue = {
	auctionPlayers: [] as Player[],
	currentPlayer: null as Player | null,
	updateCurrentAuctionPlayer: () => {},
	// changeTenant: (tenantId: number) => {},
};

export const PlayersContext = createContext(defaultContextValue);

export function PlayersProvider({ children }: PlayersProviderProps) {
	const initialPlayers = players as Player[];
	const [auctionPlayers, setAuctionPlayers] = useState<Player[]>(initialPlayers);
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(initialPlayers[0]);

	const updateCurrentAuctionPlayer = () => {
		if (auctionPlayers.length > 0) {
			setCurrentPlayer(auctionPlayers[0]);
		} else {
			setCurrentPlayer(null)
		}
	}
	

	return (
		<PlayersContext.Provider
			value={{ auctionPlayers, updateCurrentAuctionPlayer, currentPlayer }}
		>
			{children}
		</PlayersContext.Provider>
	);
}