import type { ComboboxItem } from '@mantine/core';
import { atom, useAtom } from 'jotai';
import { useMemo } from 'react';
import { MONSTER_MAP, type ScrapedMonster } from '@/lib/monster';
import { immerStorageAtom } from './immer-storage-atom';

export type SelectedMonsterState = {
	selectedMonster: ScrapedMonster;
	selectedMonsterSelectOption: ComboboxItem;
};

const initialMonster = MONSTER_MAP['0100100']; // Snail

function stateFromMonster(monster: ScrapedMonster): SelectedMonsterState {
	return {
		selectedMonster: monster,
		selectedMonsterSelectOption: {
			label: monster.name,
			value: monster.id,
		},
	};
}

const selectedMonsterImmerStorageAtom = immerStorageAtom<SelectedMonsterState>([
	'jotai/selected-monster',
	stateFromMonster(initialMonster),
]);

const selectedMonsterAtom = atom(
	get => get(selectedMonsterImmerStorageAtom),
	(_, set, monsterId: string | null) => {
		set(
			selectedMonsterImmerStorageAtom,
			stateFromMonster(monsterId ? MONSTER_MAP[monsterId] : initialMonster),
		);
	},
);

export function useSelectedMonster() {
	const [selectedMonsterState, setSelectedMonsterState] = useAtom(selectedMonsterAtom);

	return useMemo(
		() => ({
			selectedMonster: selectedMonsterState.selectedMonster,
			selectedMonsterSelectOption: selectedMonsterState.selectedMonsterSelectOption,
			setSelectedMonster: setSelectedMonsterState,
		}),
		[selectedMonsterState, setSelectedMonsterState],
	);
}
