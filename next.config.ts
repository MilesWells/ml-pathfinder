import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
	},
	output: 'export',
};

const wba = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

export default wba(nextConfig);
