import { NumberInput } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';

export function SpellMasteryInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const {
		masteries: { magic },
	} = useSelectedCharacter();

	return (
		<NumberInput
			label="Spell Mastery"
			max={100}
			min={0}
			onChange={n => updateSelectedCharacter({ masteries: { magic: Number(n) } })}
			suffix="%"
			value={magic}
		/>
	);
}
