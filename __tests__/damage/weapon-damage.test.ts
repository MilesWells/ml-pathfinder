import { describe, expect, it } from 'vitest';
import {
	type MaxMin,
	PHYSICAL_SWING_STAB_WEAPON_TYPES,
	PHYSICAL_WEAPON_TYPES,
	type PhysicalSwingStabWeaponType,
	type PhysicalWeaponType,
	type StabSwingMaxMin,
} from '@/lib/damage';
import { type MaxMinWeaponDamageOptions, maxMinWeaponDamageMap } from '@/lib/damage/weapon-damage';

const TEST_STATS: MaxMinWeaponDamageOptions = {
	dex: 100,
	int: 100,
	luk: 100,
	str: 100,
	weaponAttack: 100,
	weaponMastery: 0.5,
};

const PHYSICAL_EXPECTED_DAMAGE = {
	Bow: {
		max: 440,
		min: 253,
	},
	Claw: {
		max: 560,
		min: 362,
	},
	Crossbow: {
		max: 460,
		min: 262,
	},
	Dagger: {
		max: 560,
		min: 362,
	},
	Gun: {
		max: 460,
		min: 262,
	},
	Knuckle: {
		max: 580,
		min: 316,
	},
	'One Handed Sword': {
		max: 500,
		min: 280,
	},
	'Two Handed Sword': {
		max: 560,
		min: 307,
	},
} satisfies Record<PhysicalWeaponType, MaxMin>;

PHYSICAL_WEAPON_TYPES.forEach(weaponType => {
	describe(weaponType, () => {
		it('Should correctly calculate base min max damage', () => {
			const { max, min } = maxMinWeaponDamageMap[weaponType](TEST_STATS);

			expect(min).toBe(PHYSICAL_EXPECTED_DAMAGE[weaponType].min);
			expect(max).toBe(PHYSICAL_EXPECTED_DAMAGE[weaponType].max);
		});
	});
});

const PHYSICAL_SWING_STAB_EXPECTED_DAMAGE = {
	'One Handed Axe': {
		stab: { max: 420, min: 244 },
		swing: { max: 540, min: 298 },
	},
	'One Handed BW': {
		stab: { max: 420, min: 244 },
		swing: { max: 540, min: 298 },
	},
	Polearm: {
		stab: { max: 400, min: 235 },
		swing: { max: 600, min: 325 },
	},
	Spear: {
		stab: { max: 600, min: 325 },
		swing: { max: 400, min: 235 },
	},
	'Two Handed Axe': {
		stab: { max: 440, min: 253 },
		swing: { max: 580, min: 316 },
	},
	'Two Handed BW': {
		stab: { max: 440, min: 253 },
		swing: { max: 580, min: 316 },
	},
} satisfies Record<PhysicalSwingStabWeaponType, StabSwingMaxMin>;

PHYSICAL_SWING_STAB_WEAPON_TYPES.forEach(weaponType => {
	describe(weaponType, () => {
		it('Should correctly calculate base max/min damage for stab/swing', () => {
			const { stab, swing } = maxMinWeaponDamageMap[weaponType](TEST_STATS);

			expect(stab.min).toBe(PHYSICAL_SWING_STAB_EXPECTED_DAMAGE[weaponType].stab.min);
			expect(stab.max).toBe(PHYSICAL_SWING_STAB_EXPECTED_DAMAGE[weaponType].stab.max);
			expect(swing.min).toBe(PHYSICAL_SWING_STAB_EXPECTED_DAMAGE[weaponType].swing.min);
			expect(swing.max).toBe(PHYSICAL_SWING_STAB_EXPECTED_DAMAGE[weaponType].swing.max);
		});
	});
});
