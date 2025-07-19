import type { MaxMin } from '.';

export type ThiefSkillOptions = {
	luk: number;
	weaponAttack: number;
};

export function luckySeven({ luk, weaponAttack }: ThiefSkillOptions): MaxMin {
	return {
		max: Math.round((luk * 5 * weaponAttack) / 100),
		min: Math.round((luk * 2.5 * weaponAttack) / 100),
	};
}

export const tripleThrow = luckySeven;
