'use client';

import type { SelectProps } from '@mantine/core';
import { useCharacters, useSelectedCharacter } from '@/lib/local-storage/characters';
import { SelectNoInput } from '@/ui/select-no-input';

export function CharacterSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange' | 'label'>) {
	const { characters } = useCharacters();
	const { selectedCharacter, setSelectedCharacter } = useSelectedCharacter();

	return (
		<SelectNoInput
			data={characters}
			onChange={value => value && setSelectedCharacter(value)}
			value={selectedCharacter}
			{...props}
		/>
	);
}
