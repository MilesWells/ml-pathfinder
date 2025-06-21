import { AppShell, AppShellMain } from '@mantine/core';

export default function Shell({ children }: React.PropsWithChildren) {
	return (
		<AppShell padding="sm">
			<AppShellMain>{children}</AppShellMain>
		</AppShell>
	);
}
