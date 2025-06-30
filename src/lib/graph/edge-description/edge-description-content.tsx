import { ItemConsumption } from '@/lib/items/item-consumption';
import { ItemDrawerLink } from '@/lib/items/item-drawer-link';
import { MapFeatureDetails } from '@/lib/map-features/map-feature-details';
import { WalkPathingSteps } from '@/lib/walk-pathing-steps';
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
		</>
	);
}
