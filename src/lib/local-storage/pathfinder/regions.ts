import { useLocalStorage } from '@mantine/hooks';
import type { Region } from '@/lib/regions';

export function useStartingRegion() {
	const [startingRegion, setStartingRegion] = useLocalStorage<Region>({
		defaultValue: 'Victoria Island',
		key: 'starting-region',
	});

	return { setStartingRegion, startingRegion };
}

export function useDestinationRegion() {
	const [destinationRegion, setDestinationRegion] = useLocalStorage<Region>({
		defaultValue: 'Korean Folk Town',
		key: 'destination-region',
	});

	return { destinationRegion, setDestinationRegion };
}
