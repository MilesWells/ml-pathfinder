import { NumberInput } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';

export function WeaponMasteryInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const {
		masteries: { weapon },
	} = useSelectedCharacter();

	return (
		<NumberInput
			label="Weapon Mastery"
			max={100}
			min={0}
			onChange={n => updateSelectedCharacter({ masteries: { weapon: Number(n) } })}
			suffix="%"
			value={weapon}
		/>
	);
}
