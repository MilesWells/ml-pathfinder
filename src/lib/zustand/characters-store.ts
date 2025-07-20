'use client';

import mapKeys from 'lodash/mapKeys';
import merge from 'lodash/merge';
import { useMemo } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { DeepPartial } from '@/types';
import type { MapleClass } from '../maple-classes';

export type Character = {
	abilities: {
		dex: number;
		int: number;
		luk: number;
		str: number;
	};
	equipment: {
		totalMagicAttack: number;
		totalWeaponAttack: number;
	};
	mapleClass: MapleClass;
	masteries: {
		spellMastery: number;
		weaponMastery: number;
	};
	name: string;
	skills: {
		spellDamage: number;
	};
};

export type CharactersState = {
	characters: Record<string, Character>;
	selectedCharacterName: string;
};

export type CharactersActions = {
	addCharacter: (name: string) => void;
	deleteCharacter: (name: string) => void;
	setSelectedCharacter: (name: string) => void;
	renameCharacter: (oldName: string, newName: string) => void;
	updateCharacter: (name: string, updates: DeepPartial<Omit<Character, 'name'>>) => void;
	updateSelectedCharacter: (updates: DeepPartial<Omit<Character, 'name'>>) => void;
};

export type CharactersStore = CharactersState & CharactersActions;

export function createNewCharacter(characterInfo?: DeepPartial<Character>): Character {
	return {
		...merge(
			{
				abilities: {
					dex: 4,
					int: 4,
					luk: 4,
					str: 4,
				},
				equipment: {
					totalMagicAttack: 10,
					totalWeaponAttack: 10,
				},
				mapleClass: 'Warrior',
				masteries: {
					spellMastery: 0,
					weaponMastery: 0,
				},
				name: 'NewCharacter',
				skills: {
					spellDamage: 10,
				},
			},
			characterInfo,
		),
	};
}

const DEFAULT_CHARACTER = createNewCharacter();

const initialState: CharactersState = {
	characters: {
		[DEFAULT_CHARACTER.name]: DEFAULT_CHARACTER,
	},
	selectedCharacterName: DEFAULT_CHARACTER.name,
};

export const useCharactersStore = create<CharactersStore>()(
	devtools<CharactersStore>((set, get) => {
		return {
			...initialState,
			addCharacter(name) {
				set(state => ({
					characters: {
						...state.characters,
						[name]: createNewCharacter({ name }),
					},
				}));
			},
			deleteCharacter(name) {
				set(state => {
					const characters = { ...state.characters };
					delete characters[name];

					const topChar = Object.keys(characters)[0];

					const selectedCharacterName =
						name === state.selectedCharacterName ? topChar : state.selectedCharacterName;

					return {
						characters,
						selectedCharacterName,
					};
				});
			},
			renameCharacter(oldName, newName) {
				set(state => {
					const newCharacters = mapKeys(state.characters, (_, key) =>
						key === oldName ? newName : key,
					);

					newCharacters[newName].name = newName;

					return {
						characters: newCharacters,
						selectedCharacterName: newName,
					};
				});
			},
			setSelectedCharacter(name) {
				set({
					selectedCharacterName: name,
				});
			},
			updateCharacter(name, updates) {
				set(state => {
					const newCharacter = merge(state.characters[name], updates);

					const characters = {
						...state.characters,
						[name]: newCharacter,
					};

					return { characters };
				});
			},
			updateSelectedCharacter(updates) {
				const { selectedCharacterName, updateCharacter } = get();

				updateCharacter(selectedCharacterName, updates);
			},
		};
	}),
);

export function useCharacterNames() {
	const { characters } = useCharactersStore();

	return useMemo(() => Object.keys(characters), [characters]);
}

export function useSelectedCharacter() {
	const { characters, selectedCharacterName } = useCharactersStore();

	return useMemo(() => characters[selectedCharacterName], [characters, selectedCharacterName]);
}
