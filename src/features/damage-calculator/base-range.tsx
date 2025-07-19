'use client';

import { Fieldset, Stack, Table, TableTbody, TableTd, TableTr, Title } from '@mantine/core';
import { useMapleClass } from '@/lib/local-storage';
import { PhysicalSwingStabWeaponResults } from './results/physical-swing-stab-weapon-results';
import { PhysicalWeaponResults } from './results/physical-weapon-results';
import { ThiefSkillsResults } from './results/thief-skills-results';

export function BaseRange() {
	const { mapleClass } = useMapleClass();
	return (
		<Fieldset legend={<Title order={3}>Base Range</Title>} mx="auto" w="fit-content">
			<Stack gap={32}>
				<Table ta="center" variant="vertical">
					<TableTbody>
						<TableTr>
							<TableTd>Method</TableTd>
							<TableTd>MIN</TableTd>
							<TableTd>MAX</TableTd>
						</TableTr>
						<RegularRangeTableSwitch />
					</TableTbody>
				</Table>

				{mapleClass === 'Warrior' && <SwingStabRangeTable />}
			</Stack>
		</Fieldset>
	);
}

function RegularRangeTableSwitch() {
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
		default:
			return null;
	}
}

function SwingStabRangeTable() {
	return (
		<Table ta="center" variant="vertical">
			<TableTbody>
				<TableTr>
					<TableTd>Method</TableTd>
					<TableTd>MIN (Stab)</TableTd>
					<TableTd>MAX (Stab)</TableTd>
					<TableTd>MIN (Swing)</TableTd>
					<TableTd>MAX (Swing)</TableTd>
				</TableTr>

				<PhysicalSwingStabWeaponResults weaponType="One Handed Axe" />
				<PhysicalSwingStabWeaponResults weaponType="Two Handed Axe" />
				<PhysicalSwingStabWeaponResults weaponType="One Handed BW" />
				<PhysicalSwingStabWeaponResults weaponType="Two Handed BW" />
				<PhysicalSwingStabWeaponResults weaponType="Polearm" />
				<PhysicalSwingStabWeaponResults weaponType="Spear" />
			</TableTbody>
		</Table>
	);
}
