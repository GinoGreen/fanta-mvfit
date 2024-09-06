"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { SquadColumn } from "./squad-column";
import { useSquadsContext } from "@/hooks/use-squads-context";

interface SquadsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const SquadsSection = ({ className }: SquadsSectionProps) => {
	const { squads } = useSquadsContext();
	
	return (
		<div
			className={cn(
				"w-full h-[calc(100%-(180px+12px))] p-3 px-2 rounded-lg bg-secondary flex gap-x-2",
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
