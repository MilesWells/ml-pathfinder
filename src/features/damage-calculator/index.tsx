import { Group } from '@mantine/core';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';

export function DamageCalculator() {
	return (
		<Group gap="xl">
			<CharacterStatsInput />
			<ClassStatsInput />
		</Group>
	);
}
