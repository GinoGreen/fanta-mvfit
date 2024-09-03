import { cn } from "@/lib/utils";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface PriceHandlerProps extends React.HTMLAttributes<HTMLDivElement> {}
export const PriceHandler = ({ className }: PriceHandlerProps) => {
	
	return (
		<div className={cn("flex space-x-2", className)}>
			<Button className="font-bold rounded-full text-2xl h-14 aspect-square">
				-10
			</Button>
			<Button className="font-bold rounded-full text-2xl h-14 aspect-square">
				-5
			</Button>
			<Button className="font-bold rounded-full text-2xl h-14 aspect-square">
				-1
			</Button>
			<Input
				className='bg-popover text-2xl h-14 w-24 rounded-lg border-primary border-2'
				type='number'
				defaultValue={0}
			/>
			<Button className="font-bold rounded-full text-2xl h-14 aspect-square">
				+1
			</Button>
			<Button className="font-bold rounded-full text-2xl h-14 aspect-square">
				+5
			</Button>
			<Button className="font-bold rounded-full text-2xl h-14 aspect-square">
				+10
			</Button>
		</div>
	);
};
