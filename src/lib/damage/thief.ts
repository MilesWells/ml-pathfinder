import type { MaxMin } from '.';

export function luckySeven({ luk, weaponAttack }: { luk: number; weaponAttack: number }): MaxMin {
	return {
		max: (luk * 5 * weaponAttack) / 100,
		min: (luk * 2.5 * weaponAttack) / 100,
	};
}

export const tripleThrow = luckySeven;
