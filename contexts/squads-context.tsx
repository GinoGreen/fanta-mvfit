"use client";

import { useState, createContext, useEffect } from "react";
import { AuctionPlayer, Role, Squad, SquadPlayer } from "@/lib/types/squad";
import { usePlayersContext } from "@/hooks/use-players-context";

interface SquadsProviderProps {
	children: React.ReactNode;
}

const MAX_PLAYER = 25;
const MAX_GK = 3;
const MAX_DF = 8;
const MAX_MF = 8;
const MAX_ST = 6;

const defaultContextValue = {
	squads: [] as Squad[],
	awardsPlayer: (
		squadName: string,
		currentPrice: number,
		currentPlayer: AuctionPlayer | null
	) => {},
	removePlayer: (squadName: string, player: SquadPlayer) => {},
};

export const SquadsContext = createContext(defaultContextValue);

export function SquadsProvider({ children }: Readonly<SquadsProviderProps>) {
	const { removeAuctionPlayer } = usePlayersContext();
	const [squads, setSquads] = useState<Squad[]>([]);
	const [playerToRemove, setPlayerToRemove] = useState<string | null>(null);
	const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

	const rolePriority: { [key in Role]: number } = {
		P: 1, // Priorità più alta
		D: 2,
		C: 3,
		A: 4, // Priorità più bassa
	};

	const checkPlayerQuantity = (
		players: SquadPlayer[],
		newPlayerRole: Role
	) => {
		let checkRole = false;
		switch (newPlayerRole) {
			case "P":
				checkRole =
					players.filter((p) => p.role === Role.P).length < MAX_GK;
				break;
			case "D":
				checkRole =
					players.filter((p) => p.role === Role.D).length < MAX_DF;
				break;
			case "C":
				checkRole =
					players.filter((p) => p.role === Role.C).length < MAX_MF;
				break;
			case "A":
				checkRole =
					players.filter((p) => p.role === Role.A).length < MAX_ST;
				break;
		}
		return players.length < MAX_PLAYER && checkRole;
	};

	const sortPlayers = (players: SquadPlayer[]): SquadPlayer[] => {
		return players.sort((a, b) => {
			// Ordina per ruolo con la priorità personalizzata
			if (rolePriority[a.role] !== rolePriority[b.role]) {
				return rolePriority[a.role] - rolePriority[b.role];
			}

			// Ordina per cognome (lastname)
			if (a.lastname !== b.lastname) {
				return a.lastname.localeCompare(b.lastname);
			}

			// Ordina per nome (firstname)
			if (a.firstname !== b.firstname) {
				return a.firstname.localeCompare(b.firstname);
			}

			// Ordina per squadra (team)
			return a.team.localeCompare(b.team);
		});
	};

	useEffect(() => {
		if (playerToRemove) {
			removeAuctionPlayer(playerToRemove);
			setPlayerToRemove(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playerToRemove]);

	useEffect(() => {
		const updateSquads = async () => {
			if (squads) {
				try {
					const response = await fetch("/api/update-file?type=squads", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(squads),
					});
					if (!response.ok) {
						console.log(response.json());
						
						throw new Error("Failed to update squads");
					}
					const result = await response.json();
					console.log(result.message); // Opzionale: Gestisci il risultato
				} catch (error) {
					console.error("Error:", error);
				}
			}
		};

		if (!isFirstTime) {
			updateSquads();
		} else {
			setIsFirstTime(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [squads]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/read-file?type=squads`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setSquads(data);
			} catch (error) {
				console.error("Fetch error:", error);
				throw error;
			}
		};
		fetchData();
	}, []);

	const awardsPlayer = (
		squadName: string,
		currentPrice: number,
		currentPlayer: AuctionPlayer | null
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
						checkPlayerQuantity(squad.players, currentPlayer.role)
					) {
						setPlayerToRemove(currentPlayer.id);

						return {
							...squad,
							points: updatedPoints, // Aggiorna i punti
							players: sortPlayers([
								...squad.players,
								{ ...currentPlayer, purchasePrice: currentPrice },
							]), // Aggiungi il giocatore
						};
					}
				}
				return squad; // Ritorna la squadra non modificata
			})
		);
	};

	const removePlayer = (squadName: string, player: SquadPlayer) => {
		setSquads((prevSquads) =>
			prevSquads.map((squad) => {
				if (squad.name === squadName) {
					// Calcola i nuovi valori
					const updatedPoints = squad.points + player.purchasePrice;

					return {
						...squad,
						points: updatedPoints, // Aggiorna i punti
						players: sortPlayers([
							...squad.players.filter((p) => !(p.id === player.id)),
						]),
					};
				}
				return squad; // Ritorna la squadra non modificata
			})
		);
	};

	return (
		<SquadsContext.Provider value={{ squads, awardsPlayer, removePlayer }}>
			{children}
		</SquadsContext.Provider>
	);
}
