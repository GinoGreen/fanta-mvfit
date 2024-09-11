"use client";

import React, { useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface CharGeneratorProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CharGenerator = ({ className }: CharGeneratorProps) => {
	const [randomLetter, setRandomLetter] = useState<string | null>(null);
	const [open, setOpen] = useState<boolean>(false);

	const generateRandomLetter = () => {
		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const randomIndex = Math.floor(Math.random() * letters.length);
		setRandomLetter(letters[randomIndex]);
	};

	useEffect(() => {
		if (!open) {
			setRandomLetter(null);
		}
	}, [open]);

	return (
		<div className='absolute left-0 top-0'>
			<Dialog
				open={open}
				onOpenChange={setOpen}
			>
				<DialogTrigger asChild>
					<Button className=''>Genera Lettera Casuale</Button>
				</DialogTrigger>
				<DialogContent className='h-[30vh]'>
					<DialogHeader className='h-fit'>
						<DialogTitle>Genera lettera casuale</DialogTitle>
						<DialogDescription>
							Clicca il bottone per generare una lettera casuale
						</DialogDescription>
					</DialogHeader>
					<div className='w-full h-full flex flex-col justify-between items-center'>
						{randomLetter && (
							<div className='text-center text-[60px]'>
								{randomLetter}
							</div>
						)}
						<Button
							className='mt-auto'
							onClick={() => generateRandomLetter()}
						>
							Genera Lettera
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
