'use client';

import { Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';
import { CustomFieldSet } from '@/ui/mantine/custom-field-set';
import { HealRangeTable } from './results/heal-range-tabe';
import { PhysicalWeaponResults } from './results/physical-weapon-results';
import { SpellDamageResults } from './results/spell-damage-results';
import { SwingStabWeaponRangeTable } from './results/swing-stab-weapon-range-table';
import { ThiefSkillsResults } from './results/thief-skills-results';

export function BaseRange() {
	const {
		selectedCharacter: { mapleClass },
	} = useCharacters();
	return (
		<CustomFieldSet legendText="Base Range" mx="auto">
			<Table mx="auto" ta="center" variant="vertical" w="fit-content">
				<TableThead>
					<TableTr>
						<TableTd />
						<TableTh ta="center">MIN</TableTh>
						<TableTh ta="center">MAX</TableTh>
					</TableTr>
				</TableThead>

				<TableTbody>
					<RangeTableRowsByClass />
				</TableTbody>
			</Table>

			{mapleClass === 'Warrior' && <SwingStabWeaponRangeTable />}
			{mapleClass === 'Magician' && <HealRangeTable />}
		</CustomFieldSet>
	);
}

function RangeTableRowsByClass() {
	const {
		selectedCharacter: { mapleClass },
	} = useCharacters();

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
