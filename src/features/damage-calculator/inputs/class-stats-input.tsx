'use client';

import { Fieldset, Stack, Title } from '@mantine/core';
import { useMapleClass } from '@/lib/local-storage/maple-class';
import { SpellDamageInput } from './spell-damage-input';
import { SpellMasteryInput } from './spell-mastery-input';
import { TotalEquipWeaponAttackInput } from './total-equip-weapon-attack-input';
import { TotalMagicInput } from './total-magic-input';
import { WeaponMasteryInput } from './weapon-mastery-input';

export function ClassStatsInput() {
	const { mapleClass } = useMapleClass();

	return (
		<Fieldset legend={<Title order={3}>{mapleClass} Stats</Title>} w={225}>
			<Stack h="100%" justify="space-around">
				{mapleClass === 'Magician' ? <MagicDamageStats /> : <PhyisicalDamageStats />}
			</Stack>
		</Fieldset>
	);
}

function PhyisicalDamageStats() {
	return (
		<>
			<TotalEquipWeaponAttackInput />
			<WeaponMasteryInput />
		</>
	);
}

function MagicDamageStats() {
	return (
		<>
			<TotalMagicInput />
			<SpellDamageInput />
			<SpellMasteryInput />
		</>
	);
}
