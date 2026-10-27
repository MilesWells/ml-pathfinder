export const REGIONS = [
	'Amoria',
	'Aqua Road',
	'Ariant',
	'China',
	'Coke Town',
	'El Nath',
	'Ellin Forest',
	'Florina Beach',
	'Herb Town',
	'Korean Folk Town',
	'Leafre',
	'Ludibrium',
	'Magatia',
	'Malaysia',
	'Mu Lung',
	'Mushroom Shrine',
	'Neo Tokyo',
	'Ninja Castle',
	'NLC',
	'Omega Sector',
	'Orbis',
	'Singapore',
	'Showa',
	'Taiwan',
	'Taipei 101',
	'Temple of Time',
	'Thailand',
	'Victoria Island',
] as const;

export type Region = (typeof REGIONS)[number];

export const SPINEL_REGIONS = ['China', 'Thailand', 'Mushroom Shrine'] as const;

export type SpinelRegion = (typeof SPINEL_REGIONS)[number];

export function isSpinelRegion(region: Region): region is SpinelRegion {
	return SPINEL_REGIONS.some(r => r === region);
}

// User needs to return to their previous region if starting from one of these
export const UNNAVIGABLE_REGIONS = [
	'Florina Beach',
	'Showa',
	'Neo Tokyo',
	'Ninja Castle',
	...SPINEL_REGIONS,
] as const;

export type UnnavigableRegion = (typeof UNNAVIGABLE_REGIONS)[number];

export function isUnnavigaableRegion(region: Region): region is UnnavigableRegion {
	return UNNAVIGABLE_REGIONS.some(r => r === region);
}

export type NavigableRegion = Exclude<Region, UnnavigableRegion>;

export const REGION_LINK_MAP = {
	Amoria: 'https://legends.ml/lib/map?id=680000000',
	'Aqua Road': 'https://legends.ml/lib/map?id=230000000',
	Ariant: 'https://legends.ml/lib/map?id=260000000',
	China: 'https://legends.ml/lib/map?id=701000000',
	'Coke Town': 'https://legends.ml/lib/map?id=209000000',
	'El Nath': 'https://legends.ml/lib/map?id=211000000',
	'Ellin Forest': 'https://legends.ml/lib/map?id=300000000',
	'Florina Beach': 'https://legends.ml/lib/map?id=110000000',
	'Herb Town': 'https://legends.ml/lib/map?id=251000000',
	'Korean Folk Town': 'https://legends.ml/lib/map?id=222000000',
	Leafre: 'https://legends.ml/lib/map?id=240000000',
	Ludibrium: 'https://legends.ml/lib/map?id=220000000',
	Magatia: 'https://legends.ml/lib/map?id=261000000',
	Malaysia: 'https://legends.ml/lib/map?id=550000000',
	'Mu Lung': 'https://legends.ml/lib/map?id=250000000',
	'Mushroom Shrine': 'https://legends.ml/lib/map?id=800000000',
	'Neo Tokyo': 'https://legends.ml/lib/map?id=802000611',
	'Ninja Castle': 'https://legends.ml/lib/map?id=800040000',
	NLC: 'https://legends.ml/lib/map?id=600000000',
	'Omega Sector': 'https://legends.ml/lib/map?id=221000000',
	Orbis: 'https://legends.ml/lib/map?id=200000000',
	Showa: 'https://legends.ml/lib/map?id=801000000',
	Singapore: 'https://legends.ml/lib/map?id=540000000',
	'Taipei 101': 'https://legends.ml/lib/map?id=742000000',
	Taiwan: 'https://legends.ml/lib/map?id=740000000',
	'Temple of Time': 'https://legends.ml/lib/map?id=270000000',
	Thailand: 'https://legends.ml/lib/map?id=500000000',
	'Victoria Island': 'https://legends.ml/lib/map?id=100000000',
} satisfies Record<Region, string>;
