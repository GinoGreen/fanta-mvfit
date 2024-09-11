import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { AuctionPlayer, Squad } from "@/lib/types/squad";

const saveSquads = (squads: Squad[]) => {
	const filePath = path.join(process.cwd(), "public", "squads.json");
	fs.writeFileSync(filePath, JSON.stringify(squads, null, 2));
	return NextResponse.json({ message: "File updated successfully" });
};

const savePlayers = (players: AuctionPlayer) => {
	const filePath = path.join(process.cwd(), "public", "players.json");
	fs.writeFileSync(filePath, JSON.stringify(players, null, 2));
	return NextResponse.json({ message: "File updated successfully" });
};

export async function POST(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const type = searchParams.get("type");
		console.log(type);

		if (type === "squads") {
			const squads = await req.json();
			return saveSquads(squads);
		} else if (type === "players") {
			const players = await req.json();
			return savePlayers(players);
		} else {
			return NextResponse.json(
				{ message: "Invalid query parameter" },
				{ status: 400 }
			);
		}
	} catch (error) {
		return NextResponse.json(
			{ message: "Error writing file" },
			{ status: 500 }
		);
	}
}
