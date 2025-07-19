import {
	Table,
	TableScrollContainer,
	TableTbody,
	TableTh,
	TableThead,
	TableTr,
} from '@mantine/core';
import { PhysicalSwingStabWeaponResults } from './physical-swing-stab-weapon-results';

export function SwingStabWeaponRangeTable() {
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
