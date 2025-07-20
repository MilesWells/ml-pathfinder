'use client';

import type { SelectProps } from '@mantine/core';
import { useCharacters } from '@/lib/zustand/characters-store';
import { SelectNoInput } from '@/ui/select-no-input';

export function CharacterSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange' | 'label'>) {
	const { characterNames, selectedCharacter, setSelectedCharacter } = useCharacters();

	return (
		<SelectNoInput
			data={characterNames}
			onChange={value => value !== null && setSelectedCharacter(value)}
			value={selectedCharacter}
			{...props}
		/>
	);
}
