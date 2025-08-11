'use client';

import { useAtom } from 'jotai';
import { useMemo } from 'react';
import type { Item } from '../pathfinder-items';
import { immerStorageAtom } from './immer-storage-atom';

export type SelectedItemMap = Record<Item, boolean>;

export const DEFAULT_ITEMS_FALSE: SelectedItemMap = {
	'Command Center Warp Capsule': false,
	'Desert Coin': false,
	'Energy Shard': false,
	'Eos Rock Scroll': false,
	'Fruit Milk': false,
	'Ludibrium Warp Capsule': false,
	'Magic Seed': false,
	'Omega Sector Warp Capsule': false,
	'Orbis Rock Scroll': false,
	'Return Scroll - Nearest Town': false,
	'Return to New Leaf City Scroll': false,
	'Strawberry Milk': false,
	'VIP Ticket to Florina Beach': false,
	'Warp Card': false,
};

export const DEFAULT_ITEMS_TRUE: SelectedItemMap = {
	'Command Center Warp Capsule': true,
	'Desert Coin': true,
	'Energy Shard': true,
	'Eos Rock Scroll': true,
	'Fruit Milk': true,
	'Ludibrium Warp Capsule': true,
	'Magic Seed': true,
	'Omega Sector Warp Capsule': true,
	'Orbis Rock Scroll': true,
	'Return Scroll - Nearest Town': true,
	'Return to New Leaf City Scroll': true,
	'Strawberry Milk': true,
	'VIP Ticket to Florina Beach': true,
	'Warp Card': true,
};

const selectedItemsImmerStorageAtom = immerStorageAtom<SelectedItemMap>([
	'jotai/selected-items',
	DEFAULT_ITEMS_FALSE,
]);

export function useSelectedItems() {
	const [selectedItems, setSelectedItems] = useAtom(selectedItemsImmerStorageAtom);

	return useMemo(
		() => ({
			addItem: (item: Item | Item[]) => {
				setSelectedItems(state => {
					if (!Array.isArray(item)) state[item] = true;
					else for (const i of item) state[i] = true;
				});
			},
			removeAll: () => {
				setSelectedItems(DEFAULT_ITEMS_FALSE);
			},
			removeItem: (item: Item | Item[]) => {
				setSelectedItems(state => {
					if (!Array.isArray(item)) state[item] = false;
					else for (const i of item) state[i] = false;
				});
			},
			selectAll: () => {
				setSelectedItems(DEFAULT_ITEMS_TRUE);
			},
			selectedItems,
		}),
		[selectedItems, setSelectedItems],
	);
}
