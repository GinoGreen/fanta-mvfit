import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fanta MV-Fit",
	description: "Asta fantacalcio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className="dark">
			<body className={cn(inter.className, "h-screen overflow-hidden")}>{children}</body>
		</html>
	);
}
