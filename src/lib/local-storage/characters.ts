'use client';

import { useLocalStorage } from '@mantine/hooks';

const DEFAULT_CHARACTER = 'NewCharacter';

export function useCharacters() {
	const [characters, setCharacters] = useLocalStorage<string[]>({
		defaultValue: [DEFAULT_CHARACTER],
		key: 'characters',
		serialize: value => {
			const toSerialize = value.length > 0 ? value : [DEFAULT_CHARACTER];
			return JSON.stringify(toSerialize);
		},
	});

	return { characters, setCharacters };
}

export function useSelectedCharacter() {
	const { characters } = useCharacters();

	const [selectedCharacter, setSelectedCharacter] = useLocalStorage<string>({
		defaultValue: DEFAULT_CHARACTER,
		deserialize: value => (value && characters.includes(value) ? value : DEFAULT_CHARACTER),
		key: 'selected-character',
	});

	return { selectedCharacter, setSelectedCharacter };
}
