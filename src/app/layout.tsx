import '@mantine/core/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { MantineWrapper } from '@/features/root-layout/mantine-wrapper';
import Shell from '@/features/root-layout/shell';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next Template',
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
