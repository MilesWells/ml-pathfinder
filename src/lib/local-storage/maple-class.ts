'use client';

import { useLocalStorage } from '@mantine/hooks';
import type { MapleClass } from '@/lib/maple-classes';
import { useSelectedCharacter } from './characters';

export function useMapleClass() {
	const { selectedCharacter } = useSelectedCharacter();

	const [mapleClass, setMapleClass] = useLocalStorage<MapleClass>({
		defaultValue: 'Warrior',
		key: `${selectedCharacter}::maple-class`,
	});

	return { mapleClass, setMapleClass };
}
