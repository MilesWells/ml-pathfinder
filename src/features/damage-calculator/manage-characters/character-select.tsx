'use client';

import type { SelectProps } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';
import { SelectNoInput } from '@/ui/select-no-input';

export function CharacterSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange' | 'label'>) {
	const { characterNames, setSelectedCharacter, selectedCharacter } = useCharacters();

	return (
		<SelectNoInput
			data={characterNames}
			onChange={value => value !== null && setSelectedCharacter(value)}
			value={selectedCharacter.name}
			{...props}
		/>
	);
}
