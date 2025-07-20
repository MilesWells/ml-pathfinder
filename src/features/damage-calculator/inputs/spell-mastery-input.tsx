import { NumberInput } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';

export function SpellMasteryInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const {
		masteries: { spellMastery: spell },
	} = useSelectedCharacter();

	return (
		<NumberInput
			label="Spell Mastery"
			max={100}
			min={0}
			onChange={n => updateSelectedCharacter({ masteries: { spellMastery: Number(n) } })}
			suffix="%"
			value={spell}
		/>
	);
}
