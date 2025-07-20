import { Group } from '@mantine/core';
import { BaseRange } from './base-range';
import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassStatsInput } from './inputs/class-stats-input';
import { ManageCharacters } from './manage-characters';

export function DamageCalculator() {
	return (
		<>
			<ManageCharacters />

			{/* <Group align="stretch" gap="xl" justify="center" mb="xl">
				<CharacterStatsInput />
				<ClassStatsInput />
			</Group>

			<BaseRange /> */}
		</>
	);
}
