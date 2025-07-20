import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { luckySeven } from '@/lib/damage/thief';
import { useSelectedCharacter } from '@/lib/zustand/characters-store';

const formatter = new Intl.NumberFormat();

export function ThiefSkillsResults() {
	const {
		abilities: { luk },
		equipment: { totalWeaponAttack },
	} = useSelectedCharacter();

	const { max, min } = useMemo(() => {
		return luckySeven({
			luk,
			weaponAttack: totalWeaponAttack,
		});
	}, [luk, totalWeaponAttack]);

	return (
		<TableTr>
			<TableTh>LS/TT</TableTh>
			<TableTd>{formatter.format(min)}</TableTd>
			<TableTd>{formatter.format(max)}</TableTd>
		</TableTr>
	);
}
