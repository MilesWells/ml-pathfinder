import {
	AppShell,
	AppShellFooter,
	AppShellHeader,
	AppShellMain,
	Center,
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
				<Center p="xs">Not affilitated with MapleLegends</Center>
			</AppShellFooter>
		</AppShell>
	);
}
