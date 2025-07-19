import { describe, expect, it } from 'vitest';
import {
	type HealDamageOptions,
	healDamage,
	type SpellDamageOptions,
	spellDamage,
} from '@/lib/damage/mage';

const TEST_STATS: SpellDamageOptions & HealDamageOptions = {
	int: 100,
	luk: 100,
	magic: 100,
	mastery: 0.5,
	spellAttack: 100,
};

const EXPECTED_HEAL_DAMAGE = [
	{
		max: 143,
		min: 85,
	},
	{
		max: 88,
		min: 52,
	},
	{
		max: 70,
		min: 41,
	},
	{
		max: 61,
		min: 36,
	},
	{
		max: 55,
		min: 33,
	},
	{
		max: 51,
		min: 30,
	},
];

describe('Spell Damage', () => {
	it('Should correctly calculate max/min spell damage', () => {
		const { max, min } = spellDamage(TEST_STATS);

		expect(min).toBe(233);
		expect(max).toBe(417);
	});

	it('Should correctly calculate max/min heal damage', () => {
		const results = healDamage(TEST_STATS);

		expect(JSON.stringify(results)).toBe(JSON.stringify(EXPECTED_HEAL_DAMAGE));
	});
});
