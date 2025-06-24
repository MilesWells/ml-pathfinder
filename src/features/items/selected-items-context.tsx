'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { z } from 'zod';
import type { Item } from '.';

const LOCAL_STORAGE_KEY = 'selected-items';

const selectedItemsMapSchema = z.object({
	'Command Center Warp Capsule': z.boolean(),
	'Desert Coin': z.boolean(),
	'Energy Shard': z.boolean(),
	'Eos Rock Scroll': z.boolean(),
	'Fruit Milk': z.boolean(),
	'Gate Pass': z.boolean(),
	'Ludibrium Warp Capsule': z.boolean(),
	'Magic Seed': z.boolean(),
	'Omega Sector Warp Capsule': z.boolean(),
	'Orbis Rock Scroll': z.boolean(),
	'Return to New Leaf City Scroll': z.boolean(),
	'Strawberry Milk': z.boolean(),
	'VIP Ticket to Florina Beach': z.boolean(),
	'Warp Card': z.boolean(),
}) satisfies z.ZodObject<Record<Item, z.ZodTypeAny>>;

export type SelectedItemMap = z.infer<typeof selectedItemsMapSchema>;

export type SelectedItemsContextValue = {
	addItem: (item: Item | Item[]) => void;
	removeItem: (item: Item | Item[]) => void;
	selectedItems: SelectedItemMap;
};

export const SelectedItemsContext = createContext<SelectedItemsContextValue | null>(null);

const DEFAULT_ITEMS: SelectedItemMap = {
	'Command Center Warp Capsule': false,
	'Desert Coin': false,
	'Energy Shard': false,
	'Eos Rock Scroll': false,
	'Fruit Milk': false,
	'Gate Pass': false,
	'Ludibrium Warp Capsule': false,
	'Magic Seed': false,
	'Omega Sector Warp Capsule': false,
	'Orbis Rock Scroll': false,
	'Return to New Leaf City Scroll': false,
	'Strawberry Milk': false,
	'VIP Ticket to Florina Beach': false,
	'Warp Card': false,
};

export function SelectedItemsProvider({ children }: React.PropsWithChildren) {
	const [selectedItems, setSelectedItems] = useState<SelectedItemMap>(() => {
		const localStorageValue = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (!localStorageValue) return DEFAULT_ITEMS;

		try {
			return selectedItemsMapSchema.parse(JSON.parse(localStorageValue));
		} catch {
			return DEFAULT_ITEMS;
		}
	});

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

			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSelectedItems));

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

			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSelectedItems));

			return newSelectedItems;
		});
	}, []);

	const value = useMemo(() => ({ addItem, removeItem, selectedItems }), [addItem, removeItem, selectedItems]);

	return <SelectedItemsContext value={value}>{children}</SelectedItemsContext>;
}

export function useSelectedItems() {
	const value = useContext(SelectedItemsContext);
	if (value === null) {
		throw new Error('useSelectedItems must be used within a SelectedItemsProvider');
	}
	return value;
}
