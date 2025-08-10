import { NumberInput } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';

export function TotalEquipWeaponAttackInput() {
	const {
		selectedCharacter: {
			equipment: { totalWeaponAttack },
			name,
		},
		updateCharacter,
	} = useCharacters();

	return (
		<NumberInput
			label="Total Weapon Attack from Equipment"
			max={999999}
			min={1}
			onChange={n => updateCharacter(name, { equipment: { totalWeaponAttack: Number(n) } })}
			value={totalWeaponAttack}
		/>
	);
}
