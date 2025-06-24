'use client';

import { Button, Drawer, ScrollArea, Select, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { REGIONS, type Region } from '@/features/graph/regions';
import { ItemCheckList } from '../items/item-check-list';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInput() {
	const [from, setFrom] = useState<Region | null>(null);
	const [to, setTo] = useState<Region | null>(null);
	const pathfinder = usePathfinder();
	const [itemsListOpened, { open: openItemsList, close: closeItemsList }] = useDisclosure(false);

	return (
		<Stack>
			<Button mx="auto" onClick={openItemsList} w="fit-content">
				Select Items
			</Button>

			<Drawer
				onClose={closeItemsList}
				opened={itemsListOpened}
				scrollAreaComponent={ScrollArea.Autosize}
				title="Select Items to Use"
			>
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

			<Button
				disabled={!from || !to}
				mx="auto"
				onClick={() => {
					if (!from || !to) return;

					pathfinder.findPath(from, to);
				}}
				w="fit-content"
			>
				Path Me!
			</Button>
		</Stack>
	);
}
