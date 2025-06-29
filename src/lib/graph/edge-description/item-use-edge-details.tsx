import { Text } from '@mantine/core';
import { ItemUseRestrictions } from '@/lib/items/item-use-restrictions';
import { ExternalLink } from '@/ui/external-link';
import type { Edge, ItemEdge, ItemTaxiEdge, MapFeatureEdge } from '../edges';

export type ItemUseEdge = Extract<Edge, ItemEdge | ItemTaxiEdge | MapFeatureEdge>;

export type ItemUseEdgeDetailsProps = {
	edge: ItemUseEdge;
};

export function ItemUseEdgeDetails({ edge: { from, to, item } }: ItemUseEdgeDetailsProps) {
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

	if (item) return <ItemUseRestrictions item={item} />;

	return null;
}
