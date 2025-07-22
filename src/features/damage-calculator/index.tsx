'use client';

import { Group } from '@mantine/core';
import { CharactersStoreHydrated } from '@/lib/zustand/characters-store';
import { BaseRange } from './base-range';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';
import { ManageCharacters } from './manage-characters';

export function DamageCalculator() {
	return (
		<CharactersStoreHydrated>
			<ManageCharacters />

			<Group align="stretch" gap="xl" justify="center" mb="xl">
				<CharacterStatsInput />
				<ClassStatsInput />
			</Group>

			<BaseRange />
		</CharactersStoreHydrated>
	);
}
