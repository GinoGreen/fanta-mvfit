"use client";

import { useState, createContext, useEffect } from "react";
import { AuctionPlayer, Role } from "@/lib/types/squad";

interface PlayersProviderProps {
	children: React.ReactNode;
}

const defaultContextValue = {
	auctionPlayers: [] as AuctionPlayer[],
	// trashedPlayers: [] as AuctionPlayer[],
	currentPlayer: null as AuctionPlayer | null,
	updateCurrentAuctionPlayer: (role: Role) => {},
	currentPrice: 0 as number,
	changeCurrentPrice: (price: number) => {},
	setCurrentPrice: (price: number) => {},
	removeAuctionPlayer: (id: string) => {},
	// trashPlayer: (player: AuctionPlayer | null) => {},
	// restorePlayer: (player: AuctionPlayer) => {},
	addAuctionPlayer: (player: AuctionPlayer | null) => {},
	currentRole: Role.P as Role,
	changeCurrentRole: (role: Role) => {},
	nextPlayer: (step: number) => {},
};

export const PlayersContext = createContext(defaultContextValue);

export function PlayersProvider({ children }: Readonly<PlayersProviderProps>) {
	const [auctionPlayers, setAuctionPlayers] = useState<AuctionPlayer[]>([]);
	const [currentRole, setCurrentRole] = useState<Role>(Role.P);

	// const [trashedPlayers, setTrashedPlayers] = useState<AuctionPlayer[]>([]);
	const [currentPlayer, setCurrentPlayer] = useState<AuctionPlayer | null>(
		null
	);
	const [currentPrice, setCurrentPrice] = useState<number>(1);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [restoredPlayerIndex, setRestoredPlayerIndex] = useState<
		number | null
	>(null);
	const [awarding, setAwarding] = useState<boolean>(false);
	const [startFromZero, setStartFromZero] = useState<boolean>(true);
	const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

	const changeCurrentRole = (role: Role) => {
		if (auctionPlayers.filter((p) => p.role === role).length > 0) {
			setCurrentRole(role);
		}
	};

	useEffect(() => {
		setCurrentIndex(0);
		setRestoredPlayerIndex(null);
		updateCurrentAuctionPlayer();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRole]);

	const updateCurrentAuctionPlayer = () => {
		const tempPlayers = auctionPlayers.filter((p) => p.role === currentRole);
		console.log(currentRole);

		if (tempPlayers.length > 0) {
			console.log(tempPlayers);

			setCurrentPlayer(tempPlayers[0]);
		} else {
			setCurrentPlayer(null);
		}
	};

	const nextPlayer = (step: number = 0) => {
		const tempPlayers = auctionPlayers.filter((p) => p.role === currentRole);
		if (tempPlayers.length > 0) {
			if (!currentPlayer) {
				setCurrentIndex(0);
				setCurrentPlayer(tempPlayers[0]);
				return;
			}

			if (currentIndex !== -1) {
				let newIndex = step === 0 ? currentIndex : currentIndex + step;
				if (newIndex < 0) {
					newIndex = tempPlayers.length - 1;
				} else if (newIndex > tempPlayers.length - 1) {
					newIndex = 0;
				}

				setCurrentIndex(newIndex);
				setCurrentPlayer(tempPlayers[newIndex]);
			} else {
				setCurrentIndex(0);
			}
		} else {
			setCurrentPlayer(null);
		}
	};

	const addAuctionPlayer = (player: AuctionPlayer | null) => {
		if (player) {
			const arr = sortPlayers([player, ...auctionPlayers]);
			setAuctionPlayers(arr);
			if (player.role === currentRole) {
				const index = arr
					.filter((p) => p.role === player.role)
					.findIndex((p) => p.id === player.id);
				setRestoredPlayerIndex(index !== 1 ? index : null);
				setAwarding(true);
			}
		}
	};

	const removeAuctionPlayer = (id: string) => {
		console.log("id to remove: ", id);

		setAuctionPlayers((prevPlayers) => {
			const filteredPlayers = prevPlayers.filter(
				(player) => !(player.id === id)
			);
			return sortPlayers(filteredPlayers);
		});
		setAwarding(true);
	};

	// const trashPlayer = (player: AuctionPlayer | null) => {
	// 	if (player) {
	// 		setTrashedPlayers((prevTrashedPlayers) => [
	// 			...prevTrashedPlayers,
	// 			player,
	// 		]);
	// 		removeAuctionPlayer(player.id);
	// 	}
	// };

	// const removeTrashPlayer = (player: AuctionPlayer | null) => {
	// 	if (player) {
	// 		setTrashedPlayers((prevTrashedPlayers) =>
	// 			prevTrashedPlayers.filter(
	// 				(trashPlayer) =>
	// 					!(
	// 						trashPlayer.firstname === player.firstname &&
	// 						trashPlayer.lastname === player.lastname &&
	// 						trashPlayer.team === player.team
	// 					)
	// 			)
	// 		);
	// 	}
	// };

	// const restorePlayer = (player: AuctionPlayer) => {
	// 	removeTrashPlayer(player);
	// 	addAuctionPlayer(player);
	// };

	const changeCurrentPrice = (price: number) => {
		const result = currentPrice + price;
		if (result >= 0) {
			setCurrentPrice(result);
		}
	};

	const sortPlayers = (players: AuctionPlayer[]) => {
		return players.sort((a, b) => {
			// Ordina per ruolo (role)
			if (a.role !== b.role) {
				return a.role.localeCompare(b.role);
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
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/read-file?type=players`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setStartFromZero(true);

				setAuctionPlayers(data);
			} catch (error) {
				console.error("Fetch error:", error);
				throw error;
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		console.log("TEST1", auctionPlayers);

		const updateSquads = async () => {
			if (auctionPlayers) {
				try {
					const response = await fetch("/api/update-file?type=players", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(auctionPlayers),
					});
					if (!response.ok) {
						throw new Error("Failed to update players");
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
		if (awarding) {
			if (
				restoredPlayerIndex !== null &&
				currentIndex >= restoredPlayerIndex
			) {
				nextPlayer(+1);
			} else {
				nextPlayer();
			}
			setAwarding(false);
		} else if (startFromZero) {
			console.log("TEST", auctionPlayers);

			updateCurrentAuctionPlayer();
			setStartFromZero(false);
		}
		setRestoredPlayerIndex(null);
		setCurrentPrice(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auctionPlayers]);

	return (
		<PlayersContext.Provider
			value={{
				auctionPlayers,
				updateCurrentAuctionPlayer,
				currentPlayer,
				currentPrice,
				changeCurrentPrice,
				setCurrentPrice,
				removeAuctionPlayer,
				// trashPlayer,
				// trashedPlayers,
				// restorePlayer,
				addAuctionPlayer,
				currentRole,
				changeCurrentRole,
				nextPlayer,
			}}
		>
			{children}
		</PlayersContext.Provider>
	);
}
