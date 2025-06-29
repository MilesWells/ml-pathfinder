'use client';

import { Button, Drawer, Select, Stack, useDrawersStack } from '@mantine/core';
import { ItemCheckList } from '@/lib/items/item-check-list';
import { REGIONS, type Region } from '@/lib/regions';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInput() {
	const { from, setFrom, setTo, to } = usePathfinder();
	const stack = useDrawersStack(['item-selection']);

	return (
		<Stack>
			<Button
				mx="auto"
				onClick={() => stack.open('item-selection')}
				size="compact-lg"
				w="fit-content"
			>
				Select Items
			</Button>

			<Drawer {...stack.register('item-selection')} title="Select Items to Use">
				<ItemCheckList />
			</Drawer>

			<Select
				clearable
				data={REGIONS}
				maw="300px"
				mx="auto"
				onChange={from => setFrom(from as Region)}
				placeholder="Choose starting continent"
				searchable
				value={from}
			/>

			<Select
				clearable
				data={REGIONS}
				maw="300px"
				mx="auto"
				onChange={to => setTo(to as Region)}
				placeholder="Choose destination continent"
				searchable
				value={to}
			/>
		</Stack>
	);
}
