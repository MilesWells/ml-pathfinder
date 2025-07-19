'use client';

import { useLocalStorage } from '@mantine/hooks';

const DEFAULT_CHARACTER = 'New Character';

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

export function renameCharacter(oldName: string, newName: string) {
	const { characters, setCharacters } = useCharacters();
	const { selectedCharacter, setSelectedCharacter } = useSelectedCharacter();

	const oldKeys: string[] = [];
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (key?.startsWith(oldName)) oldKeys.push(key);
	}

	for (const key of oldKeys) {
		const value = localStorage.getItem(key);
		if (!value) continue;

		localStorage.setItem(key.replace(oldName, newName), value);
	}

	setCharacters(characters.map(character => (character === oldName ? newName : character)));
	if (selectedCharacter === oldName) setSelectedCharacter(newName);
	for (const key of oldKeys) localStorage.removeItem(key);
}
