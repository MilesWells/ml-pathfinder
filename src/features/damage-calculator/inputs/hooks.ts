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

export function useStr() {
	const [str, setStr] = useLocalStorage<number>({
		defaultValue: 4,
		key: 'str',
	});

	return { setStr, str };
}

export function useDex() {
	const [dex, setDex] = useLocalStorage<number>({
		defaultValue: 4,
		key: 'dex',
	});

	return { dex, setDex };
}

export function useInt() {
	const [int, setInt] = useLocalStorage<number>({
		defaultValue: 4,
		key: 'int',
	});

	return { int, setInt };
}

export function useLuk() {
	const [luk, setLuk] = useLocalStorage<number>({
		defaultValue: 4,
		key: 'luk',
	});

	return { luk, setLuk };
}
