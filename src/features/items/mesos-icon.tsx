'use client';

import { Center, Popover, PopoverDropdown, PopoverTarget, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export type MesosIconProps = {
	mesos: number;
};

export function MesosIcon({ mesos }: MesosIconProps) {
	const [opened, { close, open }] = useDisclosure(false);

	return (
		<Popover opened={opened} position="left" shadow="md" withArrow>
			<PopoverTarget>
				<Center
					onMouseEnter={open}
					onMouseLeave={close}
					styles={{ root: { cursor: 'pointer', height: 30, width: 30 } }}
				>
					<img alt={`${mesos} mesos`} src="/images/items/mesos.png" />
				</Center>
			</PopoverTarget>
			<PopoverDropdown style={{ pointerEvents: 'none' }}>
				<Text>{mesos} mesos</Text>
			</PopoverDropdown>
		</Popover>
	);
}
