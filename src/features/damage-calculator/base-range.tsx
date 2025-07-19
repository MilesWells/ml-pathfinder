'use client';

import {
	Fieldset,
	Table,
	TableScrollContainer,
	TableTbody,
	TableTh,
	TableThead,
	TableTr,
	Title,
} from '@mantine/core';
import { useMapleClass } from '@/lib/local-storage';
import { PhysicalSwingStabWeaponResults } from './results/physical-swing-stab-weapon-results';
import { PhysicalWeaponResults } from './results/physical-weapon-results';
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
					<RegularRangeTableSwitch />
				</TableTbody>
			</Table>

			{mapleClass === 'Warrior' && <SwingStabRangeTable />}
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
		<TableScrollContainer maw="fit-content" minWidth={460} mt={32} mx="auto">
			<Table variant="vertical" w="fit-content">
				<TableThead>
					<TableTr>
						<TableTh left={0} pos="sticky" />
						<TableTh ta="center">MIN (Stab)</TableTh>
						<TableTh ta="center">MAX (Stab)</TableTh>
						<TableTh ta="center">MIN (Swing)</TableTh>
						<TableTh ta="center">MAX (Swing)</TableTh>
					</TableTr>
				</TableThead>

				<TableTbody ta="center">
					<PhysicalSwingStabWeaponResults weaponType="One Handed Axe" />
					<PhysicalSwingStabWeaponResults weaponType="Two Handed Axe" />
					<PhysicalSwingStabWeaponResults weaponType="One Handed BW" />
					<PhysicalSwingStabWeaponResults weaponType="Two Handed BW" />
					<PhysicalSwingStabWeaponResults weaponType="Polearm" />
					<PhysicalSwingStabWeaponResults weaponType="Spear" />
				</TableTbody>
			</Table>
		</TableScrollContainer>
	);
}
