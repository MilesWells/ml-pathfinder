import { NumberInput } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';

export function WeaponMasteryInput() {
	const {
		selectedCharacter: {
			name,
			masteries: { weaponMastery },
		},
		updateCharacter,
	} = useCharacters();

	return (
		<NumberInput
			label="Weapon Mastery"
			max={100}
			min={0}
			onChange={n => updateCharacter(name, { masteries: { weaponMastery: Number(n) } })}
			suffix="%"
			value={weaponMastery}
		/>
	);
}
