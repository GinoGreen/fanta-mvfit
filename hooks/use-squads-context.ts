import { SquadsContext } from "@/contexts/squads-context";
import { useContext } from "react";

// Hook personalizzato per usare il tenant corrente
export const useSquadsContext = () => {
	const context = useContext(SquadsContext);
	if (!context) {
		throw new Error("useSquadsContext must be used within a TenantProvider");
	}
	return { ...context };
}