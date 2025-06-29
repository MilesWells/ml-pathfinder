import { Text } from '@mantine/core';
import { ItemDrawer } from '@/lib/items/item-drawer';
import type { Edge } from '../edges';
import { ItemConsumption } from './item-consumption';
import { ItemUseEdgeDetails } from './item-use-edge-details';
import { MapFeaturePopoverContent } from './map-feature-popover-content';
import { MesosPopoverContent } from './mesos-popover-content';
import { NpcPopoverContent } from './npc-popover-content';

export type EdgeDescriptionContentProps = {
	edge: Edge;
};

export function EdgeDescriptionContent({ edge }: EdgeDescriptionContentProps) {
	return (
		<>
			{edge.method === 'Walk' && <Text>Walk</Text>}
			{'npc' in edge && <NpcPopoverContent edge={edge} />}
			{'mapFeature' in edge && <MapFeaturePopoverContent edge={edge} />}
			{'mesos' in edge && <MesosPopoverContent edge={edge} />}
			{'item' in edge && !('mapFeature' in edge) && (
				<>
					<ItemDrawer item={edge.item} />

					<ItemUseEdgeDetails edge={edge} />

					<ItemConsumption item={edge.item} />
				</>
			)}
		</>
	);
}
