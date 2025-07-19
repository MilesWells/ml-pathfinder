'use client';

import { NumberInput } from '@mantine/core';
import { useDex, useInt, useLuk, useStr } from './hooks';

export function CharacterStatsInput() {
	const { str, setStr } = useStr();
	const { dex, setDex } = useDex();
	const { int, setInt } = useInt();
	const { luk, setLuk } = useLuk();

	return (
		<div>
			<NumberInput label="STR" onChange={str => setStr(Number(str))} value={str} />
			<NumberInput label="DEX" onChange={dex => setDex(Number(dex))} value={dex} />
			<NumberInput label="INT" onChange={int => setInt(Number(int))} value={int} />
			<NumberInput label="LUK" onChange={luk => setLuk(Number(luk))} value={luk} />
		</div>
	);
}
