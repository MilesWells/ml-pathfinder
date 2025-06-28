import { Text } from '@mantine/core';
import { itemDetailsMap } from '@/features/items';
import { ExternalLink } from '@/ui/external-link';
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
		</>
	);
}
