import { Center, Popover, PopoverDropdown, PopoverTarget } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import type { Edge } from '../edges';
import { EdgeDescriptionContent } from './edge-description-content';

export type EdgePopoverProps = {
	edge: Edge;
};

export function EdgePopover({ edge }: EdgePopoverProps) {
	const [opened, { close, open }] = useDisclosure(false);
	const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout>();

	useEffect(() => {
		return () => clearTimeout(closeTimeout);
	}, [closeTimeout]);

	function handleOpen() {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			setCloseTimeout(undefined);
		}

		open();
	}

	function handleClose() {
		setCloseTimeout(setTimeout(close, 75));
	}

	return (
		<Popover onDismiss={handleClose} opened={opened} position="right" shadow="md" withArrow>
			<PopoverTarget>
				<Center
					c="meso-yellow.6"
					onMouseEnter={handleOpen}
					onMouseLeave={handleClose}
					onTouchStart={open}
					style={{ cursor: 'pointer' }}
					td="underline"
				>
					{edge.from} {`->`} {edge.to}
				</Center>
			</PopoverTarget>

			<PopoverDropdown bg="dark.9" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
				<Center style={{ flexDirection: 'column' }}>
					<EdgeDescriptionContent edge={edge} />
				</Center>
			</PopoverDropdown>
		</Popover>
	);
}
