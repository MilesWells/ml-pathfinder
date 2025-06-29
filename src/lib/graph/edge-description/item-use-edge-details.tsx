import { Text } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import type { Edge, ItemEdge, ItemTaxiEdge, MapFeatureEdge } from '../edges';

export type ItemUseEdge = Extract<Edge, ItemEdge | ItemTaxiEdge | MapFeatureEdge>;

export type ItemUseEdgeDetailsProps = {
	edge: ItemUseEdge;
};

export function ItemUseEdgeDetails({ edge: { from, to, item } }: ItemUseEdgeDetailsProps) {
	if (
		item === 'Command Center Warp Capsule' ||
		item === 'Ludibrium Warp Capsule' ||
		item === 'Omega Sector Warp Capsule'
	)
		return <Text fs="italic">Only works within Ludus Lake</Text>;

	if (item === 'Return to New Leaf City Scroll')
		return <Text fs="italic">Only works within Victoria Island</Text>;

	if (item === 'Fruit Milk' || item === 'Strawberry Milk')
		return <Text fs="italic">Only works within Zipangu</Text>;

	if (item === 'Return Scroll - Nearest Town') {
		if (from === 'Korean Folk Town' && to === 'Aqua Road')
			return (
				<Text fs="italic">
					Use in{' '}
					<ExternalLink href="https://maplelegends.com/lib/map?id=230030200">
						The Sharp Unknown
					</ExternalLink>
				</Text>
			);
	}

	return null;
}
