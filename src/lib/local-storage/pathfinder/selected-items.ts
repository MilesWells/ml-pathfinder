import { useLocalStorage } from '@mantine/hooks';
import { useCallback } from 'react';
import type { Item } from '@/lib/items';

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

export function useSelectedItems() {
	const [selectedItems, setSelectedItems] = useLocalStorage<SelectedItemMap>({
		defaultValue: DEFAULT_ITEMS_FALSE,
		key: 'selected-items',
	});

	const addItem = useCallback(
		(item: Item | Item[]) => {
			const itemsToAdd = Array.isArray(item) ? item : [item];

			const partialMap = itemsToAdd.reduce<Partial<SelectedItemMap>>((acc, cur) => {
				acc[cur] = true;

				return acc;
			}, {});

			setSelectedItems(cur => {
				const newSelectedItems = {
					...cur,
					...partialMap,
				};

				return newSelectedItems;
			});
		},
		[setSelectedItems],
	);

	const removeItem = useCallback(
		(item: Item | Item[]) => {
			const itemsToRemove = Array.isArray(item) ? item : [item];

			const partialMap = itemsToRemove.reduce<Partial<SelectedItemMap>>((acc, cur) => {
				acc[cur] = false;

				return acc;
			}, {});

			setSelectedItems(cur => {
				const newSelectedItems = {
					...cur,
					...partialMap,
				};

				return newSelectedItems;
			});
		},
		[setSelectedItems],
	);

	const removeAll = useCallback(() => {
		setSelectedItems(DEFAULT_ITEMS_FALSE);
	}, [setSelectedItems]);

	const selectAll = useCallback(() => {
		setSelectedItems(DEFAULT_ITEMS_TRUE);
	}, [setSelectedItems]);

	return { addItem, removeAll, removeItem, selectAll, selectedItems };
}
