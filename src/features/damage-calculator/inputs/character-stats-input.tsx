'use client';

import { Fieldset, Group, Stack, Title } from '@mantine/core';
import { useDex, useInt, useLuk, useStr } from '@/lib/local-storage/abilities';
import { AbilityScoreInput } from '@/ui/ability-score-input';
import { ClassSelect } from './class-select';

export function CharacterStatsInput() {
	const { str, setStr } = useStr();
	const { dex, setDex } = useDex();
	const { int, setInt } = useInt();
	const { luk, setLuk } = useLuk();

	return (
		<Fieldset legend={<Title order={3}>Character</Title>} w="fit-content">
			<Stack>
				<ClassSelect maw={125} mx="auto" />

				<Stack mx="auto">
					<Group>
						<AbilityScoreInput label="STR" onChange={str => setStr(Number(str))} value={str} />
						<AbilityScoreInput label="DEX" onChange={dex => setDex(Number(dex))} value={dex} />
					</Group>

					<Group>
						<AbilityScoreInput label="INT" onChange={int => setInt(Number(int))} value={int} />
						<AbilityScoreInput label="LUK" onChange={luk => setLuk(Number(luk))} value={luk} />
					</Group>
				</Stack>
			</Stack>
		</Fieldset>
	);
}
