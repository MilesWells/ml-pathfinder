'use client';

import { Center, Popover, PopoverDropdown, PopoverTarget, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function WalkIcon() {
	const [opened, { close, open }] = useDisclosure(false);

	return (
		<Popover opened={opened} position="left" shadow="md" withArrow>
			<PopoverTarget>
				<Center
					onMouseEnter={open}
					onMouseLeave={close}
					styles={{ root: { cursor: 'pointer', fontSize: 26, height: 30, width: 30 } }}
				>
					🚶
				</Center>
			</PopoverTarget>
			<PopoverDropdown style={{ pointerEvents: 'none' }}>
				<Text>Walk</Text>
			</PopoverDropdown>
		</Popover>
	);
}
