"use client";

import { useState, createContext, useEffect } from "react";
import { AuctionPlayer } from "@/lib/types/squad";
import players from "@/api/players.json";

interface PlayersProviderProps {
	children: React.ReactNode;
}

const defaultContextValue = {
	auctionPlayers: [] as AuctionPlayer[],
	trashedPlayers: [] as AuctionPlayer[],
	currentPlayer: null as AuctionPlayer | null,
	updateCurrentAuctionPlayer: () => {},
	currentPrice: 0 as number,
	changeCurrentPrice: (price: number) => {},
	setCurrentPrice: (price: number) => {},
	removeAuctionPlayer: (
		firstname: string,
		lastname: string,
		team: string
	) => {},
	trashPlayer: (player: AuctionPlayer | null) => {},
	restorePlayer: (player: AuctionPlayer) => {},
};

export const PlayersContext = createContext(defaultContextValue);

export function PlayersProvider({ children }: Readonly<PlayersProviderProps>) {
	const initialPlayers = players as AuctionPlayer[];
	const [auctionPlayers, setAuctionPlayers] =
		useState<AuctionPlayer[]>(initialPlayers);
	const [trashedPlayers, setTrashedPlayers] = useState<AuctionPlayer[]>([]);
	const [currentPlayer, setCurrentPlayer] = useState<AuctionPlayer | null>(
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

	const addAuctionPlayer = (player: AuctionPlayer | null) => {
		if (player) {
			setAuctionPlayers((prevAuctionPlayers) => [
				player,
				...prevAuctionPlayers,
			]);
		}
	};

	const removeAuctionPlayer = (
		firstname: string,
		lastname: string,
		team: string
	) => {
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

	const trashPlayer = (player: AuctionPlayer | null) => {
		if (player) {
			setTrashedPlayers((prevTrashedPlayers) => [
				...prevTrashedPlayers,
				player,
			]);
			removeAuctionPlayer(player.firstname, player.lastname, player.team);
		}
	};

	const removeTrashPlayer = (player: AuctionPlayer | null) => {
		if (player) {
			setTrashedPlayers((prevTrashedPlayers) =>
				prevTrashedPlayers.filter(
					(trashPlayer) =>
						!(
							trashPlayer.firstname === player.firstname &&
							trashPlayer.lastname === player.lastname &&
							trashPlayer.team === player.team
						)
				)
			);
		}
	};

	const restorePlayer = (player: AuctionPlayer) => {
		console.log("CIAO");
		
		removeTrashPlayer(player);
		addAuctionPlayer(player);

	};

	const changeCurrentPrice = (price: number) => {
		const result = currentPrice + price;
		if (result >= 0) {
			setCurrentPrice(result);
		}
	};

	useEffect(() => {
		console.log("sono dentro");
		
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
				trashPlayer,
				trashedPlayers,
				restorePlayer,
			}}
		>
			{children}
		</PlayersContext.Provider>
	);
}
