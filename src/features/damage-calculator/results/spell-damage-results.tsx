import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { spellDamage } from '@/lib/damage/mage';
import { useSelectedCharacter } from '@/lib/zustand/characters-store';

const formatter = new Intl.NumberFormat();

export function SpellDamageResults() {
	const {
		abilities: { int },
		equipment: { totalMagicAttack },
		masteries: { spellMastery },
		skills: { spellDamage: spellAttack },
	} = useSelectedCharacter();

	const { min, max } = useMemo(() => {
		return spellDamage({
			int,
			magic: totalMagicAttack,
			mastery: spellMastery / 100,
			spellAttack,
		});
	}, [int, spellAttack, spellMastery, totalMagicAttack]);

	return (
		<TableTr>
			<TableTh>Spell Damage</TableTh>
			<TableTd>{formatter.format(min)}</TableTd>
			<TableTd>{formatter.format(max)}</TableTd>
		</TableTr>
	);
}
