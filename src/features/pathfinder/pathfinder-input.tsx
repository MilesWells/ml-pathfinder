'use client';

import { Button, Select, Stack } from '@mantine/core';
import { useItemDrawersStack } from '@/lib/items/item-drawer-context';
import { REGIONS, type Region } from '@/lib/regions';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInput() {
	const { destinationRegion, startingRegion, setDestinationRegion, setStartingRegion } =
		usePathfinder();

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
				allowDeselect={false}
				data={REGIONS}
				label="Starting Region"
				maw="300px"
				mx="auto"
				onChange={startingRegion => setStartingRegion(startingRegion as Region)}
				searchable
				value={startingRegion}
			/>

			<Select
				allowDeselect={false}
				data={REGIONS}
				label="Destination Region"
				maw="300px"
				mx="auto"
				onChange={destinationRegion => setDestinationRegion(destinationRegion as Region)}
				searchable
				value={destinationRegion}
			/>
		</Stack>
	);
}
