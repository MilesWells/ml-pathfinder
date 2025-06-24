import '@mantine/core/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { MantineWrapper } from '@/features/root-layout/mantine-wrapper';
import Shell from '@/features/root-layout/shell';

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
});

export const metadata: Metadata = {
	title: 'MapleLegends Pathfinder',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
			</head>

			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MantineWrapper>
					<Shell>{children}</Shell>
				</MantineWrapper>
			</body>
		</html>
	);
}
