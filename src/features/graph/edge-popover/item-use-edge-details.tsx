import { Text } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import type { Edge, ItemEdge, ItemTaxiEdge } from '../edges';

export type ItemUseEdge = Extract<Edge, ItemEdge | ItemTaxiEdge>;

export type ItemDetailsProps = {
	edge: ItemUseEdge;
};

export function ItemDetails({ edge: { from, to, item } }: ItemDetailsProps) {
	if (
		item === 'Command Center Warp Capsule' ||
		item === 'Ludibrium Warp Capsule' ||
		item === 'Omega Sector Warp Capsule'
	)
		return <Text>Only works within Ludus Lake</Text>;

	if (item === 'Return to New Leaf City Scroll') return <Text>Only works within Victoria Island</Text>;

	if (item === 'Fruit Milk' || item === 'Strawberry Milk') return <Text>Only works within Zipangu</Text>;

	if (item === 'Return Scroll - Nearest Town') {
		if (from === 'Korean Folk Town' && to === 'Aqua Road')
			return (
				<Text>
					Use in <ExternalLink href="https://maplelegends.com/lib/map?id=230030200">The Sharp Unknown</ExternalLink>
				</Text>
			);
	}

	return null;
}
