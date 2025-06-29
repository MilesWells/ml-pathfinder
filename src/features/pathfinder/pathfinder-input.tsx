'use client';

import { Button, Select, Stack } from '@mantine/core';
import { useItemDrawersStack } from '@/lib/items/item-drawer-context';
import { REGIONS, type Region } from '@/lib/regions';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInput() {
	const { from, setFrom, setTo, to } = usePathfinder();
	const {
		itemStack,
		'item-selection': { stackId },
	} = useItemDrawersStack();

	return (
		<Stack>
			<Button mx="auto" onClick={() => itemStack.open(stackId)} size="compact-lg" w="fit-content">
				Select Items
			</Button>

			<Select
				clearable
				data={REGIONS}
				label="Starting Region"
				maw="300px"
				mx="auto"
				onChange={from => setFrom(from as Region)}
				placeholder="Choose starting region"
				searchable
				value={from}
			/>

			<Select
				clearable
				data={REGIONS}
				label="Destination Region"
				maw="300px"
				mx="auto"
				onChange={to => setTo(to as Region)}
				placeholder="Choose destination region"
				searchable
				value={to}
			/>
		</Stack>
	);
}
