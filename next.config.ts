import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
	},
	output: 'export',
};

export default nextConfig;
