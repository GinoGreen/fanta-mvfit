import { cn } from "@/lib/utils";
import React from "react";

interface SquadsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const SquadsSection = ({ className }: SquadsSectionProps) => {
	return (
		<div
			className={cn("w-full h-[100%] p-3 rounded-lg bg-secondary", className)}
		></div>
	);
};
