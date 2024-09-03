"use client";

import { useState, createContext, useEffect } from "react";
import { Player } from "@/lib/types/squad";
import players from "@/api/players.json";

interface PlayersProviderProps {
	children: React.ReactNode;
}

const defaultContextValue = {
	auctionPlayers: [] as Player[],
	currentPlayer: null as Player | null,
	updateCurrentAuctionPlayer: () => {},
	currentPrice: 0 as number,
	changeCurrentPrice: (price: number) => {},
	setCurrentPrice: (price: number) => {},
	removeAuctionPlayer: (
		firstname: string,
		lastname: string,
		team: string
	) => {},
};

export const PlayersContext = createContext(defaultContextValue);

export function PlayersProvider({ children }: Readonly<PlayersProviderProps>) {
	const initialPlayers = players as Player[];
	const [auctionPlayers, setAuctionPlayers] =
		useState<Player[]>(initialPlayers);
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(
		initialPlayers[0]
	);
	const [currentPrice, setCurrentPrice] = useState<number>(0);

	const updateCurrentAuctionPlayer = () => {
		if (auctionPlayers.length > 0) {
			setCurrentPlayer(auctionPlayers[0]);
		} else {
			setCurrentPlayer(null);
		}
	};

	const removeAuctionPlayer = (
		firstname: string,
		lastname: string,
		team: string
	) => {
		console.log("removeAuctionPlayer");
		
		setAuctionPlayers((prevPlayers) =>
			prevPlayers.filter(
				(player) =>
					!(
						player.firstname === firstname &&
						player.lastname === lastname &&
						player.team === team
					)
			)
		);
	};

	const changeCurrentPrice = (price: number) => {
		const result = currentPrice + price;
		if (result >= 0) {
			setCurrentPrice(result);
		}
	};

	useEffect(() => {
		console.log("Auction Players updated!");
		console.log(auctionPlayers);
		
		
		updateCurrentAuctionPlayer();
		setCurrentPrice(0);
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
			}}
		>
			{children}
		</PlayersContext.Provider>
	);
}
