'use client';

import { Fieldset, Group, NumberInput, type NumberInputProps, Stack, Title } from '@mantine/core';
import { ClassSelect } from './class-select';
import { useDex, useInt, useLuk, useStr } from './hooks';

export function CharacterStatsInput() {
	const { str, setStr } = useStr();
	const { dex, setDex } = useDex();
	const { int, setInt } = useInt();
	const { luk, setLuk } = useLuk();

	return (
		<Fieldset legend={<Title order={3}>Character</Title>} mx="auto" w="fit-content">
			<Stack>
				<ClassSelect maw="125px" mx="auto" />

				<Stack mx="auto">
					<Group
						miw="0"
						style={{
							flexShrink: 1,
						}}
						w="fit-content"
					>
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

function AbilityScoreInput(props: NumberInputProps) {
	return <NumberInput maw="100px" {...props} />;
}
