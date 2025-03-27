import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "example.com",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
			},
		],
	},
};

export default nextConfig;
