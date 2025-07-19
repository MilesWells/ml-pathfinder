import { Group, Stack } from '@mantine/core';
import { BaseRange } from './base-range';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';

export function DamageCalculator() {
	return (
		<Stack gap="xl">
			<Group align="stretch" gap="xl" justify="center">
				<CharacterStatsInput />
				<ClassStatsInput />
			</Group>

			<BaseRange />
		</Stack>
	);
}
