'use client';

import { create } from 'zustand';

export type Character = {
	name: string;
};

export type CharactersState = {
	characterNames: string[];
	characters: Record<string, Character>;
	selectedCharacter: string;
};

export type CharactersActions = {
	addCharacter: (name: string) => void;
	deleteCharacter: (name: string) => void;
	setSelectedCharacter: (name: string) => void;
	renameCharacter: (oldName: string, newName: string) => void;
};

export type CharactersStore = CharactersState & CharactersActions;

export function createNewCharacter(name: string): Character {
	return {
		name,
	};
}

const DEFAULT_CHARACTER_NAME = 'New Character';

const initialState: CharactersState = {
	characterNames: [DEFAULT_CHARACTER_NAME],
	characters: {
		[DEFAULT_CHARACTER_NAME]: createNewCharacter(DEFAULT_CHARACTER_NAME),
	},
	selectedCharacter: DEFAULT_CHARACTER_NAME,
};

export const useCharacters = create<CharactersStore>(set => ({
	...initialState,
	addCharacter(name) {
		set(prev => ({
			characterNames: [...prev.characterNames, name],
			characters: {
				...prev.characters,
				[name]: createNewCharacter(name),
			},
		}));
	},
	deleteCharacter(name) {
		set(prev => {
			const characters = { ...prev.characters };
			delete characters[name];

			const characterNames = prev.characterNames.filter(n => n !== name);

			return {
				characterNames,
				characters,
				selectedCharacter:
					prev.selectedCharacter === name ? characterNames[0] : prev.selectedCharacter,
			};
		});
	},
	renameCharacter(oldName, newName) {
		set(prev => {
			const characters = { ...prev.characters };
			const character = characters[oldName];
			delete characters[oldName];
			characters[newName] = character;

			const characterNames = prev.characterNames.map(n => (n === oldName ? newName : n));

			return {
				characterNames,
				characters,
				selectedCharacter: prev.selectedCharacter === oldName ? newName : prev.selectedCharacter,
			};
		});
	},
	setSelectedCharacter(selectedCharacter) {
		set({ selectedCharacter });
	},
}));
