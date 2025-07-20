import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import {
	handedCompactWeaponName,
	isHandedWeaponType,
	type PhysicalSwingStabWeaponType,
} from '@/lib/damage';
import { maxMinWeaponDamageMap } from '@/lib/damage/weapon-damage';
import { useSelectedCharacter } from '@/lib/zustand/characters-store';

const formatter = new Intl.NumberFormat();

export function PhysicalSwingStabWeaponResults({
	weaponType,
}: {
	weaponType: PhysicalSwingStabWeaponType;
}) {
	const {
		abilities: { dex, int, luk, str },
		equipment: { totalWeaponAttack },
		masteries: { weaponMastery },
	} = useSelectedCharacter();

	const { stab, swing } = useMemo(() => {
		return maxMinWeaponDamageMap[weaponType]({
			dex,
			int,
			luk,
			str,
			weaponAttack: totalWeaponAttack,
			weaponMastery: weaponMastery / 100,
		});
	}, [dex, int, luk, str, totalWeaponAttack, weaponMastery, weaponType]);

	return (
		<TableTr>
			<TableTh left={0} pos="sticky" ta="right" w={75}>
				{isHandedWeaponType(weaponType) ? handedCompactWeaponName[weaponType] : weaponType}
			</TableTh>

			<TableTd>{formatter.format(stab.min)}</TableTd>
			<TableTd>{formatter.format(stab.max)}</TableTd>
			<TableTd>{formatter.format(swing.min)}</TableTd>
			<TableTd>{formatter.format(swing.max)}</TableTd>
		</TableTr>
	);
}
