// https://fireship.io/courses/javascript/interview-graphs/
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
	'Mushroom Shrine/Showa',
	'NLC',
	'Omega Sector',
	'Orbis',
	'Singapore',
	'Taiwan',
	'Thailand',
	'Victoria Island',
] as const;

export type Region = (typeof REGIONS)[number];

export const SPINEL_REGIONS = [
	'China',
	'Thailand',
	'Mushroom Shrine/Showa',
] satisfies Readonly<Region[]>;

export type SpinelRegion = (typeof SPINEL_REGIONS)[number];

// User needs to return to their previous region if starting from one of these
export const UNNAVIGABLE_REGIONS = [
	'Coke Town',
	'Florina Beach',
	...SPINEL_REGIONS,
] satisfies Readonly<Region[]>;

export type UnnavigableRegions = (typeof UNNAVIGABLE_REGIONS)[number];

/**
- need all regions because you can start anywhere

regions Spinel appears in:
- Amoria
- Ariant
- El Nath
- Ludi
- Laefre
- Malaysia
- Mu Lung
- Orbis
- Singapore
- Taiwan
- Victoria
 */
