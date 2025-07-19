import { Table, TableScrollContainer, TableTbody, TableTd, TableTh, TableTr } from '@mantine/core';
import { useMemo } from 'react';
import { healDamage } from '@/lib/damage/mage';
import { useAbilities } from '@/lib/local-storage/abilities';
import { useTotalMagicAttack } from '@/lib/local-storage/stats';

export function HealRangeTable() {
	const { int, luk } = useAbilities();
	const { totalMagicAttack } = useTotalMagicAttack();

	const resultsByTarget = useMemo(() => {
		return healDamage({
			int,
			luk,
			magic: totalMagicAttack,
		});
	}, [int, luk, totalMagicAttack]);

	return (
		<TableScrollContainer maw="fit-content" minWidth={350} mt={32} mx="auto">
			{/* biome-ignore-start lint/suspicious/noArrayIndexKey: items will not be re-ordered */}
			<Table variant="vertical" w="fit-content">
				<TableTbody ta="center">
					<TableTr>
						<TableTh ta="center">Targets</TableTh>

						{resultsByTarget.map((_, index) => (
							<TableTh key={index} ta="center">
								{index + 1}
							</TableTh>
						))}
					</TableTr>

					<TableTr>
						<TableTh ta="center">MIN</TableTh>

						{resultsByTarget.map(({ min }, index) => (
							<TableTd key={index}>{min}</TableTd>
						))}
					</TableTr>

					<TableTr>
						<TableTh ta="center">MAX</TableTh>

						{resultsByTarget.map(({ max }, index) => (
							<TableTd key={index}>{max}</TableTd>
						))}
					</TableTr>
				</TableTbody>
			</Table>
			{/* biome-ignore-end lint/suspicious/noArrayIndexKey: items will not be re-ordered */}
		</TableScrollContainer>
	);
}
