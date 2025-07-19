'use client';

import { useLocalStorage } from '@mantine/hooks';
import { useSelectedCharacter } from './characters';

export function useStr() {
	const { selectedCharacter } = useSelectedCharacter();

	const [str, setStr] = useLocalStorage<number>({
		defaultValue: 4,
		key: `${selectedCharacter}::str`,
	});

	return { setStr, str };
}

export function useDex() {
	const { selectedCharacter } = useSelectedCharacter();

	const [dex, setDex] = useLocalStorage<number>({
		defaultValue: 4,
		key: `${selectedCharacter}::dex`,
	});

	return { dex, setDex };
}

export function useInt() {
	const { selectedCharacter } = useSelectedCharacter();

	const [int, setInt] = useLocalStorage<number>({
		defaultValue: 4,
		key: `${selectedCharacter}::int`,
	});

	return { int, setInt };
}

export function useLuk() {
	const { selectedCharacter } = useSelectedCharacter();

	const [luk, setLuk] = useLocalStorage<number>({
		defaultValue: 4,
		key: `${selectedCharacter}::luk`,
	});

	return { luk, setLuk };
}

export function useAbilities() {
	const { str } = useStr();
	const { dex } = useDex();
	const { int } = useInt();
	const { luk } = useLuk();

	return { dex, int, luk, str };
}
