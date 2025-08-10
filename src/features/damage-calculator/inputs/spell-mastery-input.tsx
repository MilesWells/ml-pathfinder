import { NumberInput } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';

export function SpellMasteryInput() {
	const {
		selectedCharacter: {
			masteries: { spellMastery: spell },
			name,
		},
		updateCharacter,
	} = useCharacters();

	return (
		<NumberInput
			label="Spell Mastery"
			max={100}
			min={0}
			onChange={n => updateCharacter(name, { masteries: { spellMastery: Number(n) } })}
			suffix="%"
			value={spell}
		/>
	);
}
