'use client';

import { useLocalStorage } from '@mantine/hooks';
import type { MapleClass } from '@/lib/maple-classes';

export function useMapleClass() {
	const [mapleClass, setMapleClass] = useLocalStorage<MapleClass>({
		defaultValue: 'Warrior',
		key: 'maple-class',
	});

	return { mapleClass, setMapleClass };
}
