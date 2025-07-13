export const WEAPON_TYPES = [
	'One Handed Sword',
	'One Handed Axe',
	'One Handed BW',
	'Wand',
	'Staff',
	'Two Handed Sword',
	'Two Handed Axe',
	'Two Handed BW',
	'Spear',
	'Polearm',
	'Dagger',
	'Claw',
	'Bow',
	'Crossbow',
	'Knuckle',
	'Gun',
] as const;

export type WeaponType = (typeof WEAPON_TYPES)[number];

export const SWING_STAB_WEAPON_TYPES = [
	'One Handed Axe',
	'One Handed BW',
	'Two Handed Axe',
	'Two Handed BW',
	'Spear',
	'Polearm',
] as const satisfies WeaponType[];

export type SwingStabWeaponType = (typeof SWING_STAB_WEAPON_TYPES)[number];

export function isSwingStabWeaponType(weaponType: WeaponType): weaponType is SwingStabWeaponType {
	return SWING_STAB_WEAPON_TYPES.some(wt => wt === weaponType);
}
