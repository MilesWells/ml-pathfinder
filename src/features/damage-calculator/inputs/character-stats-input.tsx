'use client';

import { SimpleGrid } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';
import { AbilityScoreInput } from '@/ui/ability-score-input';
import { CustomFieldSet } from '@/ui/mantine/custom-field-set';
import { ClassSelect } from './class-select';

export function CharacterStatsInput() {
	const {
		selectedCharacter: { name, abilities, level },
		updateCharacter,
	} = useCharacters();

	return (
		<CustomFieldSet legendText={name}>
			<SimpleGrid cols={2} h="100%" style={{ placeItems: 'center' }}>
				<ClassSelect maw={120} />

				<AbilityScoreInput
					label="Level"
					max={200}
					min={1}
					onChange={level => updateCharacter(name, { level: Number(level) })}
					value={level}
				/>

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
			</SimpleGrid>
		</CustomFieldSet>
	);
}
