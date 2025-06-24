import { Anchor, AppShell, AppShellFooter, AppShellMain, Center, Text, Title } from '@mantine/core';

export default function Shell({ children }: React.PropsWithChildren) {
	return (
		<AppShell
			footer={{
				height: 30,
			}}
			padding="sm"
		>
			<AppShellMain>
				<Center>
					<Title p="xs" ta="center">
						MapleLegends Pathfinder
					</Title>
				</Center>

				{children}
			</AppShellMain>

			<AppShellFooter>
				<Center h="100%" ta="center">
					<Text fz="sm">
						Made with love for{' '}
						<Anchor href="https://maplelegends.com/" rel="noopener" target="_blank">
							MapleLegends
						</Anchor>
						{', '}
						but not affiliated.
					</Text>
				</Center>
			</AppShellFooter>
		</AppShell>
	);
}
