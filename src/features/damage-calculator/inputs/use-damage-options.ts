'use client';

import { useLocalStorage } from '@mantine/hooks';
import type { Class } from '@/lib/classes';

export type DamageOptions = {
	class: Class;
	dex: number;
	int: number;
	luk: number;
	str: number;
};

export function useDamageOptions() {
	const [options, setOptions] = useLocalStorage<DamageOptions>({
		defaultValue: {
			class: 'Warrior',
			dex: 4,
			int: 4,
			luk: 4,
			str: 4,
		},
		key: 'damage-options',
	});

	return { options, setOptions };
}
