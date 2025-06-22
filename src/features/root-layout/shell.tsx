import {
	Anchor,
	AppShell,
	AppShellFooter,
	AppShellHeader,
	AppShellMain,
	Center,
	Text,
	Title,
} from '@mantine/core';

export default function Shell({ children }: React.PropsWithChildren) {
	return (
		<AppShell
			header={{
				height: '65',
			}}
			footer={{
				height: '45',
			}}
			padding="sm"
		>
			<AppShellHeader>
				<Center p="xs">
					<Title>MapleLegends Pathfinder</Title>
				</Center>
			</AppShellHeader>

			<AppShellMain>{children}</AppShellMain>

			<AppShellFooter>
				<Center p="xs">
					<Text>
						Made with love, but not affilitated with{' '}
						<Anchor
							href="https://maplelegends.com/"
							target="_blank"
							rel="noopener"
						>
							MapleLegends
						</Anchor>
					</Text>
				</Center>
			</AppShellFooter>
		</AppShell>
	);
}
