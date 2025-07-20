'use client';

import type { SelectProps } from '@mantine/core';
import {
	useCharacterNames,
	useCharactersStore,
	useSelectedCharacter,
} from '@/lib/zustand/characters-store';
import { SelectNoInput } from '@/ui/select-no-input';

export function CharacterSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange' | 'label'>) {
	const { setSelectedCharacter } = useCharactersStore();
	const characterNames = useCharacterNames();
	const selectedCharacter = useSelectedCharacter();

	return (
		<SelectNoInput
			data={characterNames}
			onChange={value => value !== null && setSelectedCharacter(value)}
			value={selectedCharacter.name}
			{...props}
		/>
	);
}
