'use client';

import { Group, Stack } from '@mantine/core';
import { NullIfNotMounted } from '@/ui/null-if-not-mounted';
import { BaseRange } from './base-range';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';
import { ManageCharacters } from './manage-characters';
import { MonsterField } from './monster-field';

export function DamageCalculator() {
	return (
		<NullIfNotMounted>
			<Stack gap="xl">
				<MonsterField />

				<ManageCharacters />

				<Group align="stretch" gap="xl" justify="center">
					<CharacterStatsInput />
					<ClassStatsInput />
				</Group>

				<BaseRange />
			</Stack>
		</NullIfNotMounted>
	);
}
