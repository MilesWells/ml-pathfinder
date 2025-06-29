import { Text } from '@mantine/core';
import { ItemConsumption } from '@/lib/items/item-consumption';
import { ItemDrawerLink } from '@/lib/items/item-drawer-link';
import type { Edge } from '../edges';
import { ItemUseEdgeDetails } from './item-use-edge-details';
import { MapFeatureEdgeContent } from './map-feature-edge-content';
import { MesosEdgeContent } from './mesos-edge-content';
import { NpcEdgeContent } from './npc-edge-content';

export type EdgeDescriptionContentProps = {
	edge: Edge;
};

export function EdgeDescriptionContent({ edge }: EdgeDescriptionContentProps) {
	return (
		<>
			{edge.method === 'Walk' && <Text>Walk</Text>}
			{'npc' in edge && <NpcEdgeContent edge={edge} />}
			{'mapFeature' in edge && <MapFeatureEdgeContent edge={edge} />}
			{'mesos' in edge && <MesosEdgeContent edge={edge} />}
			{'item' in edge && !('mapFeature' in edge) && (
				<>
					<ItemDrawerLink item={edge.item} />

					<ItemUseEdgeDetails edge={edge} />

					<ItemConsumption item={edge.item} />
				</>
			)}
		</>
	);
}
