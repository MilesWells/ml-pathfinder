import { NumberInput } from '@mantine/core';
import { useWeaponMastery } from '@/lib/local-storage/stats';

export function WeaponMasteryInput() {
	const { weaponMastery, setWeaponMastery } = useWeaponMastery();

	return (
		<NumberInput
			label="Weapon Mastery"
			max={100}
			min={0}
			onChange={n => setWeaponMastery(Number(n))}
			suffix="%"
			value={weaponMastery}
		/>
	);
}
