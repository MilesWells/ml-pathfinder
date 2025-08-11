import merge from 'lodash/merge';
import type { ScrapedItem } from './item';
import scrapedMonsters from './raw/monsters.json' with { type: 'json' };

export type ScrapedMonster = {
	drops: {
		equip: ScrapedItem['id'][];
		use: ScrapedItem['id'][];
		setup: ScrapedItem['id'][];
		etc: ScrapedItem['id'][];
	};
	id: string;
	imageLocation: string | null;
	isAutoAggro: boolean;
	isBoss: boolean;
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

type DerivedMonsterData = {
	stats: {
		mesos: {
			average: number;
		};
	};
};

export type Monster = ScrapedMonster & DerivedMonsterData;

export const MONSTERS: Monster[] = Object.values(scrapedMonsters.monsters).reduce<Monster[]>(
	(acc, cur) => {
		const monster: Monster = merge<ScrapedMonster, DerivedMonsterData>(cur, {
			stats: {
				mesos: {
					average: Math.round((cur.stats.mesos.max + cur.stats.mesos.min) / 2),
				},
			},
		});

		acc.push(monster);

		return acc;
	},
	[],
);

export const MONSTER_MAP = MONSTERS.reduce<Record<string, Monster>>((acc, cur) => {
	acc[cur.id] = cur;
	return acc;
}, {});

export const SORTABLE_MONSTER_STATS = [
	'accuracy',
	'avoidability',
	'exp',
	'hp',
	'level',
	'magicAttack',
	'magicDefense',
	'minMeso',
	'maxMeso',
	'name',
	'speed',
	'weaponAttack',
	'weaponDefense',
] as const satisfies (
	| keyof ScrapedMonster
	| keyof ScrapedMonster['stats']
	| 'minMeso'
	| 'maxMeso'
)[];

export type SortableMonsterStats = (typeof SORTABLE_MONSTER_STATS)[number];

export const SORTED_MONSTERS_BY = {
	accuracy: () => MONSTERS.sort((a, b) => a.stats.accuracy - b.stats.accuracy),
	avoidability: () => MONSTERS.sort((a, b) => a.stats.avoidability - b.stats.avoidability),
	exp: () => MONSTERS.sort((a, b) => a.stats.exp - b.stats.exp),
	hp: () => MONSTERS.sort((a, b) => a.stats.hp - b.stats.hp),
	level: () => MONSTERS.sort((a, b) => a.stats.level - b.stats.level),
	magicAttack: () => MONSTERS.sort((a, b) => a.stats.magicAttack - b.stats.magicAttack),
	magicDefense: () => MONSTERS.sort((a, b) => a.stats.magicDefense - b.stats.magicDefense),
	maxMeso: () => MONSTERS.sort((a, b) => a.stats.mesos.max - b.stats.mesos.max),
	minMeso: () => MONSTERS.sort((a, b) => a.stats.mesos.min - b.stats.mesos.min),
	name: () => MONSTERS.sort((a, b) => a.name.localeCompare(b.name)),
	speed: () => MONSTERS.sort((a, b) => a.stats.speed - b.stats.speed),
	weaponAttack: () => MONSTERS.sort((a, b) => a.stats.weaponAttack - b.stats.weaponAttack),
	weaponDefense: () => MONSTERS.sort((a, b) => a.stats.weaponDefense - b.stats.weaponDefense),
} satisfies Record<SortableMonsterStats, () => Monster[]>;
