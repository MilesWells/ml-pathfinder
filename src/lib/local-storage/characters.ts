'use client';

import { useLocalStorage } from '@mantine/hooks';
import { useCallback } from 'react';

const DEFAULT_CHARACTER = 'New Character';

export function useCharacters() {
	const [characters, setCharacters] = useLocalStorage<string[]>({
		defaultValue: [DEFAULT_CHARACTER],
		key: 'characters',
	});

	const addCharacter = useCallback(
		(character: string) => {
			setCharacters(prev => [...prev, character]);
		},
		[setCharacters],
	);

	const deleteCharacter = useCallback(
		(character: string) => {
			setCharacters(prev => prev.filter(c => c !== character));

			for (let i = 0; i < localStorage.length; i++) {
				const key = localStorage.key(i);
				if (key?.startsWith(`${character}::`)) localStorage.removeItem(key);
			}
		},
		[setCharacters],
	);

	return { addCharacter, characters, deleteCharacter, renameCharacter, setCharacters };
}

export function useSelectedCharacter() {
	const { characters } = useCharacters();

	const [selectedCharacter, setSelectedCharacter] = useLocalStorage<string>({
		defaultValue: characters.at(0) ?? DEFAULT_CHARACTER,
		deserialize: value =>
			value && characters.includes(value) ? value : (characters.at(0) ?? DEFAULT_CHARACTER),
		key: 'selected-character',
	});

	return { selectedCharacter, setSelectedCharacter };
}

function renameCharacter(oldName: string, newName: string) {
	const { characters, setCharacters } = useCharacters();
	const { selectedCharacter, setSelectedCharacter } = useSelectedCharacter();

	const oldKeys: string[] = [];
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (key?.startsWith(`${oldName}::`)) oldKeys.push(key);
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
