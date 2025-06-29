import { Box } from '@mantine/core';
import type { Edge } from '../edges';
import { EdgeDrawer } from './edge-drawer';
import { EdgePopover } from './edge-popover';

export type EdgeDescriptionProps = {
	edge: Edge;
};

export function EdgeDescription(props: EdgeDescriptionProps) {
	return (
		<>
			<Box visibleFrom="md">
				<EdgePopover {...props} />
			</Box>

			<Box hiddenFrom="md">
				<EdgeDrawer {...props} />
			</Box>
		</>
	);
}
