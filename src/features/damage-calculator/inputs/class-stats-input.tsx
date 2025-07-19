'use client';

import { Fieldset, Stack, Title } from '@mantine/core';
import { useMapleClass } from '@/lib/local-storage';
import { SpellMasteryInput } from './spell-mastery-input';
import { TotalEquipWeaponAttackInput } from './total-equip-weapon-attack-input';
import { TotalMagicInput } from './total-magic-input';
import { WeaponMasteryInput } from './weapon-mastery-input';

export function ClassStatsInput() {
	const { mapleClass } = useMapleClass();

	return (
		<Fieldset legend={<Title order={3}>{mapleClass} Stats</Title>} mx="auto" w="fit-content">
			<Stack>{mapleClass === 'Magician' ? <MagicDamageStats /> : <PhyisicalDamageStats />}</Stack>
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
			<SpellMasteryInput />
		</>
	);
}
