import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const getSquads = () => {
	const filePath = path.join(process.cwd(), "public", "squads.json");
	const fileContent = fs.readFileSync(filePath, "utf-8");
	return JSON.parse(fileContent);
};

const getPlayers = () => {
	const filePath = path.join(process.cwd(), "public", "players.json");
	const fileContent = fs.readFileSync(filePath, "utf-8");
	return JSON.parse(fileContent);
};

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const type = searchParams.get("type");

	if (type === "squads") {
		try {
			const squads = getSquads();
			return NextResponse.json(squads);
		} catch (error) {
			return NextResponse.json(
				{ message: "Error reading file" },
				{ status: 500 }
			);
		}
	} else if (type === "players") {
		try {
			const players = getPlayers();
			return NextResponse.json(players);
		} catch (error) {
			return NextResponse.json(
				{ message: "Error reading file" },
				{ status: 500 }
			);
		}
	} else {
		return NextResponse.json(
			{ message: "Invalid query parameter" },
			{ status: 400 }
		);
	}
}
