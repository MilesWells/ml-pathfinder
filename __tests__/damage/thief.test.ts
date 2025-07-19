import { describe, expect, it } from 'vitest';
import { luckySeven, type ThiefSkillOptions } from '@/lib/damage/thief';

const TEST_STATS: ThiefSkillOptions = {
	luk: 100,
	weaponAttack: 100,
};

describe('Thief Skills', () => {
	it('Should correctly calculate max/min damage for lucky seven and triple throw', () => {
		const { max, min } = luckySeven(TEST_STATS);

		expect(min).toBe(250);
		expect(max).toBe(500);
	});
});
