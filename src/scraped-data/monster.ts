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

export const MONSTERS: ScrapedMonster[] = Object.values(scrapedMonsters.monsters);

export const MONSTER_MAP: Record<string, ScrapedMonster> = scrapedMonsters.monsters;

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
	accuracy: () => MONSTERS.sort((a, b) => b.stats.accuracy - a.stats.accuracy),
	avoidability: () => MONSTERS.sort((a, b) => b.stats.avoidability - a.stats.avoidability),
	exp: () => MONSTERS.sort((a, b) => b.stats.exp - a.stats.exp),
	hp: () => MONSTERS.sort((a, b) => b.stats.hp - a.stats.hp),
	level: () => MONSTERS.sort((a, b) => a.stats.level - b.stats.level),
	magicAttack: () => MONSTERS.sort((a, b) => b.stats.magicAttack - a.stats.magicAttack),
	magicDefense: () => MONSTERS.sort((a, b) => b.stats.magicDefense - a.stats.magicDefense),
	maxMeso: () => MONSTERS.sort((a, b) => a.stats.mesos.max - b.stats.mesos.max),
	minMeso: () => MONSTERS.sort((a, b) => a.stats.mesos.min - b.stats.mesos.min),
	name: () => MONSTERS.sort((a, b) => a.name.localeCompare(b.name)),
	speed: () => MONSTERS.sort((a, b) => b.stats.speed - a.stats.speed),
	weaponAttack: () => MONSTERS.sort((a, b) => b.stats.weaponAttack - a.stats.weaponAttack),
	weaponDefense: () => MONSTERS.sort((a, b) => b.stats.weaponDefense - a.stats.weaponDefense),
} satisfies Record<SortableMonsterStats, () => ScrapedMonster[]>;
