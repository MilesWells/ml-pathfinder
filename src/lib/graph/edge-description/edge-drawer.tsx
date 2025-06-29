import { Center, Drawer, useDrawersStack } from '@mantine/core';
import type { Edge } from '../edges';
import { EdgeDescriptionContent } from './edge-description-content';

export type EdgeDrawerProps = {
	edge: Edge;
};

export function EdgeDrawer({ edge }: EdgeDrawerProps) {
	const stack = useDrawersStack([edge.id]);

	return (
		<>
			<Center
				c="meso-yellow.6"
				onClick={() => stack.open(edge.id)}
				style={{ cursor: 'pointer' }}
				td="underline"
			>
				{edge.from} {`->`} {edge.to}
			</Center>

			<Drawer
				{...stack.register(edge.id)}
				styles={{
					body: {
						flexGrow: '1',
					},
					content: {
						display: 'flex',
						flexDirection: 'column',
					},
				}}
				title={`${edge.from} -> ${edge.to}`}
			>
				<Center h="100%" style={{ flexDirection: 'column' }}>
					<EdgeDescriptionContent edge={edge} />
				</Center>
			</Drawer>
		</>
	);
}
