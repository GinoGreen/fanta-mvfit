import { getRoleName } from "@/hooks/use-role-hook";
import { Role } from "@/lib/types/squad";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const badgeRoleVariants = cva("rounded-full flex justify-center font-semibold w-fit items-center px-2 py-1 text-sm", {
	variants: {
		variant: {
			default: "bg-primary",
			Centrocampista: "bg-[#136af6]",
			Portiere: "bg-[#f8ab12]",
			Attaccante: "bg-[#f21c3c]",
			Difensore: "bg-[#65c723]",
		},
		// size: {
		// 	default: "h-9 px-4 py-2",
		// 	sm: "h-8 rounded-md px-3 text-xs",
		// 	lg: "h-10 rounded-md px-8",
		// 	icon: "h-9 w-9",
		// },
	},
	defaultVariants: {
		variant: "default",
		// size: "default",
	},
});

interface BadgeRoleProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeRoleVariants> {
	role: Role;
	icon?: boolean;
}
export const BadgeRole = ({ className, role, icon = false }: BadgeRoleProps) => {
	const variant = getRoleName(role) as "Centrocampista" | "Portiere" | "Attaccante" | "Difensore";
	
	return (
		<div className={cn(badgeRoleVariants({ variant, className }))}>
			<p>{icon ? role.toString() : variant}</p>
		</div>
	);
};
