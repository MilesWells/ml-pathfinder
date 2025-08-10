'use client';

import { Group, Stack } from '@mantine/core';
import { HasMountedLoadingContainer } from '@/ui/has-mounted-loading-container';
import { CustomFieldSet } from '@/ui/mantine/custom-field-set';
import { MonsterSelect } from '@/ui/monster-select';
import { BaseRange } from './base-range';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';
import { ManageCharacters } from './manage-characters';

export function DamageCalculator() {
	return (
		<HasMountedLoadingContainer>
			<Stack gap="xl">
				<Group justify="center">
					<ManageCharacters />
				</Group>

				<Group align="stretch" gap="xl" justify="center">
					<CharacterStatsInput />
					<ClassStatsInput />
				</Group>

				<Group justify="center">
					<CustomFieldSet legendText="Select Monster">
						<Group mx="auto" w="fit-content">
							<MonsterSelect />
						</Group>
					</CustomFieldSet>
				</Group>

				<BaseRange />
			</Stack>
		</HasMountedLoadingContainer>
	);
}
