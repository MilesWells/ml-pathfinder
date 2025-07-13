import type { SwingStabWeaponType, WeaponType } from '.';

export type MinMaxWeaponDamageOptions = {
	dex: number;
	int: number;
	luk: number;
	str: number;
	weaponAttack: number;
	weaponMastery: number;
};

type MinMax = {
	max: number;
	min: number;
};

type GeneralMinMaxOptions = {
	primary: number;
	secondary: number;
	weaponAttack: number;
	weaponMastery: number;
};

function generalMinMax({
	primary,
	secondary,
	weaponAttack,
	weaponMastery,
}: GeneralMinMaxOptions): MinMax {
	return {
		max: ((primary * 0.9 * weaponMastery + secondary) * weaponAttack) / 100,
		min: ((primary + secondary) * weaponAttack) / 100,
	};
}

export const minMaxWeaponDamageMap = {
	Bow: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: dex * 3.4,
			secondary: str,
			weaponAttack,
			weaponMastery,
		}),
	Claw: ({ luk, str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: luk * 3.6,
			secondary: str + dex,
			weaponAttack,
			weaponMastery,
		}),
	Crossbow: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: dex * 3.6,
			secondary: str,
			weaponAttack,
			weaponMastery,
		}),
	Dagger: ({ luk, str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: luk * 3.6,
			secondary: str + dex,
			weaponAttack,
			weaponMastery,
		}),
	Gun: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: dex * 3.6,
			secondary: str,
			weaponAttack,
			weaponMastery,
		}),
	Knuckle: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: str * 4.8,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	'One Handed Axe': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMinMax({
			primary: str * 3.2,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMinMax({
			primary: str * 4.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'One Handed BW': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMinMax({
			primary: str * 3.2,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMinMax({
			primary: str * 4.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'One Handed Sword': ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: str * 4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	Polearm: ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMinMax({
			primary: str * 3,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMinMax({
			primary: str * 5,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	Spear: ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMinMax({
			primary: str * 5,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMinMax({
			primary: str * 3,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'Two Handed Axe': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMinMax({
			primary: str * 3.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMinMax({
			primary: str * 4.8,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'Two Handed BW': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMinMax({
			primary: str * 3.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMinMax({
			primary: str * 4.8,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'Two Handed Sword': ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMinMax({
			primary: str * 4.6,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
} satisfies {
	[k in Exclude<WeaponType, SwingStabWeaponType | 'Staff' | 'Wand'>]: (
		options: MinMaxWeaponDamageOptions,
	) => MinMax;
} & {
	[k in SwingStabWeaponType]: (options: MinMaxWeaponDamageOptions) => {
		swing: MinMax;
		stab: MinMax;
	};
};
