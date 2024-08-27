import { HeroSection } from "@/components/hero-section";
import { Logo } from "@/components/logo";
import { SquadsSection } from "@/components/squads-section";

export default function Home() {
	return (
		<main className="container space-y-3 h-full">
			<div className='flex justify-end h-[100px]'>
				<Logo />
			</div>
			<HeroSection />
			<SquadsSection />
		</main>
	);
}
