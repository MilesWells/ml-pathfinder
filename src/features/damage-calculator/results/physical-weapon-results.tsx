import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { handedCompactWeaponName, isHandedWeaponType, type PhysicalWeaponType } from '@/lib/damage';
import { maxMinWeaponDamageMap } from '@/lib/damage/weapon-damage';
import { useAbilities } from '@/lib/local-storage/abilities';
import { useTotalEquipWeaponAttack, useWeaponMastery } from '@/lib/local-storage/stats';

const formatter = new Intl.NumberFormat();

export function PhysicalWeaponResults({ weaponType }: { weaponType: PhysicalWeaponType }) {
	const { dex, int, luk, str } = useAbilities();
	const { totalEquipWeaponAttack } = useTotalEquipWeaponAttack();
	const { weaponMastery } = useWeaponMastery();

	const { max, min } = useMemo(() => {
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
			<TableTh left={0} pos="sticky" ta="right">
				{isHandedWeaponType(weaponType) ? handedCompactWeaponName[weaponType] : weaponType}
			</TableTh>

			<TableTd>{formatter.format(min)}</TableTd>
			<TableTd>{formatter.format(max)}</TableTd>
		</TableTr>
	);
}
