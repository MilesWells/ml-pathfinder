'use client';

import merge from 'lodash/merge';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useShallow } from 'zustand/shallow';
import type { MapleClass } from '../maple-classes';

export type Character = {
	name: string;
	// str: number;
	// dex: number;
	// int: number;
	// luk: number;
	mapleClass: MapleClass;
};

export type CharactersState = {
	characters: Record<string, Character>;
	selectedCharacter: Character;
};

export type CharactersActions = {
	addCharacter: (name: string) => void;
	deleteCharacter: (name: string) => void;
	setSelectedCharacter: (name: string) => void;
	renameCharacter: (oldName: string, newName: string) => void;
	updateCharacter: (name: string, updates: Partial<Character>) => void;
};

export type CharactersStore = CharactersState & CharactersActions;

export function createNewCharacter(name: string): Character {
	return {
		mapleClass: 'Warrior',
		name,
	};
}

const DEFAULT_CHARACTER_NAME = 'NewCharacter';
const DEFAULT_CHARACTER = createNewCharacter(DEFAULT_CHARACTER_NAME);

const initialState: CharactersState = {
	characters: {
		[DEFAULT_CHARACTER_NAME]: DEFAULT_CHARACTER,
	},
	selectedCharacter: DEFAULT_CHARACTER,
};

export const useCharactersStore = create<CharactersStore>()(
	devtools<CharactersStore>(set => {
		return {
			...initialState,
			addCharacter(name) {
				set(state => ({
					characters: {
						...state.characters,
						[name]: createNewCharacter(name),
					},
				}));
			},
			deleteCharacter(name) {
				set(state => {
					const characters = { ...state.characters };
					delete characters[name];

					const topChar = Object.keys(characters)[0];

					const selectedCharacter =
						name === state.selectedCharacter.name ? characters[topChar] : state.selectedCharacter;

					return {
						characters,
						selectedCharacter,
					};
				});
			},
			renameCharacter(oldName, newName) {
				set(state => {
					const characters = { ...state.characters };
					const character = characters[oldName];
					delete characters[oldName];

					character.name = newName;
					characters[newName] = character;

					return {
						characters,
						selectedCharacter: {
							...state.selectedCharacter,
							name: newName,
						},
					};
				});
			},
			setSelectedCharacter(name) {
				set(state => ({
					selectedCharacter: state.characters[name],
				}));
			},
			updateCharacter(name, updates) {
				set(state => {
					const newCharacter = merge(state.characters[name], updates);

					const characters = {
						...state.characters,
						[name]: newCharacter,
					};

					const selectedCharacter =
						name === state.selectedCharacter.name ? newCharacter : state.selectedCharacter;

					return {
						characters,
						selectedCharacter,
					};
				}, undefined);
			},
		};
	}),
);

export function useCharacterNames() {
	return useCharactersStore(useShallow(store => Object.keys(store.characters)));
}
