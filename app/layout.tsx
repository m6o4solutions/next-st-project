import { ReactNode } from "react";

import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "NextJS Starter Template",
	description: "Starter template for NextJS projects using Tailwind CSS.",
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>

			<body className="flex h-screen flex-col">
				
					<header>Header Goes Here</header>

					<main>{children}</main>

					<footer className="mt-auto">Footer Goes Here</footer>
				
			</body>
		</html>
	);
};

export default RootLayout;
