import { cn } from "@/lib/utils";
import React from "react";
import { SquadColumn } from "./squad-column";
import { Role, Squad, Team } from "@/lib/types/squad";

interface SquadsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const SquadsSection = ({ className }: SquadsSectionProps) => {
	const squads: Squad[] = [
		{
			coach: "Niccoló",
			name: "28 Febbraio",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Quagliarella",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Luigi",
					lastname: "Verde",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Luigi",
			name: "Potato",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
		{
			coach: "Claudio",
			name: "Giugliano",
			points: 500,
			players: [
				{
					firstname: "Edoardo",
					lastname: "Bove",
					role: Role.C,
					team: Team.Roma,
				},
			],
		},
	];
	return (
		<div
			className={cn(
				"w-full h-[calc(100%-(180px+12px))] p-3 rounded-lg bg-secondary flex gap-x-2",
				className
			)}
		>
			{squads.map((squad) => (
				<SquadColumn
					squad={squad}
					key={squad.name}
				/>
			))}
		</div>
	);
};
