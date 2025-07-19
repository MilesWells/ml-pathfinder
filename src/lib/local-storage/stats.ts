'use client';

import { useLocalStorage } from '@mantine/hooks';
import { useSelectedCharacter } from './characters';

export function useTotalEquipWeaponAttack() {
	const { selectedCharacter } = useSelectedCharacter();

	const [totalEquipWeaponAttack, setTotalEquipWeaponAttack] = useLocalStorage<number>({
		defaultValue: 10,
		key: `${selectedCharacter}::total-equip-weapon-attack`,
	});

	return { setTotalEquipWeaponAttack, totalEquipWeaponAttack };
}

export function useTotalMagicAttack() {
	const { selectedCharacter } = useSelectedCharacter();

	const [totalMagicAttack, setTotalMagicAttack] = useLocalStorage<number>({
		defaultValue: 10,
		key: `${selectedCharacter}::total-magic-attack`,
	});

	return { setTotalMagicAttack, totalMagicAttack };
}

export function useWeaponMastery() {
	const { selectedCharacter } = useSelectedCharacter();

	const [weaponMastery, setWeaponMastery] = useLocalStorage<number>({
		defaultValue: 0,
		key: `${selectedCharacter}::weapon-mastery`,
	});

	return { setWeaponMastery, weaponMastery };
}

export function useSpellDamage() {
	const { selectedCharacter } = useSelectedCharacter();

	const [spellDamage, setSpellDamage] = useLocalStorage<number>({
		defaultValue: 1,
		key: `${selectedCharacter}::spell-damage`,
	});

	return { setSpellDamage, spellDamage };
}

export function useSpellMastery() {
	const { selectedCharacter } = useSelectedCharacter();

	const [spellMastery, setSpellMastery] = useLocalStorage<number>({
		defaultValue: 0,
		key: `${selectedCharacter}::spell-mastery`,
	});

	return { setSpellMastery, spellMastery };
}
