import { TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { spellDamage } from '@/lib/damage/mage';
import { useInt } from '@/lib/local-storage/abilities';
import { useSpellDamage, useSpellMastery, useTotalMagicAttack } from '@/lib/local-storage/stats';

const formatter = new Intl.NumberFormat();

export function SpellDamageResults() {
	const { int } = useInt();
	const { totalMagicAttack } = useTotalMagicAttack();
	const { spellMastery } = useSpellMastery();
	const { spellDamage: spellAttack } = useSpellDamage();

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
