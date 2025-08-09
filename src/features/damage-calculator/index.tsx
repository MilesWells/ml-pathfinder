'use client';

import { Group, Stack } from '@mantine/core';
import { CharactersStoreHydrated } from '@/lib/zustand/characters-store';
import { CustomFieldSet } from '@/ui/material/custom-field-set';
import { MonsterSelect } from '@/ui/monster-select';
import { BaseRange } from './base-range';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';
import { ManageCharacters } from './manage-characters';

export function DamageCalculator() {
	return (
		<CharactersStoreHydrated>
			<Stack gap="xl">
				<Group justify="center">
					<CustomFieldSet legendText="Select Monster">
						<Group mx="auto" w="fit-content">
							<MonsterSelect onChange={console.log} />
						</Group>
					</CustomFieldSet>
				</Group>

				<Group justify="center">
					<ManageCharacters />
				</Group>

				<Group align="stretch" gap="xl" justify="center">
					<CharacterStatsInput />
					<ClassStatsInput />
				</Group>

				<BaseRange />
			</Stack>
		</CharactersStoreHydrated>
	);
}
