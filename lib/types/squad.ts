export interface Squad {
	coach: string;
	name: string;
	players: SquadPlayer[];
	points: number;
}

export interface SquadPlayer {
	firstname: string;
	lastname: string;
	role: Role;
	team: string;
	purchasePrice: number;
}

export interface AuctionPlayer {
	firstname: string;
	lastname: string;
	role: Role;
	team: string;
}

export enum Role {
	C = "C",
	P = "P",
	D = "D",
	A = "A",
}

export enum Team {
	Roma,
}
