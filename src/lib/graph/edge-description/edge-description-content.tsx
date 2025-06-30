import { Text } from '@mantine/core';
import { ItemConsumption } from '@/lib/items/item-consumption';
import { ItemDrawerLink } from '@/lib/items/item-drawer-link';
import { MapFeatureDetails } from '@/lib/map-features/map-feature-details';
import { WalkPathingSteps } from '@/lib/walk-pathing-steps';
import { ExternalLink } from '@/ui/external-link';
import { NpcDescription } from '../../npcs/npc-description';
import type { Edge } from '../edges';
import { ItemUseEdgeDetails } from './item-use-edge-details';
import { MesosEdgeContent } from './mesos-edge-content';

export type EdgeDescriptionContentProps = {
	edge: Edge;
};

export function EdgeDescriptionContent({ edge }: EdgeDescriptionContentProps) {
	return (
		<>
			{edge.method === 'Walk' && <WalkPathingSteps edgeId={edge.id} />}
			{'npc' in edge && <NpcDescription npc={edge.npc} />}
			{'mapFeature' in edge && <MapFeatureDetails mapFeature={edge.mapFeature} />}
			{'mesos' in edge && <MesosEdgeContent edge={edge} />}
			{'item' in edge && !('mapFeature' in edge) && (
				<>
					<ItemDrawerLink item={edge.item} />

					<ItemUseEdgeDetails edge={edge} />

					<ItemConsumption item={edge.item} />
				</>
			)}

			{edge.to === 'Neo Tokyo' && (
				<Text ta="center">
					Follow{' '}
					<ExternalLink href="https://forum.maplelegends.com/index.php?threads/neo-tokyo-guide.25729/">
						Zooploop's guide
					</ExternalLink>{' '}
					to access Neo Tokyo
				</Text>
			)}
		</>
	);
}
