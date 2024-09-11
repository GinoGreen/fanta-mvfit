import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Logo = ({ className }: LogoProps) => {
	return (
		<div
			className={cn(
				"flex items-center justify-center",
				className
			)}
		>
			<Image
				className='object-cover object-center'
				src={"/img/logo.png"}
				alt='Logo MV-Fit'
				width={240}
				height={240}
			/>
		</div>
	);
};
