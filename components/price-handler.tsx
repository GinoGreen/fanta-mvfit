"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { usePlayersContext } from "@/hooks/use-players-context";

interface PriceHandlerProps extends React.HTMLAttributes<HTMLDivElement> {}
export const PriceHandler = ({ className }: PriceHandlerProps) => {
	const { currentPrice, changeCurrentPrice, setCurrentPrice } =
		usePlayersContext();
	const [price, setPrice] = useState<number>(currentPrice);

	const updatePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value == "") {
			
			setCurrentPrice(0)
		} else {
			setPrice(parseInt(e.target.value));
		}
	};

	useEffect(() => {		
		if (!isNaN(price) && price !== currentPrice) {
			setCurrentPrice(price);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [price]);

	return (
		<div className={cn("flex space-x-2", className)}>
			<Button
				onClick={() => changeCurrentPrice(-10)}
				className='font-bold rounded-full text-2xl h-14 aspect-square'
			>
				-10
			</Button>
			<Button
				onClick={() => changeCurrentPrice(-5)}
				className='font-bold rounded-full text-2xl h-14 aspect-square'
			>
				-5
			</Button>
			<Button
				onClick={() => changeCurrentPrice(-1)}
				className='font-bold rounded-full text-2xl h-14 aspect-square'
			>
				-1
			</Button>
			<Input
				className='bg-popover text-2xl h-14 w-24 rounded-lg border-primary border-2'
				type='number'
				value={currentPrice}
				onChange={updatePrice}
			/>
			<Button
				onClick={() => changeCurrentPrice(+1)}
				className='font-bold rounded-full text-2xl h-14 aspect-square'
			>
				+1
			</Button>
			<Button
				onClick={() => changeCurrentPrice(+5)}
				className='font-bold rounded-full text-2xl h-14 aspect-square'
			>
				+5
			</Button>
			<Button
				onClick={() => changeCurrentPrice(+10)}
				className='font-bold rounded-full text-2xl h-14 aspect-square'
			>
				+10
			</Button>
		</div>
	);
};
