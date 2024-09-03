"use client";

import { useState, createContext } from "react";
import { Player, Squad } from "@/lib/types/squad";
import { usePlayersContext } from "@/hooks/use-players-context";

interface SquadsProviderProps {
	children: React.ReactNode;
}

const MAX_PLAYER = 25;

const defaultContextValue = {
	squads: [] as Squad[],
	awardsPlayer: (
		squadName: string,
		currentPrice: number,
		currentPlayer: Player | null
	) => {},
};

export const SquadsContext = createContext(defaultContextValue);

export function SquadsProvider({ children }: Readonly<SquadsProviderProps>) {
	const initialSquads = [
		{
			coach: "Niccoló",
			name: "28 Febbraio",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test2",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test3",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test4",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test5",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test6",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test7",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test8",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test9",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test10",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test11",
			players: [],
			points: 500,
		},
		{
			coach: "Niccoló",
			name: "test12",
			players: [],
			points: 500,
		},
	] as Squad[];
	const { removeAuctionPlayer } = usePlayersContext();
	const [squads, setSquads] = useState<Squad[]>(initialSquads);

	const awardsPlayer = (
		squadName: string,
		currentPrice: number,
		currentPlayer: Player | null
	) => {
		setSquads((prevSquads) =>
			prevSquads.map((squad) => {
				if (squad.name === squadName) {
					// Calcola i nuovi valori
					const updatedPoints = squad.points - currentPrice;

					// Controlla le condizioni
					if (
						currentPlayer &&
						currentPrice > 0 &&
						updatedPoints >= 0 &&
						squad.players.length < MAX_PLAYER
					) {
						removeAuctionPlayer(
							currentPlayer.firstname,
							currentPlayer.lastname,
							currentPlayer.team
						);
						return {
							...squad,
							points: updatedPoints, // Aggiorna i punti
							players: [...squad.players, currentPlayer], // Aggiungi il giocatore
						};
					}
				}
				return squad; // Ritorna la squadra non modificata
			})
		);
	};

	return (
		<SquadsContext.Provider value={{ squads, awardsPlayer }}>
			{children}
		</SquadsContext.Provider>
	);
}
