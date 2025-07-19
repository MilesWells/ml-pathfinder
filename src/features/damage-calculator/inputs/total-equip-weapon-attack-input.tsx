import { NumberInput } from '@mantine/core';
import { useTotalEquipWeaponAttack } from '@/lib/local-storage/stats';

export function TotalEquipWeaponAttackInput() {
	const { totalEquipWeaponAttack, setTotalEquipWeaponAttack } = useTotalEquipWeaponAttack();

	return (
		<NumberInput
			label="Total Weapon Attack from Equipment"
			max={999999}
			min={1}
			onChange={n => setTotalEquipWeaponAttack(Number(n))}
			value={totalEquipWeaponAttack}
		/>
	);
}
