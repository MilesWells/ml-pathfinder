'use client';

import { Fieldset, Group, Stack, Title } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';
import { AbilityScoreInput } from '@/ui/ability-score-input';
import { ClassSelect } from './class-select';

export function CharacterStatsInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const { name, abilities } = useSelectedCharacter();

	return (
		<Fieldset legend={<Title order={3}>{name}</Title>} w="fit-content">
			<Stack h="100%" justify="space-around">
				<ClassSelect maw={125} mx="auto" />

				<Stack mx="auto">
					<Group>
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

					<Group>
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
		</Fieldset>
	);
}
