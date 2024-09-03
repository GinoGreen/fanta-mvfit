"use client";

import { useState, createContext } from "react";
import { Squad } from "@/lib/types/squad";

interface SquadsProviderProps {
	children: React.ReactNode;
}

const defaultContextValue = {
	squads: [] as Squad[],
	// changeTenant: (tenantId: number) => {},
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
	const [squads, setSquads] = useState<Squad[]>(initialSquads);
	

	return (
		<SquadsContext.Provider
			value={{ squads }}
		>
			{children}
		</SquadsContext.Provider>
	);
}