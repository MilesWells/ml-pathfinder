'use client';

import {
	Anchor,
	AppShell,
	AppShellMain,
	AppShellNavbar,
	Burger,
	Center,
	CloseButton,
	type MantineSize,
	Stack,
	Text,
	Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const MOBILE_BREAKPOINT: MantineSize = 'sm';

export default function Shell({ children }: React.PropsWithChildren) {
	const [opened, { close, open }] = useDisclosure();

	return (
		<AppShell
			navbar={{
				breakpoint: MOBILE_BREAKPOINT,
				collapsed: {
					mobile: !opened,
				},
				width: 300,
			}}
			padding="sm"
		>
			<AppShellNavbar p="xs">
				<CloseButton onClick={close} hiddenFrom={MOBILE_BREAKPOINT} />

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
					<Title order={3} p="xs" ta="center">
						MapleLegends Pathfinder
					</Title>

					<Burger
						opened={opened}
						onClick={open}
						hiddenFrom={MOBILE_BREAKPOINT}
						size="sm"
					/>
				</Center>

				{children}
			</AppShellMain>
		</AppShell>
	);
}
