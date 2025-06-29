import { AppShell, AppShellFooter, AppShellMain, Center, Text, Title } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';

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
					<Title c="maplelegends-blue.6" ta="center" textWrap="wrap">
						MapleLegends Pathfinder
					</Title>
				</Center>

				{children}
			</AppShellMain>

			<AppShellFooter>
				<Center h="100%" ta="center">
					<Text fz="sm">
						Made with love for{' '}
						<ExternalLink href="https://maplelegends.com">MapleLegends</ExternalLink>
						{', '}
						but not affiliated.
					</Text>
				</Center>
			</AppShellFooter>
		</AppShell>
	);
}
