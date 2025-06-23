'use client';

import {
	Anchor,
	AppShell,
	AppShellMain,
	AppShellNavbar,
	Burger,
	Center,
	Stack,
	Text,
	Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Shell({ children }: React.PropsWithChildren) {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			navbar={{
				breakpoint: 'sm',
				collapsed: {
					mobile: !opened,
				},
				width: 300,
			}}
			padding="sm"
		>
			<AppShellNavbar p="xs">
				<Stack h="100%">
					<Text ta="center" mt="auto">
						Created out of my love for{' '}
						<Anchor
							href="https://maplelegends.com/"
							target="_blank"
							rel="noopener"
						>
							MapleLegends
						</Anchor>
						{', '}
						but not affiliated.
					</Text>
				</Stack>
			</AppShellNavbar>

			<AppShellMain>
				<Center>
					<Center p="xs">
						<Title>MapleLegends Pathfinder</Title>
					</Center>

					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
				</Center>

				{children}
			</AppShellMain>
		</AppShell>
	);
}
