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

export const SPINEL_REGIONS = ['China', 'Thailand', 'Mushroom Shrine'] satisfies Readonly<Region[]>;

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
] satisfies Readonly<Region[]>;

export type UnnavigableRegion = (typeof UNNAVIGABLE_REGIONS)[number];

export function isUnnavigaableRegion(region: Region): region is UnnavigableRegion {
	return UNNAVIGABLE_REGIONS.some(r => r === region);
}
