import { Center, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { Edge } from '../edges';
import { EdgeDescriptionContent } from './edge-description-content';

export type EdgeDrawerProps = {
	edge: Edge;
};

export function EdgeDrawer({ edge }: EdgeDrawerProps) {
	const [opened, { close, open }] = useDisclosure(false);

	return (
		<>
			<Center c="meso-yellow.6" onClick={open} style={{ cursor: 'pointer' }} td="underline">
				{edge.from} {`->`} {edge.to}
			</Center>

			<Drawer
				onClose={close}
				opened={opened}
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
