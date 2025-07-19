'use client';

import { useLocalStorage } from '@mantine/hooks';

export function useTotalEquipWeaponAttack() {
	const [totalEquipWeaponAttack, setTotalEquipWeaponAttack] = useLocalStorage<number>({
		defaultValue: 10,
		key: 'total-equip-weapon-attack',
	});

	return { setTotalEquipWeaponAttack, totalEquipWeaponAttack };
}

export function useTotalMagicAttack() {
	const [totalMagicAttack, setTotalMagicAttack] = useLocalStorage<number>({
		defaultValue: 10,
		key: 'total-magic-attack',
	});

	return { setTotalMagicAttack, totalMagicAttack };
}

export function useWeaponMastery() {
	const [weaponMastery, setWeaponMastery] = useLocalStorage<number>({
		defaultValue: 0,
		key: 'weapon-mastery',
	});

	return { setWeaponMastery, weaponMastery };
}

export function useSpellDamage() {
	const [spellDamage, setSpellDamage] = useLocalStorage<number>({
		defaultValue: 1,
		key: 'spell-damage',
	});

	return { setSpellDamage, spellDamage };
}

export function useSpellMastery() {
	const [spellMastery, setSpellMastery] = useLocalStorage<number>({
		defaultValue: 0,
		key: 'spell-mastery',
	});

	return { setSpellMastery, spellMastery };
}
