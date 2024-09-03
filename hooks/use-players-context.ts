import { PlayersContext } from "@/contexts/players-context";
import { useContext } from "react";

// Hook personalizzato per usare il tenant corrente
export const usePlayersContext = () => {
	const context = useContext(PlayersContext);
	if (!context) {
		throw new Error("usePlayersContext must be used within a TenantProvider");
	}
	return { ...context };
}