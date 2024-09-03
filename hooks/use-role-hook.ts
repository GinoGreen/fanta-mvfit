import { Role } from "@/lib/types/squad";

// Hook personalizzato per usare il tenant corrente
export const getRoleName = (role: Role) => {
	
	switch (role) {
		case "A":
			return "Attaccante";
		case "P":
			return "Portiere";
		case "D":
			return "Difensore";
		case "C":
			return "Centrocampista";
	}
}