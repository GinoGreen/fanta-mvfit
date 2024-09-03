import { HeroSection } from "@/components/hero-section";
import { Logo } from "@/components/logo";
import { SquadsSection } from "@/components/squads-section";
import { PlayersProvider } from "@/contexts/players-context";

export default function Home() {
	return (
		<PlayersProvider>
			<main className='p-3 space-y-3 h-full'>
				{/* <div className='flex justify-end h-[100px]'>
				<Logo />
			</div> */}
				<HeroSection />
				<SquadsSection />
			</main>
		</PlayersProvider>
	);
}
