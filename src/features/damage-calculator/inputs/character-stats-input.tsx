'use client';

import { Fieldset, Group, Stack, Title } from '@mantine/core';
import { useCharactersStore } from '@/lib/zustand/characters-store';
import { AbilityScoreInput } from '@/ui/ability-score-input';
import { ClassSelect } from './class-select';

export function CharacterStatsInput() {
	const { selectedCharacter } = useCharactersStore();

	return (
		<Fieldset legend={<Title order={3}>{selectedCharacter.name}</Title>} w="fit-content">
			<Stack h="100%" justify="space-around">
				<ClassSelect maw={125} mx="auto" />

				{/* <Stack mx="auto">
					<Group>
						<AbilityScoreInput label="STR" onChange={str => setStr(Number(str))} value={str} />
						<AbilityScoreInput label="DEX" onChange={dex => setDex(Number(dex))} value={dex} />
					</Group>

					<Group>
						<AbilityScoreInput label="INT" onChange={int => setInt(Number(int))} value={int} />
						<AbilityScoreInput label="LUK" onChange={luk => setLuk(Number(luk))} value={luk} />
					</Group>
				</Stack> */}
			</Stack>
		</Fieldset>
	);
}
