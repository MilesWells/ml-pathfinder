import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { luckySeven } from '@/lib/damage/thief';
import { useCharacters } from '@/lib/jotai/characters-atom';

const formatter = new Intl.NumberFormat();

export function ThiefSkillsResults() {
	const {
		selectedCharacter: {
			abilities: { luk },
			equipment: { totalWeaponAttack },
		},
	} = useCharacters();

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
