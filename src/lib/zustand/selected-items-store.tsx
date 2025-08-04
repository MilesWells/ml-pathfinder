'use client';

import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { LoadingContainer } from '@/ui/loading-container';
import type { Item } from '../items';

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

export type SelectedItemsState = {
	selectedItems: SelectedItemMap;
};

export type SelectedItemsActions = {
	addItem: (item: Item | Item[]) => void;
	removeItem: (item: Item | Item[]) => void;
	removeAll: () => void;
	selectAll: () => void;
};

export type SelectedItemsStore = SelectedItemsState & SelectedItemsActions;

const initialState: SelectedItemsState = {
	selectedItems: DEFAULT_ITEMS_FALSE,
};

const persistantStoreFactory = persist<SelectedItemsStore>(
	set => {
		return {
			...initialState,
			addItem(item) {
				const itemsToAdd = Array.isArray(item) ? item : [item];

				const partialMap = itemsToAdd.reduce<Partial<SelectedItemMap>>((acc, cur) => {
					acc[cur] = true;
					return acc;
				}, {});

				set(state => ({
					selectedItems: {
						...state.selectedItems,
						...partialMap,
					},
				}));
			},
			removeAll() {
				set({
					selectedItems: DEFAULT_ITEMS_FALSE,
				});
			},
			removeItem(item) {
				const itemsToRemove = Array.isArray(item) ? item : [item];

				const partialMap = itemsToRemove.reduce<Partial<SelectedItemMap>>((acc, cur) => {
					acc[cur] = false;
					return acc;
				}, {});

				set(state => ({
					selectedItems: {
						...state.selectedItems,
						...partialMap,
					},
				}));
			},
			selectAll() {
				set({
					selectedItems: DEFAULT_ITEMS_TRUE,
				});
			},
		};
	},
	{
		name: 'zustand-selected-items-store',
	},
);

export const useSelectedItemsStore =
	process.env.NODE_ENV === 'development'
		? create<SelectedItemsStore>()(devtools(persistantStoreFactory))
		: create<SelectedItemsStore>()(persistantStoreFactory);

export function useSelectedItemsStoreHydrated() {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		const unsubHydrate = useSelectedItemsStore.persist.onHydrate(() => setHydrated(false));

		const unsubFinishHydration = useSelectedItemsStore.persist.onFinishHydration(() =>
			setHydrated(true),
		);

		setHydrated(useSelectedItemsStore.persist.hasHydrated());

		return () => {
			unsubHydrate();
			unsubFinishHydration();
		};
	}, []);

	return hydrated;
}

export function SelectedItemsStoreHydrated({ children }: React.PropsWithChildren) {
	const hydrated = useSelectedItemsStoreHydrated();

	return <LoadingContainer loading={!hydrated}>{children}</LoadingContainer>;
}
