"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePlayersContext } from "@/hooks/use-players-context";
import { Role } from "@/lib/types/squad";

interface RoleSelectorProps extends React.HTMLAttributes<HTMLDivElement> {}
export const RoleSelector = ({ className }: RoleSelectorProps) => {
	const { currentRole, changeCurrentRole } = usePlayersContext();

	const handleClick = (role: Role) => {
		changeCurrentRole(role);
	};

	return (
		<div className={cn(className)}>
			<div>
				<Button
					onClick={() => handleClick(Role.P)}
					className={cn(
						currentRole === Role.P
							? "outline-[#f8ab12]"
							: "outline-transparent",
						"outline outline-4 outline-offset-4 m-2 p-0 h-14 w-14 rounded-full font-bold text-lg bg-[#f8ab12]"
					)}
				>
					P
				</Button>
				<Button
					onClick={() => handleClick(Role.D)}
					className={cn(
						currentRole === Role.D
							? "outline-[#65c723]"
							: "outline-transparent",
						"outline outline-4 outline-offset-4 m-2 p-0 h-14 w-14 rounded-full font-bold text-lg bg-[#65c723]"
					)}
				>
					D
				</Button>
			</div>
			<div>
				<Button
					onClick={() => handleClick(Role.C)}
					className={cn(
						currentRole === Role.C
							? "outline-[#136af6]"
							: "outline-transparent",
						"outline outline-4 outline-offset-4 m-2 p-0 h-14 w-14 rounded-full font-bold text-lg bg-[#136af6]"
					)}
				>
					C
				</Button>
				<Button
					onClick={() => handleClick(Role.A)}
					className={cn(
						currentRole === Role.A
							? "outline-[#f21c3c]"
							: "outline-transparent",
						"outline outline-4 outline-offset-4 m-2 p-0 h-14 w-14 rounded-full font-bold text-lg bg-[#f21c3c]"
					)}
				>
					A
				</Button>
			</div>
		</div>
	);
};
