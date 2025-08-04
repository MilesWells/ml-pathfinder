'use client';

import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { LoadingContainer } from '@/ui/loading-container';
import type { Region } from '../regions';

export type RegionsState = {
	startingRegion: Region;
	destinationRegion: Region;
};

export type RegionsActions = {
	setStartingRegion: (region: Region) => void;
	setDestinationRegion: (region: Region) => void;
	swapRegions: () => void;
};

export type RegionsStore = RegionsState & RegionsActions;

const initialState: RegionsState = {
	destinationRegion: 'Korean Folk Town',
	startingRegion: 'Victoria Island',
};

const persistantStoreFactory = persist<RegionsStore>(
	(set, get) => {
		return {
			...initialState,
			setDestinationRegion(region) {
				set({
					destinationRegion: region,
				});
			},
			setStartingRegion(region) {
				set({
					startingRegion: region,
				});
			},
			swapRegions() {
				const { startingRegion, destinationRegion } = get();
				set({
					destinationRegion: startingRegion,
					startingRegion: destinationRegion,
				});
			},
		};
	},
	{
		name: 'zustand-regions-store',
	},
);

export const useRegionsStore =
	process.env.NODE_ENV === 'development'
		? create<RegionsStore>()(devtools(persistantStoreFactory))
		: create<RegionsStore>()(persistantStoreFactory);

export function useRegionsStoreHydrated() {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		const unsubHydrate = useRegionsStore.persist.onHydrate(() => setHydrated(false));

		const unsubFinishHydration = useRegionsStore.persist.onFinishHydration(() => setHydrated(true));

		setHydrated(useRegionsStore.persist.hasHydrated());

		return () => {
			unsubHydrate();
			unsubFinishHydration();
		};
	}, []);

	return hydrated;
}

export function RegionsStoreHydrated({ children }: React.PropsWithChildren) {
	const hydrated = useRegionsStoreHydrated();

	return <LoadingContainer loading={!hydrated}>{children}</LoadingContainer>;
}
