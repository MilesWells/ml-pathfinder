import type { MaxMin } from '.';

export type ThiefSkillOptions = {
	luk: number;
	weaponAttack: number;
};

export function luckySeven({ luk, weaponAttack }: ThiefSkillOptions): MaxMin {
	return {
		max: (luk * 5 * weaponAttack) / 100,
		min: (luk * 2.5 * weaponAttack) / 100,
	};
}

export const tripleThrow = luckySeven;
