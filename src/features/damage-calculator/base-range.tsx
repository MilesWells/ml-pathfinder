'use client';

import { Fieldset, Table, TableTbody, TableTh, TableThead, TableTr, Title } from '@mantine/core';
import { useMapleClass } from '@/lib/local-storage';
import { PhysicalWeaponResults } from './results/physical-weapon-results';
import { SpellDamageResults } from './results/spell-damage-results';
import { SwingStabWeaponRangeTable } from './results/swing-stab-weapon-range-table';
import { ThiefSkillsResults } from './results/thief-skills-results';

export function BaseRange() {
	const { mapleClass } = useMapleClass();
	return (
		<Fieldset legend={<Title order={3}>Base Range</Title>} maw="fit-content" mx="auto">
			<Table mx="auto" ta="center" variant="vertical" w="fit-content">
				<TableThead>
					<TableTr>
						<TableTh />
						<TableTh ta="center">MIN</TableTh>
						<TableTh ta="center">MAX</TableTh>
					</TableTr>
				</TableThead>

				<TableTbody>
					<RangeTableRowsByClass />
				</TableTbody>
			</Table>

			{mapleClass === 'Warrior' && <SwingStabWeaponRangeTable />}
		</Fieldset>
	);
}

function RangeTableRowsByClass() {
	const { mapleClass } = useMapleClass();

	switch (mapleClass) {
		case 'Thief':
			return (
				<>
					<PhysicalWeaponResults weaponType="Claw" />
					<PhysicalWeaponResults weaponType="Dagger" />
					<ThiefSkillsResults />
				</>
			);
		case 'Bowman':
			return (
				<>
					<PhysicalWeaponResults weaponType="Bow" />
					<PhysicalWeaponResults weaponType="Crossbow" />
				</>
			);
		case 'Pirate':
			return (
				<>
					<PhysicalWeaponResults weaponType="Knuckle" />
					<PhysicalWeaponResults weaponType="Gun" />
				</>
			);
		case 'Warrior':
			return (
				<>
					<PhysicalWeaponResults weaponType="One Handed Sword" />
					<PhysicalWeaponResults weaponType="Two Handed Sword" />
				</>
			);
		case 'Magician':
			return <SpellDamageResults />;
	}
}
