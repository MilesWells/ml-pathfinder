import { Text } from '@mantine/core';
import type { Item } from '.';

export type ItemUseRestrictionsProps = {
	item: Item;
};

export function ItemUseRestrictions({ item }: ItemUseRestrictionsProps) {
	if (
		item === 'Command Center Warp Capsule' ||
		item === 'Ludibrium Warp Capsule' ||
		item === 'Omega Sector Warp Capsule'
	)
		return <Text fs="italic">Only works within Ludus Lake</Text>;

	if (item === 'Return to New Leaf City Scroll')
		return <Text fs="italic">Use within Amoria to reach NLC</Text>;

	if (item === 'Fruit Milk' || item === 'Strawberry Milk')
		return <Text fs="italic">Only works within Zipangu</Text>;

	return null;
}
