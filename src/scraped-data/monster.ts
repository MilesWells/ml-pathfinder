import type { Item } from './item';

export type Monster = {
	drops: {
		equip: Item['id'][];
		use: Item['id'][];
		setup: Item['id'][];
		etc: Item['id'][];
	};
	id: string;
	imageLocation: string | null;
	libraryLink: string;
	libraryPage: number;
	name: string;
	stats: {
		accuracy: number;
		avoidability: number;
		elements: {
			immune: string | null;
			strong: string | null;
			weak: string | null;
		};
		exp: number;
		hp: number;
		hpRegen: number;
		knockback: number;
		level: number;
		magicAttack: number;
		magicDefense: number;
		mesos: {
			max: number;
			min: number;
		};
		mp: number;
		mpRegen: number;
		speed: number;
		weaponAttack: number;
		weaponDefense: number;
	};
};
