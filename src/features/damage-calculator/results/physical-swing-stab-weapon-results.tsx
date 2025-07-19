import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import type { PhysicalSwingStabWeaponType } from '@/lib/damage';
import { maxMinWeaponDamageMap } from '@/lib/damage/weapon-damage';
import { useAbilities } from '@/lib/local-storage/abilities';
import { useTotalEquipWeaponAttack, useWeaponMastery } from '@/lib/local-storage/stats';

const formatter = new Intl.NumberFormat();

export function PhysicalSwingStabWeaponResults({
	weaponType,
}: {
	weaponType: PhysicalSwingStabWeaponType;
}) {
	const { dex, int, luk, str } = useAbilities();
	const { totalEquipWeaponAttack } = useTotalEquipWeaponAttack();
	const { weaponMastery } = useWeaponMastery();

	const { stab, swing } = useMemo(() => {
		return maxMinWeaponDamageMap[weaponType]({
			dex,
			int,
			luk,
			str,
			weaponAttack: totalEquipWeaponAttack,
			weaponMastery: weaponMastery / 100,
		});
	}, [dex, int, luk, str, totalEquipWeaponAttack, weaponMastery, weaponType]);

	return (
		<TableTr>
			<TableTh>{weaponType}</TableTh>
			<TableTd>{formatter.format(stab.min)}</TableTd>
			<TableTd>{formatter.format(stab.max)}</TableTd>
			<TableTd>{formatter.format(swing.min)}</TableTd>
			<TableTd>{formatter.format(swing.max)}</TableTd>
		</TableTr>
	);
}
