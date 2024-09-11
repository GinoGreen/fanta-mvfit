import { HeroSection } from "@/components/hero-section";
import { SquadsSection } from "@/components/squads-section";
import { PlayersProvider } from "@/contexts/players-context";
import { SquadsProvider } from "@/contexts/squads-context";

export default function Home() {
	return (
		<PlayersProvider>
			<SquadsProvider>
				<main className='p-3 space-y-3 h-full relative'>
					<HeroSection />
					<SquadsSection />
				</main>
			</SquadsProvider>
		</PlayersProvider>
	);
}
