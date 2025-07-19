import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { luckySeven } from '@/lib/damage/thief';
import { useAbilities } from '@/lib/local-storage/abilities';
import { useTotalEquipWeaponAttack } from '@/lib/local-storage/stats';

const formatter = new Intl.NumberFormat();

export function ThiefSkillsResults() {
	const { luk } = useAbilities();
	const { totalEquipWeaponAttack } = useTotalEquipWeaponAttack();

	const { max, min } = useMemo(() => {
		return luckySeven({
			luk,
			weaponAttack: totalEquipWeaponAttack,
		});
	}, [luk, totalEquipWeaponAttack]);

	return (
		<TableTr>
			<TableTh>LS/TT</TableTh>
			<TableTd>{formatter.format(min)}</TableTd>
			<TableTd>{formatter.format(max)}</TableTd>
		</TableTr>
	);
}
