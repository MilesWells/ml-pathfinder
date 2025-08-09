'use client';

import { Group, Stack } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';
import { AbilityScoreInput } from '@/ui/ability-score-input';
import { CustomFieldSet } from '@/ui/material/custom-field-set';
import { ClassSelect } from './class-select';

export function CharacterStatsInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const { name, abilities, level } = useSelectedCharacter();

	return (
		<CustomFieldSet legendText={name}>
			<Stack h="100%">
				<Group>
					<ClassSelect maw={120} />

					<AbilityScoreInput
						label="Level"
						max={200}
						min={1}
						onChange={level => updateSelectedCharacter({ level: Number(level) })}
						value={level}
					/>
				</Group>

				<Stack>
					<Group justify="space-evenly">
						<AbilityScoreInput
							label="STR"
							onChange={str => updateSelectedCharacter({ abilities: { str: Number(str) } })}
							value={abilities.str}
						/>
						<AbilityScoreInput
							label="DEX"
							onChange={dex => updateSelectedCharacter({ abilities: { dex: Number(dex) } })}
							value={abilities.dex}
						/>
					</Group>

					<Group justify="space-evenly">
						<AbilityScoreInput
							label="INT"
							onChange={int => updateSelectedCharacter({ abilities: { int: Number(int) } })}
							value={abilities.int}
						/>
						<AbilityScoreInput
							label="LUK"
							onChange={luk => updateSelectedCharacter({ abilities: { luk: Number(luk) } })}
							value={abilities.luk}
						/>
					</Group>
				</Stack>
			</Stack>
		</CustomFieldSet>
	);
}
