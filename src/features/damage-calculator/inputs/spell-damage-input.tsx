import { NumberInput } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';

export function SpellDamageInput() {
	const {
		selectedCharacter: {
			skills: { spellDamage },
			name,
		},
		updateCharacter,
	} = useCharacters();

	return (
		<NumberInput
			label="Spell Damage"
			max={9999}
			min={1}
			onChange={n => updateCharacter(name, { skills: { spellDamage: Number(n) } })}
			value={spellDamage}
		/>
	);
}
