'use client';

import type { SelectProps } from '@mantine/core';
import { useCharacterNames, useCharactersStore } from '@/lib/zustand/characters-store';
import { SelectNoInput } from '@/ui/select-no-input';

export function CharacterSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange' | 'label'>) {
	const { selectedCharacter, setSelectedCharacter } = useCharactersStore();
	const characterNames = useCharacterNames();

	return (
		<SelectNoInput
			data={characterNames}
			onChange={value => value !== null && setSelectedCharacter(value)}
			value={selectedCharacter.name}
			{...props}
		/>
	);
}
