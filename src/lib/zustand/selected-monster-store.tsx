'use client';

import type { ComboboxItem } from '@mantine/core';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { MONSTER_MAP, type ScrapedMonster } from '@/scraped-data/monster';
import { LoadingContainer } from '@/ui/loading-container';

export type SelectedMonsterState = {
	selectedMonster: ScrapedMonster;
	selectedMonsterSelectOption: ComboboxItem;
};

export type SelectedMonsterActions = {
	setSelectedMonster: (monster: ScrapedMonster) => void;
};

export type SelectedMonsterStore = SelectedMonsterState & SelectedMonsterActions;

const initialMonster = MONSTER_MAP['0100100']; // Snail

function selectOptionFromMonster(monster: ScrapedMonster): ComboboxItem {
	return {
		label: monster.name,
		value: monster.id,
	};
}

const initialState: SelectedMonsterState = {
	selectedMonster: initialMonster,
	selectedMonsterSelectOption: selectOptionFromMonster(initialMonster),
};

const persistantStoreFactory = persist<SelectedMonsterStore>(
	set => {
		return {
			...initialState,
			setSelectedMonster(monster) {
				set({
					selectedMonster: monster,
					selectedMonsterSelectOption: selectOptionFromMonster(monster),
				});
			},
		};
	},
	{
		name: 'zustand-selected-monster-store',
	},
);

export const useSelectedMonsterStore =
	process.env.NODE_ENV === 'development'
		? create<SelectedMonsterStore>()(devtools(persistantStoreFactory))
		: create<SelectedMonsterStore>()(persistantStoreFactory);

export function useSelectedMonsterStoreHydrated() {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		const unsubHydrate = useSelectedMonsterStore.persist.onHydrate(() => setHydrated(false));

		const unsubFinishHydration = useSelectedMonsterStore.persist.onFinishHydration(() =>
			setHydrated(true),
		);

		setHydrated(useSelectedMonsterStore.persist.hasHydrated());

		return () => {
			unsubHydrate();
			unsubFinishHydration();
		};
	}, []);

	return hydrated;
}

export function SelectedMonsterStoreHydrated({ children }: React.PropsWithChildren) {
	const hydrated = useSelectedMonsterStoreHydrated();

	return <LoadingContainer loading={!hydrated}>{children}</LoadingContainer>;
}
