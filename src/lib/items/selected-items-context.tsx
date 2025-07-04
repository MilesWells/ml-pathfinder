'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { z } from 'zod';
import type { Item } from '.';

const SELECTED_ITEMS_LOCAL_STORAGE_KEY = 'ml-p-selected-items';

const selectedItemsMapSchema = z.object({
	'Command Center Warp Capsule': z.boolean(),
	'Desert Coin': z.boolean(),
	'Energy Shard': z.boolean(),
	'Eos Rock Scroll': z.boolean(),
	'Fruit Milk': z.boolean(),
	'Ludibrium Warp Capsule': z.boolean(),
	'Magic Seed': z.boolean(),
	'Omega Sector Warp Capsule': z.boolean(),
	'Orbis Rock Scroll': z.boolean(),
	'Return Scroll - Nearest Town': z.boolean(),
	'Return to New Leaf City Scroll': z.boolean(),
	'Strawberry Milk': z.boolean(),
	'VIP Ticket to Florina Beach': z.boolean(),
	'Warp Card': z.boolean(),
}) satisfies z.ZodObject<Record<Item, z.ZodTypeAny>>;

export type SelectedItemMap = z.infer<typeof selectedItemsMapSchema>;

export type SelectedItemsContextValue = {
	addItem: (item: Item | Item[]) => void;
	removeAll: () => void;
	removeItem: (item: Item | Item[]) => void;
	selectedItems: SelectedItemMap;
	selectAll: () => void;
};

export const SelectedItemsContext = createContext<SelectedItemsContextValue | null>(null);

const DEFAULT_ITEMS_FALSE: SelectedItemMap = {
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

const DEFAULT_ITEMS_TRUE: SelectedItemMap = {
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

export function SelectedItemsProvider({ children }: React.PropsWithChildren) {
	const [selectedItems, setSelectedItems] = useState<SelectedItemMap>(DEFAULT_ITEMS_FALSE);

	useEffect(() => {
		const localStorageValue = localStorage.getItem(SELECTED_ITEMS_LOCAL_STORAGE_KEY);
		if (!localStorageValue) return;

		try {
			setSelectedItems(selectedItemsMapSchema.parse(JSON.parse(localStorageValue)));
		} catch {
			return;
		}
	}, []);

	const addItem = useCallback<SelectedItemsContextValue['addItem']>(item => {
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

			localStorage.setItem(SELECTED_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newSelectedItems));

			return newSelectedItems;
		});
	}, []);

	const removeItem = useCallback<SelectedItemsContextValue['removeItem']>(item => {
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

			localStorage.setItem(SELECTED_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newSelectedItems));

			return newSelectedItems;
		});
	}, []);

	const removeAll = useCallback(() => {
		setSelectedItems(DEFAULT_ITEMS_FALSE);
		localStorage.setItem(SELECTED_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_ITEMS_FALSE));
	}, []);

	const selectAll = useCallback(() => {
		setSelectedItems(DEFAULT_ITEMS_TRUE);
		localStorage.setItem(SELECTED_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_ITEMS_TRUE));
	}, []);

	const value = useMemo(
		() => ({
			addItem,
			removeAll,
			removeItem,
			selectAll,
			selectedItems,
		}),
		[addItem, removeAll, removeItem, selectAll, selectedItems],
	);

	return <SelectedItemsContext value={value}>{children}</SelectedItemsContext>;
}

export function useSelectedItems() {
	const value = useContext(SelectedItemsContext);

	if (value === null) {
		throw new Error('useSelectedItems must be used within a SelectedItemsProvider');
	}

	return value;
}
