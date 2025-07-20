import { NumberInput } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';

export function SpellDamageInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const {
		skills: { spellDamage },
	} = useSelectedCharacter();

	return (
		<NumberInput
			label="Spell Damage"
			max={9999}
			min={1}
			onChange={n => updateSelectedCharacter({ skills: { spellDamage: Number(n) } })}
			value={spellDamage}
		/>
	);
}
