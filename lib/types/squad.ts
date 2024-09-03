export interface Squad {
	coach: string;
	name: string;
	players: Player[];
	points: number;
}

export interface Player {
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
