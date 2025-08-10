import { useAtom } from 'jotai';
import { useMemo } from 'react';
import type { Region } from '../regions';
import { immerStorageAtom } from './immer-storage-atom';

export type RegionsState = {
	startingRegion: Region;
	destinationRegion: Region;
};

const selectedRegionsImmerStorageAtom = immerStorageAtom<RegionsState>([
	'jotai/selected-regions',
	{
		destinationRegion: 'Korean Folk Town',
		startingRegion: 'Victoria Island',
	},
]);

export function useSelectedRegions() {
	const [selectedRegions, setSelectedRegions] = useAtom(selectedRegionsImmerStorageAtom);

	return useMemo(
		() => ({
			destinationRegion: selectedRegions.destinationRegion,
			setDestinationRegion: (region: Region) => {
				setSelectedRegions(state => {
					state.destinationRegion = region;
				});
			},
			setStartingRegion: (region: Region) => {
				setSelectedRegions(state => {
					state.startingRegion = region;
				});
			},
			startingRegion: selectedRegions.startingRegion,
			swapRegions: () => {
				setSelectedRegions(state => {
					const { startingRegion, destinationRegion } = state;

					state.destinationRegion = startingRegion;
					state.startingRegion = destinationRegion;
				});
			},
		}),
		[selectedRegions, setSelectedRegions],
	);
}
