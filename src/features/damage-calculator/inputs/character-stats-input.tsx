'use client';

import { Group, Stack } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';
import { AbilityScoreInput } from '@/ui/ability-score-input';
import { CustomFieldSet } from '@/ui/material/custom-field-set';
import { ClassSelect } from './class-select';

export function CharacterStatsInput() {
	const {
		selectedCharacter: { name, abilities, level },
		updateCharacter,
	} = useCharacters();

	return (
		<CustomFieldSet legendText={name}>
			<Stack h="100%">
				<Group>
					<ClassSelect maw={120} />

					<AbilityScoreInput
						label="Level"
						max={200}
						min={1}
						onChange={level => updateCharacter(name, { level: Number(level) })}
						value={level}
					/>
				</Group>

				<Stack>
					<Group justify="space-evenly">
						<AbilityScoreInput
							label="STR"
							onChange={str => updateCharacter(name, { abilities: { str: Number(str) } })}
							value={abilities.str}
						/>
						<AbilityScoreInput
							label="DEX"
							onChange={dex => updateCharacter(name, { abilities: { dex: Number(dex) } })}
							value={abilities.dex}
						/>
					</Group>

					<Group justify="space-evenly">
						<AbilityScoreInput
							label="INT"
							onChange={int => updateCharacter(name, { abilities: { int: Number(int) } })}
							value={abilities.int}
						/>
						<AbilityScoreInput
							label="LUK"
							onChange={luk => updateCharacter(name, { abilities: { luk: Number(luk) } })}
							value={abilities.luk}
						/>
					</Group>
				</Stack>
			</Stack>
		</CustomFieldSet>
	);
}
