import { NumberInput } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';

export function TotalEquipWeaponAttackInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const {
		equipment: { totalWeaponAttack },
	} = useSelectedCharacter();

	return (
		<NumberInput
			label="Total Weapon Attack from Equipment"
			max={999999}
			min={1}
			onChange={n => updateSelectedCharacter({ equipment: { totalWeaponAttack: Number(n) } })}
			value={totalWeaponAttack}
		/>
	);
}
