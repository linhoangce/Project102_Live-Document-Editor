import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./(root)/Provider";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Project102 - A Live Document Editor",
	description:
		"This is a live document editor that you can use to collaborate with others, and it is also assisted with built in AI technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				variables: { colorPrimary: "#3371FF", fontSize: "16px" },
			}}
		>
			<html
				lang="en"
				suppressHydrationWarning
			>
				<body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
					<Provider>{children}</Provider>
				</body>
			</html>
		</ClerkProvider>
	);
}
