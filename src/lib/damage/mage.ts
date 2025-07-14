import type { MinMax } from '.';

export type SpellDamageOptions = {
	int: number;
	magic: number;
	mastery: number;
	spellAttack: number;
};

export function spellDamage({ int, magic, mastery, spellAttack }: SpellDamageOptions): MinMax {
	return {
		max: ((magic ** 2 / 1000 + magic) / 30 + int / 200) * spellAttack,
		min: ((magic ** 2 / 1000 + magic * mastery * 0.9) / 30 + int / 200) * spellAttack,
	};
}

export type HealDamageOptions = {
	int: number;
	luk: number;
	magic: number;
};

export function healDamage({ int, luk, magic }: HealDamageOptions) {
	return [6.5, 4, 3.166, 2.75, 2.5, 2.333].map(targetMultiplier => ({
		max: (((int * 1.2 + luk) * magic) / 1000) * targetMultiplier,
		min: (((int * 0.3 + luk) * magic) / 1000) * targetMultiplier,
	}));
}
