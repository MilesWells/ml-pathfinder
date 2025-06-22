import {
	AppShell,
	AppShellFooter,
	AppShellHeader,
	AppShellMain,
} from '@mantine/core';

export default function Shell({ children }: React.PropsWithChildren) {
	return (
		<AppShell
			header={{
				height: '70',
			}}
			footer={{
				height: '40',
			}}
			padding="sm"
		>
			<AppShellHeader>MapleLegends Pathfinder</AppShellHeader>
			<AppShellMain>{children}</AppShellMain>
			<AppShellFooter>Not affilitated with MapleLegends</AppShellFooter>
		</AppShell>
	);
}
