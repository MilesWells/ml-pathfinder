import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { handedCompactWeaponName, isHandedWeaponType, type PhysicalWeaponType } from '@/lib/damage';
import { maxMinWeaponDamageMap } from '@/lib/damage/weapon-damage';
import { useSelectedCharacter } from '@/lib/zustand/characters-store';

const formatter = new Intl.NumberFormat();

export function PhysicalWeaponResults({ weaponType }: { weaponType: PhysicalWeaponType }) {
	const {
		abilities: { dex, int, luk, str },
		equipment: { totalWeaponAttack },
		masteries: { weaponMastery },
	} = useSelectedCharacter();

	const { max, min } = useMemo(() => {
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
			<TableTh left={0} pos="sticky" ta="right">
				{isHandedWeaponType(weaponType) ? handedCompactWeaponName[weaponType] : weaponType}
			</TableTh>

			<TableTd>{formatter.format(min)}</TableTd>
			<TableTd>{formatter.format(max)}</TableTd>
		</TableTr>
	);
}
