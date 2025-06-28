import { Center, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { itemDetailsMap } from '@/features/items';
import { ExternalLink } from '@/ui/external-link';
import type { Edge } from '../edges';
import { ItemConsumption } from './item-consumption';
import { ItemUseEdgeDetails } from './item-use-edge-details';
import { MapFeaturePopoverContent } from './map-feature-popover-content';
import { MesosPopoverContent } from './mesos-popover-content';
import { NpcPopoverContent } from './npc-popover-content';

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
					{edge.method === 'Walk' && <Text>Walk</Text>}
					{'npc' in edge && <NpcPopoverContent edge={edge} />}
					{'mapFeature' in edge && <MapFeaturePopoverContent edge={edge} />}
					{'item' in edge && edge.item && (
						<>
							<Text>
								Item: <ExternalLink href={itemDetailsMap[edge.item].docsLink}>{edge.item}</ExternalLink>
							</Text>

							<ItemUseEdgeDetails edge={edge} />

							<ItemConsumption item={edge.item} />
						</>
					)}
					{'mesos' in edge && <MesosPopoverContent edge={edge} />}
				</Center>
			</Drawer>
		</>
	);
}
