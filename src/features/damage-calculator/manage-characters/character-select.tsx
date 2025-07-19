'use client';

import { Select, type SelectProps } from '@mantine/core';
import { useCharacters, useSelectedCharacter } from '@/lib/local-storage/characters';

export function CharacterSelect(props: SelectProps) {
	const { characters } = useCharacters();
	const { selectedCharacter, setSelectedCharacter } = useSelectedCharacter();

	return (
		<Select
			allowDeselect={false}
			data={characters}
			label="Current Character"
			onChange={value => value && setSelectedCharacter(value)}
			styles={{
				input: {
					caretColor: 'transparent',
				},
			}}
			value={selectedCharacter}
			{...props}
		/>
	);
}
