import { useAtom } from 'jotai';
import merge from 'lodash/merge';
import { useMemo } from 'react';
import type { DeepPartial } from '@/types';
import type { MapleClass } from '../maple-classes';
import { immerStorageAtom } from './immer-storage-atom';

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
	level: number;
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

export function createNewCharacter(characterInfo?: DeepPartial<Character>): Character {
	return {
		...merge(
			{
				abilities: {
					dex: 4,
					int: 4,
					luk: 4,
					str: 50,
				},
				equipment: {
					totalMagicAttack: 0,
					totalWeaponAttack: 20,
				},
				level: 10,
				mapleClass: 'Warrior',
				masteries: {
					spellMastery: 0,
					weaponMastery: 0,
				},
				name: 'NewCharacter',
				skills: {
					spellDamage: 0,
				},
			},
			characterInfo,
		),
	};
}

const DEFAULT_CHARACTER = createNewCharacter();

export type CharactersState = {
	characters: Record<string, Character>;
	selectedCharacterName: string;
};

const charactersImmerStorageAtom = immerStorageAtom<CharactersState>([
	'jotai/characters',
	{
		characters: {
			[DEFAULT_CHARACTER.name]: DEFAULT_CHARACTER,
		},
		selectedCharacterName: DEFAULT_CHARACTER.name,
	},
]);

export function useCharacters() {
	const [charactersState, setCharactersState] = useAtom(charactersImmerStorageAtom);

	return useMemo(
		() => ({
			addCharacter: (name: string) => {
				setCharactersState(state => {
					state.characters[name] = createNewCharacter({ name });
				});
			},
			characterNames: Object.keys(charactersState.characters),
			characters: charactersState.characters,
			deleteCharacter: (name: string) => {
				setCharactersState(state => {
					delete state.characters[name];

					if (name === state.selectedCharacterName)
						state.selectedCharacterName = Object.keys(state.characters)[0];
				});
			},
			renameCharacter: (oldName: string, newName: string) => {
				setCharactersState(state => {
					state.characters[newName] = state.characters[oldName];
					state.characters[newName].name = newName;

					state.selectedCharacterName = newName;

					delete state.characters[oldName];
				});
			},
			selectedCharacter: charactersState.characters[charactersState.selectedCharacterName],
			setSelectedCharacter: (name: string) => {
				setCharactersState(state => {
					state.selectedCharacterName = name;
				});
			},
			updateCharacter: (name: string, updates: DeepPartial<Omit<Character, 'name'>>) => {
				setCharactersState(state => {
					state.characters[name] = merge(state.characters[name], updates);
				});
			},
		}),
		[charactersState, setCharactersState],
	);
}
