/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "content.fantacalcio.it",
				port: "",
				// pathname: "/**/*",
			},
		],
	},
	reactStrictMode: false,
};

export default nextConfig;
