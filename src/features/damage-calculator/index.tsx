'use client';

import { Group, Stack } from '@mantine/core';
import { HasMountedLoadingContainer } from '@/ui/has-mounted-loading-container';
import { BaseRange } from './base-range';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';
import { ManageCharacters } from './manage-characters';
import { MonsterField } from './monster-field';

export function DamageCalculator() {
	return (
		<HasMountedLoadingContainer>
			<Stack gap="xl">
				<MonsterField />

				<ManageCharacters />

				<Group align="stretch" gap="xl" justify="center">
					<CharacterStatsInput />
					<ClassStatsInput />
				</Group>

				<BaseRange />
			</Stack>
		</HasMountedLoadingContainer>
	);
}
